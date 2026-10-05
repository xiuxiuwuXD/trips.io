

import { createApp } from "../vue.js";
import { createStore } from "./store.js";
import { createTripMap } from "./map.js";
import { downloadKml } from "./kml.js";
import Bi from "./components/Bi.js";
import SummaryPanel from "./components/SummaryPanel.js";
import ItineraryPanel from "./components/ItineraryPanel.js";
import ChecklistPanel from "./components/ChecklistPanel.js";

const TABS = [
  { id: "summary", icon: "📋" },
  { id: "itinerary", icon: "🗓️" },
  { id: "checklist", icon: "✅" },
];

const TripApp = {
  name: "TripApp",
  components: { Bi, SummaryPanel, ItineraryPanel, ChecklistPanel },
  props: { store: Object },
  computed: {
    trip() { return this.store.trip; },
    state() { return this.store.state; },
    ui() { return this.store.texts[this.state.lang]; },
    tabs() {
      const { zh, en } = this.store.texts;
      return TABS.map(t => ({ ...t, label: { zh: zh.tabs[t.id], en: en.tabs[t.id] } }));
    },
  },
  template: `
<div class="topbar">
  <div>
    <h1>{{ trip.flag }} <Bi :v="trip.title" /></h1>
    <div class="sub">{{ trip.dates }} · <Bi :v="trip.sub" /></div>
  </div>
  <button type="button" class="langbtn" id="langBtn" aria-label="Switch language / 切换语言" @click="store.setLang(state.lang === 'zh' ? 'en' : 'zh', true)">{{ ui.btn }}</button>
</div>
<div class="tabs">
  <button v-for="tb in tabs" :key="tb.id" class="tab" :class="{ active: state.tab === tb.id }" :data-tab="tb.id" @click="state.tab = tb.id">{{ tb.icon }} <Bi :v="tb.label" /></button>
</div>
<SummaryPanel v-show="state.tab === 'summary'" />
<ItineraryPanel v-show="state.tab === 'itinerary'" />
<ChecklistPanel v-show="state.tab === 'checklist'" />
<div v-if="trip.footerNote" class="note"><Bi :v="trip.footerNote" /></div>`,
};

export function mountTrip(trip, { sidebar = "#sidebar", map = "map" } = {}) {
  const store = createStore(trip);
  let tripMap = null;
  const sidebarEl = document.querySelector(sidebar);

  const actions = {
    downloadKml: dayNum => downloadKml(trip, store.state.lang, store.ui(), dayNum),
    flyToStop: (d, i) => tripMap && tripMap.flyToStop(d, i),
    gotoChecklist() {
      store.state.tab = "checklist";
      sidebarEl.scrollTop = 0;
    },
  };

  const app = createApp(TripApp, { store });
  app.provide("store", store);
  app.provide("actions", actions);
  app.mount(sidebarEl);
  tripMap = createTripMap(document.getElementById(map), store);
  return { app, store };
}
