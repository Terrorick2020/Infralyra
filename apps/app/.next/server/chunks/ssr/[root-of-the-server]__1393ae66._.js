module.exports = [
"[project]/src/shared/ui/ClientOnly.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientOnly",
    ()=>ClientOnly
]);
'use client';
const ClientOnly = ({ children })=>children;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/shared/utils/localStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getItem",
    ()=>getItem,
    "removeItem",
    ()=>removeItem,
    "setItem",
    ()=>setItem
]);
function getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
        return JSON.parse(item);
    } catch  {
        return null;
    }
}
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function removeItem(key) {
    localStorage.removeItem(key);
}
}),
"[project]/src/app/layout/Default/lib/localStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLSSync",
    ()=>useLSSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/localStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
;
;
function useLSSync(syncData, trackableData) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const prevDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(trackableData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        syncData.forEach(({ namespace, items })=>{
            const nsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItem"])(namespace) || {};
            const newNsData = {
                ...nsData
            };
            items.forEach(({ key, value, reducer }, index)=>{
                const prevValue = prevDataRef.current[index];
                if (prevValue !== value) {
                    newNsData[key] = value;
                    dispatch(reducer(value));
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setItem"])(namespace, newNsData);
        });
        prevDataRef.current = trackableData;
    }, [
        syncData,
        trackableData,
        dispatch
    ]);
}
}),
"[project]/src/app/layout/Default/lib/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/localStore.ts [app-ssr] (ecmascript)");
;
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
    "setTheme",
    ()=>setTheme,
    "settingsSliceName",
    ()=>settingsSliceName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/types.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EThemes"].Dark
};
const settingsSliceName = 'settings';
const settingsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: settingsSliceName,
    initialState,
    reducers: {
        setTheme: (state, action)=>{
            state.theme = action.payload;
        }
    },
    extraReducers: (_builder)=>{}
});
const { setTheme } = settingsSlice.actions;
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
"[project]/src/app/layout/Default/model/syncLogic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDLSyncLogic",
    ()=>useDLSyncLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/localStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/slices/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-ssr] (ecmascript)");
;
;
;
function useDLSyncLogic() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.settings.theme);
    const initSyncData = [
        {
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsSliceName"],
            items: [
                {
                    key: 'theme',
                    value: theme,
                    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTheme"]
                }
            ]
        }
    ];
    const trackableData = [
        theme
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLSSync"])(initSyncData, trackableData);
}
}),
"[project]/src/app/layout/Default/model/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/syncLogic.ts [app-ssr] (ecmascript)");
;
}),
"[project]/src/app/layout/Default/ui/Sync.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DLSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/syncLogic.ts [app-ssr] (ecmascript)");
'use client';
;
function DLSync() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDLSyncLogic"])();
    return null;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1393ae66._.js.map