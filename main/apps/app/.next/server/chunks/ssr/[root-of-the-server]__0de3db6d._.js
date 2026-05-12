module.exports = [
"[project]/.next-internal/server/app/(main)/trafic/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/pages/Trafic/model/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Trafic/model/useTraffic.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_PACKETS",
    ()=>MOCK_PACKETS,
    "useTraffic",
    ()=>useTraffic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const MOCK_PACKETS = [
    {
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
        application: [
            109,
            68,
            78,
            83
        ]
    },
    {
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
        application: [
            22,
            3,
            1,
            2,
            0
        ]
    },
    {
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
        application: [
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
        ]
    },
    {
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
        application: [
            8,
            0,
            0,
            0
        ]
    },
    {
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
        application: [
            128,
            0,
            0,
            0
        ]
    },
    {
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
        application: [
            23,
            3,
            3,
            0,
            50
        ]
    },
    {
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
        application: [
            0,
            0,
            0,
            0
        ]
    },
    {
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
        application: [
            80,
            79,
            83,
            84,
            32,
            47
        ]
    },
    {
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
        application: [
            68,
            72,
            67,
            80
        ]
    },
    {
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
        application: [
            22,
            3,
            3,
            0,
            100
        ]
    }
];
function useTraffic() {
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useId"])();
    const packets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(MOCK_PACKETS);
    return {
        idKey,
        packets
    };
}
}),
"[project]/src/pages/Trafic/model/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/useTraffic.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/pages/Trafic/ui/Page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Page-module-scss-module__TfiqGa__body",
  "body__ctx": "Page-module-scss-module__TfiqGa__body__ctx",
  "head": "Page-module-scss-module__TfiqGa__head",
  "item": "Page-module-scss-module__TfiqGa__item",
  "line": "Page-module-scss-module__TfiqGa__line",
  "trafic-page": "Page-module-scss-module__TfiqGa__trafic-page",
});
}),
"[project]/src/pages/Trafic/ui/Page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraficPage",
    ()=>TraficPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/model/useTraffic.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/ui/Page.module.scss [app-rsc] (css module)");
"use clie";
;
;
;
function TraficPage() {
    const {} = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTraffic"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["trafic-page"],
        children: packets.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["item"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["head"]
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["body"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["line"]
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["body__ctx"]
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
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
"[project]/src/pages/Trafic/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/ui/Page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/app/(main)/trafic/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Trafic/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Trafic/ui/Page.tsx [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TraficPage"];
}),
"[project]/app/(main)/trafic/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/trafic/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0de3db6d._.js.map