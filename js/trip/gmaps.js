
export function gmapsUrl(g) {
  const q = new URLSearchParams({ api: "1", origin: g.origin, destination: g.destination, travelmode: g.travelmode || "driving" });
  if (g.waypoints && g.waypoints.length) q.set("waypoints", g.waypoints.join("|"));
  return "https://www.google.com/maps/dir/?" + q.toString();
}
