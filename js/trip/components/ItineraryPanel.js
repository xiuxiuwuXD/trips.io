
import { inject } from "../../vue.js";
import { pick } from "../i18n.js";
import { stopLabel } from "../kml.js";
import { gmapsUrl } from "../gmaps.js";
import Bi from "./Bi.js";

export default {
  name: "ItineraryPanel",
  components: { Bi },
  setup() { return { store: inject("store"), actions: inject("actions") }; },
  computed: {
    trip() { return this.store.trip; },
    lang() { return this.store.state.lang; },
    ui() { return this.store.texts[this.lang]; },
    visible() { return this.store.state.visible; },
    allOpen() { return this.trip.days.every(d => this.store.isDayOpen(d.d)); },
    allShown() { return this.trip.days.every(d => this.visible[d.d]); },
  },
  methods: {
    t(v) { return pick(v, this.lang); },
    both(key) { return { zh: this.store.texts.zh[key], en: this.store.texts.en[key] }; },
    label(s) { return stopLabel(s, this.lang); },
    toggleHtml(day) { return `Day ${day.d} · ${this.t(day.date)} <span class="day-sub">${this.t(day.title)}</span>`; },
    gmapsUrl,
    isOpen(d) { return this.store.isDayOpen(d); },
    flip(d) { this.store.setDayOpen(d, !this.isOpen(d)); },
    expandAll(on) { this.trip.days.forEach(d => this.store.setDayOpen(d.d, on)); },
    showAll(on) { this.trip.days.forEach(d => this.store.setVisible(d.d, on)); },
  },
  template: `
<div id="tab-itinerary" class="panel">
  <div class="legend"><template v-for="(row, ri) in trip.legend" :key="ri"><br v-if="ri"><span v-for="(it, j) in row" :key="j">{{ it.icon }} <Bi :v="it.label" /></span></template></div>
  <div class="btns">
    <button type="button" class="tbtn" id="btnCards" @click="expandAll(!allOpen)"><span class="ico">{{ allOpen ? "▸" : "▾" }}</span><Bi :v="both(allOpen ? 'collapseAll' : 'expandAll')" /></button>
    <button type="button" class="tbtn" id="btnRoutes" @click="showAll(!allShown)"><span class="ico">{{ allShown ? "🙈" : "🗺️" }}</span><Bi :v="both(allShown ? 'hideRoutes' : 'showRoutes')" /></button>
  </div>
  <div id="days">
    <div v-for="day in trip.days" :key="day.d" class="day" :class="{ open: isOpen(day.d) }" :data-d="day.d" :style="{ borderColor: day.color }">
      <h2><span class="day-toggle" role="button" tabindex="0" :aria-expanded="String(isOpen(day.d))" :data-d="day.d" @click="flip(day.d)" @keydown.enter.prevent="flip(day.d)" @keydown.space.prevent="flip(day.d)" v-html="toggleHtml(day)"></span>
        <label><input type="checkbox" :checked="visible[day.d]" :data-d="day.d" @change="store.setVisible(day.d, $event.target.checked)"> {{ ui.show }}</label></h2>
      <div class="day-body">
        <div style="font-size:13px;font-weight:600;margin-bottom:4px" v-html="t(day.title)"></div>
        <ol><li v-for="(s, i) in day.stops" :key="i" :data-i="i" :data-d="day.d" @click="actions.flyToStop(day.d, i)" v-html="label(s)"></li></ol>
        <div class="stay" v-html="'🏨 ' + ui.stay + '：' + t(day.stay)"></div>
        <a v-if="day.gmaps" class="gmap" :href="gmapsUrl(day.gmaps)" target="_blank" rel="noopener noreferrer">{{ ui.gmap }}</a> <button type="button" class="kmlbtn" @click="actions.downloadKml(day.d)">{{ ui.kml }}</button>
      </div>
    </div>
  </div>
</div>`,
};
