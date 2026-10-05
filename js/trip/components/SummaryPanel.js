

import { inject } from "../../vue.js";
import { pick } from "../i18n.js";

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");


const DataTable = {
  name: "DataTable",
  props: { table: Object, lang: String },
  methods: { t(v) { return pick(v, this.lang); } },
  template: `
<table><tbody>
  <tr><th v-for="(c, i) in table.head" :key="i" v-html="t(c)"></th></tr>
  <tr v-for="(r, ri) in table.rows" :key="ri" :class="table.rowClass"><td v-for="(c, i) in r" :key="i" v-html="t(c)"></td></tr>
  <tr v-if="table.foot" class="budget-total"><th v-for="(c, i) in table.foot" :key="i" v-html="t(c)"></th></tr>
</tbody></table>`,
};

const SummaryBody = {
  name: "SummaryBody",
  components: { DataTable },
  props: { lang: String },
  setup() { return { store: inject("store"), actions: inject("actions") }; },
  computed: {
    sections() { return this.store.trip.summary; },
    ui() { return this.store.texts[this.lang]; },
  },
  methods: {
    t(v) { return pick(v, this.lang); },
    routeHtml(s) {
      return s.stops.map(p => esc(this.t(p.name)) + (p.nights ? ` <i>${esc(this.t(p.nights))}</i>` : ""))
        .join(' <span class="arrow">→</span> ');
    },
    booking(s) {
      const [booked, total] = this.store.countGroups(s.groups);
      const pending = (s.urgent || []).filter(u => !this.store.state.checked[u.id]);
      const urgentHtml = pending.length
        ? this.ui.urgent + pending.map(u => '<span class="tag">' + this.t(u.label) + "</span>").join("")
        : '<span class="ok">' + this.ui.allBooked + "</span>";
      return { booked, total, pct: total ? booked / total * 100 : 0, done: pending.length === 0, urgentHtml };
    },
  },
  template: `
<template v-for="(s, i) in sections" :key="i">
  <h3 v-if="s.title" v-html="t(s.title)"></h3>
  <div v-if="s.type === 'stats'" class="stats">
    <div v-for="(it, j) in s.items" :key="j" class="stat"><b v-html="t(it.value)"></b><span v-html="t(it.text)"></span></div>
  </div>
  <div v-else-if="s.type === 'route'" class="route" v-html="routeHtml(s)"></div>
  <ul v-else-if="s.type === 'list'" class="hl">
    <li v-for="(it, j) in s.items" :key="j" v-html="t(it)"></li>
  </ul>
  <DataTable v-else-if="s.type === 'table'" :table="s" :lang="lang" />
  <div v-else-if="s.type === 'booking'" class="book-card" :class="{ 'all-done': booking(s).done }">
    <div class="book-head"><b class="book-count">{{ booking(s).booked }}/{{ booking(s).total }}{{ ui.booked }}</b><span class="bar"><span class="fill" :style="{ width: booking(s).pct + '%' }"></span></span></div>
    <div class="book-urgent" v-html="booking(s).urgentHtml"></div>
    <button type="button" class="gocl" @click="actions.gotoChecklist()">{{ t(s.button) }}</button>
  </div>
  <details v-else-if="s.type === 'fold'" class="fold">
    <summary>{{ t(s.summary) }}<span class="fold-total">{{ t(s.total) }}</span></summary>
    <DataTable :table="s.table" :lang="lang" />
    <div v-if="s.note" class="note" v-html="t(s.note)"></div>
  </details>
  <div v-else-if="s.type === 'note'" class="note" v-html="t(s.html)"></div>
</template>`,
};

export default {
  name: "SummaryPanel",
  components: { SummaryBody },
  setup() { return { actions: inject("actions") }; },
  methods: {

    onAction(e) {
      const el = e.target.closest("[data-action]");
      if (el && el.dataset.action === "kml-all") this.actions.downloadKml();
    },
  },
  template: `
<div id="tab-summary" class="panel" @click="onAction">
  <div data-l="zh"><SummaryBody lang="zh" /></div>
  <div data-l="en" lang="en"><SummaryBody lang="en" /></div>
</div>`,
};
