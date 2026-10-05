
import { watch } from "../vue.js";
import { pick } from "./i18n.js";
import { stopLabel } from "./kml.js";

export function createTripMap(el, store) {
  const { trip, state } = store;
  const map = L.map(el).setView(trip.map.center, trip.map.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const ll = k => {
    const p = trip.places[k];
    if (!p) throw new Error(`places 里没有这个地点: ${k}`);
    return [p[0], p[1]];
  };
  const layers = {};
  const dayMarkers = {};

  function build() {
    Object.values(layers).forEach(g => map.removeLayer(g));
    const lang = state.lang, t = store.texts[lang];
    trip.days.forEach(day => {
      const g = L.layerGroup();
      (day.drive || []).forEach(seg =>
        L.polyline(seg.map(ll), { color: day.color, weight: 4, opacity: 0.85 }).bindTooltip(`Day ${day.d} ${t.drive}`).addTo(g));
      (day.fly || []).forEach(seg =>
        L.polyline(seg.map(ll), { color: day.color, weight: 3, dashArray: "8 8" }).bindTooltip(`Day ${day.d} ${t.fly}`).addTo(g));
      dayMarkers[day.d] = day.stops.map((s, i) =>
        L.circleMarker(ll(s[0]), { radius: 7, color: "#fff", weight: 2, fillColor: day.color, fillOpacity: 1 })
          .bindPopup(`<b>Day ${day.d} · ${pick(day.date, lang)}</b><br>${i + 1}. ${stopLabel(s, lang)}`).addTo(g));
      layers[day.d] = g;
      if (state.visible[day.d]) g.addTo(map);
    });
  }

  function sync() {
    trip.days.forEach(day => {
      const g = layers[day.d];
      if (state.visible[day.d]) { if (!map.hasLayer(g)) g.addTo(map); } else map.removeLayer(g);
    });
  }

  watch(() => state.lang, build, { immediate: true });
  watch(() => trip.days.map(d => state.visible[d.d]), sync);

  return {

    flyToStop(d, i) {
      store.setVisible(d, true);
      sync();
      const target = dayMarkers[d][i];
      map.flyTo(target.getLatLng(), 12, { duration: 0.8 });
      setTimeout(() => target.openPopup(), 850);
    },
  };
}
