

export default [
  {
    id: "booking",
    icon: "🔴",
    title: { zh: "必须预订", en: "Must Book" },
    color: "#cf222e",
    open: true,
    items: [
      {
        id: "cl-milford",
        label: {
          zh: "Milford Fly-Cruise-Fly（推荐 Glacier Southern Lakes）",
          en: "Milford Fly-Cruise-Fly (suggested: Glacier Southern Lakes)",
        },
        detail: {
          zh: `Day 2 · 12/27（周六） · NZ$1,325/人 · <a href="https://www.glaciersouthernlakes.co.nz/" target="_blank">官网</a><br>天气取消可免费改期，自己取消 24h 前全额退，飞行当天才扣款<br>确认有没有 10:30am 以后的班次`,
          en: `Day 2 · Sat 12/27 · NZ$1,325/pp · <a href="https://www.glaciersouthernlakes.co.nz/" target="_blank">Book</a><br>Weather cancel: free reschedule. Self-cancel 24h+ before: full refund. Charged on flight day<br>Confirm 10:30am+ departure availability`,
        },
      },
      {
        id: "cl-helihike",
        label: {
          zh: "Tasman Glacier Heli Hike（推荐 The Helicopter Line）",
          en: "Tasman Glacier Heli Hike (suggested: The Helicopter Line)",
        },
        detail: {
          zh: `Day 7 · 1/1（周四） · NZ$945/人 · <a href="https://www.newzealand.com/int/plan/business/the-helicopter-line-tasman-glacier-heli-hike/" target="_blank" rel="noopener noreferrer">预订页（新西兰旅游局）</a><br>天气取消可改期或全额退。24h 内更改或未到不退<br>确认有没有 10:30-11am 班次<br>🎒 <b>官方提供</b>：冰川靴 + 冰爪（或雪鞋）、需要时借防水外套<br>👕 <b>自己带</b>：3-4 层保暖上衣、打底裤或轻便长裤（<b>不能穿牛仔裤</b>）、墨镜、防晒霜、手机/相机（大相机要挂带）<br>🚫 <b>不能带上飞机</b>：背包、充电宝、无人机、iPad、自拍杆、宽松衣物和围巾<br>📞 起飞前 24h 打 0800 650 651 确认天气；Mount Cook Airport 二楼提前 15 分钟报到；全程约 3h；每班有最少人数<br>备选：<a href="https://www.mtcookskiplanes.com/tasman-heli-hike/" target="_blank" rel="noopener noreferrer">Mount Cook Ski Planes</a> $899（48h 前免费取消，每团至少 4 人）；<a href="https://www.alpineguides.co.nz/trips/tasman-glacier-heli-hike" target="_blank" rel="noopener noreferrer">Alpine Guides</a>（含私人团；官网没找到取消政策，订前问清楚）`,
          en: `Day 7 · Thu 1/1 · NZ$945/pp · <a href="https://www.newzealand.com/int/plan/business/the-helicopter-line-tasman-glacier-heli-hike/" target="_blank" rel="noopener noreferrer">Booking page (NZ Tourism)</a><br>Weather cancel: reschedule or full refund. No refund within 24h<br>Confirm 10:30-11am slot availability<br>🎒 <b>Provided</b>: glacier boots + crampons (or snowshoes), waterproof jacket if needed<br>👕 <b>Bring</b>: 3-4 warm upper layers, leggings or light trousers (<b>no jeans</b>), sunglasses, sunscreen, phone/camera (large cameras on a strap)<br>🚫 <b>Not allowed on board</b>: bags, power banks, drones, iPads, selfie sticks, loose clothing/scarves<br>📞 Call 0800 650 651 24h before to check weather; check in upstairs at Mount Cook Airport 15 min early; ~3h total; minimum passenger numbers apply<br>Alternatives: <a href="https://www.mtcookskiplanes.com/tasman-heli-hike/" target="_blank" rel="noopener noreferrer">Mount Cook Ski Planes</a> $899 (free cancel &gt;48h, min. 4 people); <a href="https://www.alpineguides.co.nz/trips/tasman-glacier-heli-hike" target="_blank" rel="noopener noreferrer">Alpine Guides</a> (incl. private; no cancellation policy found online, ask first)`,
        },
      },
      {
        id: "cl-hermitage",
        label: { zh: "Hermitage 跨年夜自助餐（8:30pm 后）", en: "Hermitage NYE buffet (after 8:30pm)" },
        detail: {
          zh: `Day 6 · 12/31（周三） · NZ$165/人 · <a href="https://www.hermitage.co.nz/christmas-new-year/new-years-eve-at-the-hermitage" target="_blank">官网</a><br>⚠️ <b>不可退款、不可转让</b>（邮件订位）<br>每桌限时 90 分钟，订 8:30pm 以后的时段`,
          en: `Day 6 · Wed 12/31 · NZ$165/pp · <a href="https://www.hermitage.co.nz/christmas-new-year/new-years-eve-at-the-hermitage" target="_blank">Book</a><br>⚠️ <b>Non-refundable, non-transferable</b> (book by email)<br>90 min per table, request 8:30pm+ seating`,
        },
      },
      {
        id: "cl-stargazing",
        label: { zh: "Mt John 观星团（Dark Sky Project）", en: "Mt John stargazing tour (Dark Sky Project)" },
        detail: {
          zh: `Day 5 · 12/30（周二） · NZ$239/人 · <a href="https://darkskyproject.co.nz/experiences/the-summit-experience/" target="_blank">官网</a><br>24h 前可全额退。天气问题可改期/礼券/全额退<br>⚠️ Tekapo 只住一晚，没有备用日`,
          en: `Day 5 · Tue 12/30 · NZ$239/pp · <a href="https://darkskyproject.co.nz/experiences/the-summit-experience/" target="_blank">Book</a><br>Full refund 24h+ before. Weather: reschedule/voucher/refund<br>⚠️ Only 1 night in Tekapo, no backup date`,
        },
      },
      {
        id: "cl-onsen",
        label: { zh: "Onsen Hot Pools（经常订满，尽早订）", en: "Onsen Hot Pools (often sold out, book early)" },
        detail: {
          zh: `Day 2 · 12/27（周六） 可选 · NZ$122 起 · <a href="https://www.onsen.co.nz/" target="_blank">官网</a><br>24h 前可改期或取消，否则 100% 收费`,
          en: `Day 2 · Sat 12/27 optional · NZ$122+ · <a href="https://www.onsen.co.nz/" target="_blank">Book</a><br>Reschedule/cancel 24h+ before, otherwise 100% charge`,
        },
      },
      {
        id: "cl-skyline",
        label: { zh: "Skyline 缆车 + Luge + Stratosfare 晚餐", en: "Skyline Gondola + Luge + Stratosfare dinner" },
        detail: {
          zh: `Day 1 · 12/26（周五） · NZ$193-201/人 · <a href="https://queenstown.skyline.co.nz/pricing-and-packages" target="_blank">官网</a><br>48h 前可全额退或改期`,
          en: `Day 1 · Fri 12/26 · NZ$193-201/pp · <a href="https://queenstown.skyline.co.nz/pricing-and-packages" target="_blank">Book</a><br>Full refund/reschedule 48h+ before`,
        },
      },
      {
        id: "cl-shotover",
        label: { zh: "Shotover Jet 鲨鱼艇", en: "Shotover Jet boat" },
        detail: {
          zh: `Day 3 · 12/28（周日） · NZ$199/人 · <a href="https://www.shotoverjet.com/" target="_blank">官网</a><br>24h 前可免费改期或取消`,
          en: `Day 3 · Sun 12/28 · NZ$199/pp · <a href="https://www.shotoverjet.com/" target="_blank">Book</a><br>Free reschedule/cancel 24h+ before`,
        },
      },
      {
        id: "cl-earnslaw",
        label: { zh: "TSS Earnslaw 晚餐船（5pm 班）", en: "TSS Earnslaw dinner cruise (5pm sailing)" },
        detail: {
          zh: `Day 4 · 12/29（周一） · NZ$175 起/人 · <a href="https://www.realnz.com/en/experiences/tss-earnslaw-walter-peak-experiences/walter-peak-gourmet-bbq-dining/" target="_blank">官网</a><br>24h 前通知可退款或更改`,
          en: `Day 4 · Mon 12/29 · NZ$175+/pp · <a href="https://www.realnz.com/en/experiences/tss-earnslaw-walter-peak-experiences/walter-peak-gourmet-bbq-dining/" target="_blank">Book</a><br>Refund/change with 24h+ notice`,
        },
      },
    ],
    notes: [
      {
        zh: `🟢 不用订：<a href="https://tekaposprings.co.nz/" target="_blank" rel="noopener noreferrer">Tekapo Springs</a>（Day 5 · 12/30，约 $42/人，直接去）· <a href="https://www.wanakalavenderfarm.com/plan-your-visit" target="_blank" rel="noopener noreferrer">Wanaka 薰衣草农场</a>（Day 9 · 1/3，$15/人，9am-5pm 现场买票）`,
        en: `🟢 No booking needed: <a href="https://tekaposprings.co.nz/" target="_blank" rel="noopener noreferrer">Tekapo Springs</a> (Day 5 · 12/30, ~$42 pp, walk in) · <a href="https://www.wanakalavenderfarm.com/plan-your-visit" target="_blank" rel="noopener noreferrer">Wanaka Lavender Farm</a> (Day 9 · 1/3, $15 pp, 9am-5pm, pay on site)`,
      },
      {
        zh: "✅ 价格和政策已在官网核实（2026-10-04），订之前再看一次；第三方平台（Klook、Viator 等）的政策可能不同。",
        en: "✅ Prices and policies checked on official sites (2026-10-04); re-check before booking. Third-party sites (Klook, Viator, etc.) may differ.",
      },
    ],
  },
  {
    id: "accommodation",
    icon: "🏨",
    title: { zh: "住宿和租车", en: "Accommodation & Car" },
    color: "#e5922e",
    items: [
      {
        id: "cl-car",
        label: { zh: "租车 SUV（机场取还）", en: "Rent SUV (airport pickup & return)" },
        detail: {
          zh: `🟢 尽早订 · 9 天总价约 NZ$800-1,200 · <a href="https://www.rentalcars.com" target="_blank" rel="noopener noreferrer">Rentalcars</a><br>ZQN 机场取车、机场还车；还车前路上加满油<br>选可免费取消的`,
          en: `🟢 Book early · ~NZ$800-1,200 total for 9 days · <a href="https://www.rentalcars.com" target="_blank" rel="noopener noreferrer">Rentalcars</a><br>Pick up and return at ZQN airport; refuel on the way<br>Pick free cancellation`,
        },
      },
      {
        id: "cl-stay-qt",
        label: { zh: "皇后镇 ×4 晚（12/26-29）", en: "Queenstown ×4 nights (12/26-29)" },
        detail: {
          zh: `🟢 提前订 · NZ$150-250/晚 · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>选可免费取消的价格`,
          en: `🟢 Book ahead · NZ$150-250/night · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>Pick a free-cancellation rate`,
        },
      },
      {
        id: "cl-stay-tk",
        label: { zh: "Lake Tekapo ×1 晚（12/30）", en: "Lake Tekapo ×1 night (12/30)" },
        detail: {
          zh: `🔴 现在订 · NZ$200-350/晚 · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>选可免费取消的价格`,
          en: `🔴 Book now · NZ$200-350/night · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>Pick a free-cancellation rate`,
        },
      },
      {
        id: "cl-stay-mc",
        label: { zh: "Mt Cook ×1 晚（12/31 跨年🎆）", en: "Mt Cook ×1 night (12/31 NYE🎆)" },
        detail: {
          zh: `🔴 现在订 · NZ$200-400/晚 · <a href="https://www.hermitage.co.nz/stay" target="_blank" rel="noopener noreferrer">Hermitage</a> 或 YHA<br>NYE 套餐不可退；订普通房时选可免费取消的价格`,
          en: `🔴 Book now · NZ$200-400/night · <a href="https://www.hermitage.co.nz/stay" target="_blank" rel="noopener noreferrer">Hermitage</a> or YHA<br>NYE packages are non-refundable; pick a free-cancellation room rate`,
        },
      },
      {
        id: "cl-stay-wn",
        label: { zh: "Wanaka ×2 晚（1/1-2）", en: "Wanaka ×2 nights (1/1-2)" },
        detail: {
          zh: `🟢 提前订 · NZ$150-250/晚 · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>选可免费取消的价格`,
          en: `🟢 Book ahead · NZ$150-250/night · <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a><br>Pick a free-cancellation rate`,
        },
      },
    ],
  },
  {
    id: "documents",
    icon: "📄",
    title: { zh: "证件/电子", en: "Documents / Electronics" },
    color: "#8250df",
    items: [
      {
        id: "cl-passport",
        label: { zh: "护照 + NZeTA 确认截图", en: "Passport + NZeTA confirmation screenshot" },
      },
      {
        id: "cl-idp",
        label: {
          zh: "美国驾照实体卡（英文驾照可直接开，不需要国际驾照；确认旅行期间不过期）",
          en: "Physical US driver's licence (English licences are accepted, no IDP needed; check it won't expire during the trip)",
        },
      },
      {
        id: "cl-bookings",
        label: { zh: "所有预订确认邮件离线截图", en: "Offline screenshots of all booking confirmations" },
      },
      {
        id: "cl-powerbank",
        label: {
          zh: "充电宝 + I 型转换插头（美标不能直接用；Heli Hike 不能带充电宝上直升机，留车上）",
          en: "Power bank + Type I adapter (US plugs don't fit; power banks not allowed on the Heli Hike helicopter, leave in car)",
        },
      },
    ],
  },
  {
    id: "clothing",
    icon: "👕",
    title: { zh: "衣物（洋葱穿法）", en: "Clothing (layer up)" },
    color: "#1f6feb",
    items: [
      { id: "cl-jacket", label: { zh: "🧥 防风防水外套", en: "🧥 Wind/waterproof jacket" } },
      {
        id: "cl-midlayer",
        label: {
          zh: "保暖中间层（抓绒/轻薄羽绒）——观星+冰川用",
          en: "Warm mid-layer (fleece/packable down) — stargazing + glacier",
        },
      },
      {
        id: "cl-tshirts",
        label: { zh: "速干 T 恤 ×3-4 + 长裤 ×2 + 短裤 ×1", en: "Quick-dry tees ×3-4 + pants ×2 + shorts ×1" },
      },
      { id: "cl-hat", label: { zh: "🧢 帽子 + 墨镜（偏光镜片）", en: "🧢 Hat + sunglasses (polarized)" } },
      {
        id: "cl-gloves",
        label: { zh: "薄手套——冰川 Heli Hike 冰面用", en: "Light gloves — for glacier ice surface" },
      },
      {
        id: "cl-waterproof-pants",
        label: {
          zh: "打底裤或轻便长裤——Heli Hike 用（不能穿牛仔裤；防水外套官方可借）",
          en: "Leggings or light trousers — for Heli Hike (no jeans; waterproof jacket can be borrowed)",
        },
      },
    ],
  },
  {
    id: "hiking",
    icon: "🥾",
    title: { zh: "徒步装备", en: "Hiking Gear" },
    color: "#2ea043",
    items: [
      {
        id: "cl-boots",
        label: {
          zh: "🥾 防水徒步鞋（Roys Peak + Hooker Valley 必须）",
          en: "🥾 Waterproof hiking boots (must for Roys Peak + Hooker Valley)",
        },
      },
      { id: "cl-socks", label: { zh: "厚徒步袜 ×3 双", en: "Thick hiking socks ×3 pairs" } },
      {
        id: "cl-poles",
        label: { zh: "登山杖（可选，Roys Peak 下坡有用）", en: "Trekking poles (optional, helps Roys Peak descent)" },
      },
      {
        id: "cl-daypack",
        label: { zh: "小背包 20-30L + 水壶 ×2（每人 2-3L）", en: "Day pack 20-30L + water bottles ×2 (2-3L each)" },
      },
    ],
  },
  {
    id: "suncare",
    icon: "☀️",
    title: { zh: "防晒", en: "Sun Protection" },
    color: "#d4a72c",
    items: [
      {
        id: "cl-sunscreen",
        label: {
          zh: "SPF50+ 防晒霜（每 2h 补涂，冰川上必须）",
          en: "SPF50+ sunscreen (reapply every 2h, essential on glacier)",
        },
      },
      { id: "cl-lipbalm", label: { zh: "SPF 唇膏", en: "SPF lip balm" } },
    ],
  },
  {
    id: "food",
    icon: "🍱",
    title: { zh: "食物相关", en: "Food Supplies" },
    color: "#bf3989",
    items: [
      {
        id: "cl-soysauce",
        label: { zh: "酱油 + 芥末小包——刺身野餐用", en: "Soy sauce + wasabi packets — for sashimi picnic" },
      },
      {
        id: "cl-snacks",
        label: {
          zh: "零食/能量棒——Mt Cook 和 Tekapo 买东西不方便",
          en: "Snacks/energy bars — limited shops at Mt Cook & Tekapo",
        },
      },
      {
        id: "cl-cooler",
        label: { zh: "保温袋——三文鱼刺身路上保鲜", en: "Insulated bag — keep salmon sashimi fresh" },
      },
      { id: "cl-thermos", label: { zh: "保温杯——观星夜装热水", en: "Thermos — hot water for stargazing night" } },
    ],
  },
  {
    id: "medical",
    icon: "💊",
    title: { zh: "药品/日用", en: "Medical / Daily" },
    color: "#0e8a9a",
    items: [
      {
        id: "cl-motion",
        label: { zh: "晕车/晕机药——Crown Range 弯路多", en: "Motion sickness pills — Crown Range is winding" },
      },
      {
        id: "cl-meds",
        label: { zh: "个人药品 + 小急救包（创可贴）", en: "Personal meds + first aid kit (band-aids)" },
      },
      {
        id: "cl-advil",
        label: { zh: "Advil 止痛药——徒步后肌肉酸痛、头痛", en: "Advil (ibuprofen) — post-hike soreness, headaches" },
      },
      {
        id: "cl-allergy",
        label: {
          zh: "过敏药——12 月是新西兰花粉季（草花粉、鲁冰花）",
          en: "Allergy meds — December is NZ pollen season (grass, lupins)",
        },
      },
      { id: "cl-wipes", label: { zh: "湿纸巾——野餐用", en: "Wet wipes — for picnic" } },
    ],
  },
];
