// js/nz-data.js - New Zealand Trip Specific Data, Leaflet Map & Itinerary Renderer

const NZ_TRIP_DATA = {
    center: [-44.8, 169.2],
    zoom: 8,
    days: [
        {
            day: 1,
            date: "12/26",
            title: { zh: "到达皇后镇 + Skyline 缆车 + Luge", en: "Arrive Queenstown + Skyline Gondola & Luge" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Queenstown Airport", lat: -45.0212, lng: 168.7391, desc: { zh: "9:50am 到达 & 提车", en: "Arrive 9:50am & pick up car" } },
                { name: "Skyline Gondola & Luge", lat: -45.0287, lng: 168.6565, desc: { zh: "缆车 + Luge + 山顶自助晚餐", en: "Gondola + Luge + Buffet Dinner" } }
            ]
        },
        {
            day: 2,
            date: "12/27",
            title: { zh: "Milford Sound 直升机 + 游船", en: "Milford Sound Helicopter + Cruise" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Milford Sound Flight Base", lat: -45.0212, lng: 168.7391, desc: { zh: "直升机起飞点", en: "Helicopter Departure Point" } },
                { name: "Milford Sound", lat: -44.6716, lng: 167.9256, desc: { zh: "峡湾游船体验", en: "Fiord Cruise" } },
                { name: "Onsen Hot Pools", lat: -44.9856, lng: 168.6833, desc: { zh: "峡湾温泉 (可选)", en: "Hot Pools (Optional)" } }
            ]
        },
        {
            day: 3,
            date: "12/28",
            title: { zh: "Glenorchy + Diamond Lake + Shotover Jet", en: "Glenorchy + Diamond Lake + Shotover Jet" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Glenorchy", lat: -44.8517, lng: 168.3853, desc: { zh: "红木屋 & 湖畔漫步", en: "Red Shed & Lake Walk" } },
                { name: "Diamond Lake Track", lat: -44.6468, lng: 168.9610, desc: { zh: "经典徒步路线", en: "Hiking Track" } },
                { name: "Shotover Jet", lat: -44.9841, lng: 168.6852, desc: { zh: "峡谷快艇体验", en: "Canyon Jet Boat" } }
            ]
        },
        {
            day: 4,
            date: "12/29",
            title: { zh: "Queenstown Hill + Earnslaw 晚餐船", en: "Queenstown Hill + Earnslaw Dinner Cruise" },
            stay: { zh: "皇后镇", en: "Queenstown" },
            stops: [
                { name: "Queenstown Hill", lat: -45.0281, lng: 168.6720, desc: { zh: "俯瞰 Lake Wakatipu", en: "Overview Lake Wakatipu" } },
                { name: "Queenstown Gardens", lat: -45.0350, lng: 168.6650, desc: { zh: "植物园散步", en: "Garden Stroll" } },
                { name: "TSS Earnslaw", lat: -45.0322, lng: 168.6590, desc: { zh: "蒸汽船 + 农场晚餐", en: "Steamship & Farm Dinner" } }
            ]
        },
        {
            day: 5,
            date: "12/30",
            title: { zh: "Lindis Pass → Tekapo → Mt John 观星", en: "Lindis Pass → Tekapo → Mt John Stargazing" },
            stay: { zh: "Tekapo", en: "Tekapo" },
            stops: [
                { name: "Kawarau Gorge", lat: -45.0540, lng: 168.8980, desc: { zh: "蹦极发源地观景", en: "Bungy Bridge Viewpoint" } },
                { name: "Lindis Pass", lat: -44.5930, lng: 169.6450, desc: { zh: "高山垭口观景", en: "Mountain Pass Lookout" } },
                { name: "Church of the Good Shepherd", lat: -44.0035, lng: 170.4824, desc: { zh: "好牧羊人教堂", en: "Iconic Church Lookout" } },
                { name: "Mt John Observatory", lat: -44.0328, lng: 170.4633, desc: { zh: "暗夜保护区观星", en: "Dark Sky Reserve Stargazing" } }
            ]
        },
        {
            day: 6,
            date: "12/31",
            title: { zh: "Pukaki 三文鱼 → Hooker Valley → Mt Cook 跨年", en: "Pukaki Salmon → Hooker Valley → Mt Cook NYE" },
            stay: { zh: "Mt Cook", en: "Mt Cook" },
            stops: [
                { name: "Mt Cook Alpine Salmon", lat: -44.1843, lng: 170.1601, desc: { zh: "湖边三文鱼刺身野餐", en: "Salmon Sashimi Picnic" } },
                { name: "Peters Lookout", lat: -43.9920, lng: 170.1610, desc: { zh: "普卡基湖与雪山经典视角", en: "Lake & Mountain Viewpoint" } },
                { name: "Hooker Valley Track", lat: -43.7171, lng: 170.1030, desc: { zh: "库克山经典徒步", en: "Mt Cook Classic Hike" } },
                { name: "The Hermitage Hotel", lat: -43.7325, lng: 170.0960, desc: { zh: "跨年夜自助晚餐", en: "NYE Buffet Dinner" } }
            ]
        },
        {
            day: 7,
            date: "1/1",
            title: { zh: "Tasman Heli Hike → Twizel → Wanaka", en: "Tasman Heli Hike → Twizel → Wanaka" },
            stay: { zh: "Wanaka", en: "Wanaka" },
            stops: [
                { name: "Mt Cook Airport", lat: -43.7042, lng: 170.1331, desc: { zh: "Tasman 冰川直升机徒步集合点", en: "Heli Hike Departure" } },
                { name: "High Country Salmon", lat: -44.2790, lng: 170.1110, desc: { zh: "特威泽尔三文鱼农场", en: "Twizel Salmon Farm" } },
                { name: "Lake Wanaka", lat: -44.6943, lng: 169.1321, desc: { zh: "入住瓦纳卡湖畔", en: "Wanaka Lakefront Check-in" } }
            ]
        },
        {
            day: 8,
            date: "1/2",
            title: { zh: "Roys Peak 徒步 → That Wanaka Tree 日落", en: "Roys Peak Hike → That Wanaka Tree Sunset" },
            stay: { zh: "Wanaka", en: "Wanaka" },
            stops: [
                { name: "Roys Peak Track Carpark", lat: -44.6980, lng: 169.0500, desc: { zh: "山脊观景徒步起点", en: "Trailhead Carpark" } },
                { name: "That Wanaka Tree", lat: -44.6974, lng: 169.1176, desc: { zh: "孤独的树日落", en: "Iconic Willow Tree Sunset" } }
            ]
        },
        {
            day: 9,
            date: "1/3",
            title: { zh: "Wanaka 薰衣草 → Crown Range → 返程", en: "Wanaka Lavender → Crown Range → Flight" },
            stay: { zh: "—", en: "—" },
            stops: [
                { name: "Wanaka Lavender Farm", lat: -44.6860, lng: 169.1910, desc: { zh: "薰衣草农场漫步", en: "Lavender Farm Stroll" } },
                { name: "Crown Range Lookout", lat: -44.9850, lng: 168.8680, desc: { zh: "皇冠山脉公路观景点", en: "High Altitude Lookout" } },
                { name: "Queenstown Airport", lat: -45.0212, lng: 168.7391, desc: { zh: "还车 & 5:30pm 离港", en: "Car Return & 5:30pm Flight" } }
            ]
        }
    ]
};

