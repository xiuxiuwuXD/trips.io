
import { reactive, watch } from "../vue.js";
import { buildTexts } from "./i18n.js";
import { readText, writeText, readJSON, writeJSON } from "./storage.js";

export function createStore(trip) {

  const keys = {
    lang: `${trip.id}Lang`,
    dayOpen: `${trip.id}DayOpen`,
    checklist: `${trip.id}-trip-checklist`,
    ...(trip.storageKeys || {}),
  };
  const texts = buildTexts(trip.i18n);

  const saved = readText(keys.lang);
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "zh"];
  const initLang = saved || (langs.some(l => /^zh/i.test(l)) ? "zh" : "en");

  const state = reactive({
    lang: initLang === "en" ? "en" : "zh",
    tab: "summary",
    openDays: readJSON(keys.dayOpen, []),           
    visible: Object.fromEntries(trip.days.map(d => [d.d, true])), 
    checked: readJSON(keys.checklist, {}),          
    openGroups: Object.fromEntries(trip.checklist.map(g => [g.id, !!g.open])),
    expanded: {},                                   
  });

  const store = {
    trip,
    state,
    texts,
    ui: () => texts[state.lang],

    setLang(lang, remember) {
      state.lang = lang === "en" ? "en" : "zh";
      if (remember) writeText(keys.lang, state.lang);
    },

    isDayOpen: d => state.openDays.includes(d),
    setDayOpen(d, on) {
      const i = state.openDays.indexOf(d);
      if (on && i < 0) state.openDays.push(d);
      if (!on && i >= 0) state.openDays.splice(i, 1);
      writeJSON(keys.dayOpen, state.openDays);
    },

    setVisible(d, on) { state.visible[d] = on; },

    setChecked(id, on) {
      state.checked[id] = on;
      writeJSON(keys.checklist, state.checked);
    },

    countGroups(groupIds) {
      let done = 0, total = 0;
      trip.checklist.forEach(g => {
        if (groupIds && !groupIds.includes(g.id)) return;
        g.items.forEach(it => { total++; if (state.checked[it.id]) done++; });
      });
      return [done, total];
    },
  };

  watch(() => state.lang, lang => {
    const el = document.documentElement;
    el.dataset.lang = lang;
    el.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = texts[lang].title;
  }, { immediate: true });

  return store;
}
