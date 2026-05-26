module.exports = [
"[project]/src/pages/Interfaces/model/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Interfaces/model/useNetworkData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateInitialStats",
    ()=>generateInitialStats,
    "useNetworkData",
    ()=>useNetworkData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [interfaces, setInterfaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>generateInitialStats(interfaces));
    const getInterfaces = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/scan/get-interfaces");
            if (response.status === 200) {
                const data = response.data.data;
                const result = data.map((dataItem)=>({
                        pcapName: dataItem.pcapName,
                        description: dataItem.description || "Не определено",
                        localName: dataItem.localName || dataItem.pcapName,
                        mac: dataItem.mac || "Не определено",
                        mtu: dataItem.mtu || 0,
                        index: dataItem.index || undefined,
                        flags: dataItem.flags,
                        type: dataItem.type || "Не определено",
                        ips: dataItem.ips
                    }));
                setInterfaces(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onToClick = ()=>{
        router.replace("/trafic");
    };
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
            getInterfaces();
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
        stats,
        onToClick
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
    const { idKey, interfaces, onToClick, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["interfaces-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["box"],
            children: interfaces.length ? interfaces.map((item, index)=>{
                const stat = stats.find((s)=>s.pcapName === item.pcapName);
                const isActive = item.flags?.includes("up") ?? false;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["box__item"],
                    onClick: onToClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Интерфейс:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.localName || item.description || "unknown"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 23,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Описание:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.description
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Тип:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.type
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 30,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "MAC:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.mac || "N/A"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 33,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "IP:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.ips?.length ? item.ips.map((ip)=>ip.ip).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Маска:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, this),
                                " ",
                                item.ips?.length ? item.ips.map((ip)=>ip.netmask).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Статус:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this),
                                " ",
                                isActive ? "Активен" : "Неактивен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 48,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Статистика:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 19
                                }, this),
                                " ↓",
                                stat?.packetsIn || 0,
                                " ↑",
                                stat?.packetsOut || 0
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this)
                    ]
                }, `${idKey}-${index}`, true, {
                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                    lineNumber: 18,
                    columnNumber: 15
                }, this);
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: "Пока ничего не найдено"
            }, void 0, false, {
                fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, this)
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