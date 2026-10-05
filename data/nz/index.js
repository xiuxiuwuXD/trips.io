

import places from "./places.js";
import days from "./days.js";
import summary from "./summary.js";
import checklist from "./checklist.js";

export default {
  id: "nz",                       
  flag: "🇳🇿",
  title: { zh: "南岛 9天8晚 自然风光自驾", en: "South Island 9-Day Scenic Road Trip" },
  dates: "2026/12/26 – 2027/1/3",
  sub: { zh: "皇后镇进出", en: "Queenstown return" },

  i18n: {
    zh: { title: "新西兰南岛 9天8晚 路线地图", kmlAll: "新西兰南岛 9天8晚 全部停靠点" },
    en: { title: "NZ South Island 9-Day Route Map", kmlAll: "NZ South Island 9 days – all stops" },
  },

  map: { center: [-44.5, 169.3], zoom: 8 },

  legend: [
    [
      { icon: "📍", label: { zh: "景点/活动", en: "Sights / activities" } },
      { icon: "🥾", label: { zh: "徒步", en: "Hike" } },
      { icon: "🐟", label: { zh: "三文鱼", en: "Salmon" } },
      { icon: "♨️", label: { zh: "温泉", en: "Hot pools" } },
      { icon: "🏨", label: { zh: "住宿", en: "Stay" } },
    ],
    [
      { icon: "━", label: { zh: "自驾", en: "Drive" } },
      { icon: "┅", label: { zh: "直升机 / 船", en: "Helicopter / boat" } },
    ],
  ],

  footerNote: {
    zh: `路线线条是按途经点连接的示意线，不是精确道路轨迹；实际导航请点每天的"在 Google Maps 打开当天路线"。<br>标"可选"的是可选项。地图底图来自 OpenStreetMap，需要联网才能显示。`,
    en: `Route lines are schematic (straight lines between waypoints), not actual roads; for navigation use each day's "Open day route in Google Maps".<br>Items marked "optional" are optional. Base map from OpenStreetMap; needs an internet connection.`,
  },

  places,
  days,
  summary,
  checklist,
};

