module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/shared/store/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERootActionType",
    ()=>ERootActionType
]);
var ERootActionType = /*#__PURE__*/ function(ERootActionType) {
    ERootActionType["Set"] = "Set";
    ERootActionType["Reset"] = "Reset";
    return ERootActionType;
}({});
}),
"[project]/src/shared/store/reselector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectSettings",
    ()=>selectSettings
]);
const selectSettings = (state)=>state.settings;
}),
"[project]/src/shared/store/slices/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EThemes",
    ()=>EThemes
]);
var EThemes = /*#__PURE__*/ function(EThemes) {
    EThemes["Dark"] = "dark";
    EThemes["Light"] = "light";
    return EThemes;
}({});
}),
"[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setPcapName",
    ()=>setPcapName,
    "setTheme",
    ()=>setTheme,
    "setUserName",
    ()=>setUserName,
    "settingsSliceName",
    ()=>settingsSliceName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/types.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EThemes"].Dark,
    pcapName: undefined,
    userName: undefined
};
const settingsSliceName = 'settings';
const settingsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: settingsSliceName,
    initialState,
    reducers: {
        setTheme: (state, action)=>{
            state.theme = action.payload;
        },
        setPcapName: (state, action)=>{
            state.pcapName = action.payload;
        },
        setUserName: (state, action)=>{
            state.userName = action.payload;
        }
    },
    extraReducers: (_builder)=>{}
});
const { setTheme, setPcapName, setUserName } = settingsSlice.actions;
;
const __TURBOPACK__default__export__ = settingsSlice.reducer;
}),
"[project]/src/shared/store/slices/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/types.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/shared/store/persist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "persistConfig",
    ()=>persistConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/slices/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-ssr] (ecmascript)");
