// js/nz-data.js - New Zealand Trip Data, Map, Complete 14-Item Checklist & Summary Logic

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

// Full Checklist Data including Onsen, Lavender, Car Rental & Accommodation
const CHECKLIST_DATA = [
    {
        group: "booking",
        title: { zh: "🔴 必须预订 (9 项)", en: "🔴 Must Book (9 items)" },
        items: [
            {
                id: "cl-milford",
                label: { zh: "Milford Fly-Cruise-Fly（推荐 Glacier Southern Lakes）", en: "Milford Fly-Cruise-Fly (suggested: Glacier Southern Lakes)" },
                detail: {
                    zh: "Day 2 · 12/27（周六） · NZ$1,325/人 · <a href='https://www.glaciersouthernlakes.co.nz/' target='_blank'>官网预订</a><br>天气取消可免费改期，自己取消 24h 前全额退，飞行当天才扣款。<br>确认有没有 10:30am 以后的班次。",
                    en: "Day 2 · Sat 12/27 · NZ$1,325/pp · <a href='https://www.glaciersouthernlakes.co.nz/' target='_blank'>Official Booking</a><br>Weather cancel: free reschedule. Self-cancel 24h+ before: full refund. Charged on flight day.<br>Confirm 10:30am+ departure availability."
                }
            },
            {
                id: "cl-helihike",
                label: { zh: "Tasman Glacier Heli Hike（推荐 The Helicopter Line）", en: "Tasman Glacier Heli Hike (suggested: The Helicopter Line)" },
                detail: {
                    zh: "Day 7 · 1/1（周四） · NZ$945/人 · <a href='https://www.helicopter.co.nz/' target='_blank'>官网预订</a><br>冰川徒步体验约 2 小时，含防滑冰爪与专业导游。",
                    en: "Day 7 · Thu 1/1 · NZ$945/pp · <a href='https://www.helicopter.co.nz/' target='_blank'>Official Booking</a><br>~2h on-ice guided hike including crampons and gear."
                }
            },
            {
                id: "cl-skyline",
                label: { zh: "Skyline Gondola + Luge + 山顶自助晚餐", en: "Skyline Gondola + Luge + Summit Buffet Dinner" },
                detail: {
                    zh: "Day 1 · 12/26（周五） · NZ$193-201/人 · <a href='https://www.skyline.co.nz/queenstown/' target='_blank'>官网预订</a><br>建议预订 5:30pm 或 6:00pm 晚餐班次。",
                    en: "Day 1 · Fri 12/26 · NZ$193-201/pp · <a href='https://www.skyline.co.nz/queenstown/' target='_blank'>Official Booking</a><br>Recommend 5:30pm or 6:00pm dinner slot."
                }
            },
            {
                id: "cl-earnslaw",
                label: { zh: "TSS Earnslaw 蒸汽船 + Walter Peak 农场晚餐", en: "TSS Earnslaw Cruise + Walter Peak Farm Dinner" },
                detail: {
                    zh: "Day 4 · 12/29（周一） · NZ$175 起/人 · <a href='https://www.realnz.com/en/experiences/cruises/tss-earnslaw-steamship-cruises/' target='_blank'>官网预订</a><br>建议订 5:00pm 班次，返程欣赏黄金时段。",
                    en: "Day 4 · Mon 12/29 · From NZ$175/pp · <a href='https://www.realnz.com/en/experiences/cruises/tss-earnslaw-steamship-cruises/' target='_blank'>Official Booking</a><br>Recommend 5:00pm departure for golden hour views."
                }
            },
            {
                id: "cl-hermitage",
                label: { zh: "Mt Cook Hermitage Alpine 跨年夜自助餐", en: "Mt Cook Hermitage Alpine NYE Buffet Dinner" },
                detail: {
                    zh: "Day 6 · 12/31（周三） · NZ$165/人 · <a href='https://www.hermitage.co.nz/' target='_blank'>官网预订</a><br>旺季务必提前抢订。",
                    en: "Day 6 · Wed 12/31 · NZ$165/pp · <a href='https://www.hermitage.co.nz/' target='_blank'>Official Booking</a><br>Book early due to high demand."
                }
            },
            {
                id: "cl-stargazing",
                label: { zh: "Mt John 暗夜保护区观星团 (Dark Sky Project)", en: "Mt John Observatory Stargazing (Dark Sky Project)" },
                detail: {
                    zh: "Day 5 · 12/30（周二） · NZ$239/人 · <a href='https://www.darkskyproject.co.nz/' target='_blank'>官网预订</a><br>包含专业天文望远镜讲解与热饮。",
                    en: "Day 5 · Tue 12/30 · NZ$239/pp · <a href='https://www.darkskyproject.co.nz/' target='_blank'>Official Booking</a><br>Includes telescope tour & hot drinks."
                }
            },
            {
                id: "cl-shotover",
                label: { zh: "Shotover Jet 峡谷喷气快艇", en: "Shotover Jet Canyon Boat" },
                detail: {
                    zh: "Day 3 · 12/28（周日） · NZ$199/人 · <a href='https://www.shotoverjet.com/' target='_blank'>官网预订</a><br>穿梭于 Shotover 狭窄峡谷体验极致刺激。",
                    en: "Day 3 · Sun 12/28 · NZ$199/pp · <a href='https://www.shotoverjet.com/' target='_blank'>Official Booking</a><br>Thrilling ride through Shotover Canyon."
                }
            },
            {
                id: "cl-onsen",
                label: { zh: "Onsen Hot Pools 峡湾温泉 (皇后镇日落场)", en: "Onsen Hot Pools (Queenstown Sunset Slot)" },
                detail: {
                    zh: "Day 2 或 Day 3 · NZ$150/汤池 · <a href='https://www.onsen.co.nz/' target='_blank'>官网预订</a><br>提示：傍晚黄金时段极难抢，建议提前 2-3 个月预订。",
                    en: "Day 2 or Day 3 · NZ$150/pool · <a href='https://www.onsen.co.nz/' target='_blank'>Official Booking</a><br>Tip: Sunset time slots fill up extremely fast, book 2-3 months ahead."
                }
            },
            {
                id: "cl-lavender",
                label: { zh: "Wanaka Lavender Farm 薰衣草农场门票", en: "Wanaka Lavender Farm Tickets" },
                detail: {
                    zh: "Day 9 · 1/3（周六） · NZ$15/人 · <a href='https://www.wanakalavenderfarm.com/' target='_blank'>官网详情</a><br>提示：12月下旬至1月为盛花期，推荐现场/官网直接购买，品尝薰衣草冰淇淋。",
                    en: "Day 9 · Sat 1/3 · NZ$15/pp · <a href='https://www.wanakalavenderfarm.com/' target='_blank'>Official Site</a><br>Tip: Peak bloom is late Dec to Jan. Try lavender ice cream on site."
                }
            }
        ]
    },
    {
        group: "accommodation",
        title: { zh: "🏨 住宿与交通预订 (5 项)", en: "🏨 Accommodation & Rental Car (5 items)" },
        items: [
            { id: "cl-acc-qt", label: { zh: "皇后镇住宿 (4 晚: 12/26 - 12/29)", en: "Queenstown Stay (4 nights: 12/26 - 12/29)" } },
            { id: "cl-acc-tekapo", label: { zh: "Tekapo 湖畔住宿 (1 晚: 12/30)", en: "Tekapo Stay (1 night: 12/30)" } },
            { id: "cl-acc-cook", label: { zh: "Mt Cook / Twizel 住宿 (1 晚: 12/31)", en: "Mt Cook / Twizel Stay (1 night: 12/31)" } },
            { id: "cl-acc-wanaka", label: { zh: "Wanaka 镇住宿 (2 晚: 1/1 - 1/2)", en: "Wanaka Stay (2 nights: 1/1 - 1/2)" } },
            { id: "cl-car-rental", label: { zh: "皇后镇机场提还 SUV 租车 (12/26 - 1/3)", en: "Queenstown Airport SUV Rental (12/26 - 1/3)" }, detail: { zh: "推荐购买全险（Zero Excess），预订含雪链/GPS的四驱或中大型SUV", en: "Recommend Zero Excess insurance and 4WD/SUV" } }
        ]
    }
];

