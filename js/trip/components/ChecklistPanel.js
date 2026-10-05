
import { inject } from "../../vue.js";
import Bi from "./Bi.js";

export default {
  name: "ChecklistPanel",
  components: { Bi },
  setup() { return { store: inject("store") }; },
  computed: {
    groups() { return this.store.trip.checklist; },
    state() { return this.store.state; },
    total() { return this.store.countGroups(); },
    progressLabel() { return { zh: this.store.texts.zh.progress, en: this.store.texts.en.progress }; },
  },
  methods: {
    groupCount(g) { return this.store.countGroups([g.id]); },
    toggleGroup(g) { this.state.openGroups[g.id] = !this.state.openGroups[g.id]; },
    toggleDetail(it) { this.state.expanded[it.id] = !this.state.expanded[it.id]; },
  },
  template: `
<div id="tab-checklist" class="panel">
  <div class="checklist-progress"><Bi :v="progressLabel" />: <span id="cl-count">{{ total[0] }}/{{ total[1] }}</span> <span class="bar"><span class="fill" id="cl-bar" :style="{ width: (total[1] ? total[0] / total[1] * 100 : 0) + '%' }"></span></span></div>
  <div v-for="g in groups" :key="g.id" class="checklist-group" :class="{ open: state.openGroups[g.id] }" :data-group="g.id" :style="g.color ? { borderLeftColor: g.color } : null">
    <h3 @click="toggleGroup(g)">{{ g.icon }} <Bi :v="g.title" /><span class="grp-count" :class="{ full: groupCount(g)[1] > 0 && groupCount(g)[0] === groupCount(g)[1] }">{{ groupCount(g)[0] }}/{{ groupCount(g)[1] }}</span></h3>
    <div class="checklist-details">
      <div v-for="it in g.items" :key="it.id" class="checklist-item" :class="{ done: state.checked[it.id], expanded: state.expanded[it.id] }" :data-id="it.id"><input type="checkbox" :id="it.id" :checked="!!state.checked[it.id]" @change="store.setChecked(it.id, $event.target.checked)"><label :for="it.id"><Bi :v="it.label" /><span v-if="it.detail" class="drill" @click.prevent="toggleDetail(it)">ⓘ</span></label><div v-if="it.detail" class="detail"><Bi :v="it.detail" /></div></div>
      <div v-for="(n, i) in g.notes || []" :key="i" class="cl-nobook"><Bi :v="n" /></div>
    </div>
  </div>
</div>`,
};
