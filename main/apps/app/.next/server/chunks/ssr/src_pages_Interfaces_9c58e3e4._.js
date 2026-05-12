module.exports = [
"[project]/src/pages/Interfaces/model/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Interfaces/model/useNetworkData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_INTERFACES",
    ()=>MOCK_INTERFACES,
    "generateInitialStats",
    ()=>generateInitialStats,
    "useNetworkData",
    ()=>useNetworkData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const MOCK_INTERFACES = [
    {
        pcapName: "\\Device\\NPF_{8C4A9B1D-1122-3344-5566-778899AABBCC}",
        description: "Loopback Interface",
        localName: "lo",
        mac: "00:00:00:00:00:00",
        mtu: 65536,
        index: 1,
        flags: [
            "broadcast",
            "loopback"
        ],
        type: "loopback",
        ips: [
            {
                ip: "127.0.0.1",
                netmask: "255.0.0.0"
            }
        ]
    },
    {
        pcapName: "\\Device\\NPF_{A1B2C3D4-5566-7788-99AA-BBCCDDEEFF00}",
        description: "Intel I211 Gigabit Network Connection",
        localName: "eth0",
        mac: "A4:BB:6D:8F:12:3C",
        mtu: 1500,
        index: 2,
        flags: [
            "up",
            "broadcast",
            "multicast"
        ],
        type: "ethernet",
        ips: [
            {
                ip: "192.168.1.42",
                netmask: "255.255.255.0",
                broadcast: "192.168.1.255"
            }
        ]
    },
    {
        pcapName: "\\Device\\NPF_{E5F6A7B8-9900-1122-3344-5566778899AA}",
        description: "Realtek RTL8822BE 802.11ac Wireless Adapter",
        localName: "wlan0",
        mac: "F0:2F:4B:9A:0C:1E",
        mtu: 1500,
        index: 3,
        flags: [
            "up",
            "broadcast",
            "multicast"
        ],
        type: "wireless",
        ips: [
            {
                ip: "10.0.0.15",
                netmask: "255.255.255.0",
                broadcast: "10.0.0.255"
            }
        ]
    },
    {
        pcapName: "\\Device\\NPF_{11223344-5566-7788-99AA-BBCCDDEEFF01}",
        description: "Docker Bridge Network",
        localName: "docker0",
        mac: "02:42:AC:11:00:01",
        mtu: 1500,
        index: 4,
        flags: [
            "up",
            "broadcast",
            "multicast"
        ],
        type: "bridge",
        ips: [
            {
                ip: "172.17.0.1",
                netmask: "255.255.0.0"
            }
        ]
    },
    {
        pcapName: "\\Device\\NPF_{99887766-5544-3322-1100-AABBCCDDEEFF}",
        description: "OpenVPN Tunnel Interface",
        localName: "tun0",
        mac: "",
        mtu: 1500,
        index: 5,
        flags: [
            "point-to-point",
            "multicast",
            "noarp"
        ],
        type: "tunnel",
        ips: []
    }
];
const generateInitialStats = (interfaces)=>interfaces.map((iface)=>{
        const isActive = iface.flags?.includes("up");
        const baseSent = isActive ? Math.floor(Math.random() * 500_000_000) : 0;
        const baseRecv = isActive ? Math.floor(Math.random() * 1_200_000_000) : 0;
        return {
            pcapName: iface.pcapName,
            bytesSent: baseSent,
            bytesRecv: baseRecv,
            sentSpeedKbps: isActive ? Math.random() * 100 : 0,
            recvSpeedKbps: isActive ? Math.random() * 300 : 0,
            packetsIn: isActive ? Math.floor(Math.random() * 50_000) : 0,
            packetsOut: isActive ? Math.floor(Math.random() * 10_000) : 0
        };
    });
function useNetworkData({ intervalMs = 1500, enableLive = true } = {}) {
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [interfaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_INTERFACES);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>generateInitialStats(MOCK_INTERFACES));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enableLive) return;
        const timer = setInterval(()=>{
            setStats((prev)=>prev.map((s)=>{
                    const iface = interfaces.find((i)=>i.pcapName === s.pcapName);
                    const isActive = iface?.flags?.includes("up");
                    if (!isActive) return s;
                    const recvSpeed = Math.max(0, s.recvSpeedKbps + (Math.random() * 400 - 200));
                    const sentSpeed = Math.max(0, s.sentSpeedKbps + (Math.random() * 200 - 100));
                    return {
                        ...s,
                        recvSpeedKbps: recvSpeed,
                        sentSpeedKbps: sentSpeed,
                        bytesRecv: s.bytesRecv + Math.floor(recvSpeed * 1000 / 8 * (intervalMs / 1000)),
                        bytesSent: s.bytesSent + Math.floor(sentSpeed * 1000 / 8 * (intervalMs / 1000)),
                        packetsIn: s.packetsIn + Math.floor(Math.random() * 50),
                        packetsOut: s.packetsOut + Math.floor(Math.random() * 30)
                    };
                }));
        }, intervalMs);
        return ()=>clearInterval(timer);
    }, [
        enableLive,
        intervalMs,
        interfaces
    ]);
    return {
        idKey,
        interfaces,
        stats
    };
}
}),
"[project]/src/pages/Interfaces/model/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/pages/Interfaces/ui/Page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "Page-module-scss-module__0_GzWG__box",
  "box__item": "Page-module-scss-module__0_GzWG__box__item",
  "interfaces-page": "Page-module-scss-module__0_GzWG__interfaces-page",
});
}),
"[project]/src/pages/Interfaces/ui/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterfacesPage",
    ()=>InterfacesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/ui/Page.module.scss [app-ssr] (css module)");
"use client";
;
;
;
function InterfacesPage() {
    const { idKey, interfaces, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["interfaces-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["box"],
            children: interfaces.map((item, index)=>{
                const stat = stats.find((s)=>s.pcapName === item.pcapName);
                const isActive = item.flags?.includes("up") ?? false;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["box__item"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Интерфейс:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this),
                                " ",
                                item.localName || item.description || "unknown"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Тип:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this),
                                " ",
                                item.type
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "MAC:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this),
                                " ",
                                item.mac || "N/A"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "IP:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this),
                                " ",
                                item.ips?.length ? item.ips.map((ip)=>ip.ip).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Маска:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this),
                                " ",
                                item.ips?.length ? item.ips.map((ip)=>ip.netmask).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Статус:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this),
                                " ",
                                isActive ? "Активен" : "Неактивен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Статистика:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this),
                                " ↓",
                                stat?.packetsIn || 0,
                                " ↑",
                                stat?.packetsOut || 0
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this)
                    ]
                }, `${idKey}-${index}`, true, {
                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_pages_Interfaces_9c58e3e4._.js.map