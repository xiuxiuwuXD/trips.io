

export default [
  {
    type: "stats",
    items: [
      {
        value: { zh: "9天8晚", en: "9 days / 8 nights" },
        text: { zh: "12/26 9:50am 到达<br>1/3 5:30pm 起飞", en: "Arrive 12/26 9:50am<br>Depart 1/3 5:30pm" },
      },
      { value: "~800 km", text: { zh: "自驾总里程<br>单日最长约 3.5h", en: "Total driving<br>Longest day ~3.5h" } },
      { value: { zh: "4 个住宿地", en: "4 bases" }, text: { zh: "只换 3 次酒店", en: "Only 3 hotel changes" } },
      {
        value: { zh: "2 次直升机", en: "2 helicopter trips" },
        text: { zh: "峡湾 + 冰川", en: "Fiord + glacier" },
      },
    ],
  },
  {
    type: "route",
    title: { zh: "🗺️ 路线", en: "🗺️ Route" },
    stops: [
      { name: { zh: "皇后镇", en: "Queenstown" }, nights: { zh: "4晚", en: "4 nights" } },
      { name: "Lake Tekapo", nights: { zh: "1晚", en: "1 night" } },
      { name: "Mt Cook", nights: { zh: "1晚", en: "1 night" } },
      { name: "Wanaka", nights: { zh: "2晚", en: "2 nights" } },
      { name: { zh: "皇后镇 ✈️", en: "Queenstown ✈️" } },
    ],
  },
  {
    type: "list",
    title: { zh: "⭐ 行程亮点", en: "⭐ Highlights" },
    items: [
      {
        zh: "🚁 Milford Sound 直升机 + 游船（空中和水面两种视角）",
        en: "🚁 Milford Sound helicopter + cruise (views from the air and the water)",
      },
      { zh: "❄️ Tasman Glacier 直升机冰川徒步", en: "❄️ Tasman Glacier heli hike" },
      {
        zh: "🥾 Roys Peak 经典山脊观景点（这次最大的徒步）",
        en: "🥾 Roys Peak classic ridge viewpoint (the biggest hike of the trip)",
      },
      {
        zh: "🥾 Diamond Lake、Queenstown Hill、Mt John、Hooker Valley 等徒步",
        en: "🥾 Diamond Lake, Queenstown Hill, Mt John, Hooker Valley and more",
      },
      {
        zh: "🌌 好牧羊人教堂 + Mt John 暗夜保护区观星",
        en: "🌌 Church of the Good Shepherd + Mt John Dark Sky Reserve stargazing",
      },
      { zh: "🚡 Skyline 缆车 + Luge + 山顶自助晚餐", en: "🚡 Skyline Gondola + Luge + summit buffet dinner" },
      {
        zh: "🛳️ TSS Earnslaw 蒸汽船 + Walter Peak 农场晚餐，返程看黄金时段",
        en: "🛳️ TSS Earnslaw steamship + Walter Peak farm dinner, golden-hour cruise back",
      },
      {
        zh: "🎆 Mt Cook 跨年：Hermitage 自助餐 + 暗夜星空",
        en: "🎆 New Year's Eve at Mt Cook: Hermitage buffet + dark-sky stars",
      },
      { zh: "🚤 Shotover Jet 峡谷飙船", en: "🚤 Shotover Jet canyon jet boat" },
      {
        zh: "🐟 Lake Pukaki 湖边三文鱼刺身野餐 · 📷 Peters Lookout",
        en: "🐟 Salmon sashimi picnic by Lake Pukaki · 📷 Peters Lookout",
      },
      { zh: "♨️ Onsen 峡谷温泉 / Tekapo Springs", en: "♨️ Onsen Hot Pools / Tekapo Springs" },
      {
        zh: "📷 沿途观景点：Bennetts Bluff、Kawarau Gorge、Lindis Pass、Lake Ruataniwha、Peters Lookout、Crown Range",
        en: "📷 Roadside viewpoints: Bennetts Bluff, Kawarau Gorge, Lindis Pass, Lake Ruataniwha, Peters Lookout, Crown Range",
      },
      { zh: "💜 Wanaka 薰衣草 · 🏔️ Crown Range 观景", en: "💜 Wanaka lavender · 🏔️ Crown Range views" },
    ],
  },
  {
    type: "table",
    title: { zh: "📅 每日一览", en: "📅 Day by Day" },
    head: [
      { zh: "天", en: "Day" },
      { zh: "日期", en: "Date" },
      { zh: "主题", en: "Theme" },
      { zh: "住", en: "Stay" },
    ],
    rows: [
      [
        "1",
        "12/26",
        {
          zh: "到达，Skyline 缆车 + Luge + 山顶自助晚餐",
          en: "Arrive; Skyline Gondola + Luge + summit buffet dinner",
        },
        { zh: "皇后镇", en: "Queenstown" },
      ],
      [
        "2",
        "12/27",
        { zh: "Milford 直升机（可选 Onsen）", en: "Milford helicopter (optional Onsen)" },
        { zh: "皇后镇", en: "Queenstown" },
      ],
      [
        "3",
        "12/28",
        {
          zh: "Glenorchy + Diamond Lake + 鲨鱼艇（Milford 备用日）",
          en: "Glenorchy + Diamond Lake + Shotover Jet (Milford backup day)",
        },
        { zh: "皇后镇", en: "Queenstown" },
      ],
      [
        "4",
        "12/29",
        {
          zh: "Queenstown Hill + 植物园 + 5pm Earnslaw 晚餐船（返程看黄金时段）",
          en: "Queenstown Hill + Gardens + 5pm Earnslaw dinner cruise (golden hour on the way back)",
        },
        { zh: "皇后镇", en: "Queenstown" },
      ],
      [
        "5",
        "12/30",
        {
          zh: "Kawarau Gorge → Lindis Pass → Lake Ruataniwha → Tekapo →（可选温泉）→ 教堂 → Mt John 观星团",
          en: "Kawarau Gorge → Lindis Pass → Lake Ruataniwha → Tekapo → (optional hot pools) → church → Mt John stargazing tour",
        },
        "Tekapo",
      ],
      [
        "6",
        "12/31",
        {
          zh: "Mt John 徒步 → Pukaki 三文鱼 → Peters Lookout → Hooker Valley → Hermitage 跨年自助餐",
          en: "Mt John walk → Pukaki salmon → Peters Lookout → Hooker Valley → Hermitage NYE buffet",
        },
        "Mt Cook",
      ],
      [
        "7",
        "1/1",
        { zh: "Tasman Heli Hike → Twizel 三文鱼 → Wanaka", en: "Tasman Heli Hike → Twizel salmon → Wanaka" },
        "Wanaka",
      ],
      [
        "8",
        "1/2",
        { zh: "Roys Peak 观景点 → That Wanaka Tree 日落", en: "Roys Peak viewpoint → That Wanaka Tree sunset" },
        "Wanaka",
      ],
      [
        "9",
        "1/3",
        {
          zh: "薰衣草农场 → Lake Wanaka 早午餐 → Crown Range →（可选 Arrowtown）→ 机场还车 → 5:30pm 起飞",
          en: "Lavender farm → Lake Wanaka brunch → Crown Range → (optional Arrowtown) → return car at airport → 5:30pm flight",
        },
        "—",
      ],
    ],
    rowClass: "day-row",
  },
  {
    type: "booking",
    title: { zh: "📋 预订进度", en: "📋 Booking Progress" },
    button: { zh: "去待办清单查看和勾选 →", en: "Open checklist to view & tick →" },
    groups: ["booking", "accommodation"],
    urgent: [
      { id: "cl-stay-mc", label: { zh: "Mt Cook 住宿（跨年）", en: "Mt Cook stay (NYE)" } },
      { id: "cl-stay-tk", label: { zh: "Tekapo 住宿", en: "Tekapo stay" } },
      { id: "cl-milford", label: { zh: "Milford 直升机", en: "Milford heli" } },
      { id: "cl-helihike", label: "Tasman Heli Hike" },
      {
        id: "cl-hermitage",
        label: { zh: "Hermitage 跨年自助餐（不可退）", en: "Hermitage NYE buffet (non-refundable)" },
      },
    ],
  },
  {
    type: "fold",
    summary: { zh: "💰 预算估算（2 人）", en: "💰 Budget Estimate (2 people)" },
    total: { zh: "约 NZ$10,500 – 13,500", en: "~NZ$10,500 – 13,500" },
    table: {
      head: [{ zh: "类别", en: "Category" }, { zh: "2 人合计", en: "Total for 2" }],
      rows: [
        [
          { zh: "🏨 住宿 8 晚（旺季，估算）", en: "🏨 Accommodation, 8 nights (peak season, estimate)" },
          "1,790 – 3,000",
        ],
        [{ zh: "🚗 租车 SUV 9 天 + 油费（估算）", en: "🚗 Rental SUV 9 days + fuel (estimate)" }, "1,150 – 1,750"],
        [
          { zh: "🚁 Milford Fly-Cruise-Fly ✅ $1,325/人", en: "🚁 Milford Fly-Cruise-Fly ✅ $1,325 pp" },
          "2,650",
        ],
        [{ zh: "❄️ Tasman Heli Hike $899-945/人", en: "❄️ Tasman Heli Hike $899-945 pp" }, "1,800 – 1,890"],
        [
          {
            zh: "🚡 Skyline 缆车 + 晚餐 + Luge ✅ $193-201/人",
            en: "🚡 Skyline gondola + dinner + Luge ✅ $193-201 pp",
          },
          "390 – 400",
        ],
        [{ zh: "🛳️ Earnslaw 晚餐船 ✅ $175 起/人", en: "🛳️ Earnslaw dinner cruise ✅ from $175 pp" }, "350"],
        [{ zh: "🚤 Shotover Jet ✅ $199/人", en: "🚤 Shotover Jet ✅ $199 pp" }, "400"],
        [{ zh: "🌌 Mt John 观星团 ✅ $239/人", en: "🌌 Mt John stargazing ✅ $239 pp" }, "480"],
        [{ zh: "🎆 跨年夜自助餐 ✅ $165/人", en: "🎆 NYE buffet ✅ $165 pp" }, "330"],
        [{ zh: "💜 薰衣草农场 $15/人", en: "💜 Lavender farm $15 pp" }, "30"],
        [
          {
            zh: "♨️ 温泉（可选）Onsen ✅ $122 起 + Tekapo Springs $42/人",
            en: "♨️ Hot pools (optional) Onsen ✅ from $122 + Tekapo Springs $42 pp",
          },
          "0 – 330",
        ],
        [{ zh: "🍽️ 其他餐饮（估算）", en: "🍽️ Other meals (estimate)" }, "1,000 – 1,600"],
        [{ zh: "🧾 杂项（估算）", en: "🧾 Misc (estimate)" }, "150 – 300"],
      ],
      foot: [
        { zh: "合计", en: "Total" },
        { zh: "约 10,500 – 13,500<br>（约 US$6,100 – 8,100）", en: "~10,500 – 13,500<br>(~US$6,100 – 8,100)" },
      ],
    },
    note: {
      zh: `✅ = 官网价格（2026-10-04 查）；"旅游局页面"是新西兰旅游局等官方目录上的价格；其余为估算。Onsen 写的是"from $122"，是否按人计以订位页为准。不含国际机票、旅行保险、NZeTA + 国际游客税（IVL）。`,
      en: `✅ = official website price (checked 2026-10-04); "tourism listing" = price on official tourism directories such as New Zealand Tourism; the rest are estimates. Onsen says "from $122" — check the booking page whether it is per person. Excludes international flights, travel insurance, NZeTA + International Visitor Levy (IVL).`,
    },
  },
  {
    type: "table",
    title: { zh: "🥾 徒步", en: "🥾 Hikes" },
    head: [
      { zh: "步道", en: "Track" },
      { zh: "天", en: "Day" },
      { zh: "时长", en: "Time" },
      { zh: "难度", en: "Difficulty" },
    ],
    rows: [
      ["Diamond Lake", "3", "2.5h", "🟡"],
      ["Queenstown Hill", "4", "2.5-3h", "🟡"],
      ["Mt John Summit", "6", "2-2.5h", "🟢"],
      ["Hooker Valley", "6", "3.5-4.5h", "🟢"],
      [
        { zh: "Tasman 冰川徒步", en: "Tasman glacier walk" },
        "7",
        { zh: "冰上约 2h", en: "~2h on the ice" },
        "🟢🟡",
      ],
      [{ zh: "Roys Peak 观景点（可选登顶）", en: "Roys Peak viewpoint (summit optional)" }, "8", "6-8.5h", "🔴"],
    ],
  },
  {
    type: "list",
    title: { zh: "🐟 三文鱼 & ♨️ 温泉", en: "🐟 Salmon & ♨️ Hot Pools" },
    items: [
      {
        zh: "<b>Day 2</b> ♨️ Onsen Hot Pools（Arthurs Point，Milford 回来后，可选）",
        en: "<b>Day 2</b> ♨️ Onsen Hot Pools (Arthurs Point, after Milford, optional)",
      },
      {
        zh: "<b>Day 5</b> ♨️ Tekapo Springs（到 Tekapo 入住后，可选）",
        en: "<b>Day 5</b> ♨️ Tekapo Springs (after checking in at Tekapo, optional)",
      },
      {
        zh: "<b>Day 6</b> 🐟 Mt Cook Alpine Salmon — 买刺身去 Pukaki 湖边野餐 ⭐",
        en: "<b>Day 6</b> 🐟 Mt Cook Alpine Salmon — sashimi picnic by Lake Pukaki ⭐",
      },
      {
        zh: "<b>Day 7</b> 🐟 High Country Salmon（Twizel，就在去 Wanaka 的路上）",
        en: "<b>Day 7</b> 🐟 High Country Salmon (Twizel, on the way to Wanaka)",
      },
    ],
  },
  {
    type: "list",
    title: { zh: "📍 导入 Google My Maps", en: "📍 Import into Google My Maps" },
    items: [
      {
        zh: `"每日行程"标签里，每天都有 <b>📍 下载当天停靠点 KML</b> 按钮`,
        en: `In the "Daily Plan" tab, every day has a <b>📍 Download day stops (KML)</b> button`,
      },
      {
        zh: `或者一次下载全部：<button type="button" class="kmlbtn" style="margin:0" data-action="kml-all">📍 下载全部停靠点 KML</button>（按天分成 9 个文件夹）`,
        en: `Or download everything at once: <button type="button" class="kmlbtn" style="margin:0" data-action="kml-all">📍 Download all stops (KML)</button> (9 folders, one per day)`,
      },
      {
        zh: `导入：mymaps.google.com → 新建地图 → 图层下点"导入" → 选文件；每天一个文件就能一天一个图层，可以单独开关`,
        en: `Import: mymaps.google.com → Create a new map → under a layer click "Import" → choose the file; one file per day gives one layer per day that you can toggle`,
      },
      {
        zh: `导入后，手机上打开 Google Maps App →"你"/"已保存"→"地图"就能看到`,
        en: `After importing, open the Google Maps app on your phone → "You" / "Saved" → "Maps"`,
      },
    ],
  },
  {
    type: "list",
    title: { zh: "💡 注意事项", en: "💡 Notes" },
    items: [
      {
        zh: "⏰ 每天按 9am 起床、10am 出发安排；Milford 和 Heli Hike 要订 10:30-11am 的班次；Day 8 例外，7:30am 起床爬 Roys Peak",
        en: "⏰ Planned around 9am wake-up / 10am departure; book Milford and the Heli Hike for 10:30-11am. Exception: Day 8, up at 7:30am for Roys Peak",
      },
      {
        zh: "🚗 靠左行驶，山路弯多，Twizel 记得加满油",
        en: "🚗 Drive on the left; winding mountain roads; fill up in Twizel",
      },
      {
        zh: "☀️ 紫外线极强，SPF50+、墨镜必备；日照约 6am-9:30pm",
        en: "☀️ Very strong UV: SPF50+ and sunglasses; daylight roughly 6am-9:30pm",
      },
      {
        zh: "🌦️ 直升机项目受天气影响，可能临时取消，预订时选可改期的",
        en: "🌦️ Helicopter trips depend on weather and may be cancelled at short notice; book changeable tickets",
      },
      {
        zh: "🌙 Day 5 Tekapo：日落 9:23pm，天完全变暗 11:47pm，月出 0:55am（亏凸月约 53%）→ 最暗时段约 11:47pm-0:55am",
        en: "🌙 Day 5 Tekapo: sunset 9:23pm, fully dark 11:47pm, moonrise 0:55am (waning gibbous ~53%) → darkest window ~11:47pm-0:55am",
      },
      {
        zh: "🌙 Day 6 Mt Cook：日落 9:24pm，天完全变暗 11:45pm，月出 1:17am（约 43%）→ 跨年倒数正好最暗",
        en: "🌙 Day 6 Mt Cook: sunset 9:24pm, fully dark 11:45pm, moonrise 1:17am (~43%) → the NYE countdown falls in the darkest window",
      },
      {
        zh: "🎆 跨年在 Mt Cook，旺季住宿极少，务必先订；跨年夜订 Hermitage Alpine 自助餐（$165/人，不可退）",
        en: "🎆 NYE at Mt Cook: very little accommodation in peak season, book first; book the Hermitage Alpine NYE buffet ($165 pp, non-refundable)",
      },
      {
        zh: "🌌 观星只有 Day 5 一晚，没有备用日；Day 6 在 Mt Cook 可以自己看星星",
        en: "🌌 Only one stargazing night (Day 5), no backup; on Day 6 you can stargaze on your own at Mt Cook",
      },
      {
        zh: "📌 大预订（Milford、Earnslaw、Heli Hike、观星团）每天最多一个；温泉放在徒步后面当可选",
        en: "📌 At most one big booking per day (Milford, Earnslaw, Heli Hike, stargazing tour); hot pools are optional add-ons after hikes",
      },
      {
        zh: `🧭 每日行程里每天都有"在 Google Maps 打开当天路线"按钮和"📍 下载当天停靠点 KML"按钮`,
        en: `🧭 Every day in the Daily Plan has an "Open day route in Google Maps" button and a "📍 Download day stops (KML)" button`,
      },
      {
        zh: "🚁 Heli Hike 从 Mt Cook Airport 起飞（离村约 10 分钟），全程约 3h；取消时改坐 Glacier Explorers 冰川船",
        en: "🚁 The Heli Hike departs Mt Cook Airport (~10 min from the village), about 3h in total; if cancelled, do the Glacier Explorers boat instead",
      },
      {
        zh: "🚁 Milford 如果取消，改到 Day 3（鲨鱼艇挪到傍晚）；Glenorchy 挪到 Day 4，替换 Queenstown Hill",
        en: "🚁 If Milford is cancelled, move it to Day 3 (Shotover Jet moves to the evening); Glenorchy moves to Day 4, replacing Queenstown Hill",
      },
    ],
  },
  {
    type: "note",
    html: {
      zh: "价格和时长都是参考值，没有逐项核实，预订前请以官网为准。",
      en: "Prices and durations are indicative and not individually verified; check the official sites before booking.",
    },
  },
];
