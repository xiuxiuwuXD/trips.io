

export const UI = {
  zh: {
    title: "",
    btn: "EN",
    tabs: { summary: "总览", itinerary: "每日行程", checklist: "待办清单" },
    show: "显示",
    stay: "住",
    drive: "自驾",
    fly: "直升机/船",
    gmap: "🧭 在 Google Maps 打开当天路线",
    kml: "📍 下载当天停靠点 KML",
    kmlAll: "全部停靠点",
    kmlNote: "坐标为近似位置，导入后可在 My Maps 里拖动修正。",
    expandAll: "全部展开",
    collapseAll: "全部收起",
    showRoutes: "显示全部路线",
    hideRoutes: "隐藏全部路线",
    progress: "完成进度",
    booked: " 已订",
    urgent: "🔴 还没订的紧急项：",
    allBooked: "✅ 紧急项都订好了",
  },
  en: {
    title: "",
    btn: "中文",
    tabs: { summary: "Overview", itinerary: "Daily Plan", checklist: "Checklist" },
    show: "Show",
    stay: "Stay",
    drive: "Drive",
    fly: "Helicopter / boat",
    gmap: "🧭 Open day route in Google Maps",
    kml: "📍 Download day stops (KML)",
    kmlAll: "All stops",
    kmlNote: "Coordinates are approximate; drag points in My Maps to fix them after importing.",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    showRoutes: "Show all routes",
    hideRoutes: "Hide all routes",
    progress: "Progress",
    booked: " booked",
    urgent: "🔴 Urgent, not booked yet: ",
    allBooked: "✅ All urgent items booked",
  },
};

export const LANGS = ["zh", "en"];


export const pick = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);


export function buildTexts(tripI18n = {}) {
  const out = {};
  LANGS.forEach(l => { out[l] = { ...UI[l], ...(tripI18n[l] || {}), tabs: { ...UI[l].tabs, ...((tripI18n[l] || {}).tabs || {}) } }; });
  return out;
}