;
;
const persistConfig = {
    key: 'root',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsSliceName"]
    ]
};
}),
"[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript) <export default as settingsReducer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "settingsReducer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript)");
}),
"[project]/src/shared/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "persistStore",
    ()=>persistStore,
    "rootStore",
    ()=>rootStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-ssr] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-ssr] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$persist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/persist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/slices/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__settingsReducer$3e$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript) <export default as settingsReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/types.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const combineReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    settings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__settingsReducer$3e$__["settingsReducer"]
});
const actionReducer = (state, action)=>{
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERootActionType"].Reset:
            state = undefined;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERootActionType"].Set:
        default:
            state = state;
            break;
    }
    return combineReducer(state, action);
};
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$persist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistConfig"], actionReducer);
const rootStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: persistedReducer,
    middleware: (gDM)=>gDM({
            serializableCheck: false
        })
});
const persistStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(rootStore);
}),
"[project]/src/shared/store/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$reselector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/reselector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/store.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/app/provider/Store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function StoreProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rootStore"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersistGate"], {
            loading: null,
            persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistStore"],
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/provider/Store.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/provider/Store.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/shared/config/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_HOSTNAME",
    ()=>API_HOSTNAME,
    "APP_PORT",
    ()=>APP_PORT,
    "DOMAIN",
    ()=>DOMAIN,
    "HOSTNAME",
    ()=>HOSTNAME,
    "MODE",
    ()=>MODE
]);
const MODE = ("TURBOPACK compile-time value", "test");
const HOSTNAME = ("TURBOPACK compile-time value", "0.0.0.0");
const APP_PORT = ("TURBOPACK compile-time value", "4174");
const DOMAIN = ("TURBOPACK compile-time value", "client");
const API_HOSTNAME = ("TURBOPACK compile-time value", "localhost/api");
}),
"[project]/src/shared/config/ui.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CraftworkFontVarName",
    ()=>CraftworkFontVarName,
    "InterFontVarName",
    ()=>InterFontVarName,
    "dev_ui",
    ()=>dev_ui,
    "getDevUi",
    ()=>getDevUi,
    "getPackUi",
    ()=>getPackUi,
    "pack_ui",
    ()=>pack_ui
]);
const InterFontVarName = '--font-inter';
const CraftworkFontVarName = '--font-craftwork';
const pack_ui = [
    {
        timestamp: 1715001234567,
        ethernet: {
            srcMAC: "00:1A:2B:3C:4D:5E",
            dstMAC: "FF:FF:FF:FF:FF:FF"
        },
        network: {
            version: "IPv4",
            srcIP: "192.168.10.1",
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
            srcIP: "192.168.10.2",
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
            srcIP: "192.168.10.1",
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
            srcIP: "192.168.10.4",
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
            srcIP: "192.168.10.5",
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
            srcIP: "192.168.10.1",
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
            srcIP: "192.168.10.7",
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
            srcIP: "192.168.10.6",
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
const getPackUi = ()=>{
    const min = 1;
    const max = Math.min(3, pack_ui.length);
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = [
        ...pack_ui
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled.slice(0, count);
};
const dev_ui = [
    // 1. Ubuntu PC
    {
        device: {
            ip: "192.168.10.1",
            mac: "00:1A:2B:3C:4D:10",
            alive: true,
            hostname: "personal-computer-01",
            os: "Ubuntu 22.04",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.0",
                    banner: "SSH-2.0-OpenSSH_9.0"
                },
                {
                    port: 631,
                    protocol: "TCP",
                    product: "CUPS",
                    version: "2.4",
                    banner: "IPP Printing"
                }
            ],
            iot: "",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        10
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                10
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 2. Windows laptop
    {
        device: {
            ip: "192.168.10.2",
            mac: "00:1A:2B:3C:4D:11",
            alive: true,
            hostname: "laptop-01",
            os: "Windows 11/10",
            osTtl: 128,
            osMethod: "ICMP Echo",
            services: [
                {
                    port: 445,
                    protocol: "TCP",
                    product: "SMB",
                    version: "3.1.1",
                    banner: "Windows SMB"
                }
            ],
            iot: "",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "IIS"
        },
        interface: {
            name: "wifi0",
            description: "Wi-Fi",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        11
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                11
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 3. Android phone
    {
        device: {
            ip: "192.168.10.3",
            mac: "AA:BB:CC:DD:EE:01",
            alive: true,
            hostname: "mobile-phone-01",
            os: "Android 14",
            osTtl: 64,
            osMethod: "ICMP",
            services: [],
            iot: "mobile",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: ""
        },
        interface: {
            name: "wlan0",
            description: "Wi-Fi",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        20
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                20
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    {
        device: {
            ip: "192.168.10.4",
            mac: "AA:BB:CC:DD:EE:02",
            alive: true,
            hostname: "iot-signal-sensor-01",
            os: "RTOS",
            osTtl: 255,
            osMethod: "ARP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Embedded HTTP",
                    version: "1.0",
                    banner: "IoT Web UI"
                }
            ],
            iot: "sensor",
            snmp: "limited",
            mdns: "enabled",
            ssdp: "disabled",
            webStack: "lighttpd"
        },
        interface: {
            name: "eth0",
            description: "IoT Ethernet",
            flags: 4099,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        30
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                30
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 5. Network printer
    {
        device: {
            ip: "192.168.10.5",
            mac: "DE:AD:BE:EF:00:01",
            alive: true,
            hostname: "printer-01",
            os: "Embedded Linux",
            osTtl: 255,
            osMethod: "SNMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Web UI",
                    version: "2.0",
                    banner: "Printer Admin"
                },
                {
                    port: 9100,
                    protocol: "TCP",
                    product: "JetDirect",
                    version: "1.0",
                    banner: "RAW Printing"
                }
            ],
            iot: "printer",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        40
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                40
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    {
        device: {
            ip: "192.168.10.6",
            mac: "DE:AD:BE:EF:00:02",
            alive: true,
            hostname: "scanner-01",
            os: "Embedded Linux",
            osTtl: 255,
            osMethod: "SNMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Scan Web UI",
                    version: "1.3",
                    banner: "Scanner Admin"
                }
            ],
            iot: "scanner",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "lighttpd"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        41
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                41
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 7. File server
    {
        device: {
            ip: "192.168.10.7",
            mac: "00:AA:BB:CC:DD:50",
            alive: true,
            hostname: "file-server-01",
            os: "Ubuntu Server 22.04",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.0",
                    banner: "SSH"
                },
                {
                    port: 445,
                    protocol: "TCP",
                    product: "Samba",
                    version: "4.15",
                    banner: "SMB File Share"
                },
                {
                    port: 2049,
                    protocol: "TCP",
                    product: "NFS",
                    version: "4",
                    banner: "NFS Share"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        50
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                50
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 8. Web server (Debian)
    {
        device: {
            ip: "192.168.10.8",
            mac: "00:AA:BB:CC:DD:60",
            alive: true,
            hostname: "web-server-01",
            os: "Debian 12",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "nginx",
                    version: "1.24",
                    banner: "HTTP Server"
                },
                {
                    port: 443,
                    protocol: "TCP",
                    product: "nginx",
                    version: "1.24",
                    banner: "HTTPS Server"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: "nginx + node"
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        60
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                60
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 9. Remote access server
    {
        device: {
            ip: "192.168.10.9",
            mac: "00:AA:BB:CC:DD:70",
            alive: true,
            hostname: "remote-access-server-01",
            os: "Debian 12",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.2",
                    banner: "SSH VPN Gateway"
                },
                {
                    port: 1194,
                    protocol: "UDP",
                    product: "OpenVPN",
                    version: "2.6",
                    banner: "VPN Service"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: ""
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        70
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                70
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 10. Gateway / router
    {
        device: {
            ip: "192.168.10.10",
            mac: "00:11:22:33:44:55",
            alive: true,
            hostname: "router",
            os: "RouterOS",
            osTtl: 255,
            osMethod: "ICMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Router UI",
                    version: "1.0",
                    banner: "Admin Panel"
                },
                {
                    port: 53,
                    protocol: "UDP",
                    product: "DNS",
                    version: "1.0",
                    banner: "DNS Resolver"
                }
            ],
            iot: "gateway",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "embedded"
        },
        interface: {
            name: "wan0",
            description: "Router WAN/LAN",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        1
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                1
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    }
];
const getDevUi = ()=>{
    const min = 1;
    const max = Math.min(3, dev_ui.length);
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = [
        ...dev_ui
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled.slice(0, count);
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
console.log(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_HOSTNAME"]);
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `http://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_HOSTNAME"]}`,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
const __TURBOPACK__default__export__ = api;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/shared/config/socket-io.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSocket",
    ()=>createSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/env.ts [app-ssr] (ecmascript)");
;
;
const createSocket = (namespace)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`http://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_HOSTNAME"]?.replace("/api", "")}/socket.io${namespace}`, {
        transports: [
            "websocket",
            "polling"
        ],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        timeout: 1000,
        autoConnect: true,
        forceNew: false
    }); // export const SOCKET_OPTIONS: Partial<ManagerOptions & SocketOptions> = {
 //   path: "/socket.io",
 //   transports: ["websocket"],
 //   reconnection: true,
 //   reconnectionAttempts: 5,
 //   reconnectionDelay: 1000,
 //   timeout: 10000,
 //   autoConnect: false,
 //   forceNew: false,
 // };
 // export const SOCKET_CONFIG = {
 //   url: `http://${API_HOSTNAME?.replace("api", "").replace("/", "")}`,
 //   namespace: "/sniff",
 //   options: SOCKET_OPTIONS,
 // };
 // console.log(SOCKET_CONFIG)
 // let _socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;
 // export const createSocket = (
 //   token?: string,
 //   username?: string,
 // ): Socket<ServerToClientEvents, ClientToServerEvents> => {
 //   return io(`${SOCKET_CONFIG.url}${SOCKET_CONFIG.namespace}`, {
 //     ...SOCKET_CONFIG.options,
 //     auth: token ? { token, username } : undefined,
 //     query: token ? { token, username } : undefined,
 //   });
 // };
 // export const getSocket = (token?: string, username?: string) => {
 //   if (!_socket || !_socket.connected) {
 //     _socket = createSocket(token, username);
 //   }
 //   return _socket;
 // };
 // export const disconnectSocket = () => {
 //   if (_socket) {
 //     _socket.disconnect();
 //     _socket = null;
 //   }
 // };
 // export const emitJoinRoom = (
 //   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
 //   username: string,
 //   roomName: string,
 // ) => {
 //   if (!socket.connected) {
 //     console.warn("⚠️ Socket not connected");
 //     return false;
 //   }
 //   socket.emit("JoinRoom", { username, roomName });
 //   return true;
 // };
 // export const emitGetTraffic = (
 //   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
 //   username: string,
 //   roomName: string,
 //   inface: string,
 //   payloadLimit?: number,
 // ) => {
 //   if (!socket.connected) {
 //     console.warn("⚠️ Socket not connected");
 //     return false;
 //   }
 //   socket.emit("SockMGetTraffic", {
 //     username,
 //     roomName,
 //     inface,
 //     payloadLimit: payloadLimit ?? 1500,
 //   });
 //   return true;
 // };
 // export const emitLeaveRoom = (
 //   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
 //   username: string,
 //   roomName: string,
 // ) => {
 //   if (!socket.connected) {
 //     console.warn("⚠️ Socket not connected");
 //     return false;
 //   }
 //   socket.emit("LeaveRoom", { username, roomName });
 //   return true;
 // };
}),
"[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/ui.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$socket$2d$io$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/socket-io.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/app/provider/Mui/models/theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/ui.ts [app-ssr] (ecmascript)");
'use client';
;
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    typography: {
        fontFamily: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InterFontVarName"]})`
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CraftworkFontVarName"]})`,
                    textTransform: 'uppercase'
                }
            }
        }
    }
});
}),
"[project]/src/widgets/MainNav/ui/MainNav.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "MainNav-module-scss-module__taZiCq__active",
  "item": "MainNav-module-scss-module__taZiCq__item",
  "list": "MainNav-module-scss-module__taZiCq__list",
  "logo": "MainNav-module-scss-module__taZiCq__logo",
  "nav": "MainNav-module-scss-module__taZiCq__nav",
  "profile": "MainNav-module-scss-module__taZiCq__profile",
});
}),
"[project]/src/widgets/MainNav/ui/logo.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.38ec7a6b.png");}),
"[project]/src/widgets/MainNav/ui/logo.png.mjs { IMAGE => \"[project]/src/widgets/MainNav/ui/logo.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/MainNav/ui/logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mXOz0vCYBzH8ads89IfElT0g/ofoksUgWHDvFSMSgiJVsEOI6LRGBIVNcZYrD1ZPU03FQ9e/HFQQfTgQPDv8ODt66N4EHzB+8v3+EEMFRxjaQEKTXrTDNNKkrT+id3Iiegurm/dBuaY+dkxFApzXL5QbBHswSH/Djuc3Ds6iDqykjDuZTWB4jei5Kay3ZRhwZlgAn+lw9erBn8/jn/MX8TQpSBKhHjdciYH1UYHKrU2ePgbbEz86Ol5DC2vbWya9n8zrSpg312DKcThV36EUt3vq5qVRNu7obDyYTnS04sb2dsfNfwfnnW8sLSyioZLGZYNTkXPDDUApo9rH+8dCAcAAAAASUVORK5CYII="
};
}),
"[project]/src/widgets/MainNav/ui/profile.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/profile.d51b34ab.svg");}),
"[project]/src/widgets/MainNav/ui/profile.svg.mjs { IMAGE => \"[project]/src/widgets/MainNav/ui/profile.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/MainNav/ui/profile.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 85,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/widgets/MainNav/ui/MainNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainNav",
    ()=>MainNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/widgets/MainNav/ui/MainNav.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/widgets/MainNav/ui/logo.png.mjs { IMAGE => "[project]/src/widgets/MainNav/ui/logo.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/widgets/MainNav/ui/profile.svg.mjs { IMAGE => "[project]/src/widgets/MainNav/ui/profile.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
function MainNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/interfaces",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "logo"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trafic",
                            className: pathname === "/trafic" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                            children: "Трафик интерфейса"
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/devices",
                            className: pathname === "/devices" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                            children: "Устройства сети"
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$MainNav$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profile,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profile",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$widgets$2f$MainNav$2f$ui$2f$profile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "logo"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/MainNav/ui/MainNav.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e174655._.js.map