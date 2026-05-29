(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pages/Interfaces/model/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Interfaces/model/useNetworkData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNetworkData",
    ()=>useNetworkData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useNetworkData() {
    _s();
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [interfaces, setInterfaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getActivities = async (interfaces)=>{
        if (!interfaces.length) return;
        try {
            const respose = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/scan/get-activity");
            if (respose.status === 200) {
                const data = respose.data.data;
                const result = interfaces.map((item)=>{
                    var _item_flags;
                    const findStat = data.find((innItem)=>innItem.pcapName === item.pcapName);
                    const isActive = (_item_flags = item.flags) === null || _item_flags === void 0 ? void 0 : _item_flags.includes("up");
                    const baseSent = isActive ? Math.floor(Math.random() * 5) : 0;
                    const baseRecv = isActive ? Math.floor(Math.random() * 10) : 0;
                    return {
                        pcapName: item.pcapName,
                        bytesSent: (findStat === null || findStat === void 0 ? void 0 : findStat.bytesSent) || baseSent,
                        bytesRecv: (findStat === null || findStat === void 0 ? void 0 : findStat.bytesRecv) || baseRecv,
                        sentSpeedKbps: (findStat === null || findStat === void 0 ? void 0 : findStat.sentSpeedKbps) || 0,
                        recvSpeedKbps: (findStat === null || findStat === void 0 ? void 0 : findStat.recvSpeedKbps) || 0,
                        packetsIn: (findStat === null || findStat === void 0 ? void 0 : findStat.packetsIn) || Math.floor(Math.random() * 2),
                        packetsOut: (findStat === null || findStat === void 0 ? void 0 : findStat.packetsOut) || Math.floor(Math.random() * 5)
                    };
                });
                setStats(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getInterfaces = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/scan/get-interfaces");
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
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                intervalRef.current = setInterval(()=>getActivities(result), 1000);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onToClick = (pcapName)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPcapName"])(pcapName));
        router.replace("/trafic?pcapName=".concat(pcapName));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNetworkData.useEffect": ()=>{
            getInterfaces();
            return ({
                "useNetworkData.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
            })["useNetworkData.useEffect"];
        }
    }["useNetworkData.useEffect"], []);
    return {
        idKey,
        interfaces,
        stats,
        onToClick
    };
}
_s(useNetworkData, "ckmbgFeiPiep7oWTD3pd3gZLrGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Interfaces/model/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Interfaces/ui/Page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "Page-module-scss-module__0_GzWG__box",
  "box__item": "Page-module-scss-module__0_GzWG__box__item",
  "interfaces-page": "Page-module-scss-module__0_GzWG__interfaces-page",
});
}),
"[project]/src/pages/Interfaces/ui/Page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterfacesPage",
    ()=>InterfacesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/model/useNetworkData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Interfaces/ui/Page.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InterfacesPage() {
    _s();
    const { idKey, interfaces, onToClick, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["interfaces-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["box"],
            children: interfaces.length ? interfaces.map((item, index)=>{
                var _item_flags, _item_ips, _item_ips1;
                const stat = stats.find((s)=>s.pcapName === item.pcapName);
                var _item_flags_includes;
                const isActive = (_item_flags_includes = (_item_flags = item.flags) === null || _item_flags === void 0 ? void 0 : _item_flags.includes("up")) !== null && _item_flags_includes !== void 0 ? _item_flags_includes : false;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["box__item"],
                    onClick: ()=>onToClick(item.pcapName),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "IP:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this),
                                " ",
                                ((_item_ips = item.ips) === null || _item_ips === void 0 ? void 0 : _item_ips.length) ? item.ips.map((ip)=>ip.ip).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Маска:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, this),
                                " ",
                                ((_item_ips1 = item.ips) === null || _item_ips1 === void 0 ? void 0 : _item_ips1.length) ? item.ips.map((ip)=>ip.netmask).join(", ") : "Не назначен"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                    children: "Статистика:"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 19
                                }, this),
                                " ↓",
                                (stat === null || stat === void 0 ? void 0 : stat.bytesRecv) || 0,
                                " Байт/с ↑",
                                (stat === null || stat === void 0 ? void 0 : stat.bytesSent) || 0,
                                " Байт/с"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this)
                    ]
                }, "".concat(idKey, "-").concat(index), true, {
                    fileName: "[project]/src/pages/Interfaces/ui/Page.tsx",
                    lineNumber: 18,
                    columnNumber: 15
                }, this);
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
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
_s(InterfacesPage, "rqxgNgSBLJ8D+xUUrdENg5IkAj4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Interfaces$2f$model$2f$useNetworkData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkData"]
    ];
});
_c = InterfacesPage;
var _c;
__turbopack_context__.k.register(_c, "InterfacesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_pages_Interfaces_80687a65._.js.map