let map;
let markersGroup;
let routesGroup;
let showRoutes = true;

// 1. Map Initialization
function initNzMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    map = L.map('map').setView(NZ_TRIP_DATA.center, NZ_TRIP_DATA.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    markersGroup = L.layerGroup().addTo(map);
    routesGroup = L.layerGroup().addTo(map);

    renderNzMapMarkers();
    renderMapRoutes();
}

// 2. Render Custom Colored Pin Markers
function renderNzMapMarkers() {
    if (!markersGroup) return;
    markersGroup.clearLayers();

    NZ_TRIP_DATA.days.forEach(day => {
        const pinColor = getDayAccentColor(day.day);
        
        day.stops.forEach(stop => {
            const popupContent = `
                <b>Day ${day.day}: ${stop.name}</b><br>
                ${stop.desc[curLang] || stop.desc['zh']}
            `;
            
            const customIcon = L.divIcon({
                className: 'custom-pin-container',
                html: `<div class="custom-pin" style="background-color: ${pinColor};">${day.day}</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            L.marker([stop.lat, stop.lng], { icon: customIcon })
                .bindPopup(popupContent)
                .addTo(markersGroup);
        });
    });
}

// 3. Render Map Routes
function renderMapRoutes() {
    if (!routesGroup) return;
    routesGroup.clearLayers();

    if (!showRoutes) return;

    NZ_TRIP_DATA.days.forEach(day => {
        const coords = day.stops.map(s => [s.lat, s.lng]);
        if (coords.length > 1) {
            L.polyline(coords, {
                color: getDayAccentColor(day.day),
                weight: 3.5,
                opacity: 0.85
            }).addTo(routesGroup);
        }
    });
}

// 4. Render Daily Cards
function renderNzItineraryCards() {
    const daysContainer = document.getElementById('days');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';

    NZ_TRIP_DATA.days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day open';
        dayCard.style.borderLeftColor = getDayAccentColor(day.day);

        const stopsList = day.stops.map(stop => `
            <li>
                <b>${stop.name}</b>: ${stop.desc[curLang] || stop.desc['zh']}
            </li>
        `).join('');

        const dayTitleText = day.title[curLang] || day.title['zh'];
        const stayText = day.stay[curLang] || day.stay['zh'];

        dayCard.innerHTML = `
            <h2>
                <div class="day-toggle">
                    <span>Day ${day.day} (${day.date})</span>
                    <span class="day-sub-title" style="font-weight:600; margin-left:4px;">${dayTitleText}</span>
                </div>
                <label>🏨 ${stayText}</label>
            </h2>
            <div class="day-body">
                <ul>${stopsList}</ul>
            </div>
        `;

        const toggleBtn = dayCard.querySelector('.day-toggle');
        if (toggleBtn) {
            toggleBtn.onclick = () => {
                dayCard.classList.toggle('open');
            };
        }

        daysContainer.appendChild(dayCard);
    });
}

// 5. Render Full Checklist with Links
function renderNzChecklist() {
    const checklistContainer = document.getElementById('tab-checklist');
    if (!checklistContainer) return;

    let html = `
        <div class="checklist-progress">
            <span>${curLang === 'zh' ? '完成进度' : 'Progress'}</span>: 
            <span id="cl-count">0/0</span> 
            <span class="bar"><span class="fill" id="cl-bar" style="width:0%"></span></span>
        </div>
    `;

    CHECKLIST_DATA.forEach(grp => {
        const titleText = grp.title[curLang] || grp.title['zh'];
        let itemsHtml = '';

        grp.items.forEach(item => {
            const labelText = item.label[curLang] || item.label['zh'];
            const detailText = item.detail ? (item.detail[curLang] || item.detail['zh']) : '';

            itemsHtml += `
                <div class="checklist-item" data-id="${item.id}">
                    <input type="checkbox" id="${item.id}">
                    <label for="${item.id}">
                        <span>${labelText}</span>
                        ${detailText ? `<span class="drill">ⓘ</span>` : ''}
                    </label>
                    ${detailText ? `<div class="detail">${detailText}</div>` : ''}
                </div>
            `;
        });

        html += `
            <div class="checklist-group open" data-group="${grp.group}">
                <h3>${titleText}</h3>
                <div class="checklist-details">
                    ${itemsHtml}
                </div>
            </div>
        `;
    });

    checklistContainer.innerHTML = html;

    if (typeof initChecklist === 'function') {
        initChecklist();
    }

    updateOverviewBookingProgress();
}

// 6. Synchronize Summary Page Progress Card (Must Book + Lodging + Car Rental)
function updateOverviewBookingProgress() {
    const allChecklistItems = document.querySelectorAll('.checklist-item');
    const bookCountEls = document.querySelectorAll('.book-count');
    const fillEls = document.querySelectorAll('.book-card .fill');

    if (!allChecklistItems.length) return;

    const total = allChecklistItems.length;
    const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;

    bookCountEls.forEach(el => {
        el.textContent = `${checked}/${total}`;
    });

    fillEls.forEach(el => {
        const pct = total > 0 ? (checked / total) * 100 : 0;
        el.style.width = `${pct}%`;
    });
}

// Helper Function for Accent Colors
function getDayAccentColor(dayNum) {
    const colors = ['#1f6feb', '#e5922e', '#2ea043', '#cf222e', '#8250df', '#d4a72c', '#1f6feb', '#e5922e', '#2ea043'];
    return colors[(dayNum - 1) % colors.length];
}

// 7. Bind Interactive Buttons
function bindButtons() {
    const btnCards = document.getElementById('btnCards');
    const btnRoutes = document.getElementById('btnRoutes');

    if (btnCards) {
        btnCards.onclick = () => {
            const dayCards = document.querySelectorAll('.day');
            const anyClosed = Array.from(dayCards).some(card => !card.classList.contains('open'));

            dayCards.forEach(card => {
                if (anyClosed) {
                    card.classList.add('open');
                } else {
                    card.classList.remove('open');
                }
            });
        };
    }

    if (btnRoutes) {
        btnRoutes.onclick = () => {
            showRoutes = !showRoutes;
            renderMapRoutes();
        };
    }
}

// 8. DOM Ready Handlers
document.addEventListener('DOMContentLoaded', () => {
    initNzMap();
    renderNzItineraryCards();
    renderNzChecklist();
    bindButtons();

    document.addEventListener('change', (e) => {
        if (e.target && e.target.matches('.checklist-item input[type="checkbox"]')) {
            updateOverviewBookingProgress();
        }
    });

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setTimeout(() => {
                renderNzItineraryCards();
                renderNzMapMarkers();
                renderNzChecklist();
            }, 50);
        });
    }
});
