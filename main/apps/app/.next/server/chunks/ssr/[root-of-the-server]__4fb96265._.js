module.exports = [
"[project]/.next-internal/server/app/interfaces/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/pages/Interfaces/model/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Interfaces/model/useNetworkData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_INTERFACES",
    ()=>MOCK_INTERFACES,
    "generateInitialStats",
    ()=>generateInitialStats,
    "useNetworkData",
    ()=>useNetworkData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const MOCK_INTERFACES = [
    {
        id: "12ewv43",
        pcapName: "\\Device\\NPF_{8C4A9B1D-1122-3344-5566-778899AABBCC}",
        localName: "lo",
        description: "Loopback Interface",
        mac: "00:00:00:00:00:00",
        mtu: 65536,
        index: 1,
        flags: [
            "UP",
            "LOOPBACK",
            "RUNNING"
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
        id: "12ewe234543",
        pcapName: "\\Device\\NPF_{A1B2C3D4-5566-7788-99AA-BBCCDDEEFF00}",
        localName: "eth0",
        description: "Intel I211 Gigabit Network",
        mac: "A4:BB:6D:8F:12:3C",
        mtu: 1500,
        index: 2,
        flags: [
            "UP",
            "BROADCAST",
            "MULTICAST",
            "RUNNING"
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
        id: "12ebythuj5",
        pcapName: "\\Device\\NPF_{E5F6A7B8-9900-1122-3344-5566778899AA}",
        localName: "wlan0",
        description: "Realtek RTL8822BE Wireless",
        mac: "F0:2F:4B:9A:0C:1E",
        mtu: 1500,
        index: 3,
        flags: [
            "UP",
            "BROADCAST",
            "MULTICAST",
            "RUNNING"
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
        id: "12ebythu%21j5)",
        pcapName: "\\Device\\NPF_{11223344-5566-7788-99AA-BBCCDDEEFF01}",
        localName: "docker0",
        description: "Docker Bridge Network",
        mac: "02:42:AC:11:00:01",
        mtu: 1500,
        index: 4,
        flags: [
            "UP",
            "BROADCAST",
            "MULTICAST"
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
        id: "1op-pjhjhu%21j5)",
        pcapName: "\\Device\\NPF_{99887766-5544-3322-1100-AABBCCDDEEFF}",
        localName: "tun0",
        description: "OpenVPN Tunnel",
        mac: "",
        mtu: 1500,
        index: 5,
        flags: [
            "POINTOPOINT",
            "MULTICAST",
            "NOARP"
        ],
        type: "tunnel",
        ips: []
    }
];
const generateInitialStats = (interfaces)=>interfaces.map((iface)=>{
        const isActive = iface.flags?.includes("UP") && iface.flags?.includes("RUNNING");
        return {
            id: iface.id,
            pcapName: iface.pcapName,
            bytesSent: isActive ? Math.floor(Math.random() * 500_000_000) : 0,
            bytesRecv: isActive ? Math.floor(Math.random() * 1_200_000_000) : 0,
            sentSpeedKbps: isActive ? Math.random() * 800 : 0,
            recvSpeedKbps: isActive ? Math.random() * 2500 : 0,
            packetsIn: isActive ? Math.floor(Math.random() * 400_000) : 0,
            packetsOut: isActive ? Math.floor(Math.random() * 300_000) : 0
        };
    });
function useNetworkData({ intervalMs = 1500, enableLive = true } = {}) {
    const [interfaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(MOCK_INTERFACES);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(()=>generateInitialStats(MOCK_INTERFACES));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enableLive) return;
        const timer = setInterval(()=>{
            setStats((prev)=>prev.map((s)=>{
                    const iface = interfaces.find((i)=>i.pcapName === s.pcapName);
                    const isActive = iface?.flags?.includes("UP") && iface?.flags?.includes("RUNNING");
                    if (!isActive) return s;
                    const recvSpeed = Math.max(0, s.recvSpeedKbps + (Math.random() * 400 - 200));
                    const sentSpeed = Math.max(0, s.sentSpeedKbps + (Math.random() * 200 - 100));
                    return {
                        ...s,
                        recvSpeedKbps: recvSpeed,
                        sentSpeedKbps: sentSpeed,
                        bytesRecv: s.bytesRecv + Math.floor(recvSpeed * intervalMs / 8000),
                        bytesSent: s.bytesSent + Math.floor(sentSpeed * intervalMs / 8000),
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
        interfaces,
        stats
    };
}
}),
"[project]/src/pages/Interfaces/model/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/pages/Interfaces/ui/Page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "Page-module-scss-module__0_GzWG__box",
  "box__item": "Page-module-scss-module__0_GzWG__box__item",
  "interfaces-page": "Page-module-scss-module__0_GzWG__interfaces-page",
});
}),
"[project]/src/pages/Interfaces/ui/Page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterfacesPage",
    ()=>InterfacesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/ui/Page.module.scss [app-rsc] (css module)");
;
;
;
function InterfacesPage() {
    const { interfaces, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useNetworkData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["interfaces-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["box"],
            children: interfaces.map((item)=>{
                const stat = stats.find((s)=>s.pcapName === item.pcapName);
                const isActive = item.flags?.includes("UP") && item.flags?.includes("RUNNING");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["box__item"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        children: item.localName || item.description || "Интерфейс"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/pages/Interfaces/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/ui/Page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/app/interfaces/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/ui/Page.tsx [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InterfacesPage"];
}),
"[project]/app/interfaces/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/interfaces/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4fb96265._.js.map