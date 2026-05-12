module.exports = [
"[project]/src/pages/Trafic/model/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Trafic/model/useTraffic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_PACKETS",
    ()=>MOCK_PACKETS,
    "formatDateTime",
    ()=>formatDateTime,
    "useTraffic",
    ()=>useTraffic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const MOCK_PACKETS = [
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "00:1A:2B:3C:4D:5E",
            dstMAC: "FF:FF:FF:FF:FF:FF"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.2",
            dstIP: "192.168.0.1",
            protocol: "UDP"
        },
        transport: {
            proto: "UDP",
            srcPort: 5353,
            dstPort: 5353
        },
        application: new Uint8Array([
            109,
            68,
            78,
            83
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "00:1A:2B:3C:4D:5E",
            dstMAC: "A4:5E:60:12:34:56"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.2",
            dstIP: "8.8.8.8",
            protocol: "TCP"
        },
        transport: {
            proto: "TCP",
            srcPort: 51234,
            dstPort: 443
        },
        application: new Uint8Array([
            22,
            3,
            1,
            2,
            0
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "AA:BB:CC:DD:EE:FF",
            dstMAC: "11:22:33:44:55:66"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.3",
            dstIP: "142.250.74.14",
            protocol: "TCP"
        },
        transport: {
            proto: "TCP",
            srcPort: 52344,
            dstPort: 80
        },
        application: new Uint8Array([
            71,
            69,
            84,
            32,
            47,
            32,
            72,
            84,
            84,
            80
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "12:34:56:78:9A:BC",
            dstMAC: "98:76:54:32:10:FE"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.4",
            dstIP: "1.1.1.1",
            protocol: "ICMP"
        },
        transport: {
            proto: "ICMP",
            srcPort: 0,
            dstPort: 0
        },
        application: new Uint8Array([
            8,
            0,
            0,
            0
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "DE:AD:BE:EF:00:01",
            dstMAC: "FF:FF:FF:FF:FF:FF"
        },
        network: {
            version: "IPv6",
            srcIP: "fe80::1",
            dstIP: "ff02::1",
            protocol: "ICMPv6"
        },
        transport: {
            proto: "ICMP",
            srcPort: 0,
            dstPort: 0
        },
        application: new Uint8Array([
            128,
            0,
            0,
            0
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "00:AA:BB:CC:DD:EE",
            dstMAC: "FF:EE:DD:CC:BB:AA"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.5",
            dstIP: "172.217.16.206",
            protocol: "TCP"
        },
        transport: {
            proto: "TCP",
            srcPort: 53000,
            dstPort: 443
        },
        application: new Uint8Array([
            23,
            3,
            3,
            0,
            50
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "01:23:45:67:89:AB",
            dstMAC: "BA:98:76:54:32:10"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.6",
            dstIP: "224.0.0.251",
            protocol: "UDP"
        },
        transport: {
            proto: "UDP",
            srcPort: 5353,
            dstPort: 5353
        },
        application: new Uint8Array([
            0,
            0,
            0,
            0
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "FE:DC:BA:98:76:54",
            dstMAC: "12:34:56:78:9A:BC"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.7",
            dstIP: "93.184.216.34",
            protocol: "TCP"
        },
        transport: {
            proto: "TCP",
            srcPort: 54000,
            dstPort: 80
        },
        application: new Uint8Array([
            80,
            79,
            83,
            84,
            32,
            47
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "11:22:33:44:55:66",
            dstMAC: "66:55:44:33:22:11"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.8",
            dstIP: "192.168.0.255",
            protocol: "UDP"
        },
        transport: {
            proto: "UDP",
            srcPort: 68,
            dstPort: 67
        },
        application: new Uint8Array([
            68,
            72,
            67,
            80
        ])
    },
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "CA:FE:BA:BE:00:02",
            dstMAC: "DE:AD:BE:EF:00:02"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.0.9",
            dstIP: "151.101.1.69",
            protocol: "TCP"
        },
        transport: {
            proto: "TCP",
            srcPort: 55000,
            dstPort: 443
        },
        application: new Uint8Array([
            22,
            3,
            3,
            0,
            100
        ])
    }
];
function formatDateTime(ts) {
    return new Date(ts).toLocaleString();
}
function useTraffic() {
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [packets, _setPackets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_PACKETS);
    return {
        idKey,
        packets
    };
}
}),
"[project]/src/pages/Trafic/model/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/useTraffic.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/pages/Trafic/ui/Page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Page-module-scss-module__TfiqGa__body",
  "body__ctx": "Page-module-scss-module__TfiqGa__body__ctx",
  "head": "Page-module-scss-module__TfiqGa__head",
  "head__block": "Page-module-scss-module__TfiqGa__head__block",
  "info": "Page-module-scss-module__TfiqGa__info",
  "item": "Page-module-scss-module__TfiqGa__item",
  "line": "Page-module-scss-module__TfiqGa__line",
  "trafic-page": "Page-module-scss-module__TfiqGa__trafic-page",
});
}),
"[project]/src/pages/Trafic/ui/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraficPage",
    ()=>TraficPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/useTraffic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/ui/Page.module.scss [app-ssr] (css module)");
"use client";
;
;
;
function TraficPage() {
    const { idKey, packets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTraffic"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["trafic-page"],
        children: packets.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["item"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head__block"],
                                children: item.network.srcIP
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head__block"],
                                children: item.network.protocol
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head__block"],
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(item.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["body"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["line"]
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["body__ctx"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "MAC отправителя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.ethernet.srcMAC
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "MAC получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.ethernet.dstMAC
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Версия IP:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.network.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "IP отправителя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.network.srcIP
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "IP получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.network.dstIP
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Протокол сети:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.network.protocol
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Транспортный протокол:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.transport.proto
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Порт отправителя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.transport.srcPort
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Порт получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.transport.dstPort
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Полезная нагрузка:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.application.join(" ")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, `${idKey}-${index}`, true, {
                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_pages_Trafic_08dda6e4._.js.map