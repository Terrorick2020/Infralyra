(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/shared/utils/localStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    } catch (e) {
        return null;
    }
}
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function removeItem(key) {
    localStorage.removeItem(key);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout/Default/lib/localStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLSSync",
    ()=>useLSSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/localStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useLSSync(syncData, trackableData) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const prevDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(trackableData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLSSync.useEffect": ()=>{
            syncData.forEach({
                "useLSSync.useEffect": (param)=>{
                    let { namespace, items } = param;
                    const nsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(namespace) || {};
                    const newNsData = {
                        ...nsData
                    };
                    items.forEach({
                        "useLSSync.useEffect": (param, index)=>{
                            let { key, value, reducer } = param;
                            const prevValue = prevDataRef.current[index];
                            if (prevValue !== value) {
                                newNsData[key] = value;
                                dispatch(reducer(value));
                            }
                        }
                    }["useLSSync.useEffect"]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(namespace, newNsData);
                }
            }["useLSSync.useEffect"]);
            prevDataRef.current = trackableData;
        }
    }["useLSSync.useEffect"], [
        syncData,
        trackableData,
        dispatch
    ]);
}
_s(useLSSync, "kk06q2hY3cgoPBMhVHqd9JX5Nvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout/Default/lib/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/localStore.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/slices/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/slices/settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setTheme",
    ()=>setTheme,
    "settingsSliceName",
    ()=>settingsSliceName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/types.ts [app-client] (ecmascript)");
;
;
const initialState = {
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EThemes"].Dark
};
const settingsSliceName = 'settings';
const settingsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/slices/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/types.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout/Default/model/syncLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDLSyncLogic",
    ()=>useDLSyncLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/lib/localStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/slices/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/slices/settings.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useDLSyncLogic() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useDLSyncLogic.useSelector[theme]": (state)=>state.settings.theme
    }["useDLSyncLogic.useSelector[theme]"]);
    const initSyncData = [
        {
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsSliceName"],
            items: [
                {
                    key: 'theme',
                    value: theme,
                    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$slices$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTheme"]
                }
            ]
        }
    ];
    const trackableData = [
        theme
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLSSync"])(initSyncData, trackableData);
}
_s(useDLSyncLogic, "ui/Tirflf3ExAJ+foLvZBtpGfOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$lib$2f$localStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLSSync"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout/Default/model/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/syncLogic.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout/Default/ui/Sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DLSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout/Default/model/syncLogic.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function DLSync() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDLSyncLogic"])();
    return null;
}
_s(DLSync, "J+oYU/5fbMXsa1czBiVi+OCIsgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2f$Default$2f$model$2f$syncLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDLSyncLogic"]
    ];
});
_c = DLSync;
var _c;
__turbopack_context__.k.register(_c, "DLSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7dfd02f6._.js.map