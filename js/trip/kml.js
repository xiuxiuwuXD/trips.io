
import { pick } from "./i18n.js";

function kmlEsc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function kmlColor(hex) { return "ff" + hex.slice(5, 7) + hex.slice(3, 5) + hex.slice(1, 3); }

export const stopLabel = (s, lang) => (lang === "zh" ? s[1] : s[2]);

function dayPlacemarks(trip, day, lang) {
  let n = 0, out = "";
  day.stops.forEach(s => {
    const p = trip.places[s[0]];
    n++;
    out += `<Placemark><name>${n}. ${kmlEsc(stopLabel(s, lang))}</name><description>Day ${day.d} · ${kmlEsc(pick(day.date, lang))}</description>` +
      `<styleUrl>#d${day.d}</styleUrl><Point><coordinates>${p[1]},${p[0]},0</coordinates></Point></Placemark>\n`;
  });
  return out;
}

function buildKml(trip, days, title, lang, texts) {
  let out = `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>${kmlEsc(title)}</name>\n` +
    `<description>${kmlEsc(texts.kmlNote)}</description>\n`;
  days.forEach(d => { out += `<Style id="d${d.d}"><IconStyle><color>${kmlColor(d.color)}</color></IconStyle></Style>\n`; });
  days.forEach(d => {
    out += days.length > 1
      ? `<Folder><name>Day ${d.d} · ${kmlEsc(pick(d.date, lang))} ${kmlEsc(pick(d.title, lang))}</name>\n${dayPlacemarks(trip, d, lang)}</Folder>\n`
      : dayPlacemarks(trip, d, lang);
  });
  return out + "</Document></kml>\n";
}


export function downloadKml(trip, lang, texts, dayNum) {
  const days = dayNum ? trip.days.filter(d => d.d === dayNum) : trip.days;
  const title = dayNum ? `Day ${days[0].d} · ${pick(days[0].date, lang)} ${pick(days[0].title, lang)}` : texts.kmlAll;
  const blob = new Blob([buildKml(trip, days, title, lang, texts)], { type: "application/vnd.google-earth.kml+xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = dayNum ? `${trip.id}-day${dayNum}.kml` : `${trip.id}-all-stops.kml`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