let map;
let markersGroup;

// 1. Initialize Leaflet Map
function initNzMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    // Create Leaflet Map Instance
    map = L.map('map').setView(NZ_TRIP_DATA.center, NZ_TRIP_DATA.zoom);

    // Add Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    markersGroup = L.layerGroup().addTo(map);

    renderNzMapMarkers();
}

// 2. Render Markers on Map
function renderNzMapMarkers() {
    if (!markersGroup) return;
    markersGroup.clearLayers();

    NZ_TRIP_DATA.days.forEach(day => {
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

// 3. Render Daily Itinerary Cards in #days Container
function renderNzItineraryCards() {
    const daysContainer = document.getElementById('days');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';

    NZ_TRIP_DATA.days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day open';
        dayCard.style.borderColor = getDayAccentColor(day.day);

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

// Helper Function for Card Left Border Color
function getDayAccentColor(dayNum) {
    const colors = ['#1f6feb', '#e5922e', '#2ea043', '#cf222e', '#8250df', '#d4a72c'];
    return colors[(dayNum - 1) % colors.length];
}

// 4. Bind Initialization Events
document.addEventListener('DOMContentLoaded', () => {
    initNzMap();
    renderNzItineraryCards();

    // Re-render text on Language Switcher click
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setTimeout(() => {
                renderNzItineraryCards();
                renderNzMapMarkers();
            }, 50);
        });
    }
});
