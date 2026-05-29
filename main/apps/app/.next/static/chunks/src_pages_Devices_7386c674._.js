(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pages/Devices/model/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Devices/model/useDevices.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDevices",
    ()=>useDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/ui.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useDevices() {
    _s();
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const asyncSetDevices = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/scan/get-devices");
            if (response.status === 200) {
                const data = response.data;
                const res = !data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevUi"])() : data.data;
                setDevices((prev)=>{
                    const combined = [
                        ...prev,
                        ...res
                    ];
                    return Array.from(new Map(combined.map((device)=>[
                            device.device.mac,
                            device
                        ])).values());
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDevices.useEffect": ()=>{
            const interSetDev = setInterval({
                "useDevices.useEffect.interSetDev": ()=>asyncSetDevices()
            }["useDevices.useEffect.interSetDev"], 5000);
            return ({
                "useDevices.useEffect": ()=>{
                    clearInterval(interSetDev);
                }
            })["useDevices.useEffect"];
        }
    }["useDevices.useEffect"], []);
    return {
        idKey,
        devices
    };
}
_s(useDevices, "E6EeeBrHTZKzh2HyRnZfrH/PnZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Devices/model/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Devices/ui/Page.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Page-module-scss-module__QDGgUq__body",
  "body__item": "Page-module-scss-module__QDGgUq__body__item",
  "devices-page": "Page-module-scss-module__QDGgUq__devices-page",
  "empty": "Page-module-scss-module__QDGgUq__empty",
  "section": "Page-module-scss-module__QDGgUq__section",
});
}),
"[project]/src/pages/Devices/ui/Page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevicesPage",
    ()=>DevicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/ui/Page.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DevicesPage() {
    _s();
    const { idKey, devices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevices"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["devices-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["body"],
            children: devices.length ? devices.map((item, index)=>{
                const { device, interface: iface, net } = item;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["body__item"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: [
                                "Хост: ",
                                device.hostname
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 19,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Основная информация"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.ip
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "MAC:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.mac
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Статус:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.alive ? "Online" : "Offline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "OS:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.os
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "TTL:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.osTtl
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Метод определения:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.osMethod
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 20,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Сетевой интерфейс"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Интерфейс:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        iface.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Описание:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        iface.description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Flags:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        iface.flags
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 43,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 55,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Сервисы"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this),
                                device.services.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["services"],
                                    children: device.services.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["service"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Порт:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        service.port
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Протокол:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        service.protocol
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Продукт:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        service.product
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Версия:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        service.version
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Banner:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        service.banner
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, "".concat(service.port, "-").concat(idx), true, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Сервисы отсутствуют"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 56,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Дополнительно"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IoT:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.iot || "Не определено"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SNMP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.snmp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "mDNS:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.mdns
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SSDP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.ssdp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Web Stack:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        device.webStack
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "RAW Network"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IP bytes:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        Array.from(net.IP).join(".")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mask:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        Array.from(net.Mask).join(".")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, this)
                    ]
                }, "".concat(idKey, "-").concat(index), true, {
                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                    lineNumber: 17,
                    columnNumber: 15
                }, this);
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["empty"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    children: "Пока ничего не найдено"
                }, void 0, false, {
                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                    lineNumber: 121,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                lineNumber: 120,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Devices/ui/Page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(DevicesPage, "S21mvK0LHvj84htUF+tFGfRfwU0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevices"]
    ];
});
_c = DevicesPage;
var _c;
__turbopack_context__.k.register(_c, "DevicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_pages_Devices_7386c674._.js.map