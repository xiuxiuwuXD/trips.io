// js/nz-trip.js - New Zealand Trip Data, Map Initialization & Rendering

// 1. New Zealand Itinerary Data
const TRIP_DATA = {
    center: [-44.8, 169.2], // Initial map center coordinate
    zoom: 8,
    days: [
        {
            day: 1,
            date: "12/26",
            title: { zh: "到达皇后镇 + Skyline 缆车", en: "Arrive Queenstown + Skyline Gondola" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Queenstown Airport", lat: -45.0212, lng: 168.7391, desc: { zh: "9:50am 到达 & 提车", en: "Arrive 9:50am & pick up car" } },
                { name: "Skyline Gondola & Luge", lat: -45.0287, lng: 168.6565, desc: { zh: "缆车 + Luge + 山顶晚餐", en: "Gondola + Luge + Buffet Dinner" } }
            ]
        },
        {
            day: 2,
            date: "12/27",
            title: { zh: "Milford Sound 直升机 + 游船", en: "Milford Sound Helicopter + Cruise" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Milford Sound Flight Base", lat: -45.0212, lng: 168.7391, desc: { zh: "直升机起飞点", en: "Helicopter Departure" } },
                { name: "Milford Sound", lat: -44.6716, lng: 167.9256, desc: { zh: "峡湾游船体验", en: "Fiord Cruise" } },
                { name: "Onsen Hot Pools", lat: -44.9856, lng: 168.6833, desc: { zh: "峡湾温泉 (可选)", en: "Hot Pools (Optional)" } }
            ]
        }
        // Additional days data can be expanded here...
    ]
};

// 2. Initialize Leaflet Map
let map;
let markersGroup;

function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    // Create Leaflet map instance
    map = L.map('map').setView(TRIP_DATA.center, TRIP_DATA.zoom);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    markersGroup = L.layerGroup().addTo(map);

    // Render initial map markers
    renderMapMarkers();
}

// 3. Render Markers on Map
function renderMapMarkers() {
    if (!markersGroup) return;
    markersGroup.clearLayers();

    TRIP_DATA.days.forEach(day => {
        day.stops.forEach(stop => {
            const popupContent = `
                <b>Day ${day.day}: ${stop.name}</b><br>
                ${stop.desc[curLang] || stop.desc['zh']}
            `;
            L.marker([stop.lat, stop.lng])
                .bindPopup(popupContent)
                .addTo(markersGroup);
        });
    });
}

// 4. Render Daily Itinerary Cards in #days Container
function renderItineraryCards() {
    const daysContainer = document.getElementById('days');
    if (!daysContainer) return;

    daysContainer.innerHTML = ''; // Clear container

    TRIP_DATA.days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day open';
        dayCard.style.borderColor = getDayColor(day.day);

        const stopsList = day.stops.map(stop => `
            <li>
                <b>${stop.name}</b>: ${stop.desc[curLang] || stop.desc['zh']}
            </li>
        `).join('');

        dayCard.innerHTML = `
            <h2>
                <div class="day-toggle">
                    <span>Day ${day.day} (${day.date})</span>
                    <span class="day-sub">${day.title[curLang] || day.title['zh']}</span>
                </div>
                <label>🏨 ${day.stay[curLang] || day.stay['zh']}</label>
            </h2>
            <div class="day-body">
                <ul>${stopsList}</ul>
            </div>
        `;

        daysContainer.appendChild(dayCard);
    });
}

// Helper function to assign accent border colors
function getDayColor(dayNum) {
    const colors = ['#1f6feb', '#e5922e', '#2ea043', '#cf222e', '#8250df', '#d4a72c'];
    return colors[(dayNum - 1) % colors.length];
}

// 5. Initialize Page Component Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map and Render Cards
    initMap();
    renderItineraryCards();

    // Re-render map popups & text when language changes
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setTimeout(() => {
                renderItineraryCards();
                renderMapMarkers();
            }, 50);
        });
    }
});
