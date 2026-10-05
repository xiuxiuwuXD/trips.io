
import { createApp } from "./vue.js";
import home from "../data/trips.js";

createApp({
  data: () => home,
  template: `
<div class="header">
  <h1>{{ title }}</h1>
  <p>{{ intro }}</p>
</div>
<div class="grid-container">
  <a v-for="t in trips" :key="t.title" :href="t.href || '#'" class="trip-card" :class="{ disabled: !t.href }" @click="!t.href && $event.preventDefault()">
    <div class="trip-icon">{{ t.flag }}</div>
    <h2 class="trip-title">{{ t.title }}</h2>
    <p class="trip-desc">{{ t.desc }}</p>
    <div class="trip-status" :class="t.href ? 'status-active' : 'status-planning'">{{ t.status }}</div>
  </a>
</div>`,
}).mount("#app");
