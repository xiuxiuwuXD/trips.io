
export function readText(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
export function writeText(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}
export function readJSON(key, fallback) {
  try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
}
export function writeJSON(key, value) {
  writeText(key, JSON.stringify(value));
}
