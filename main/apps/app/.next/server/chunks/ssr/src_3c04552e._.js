module.exports = [
"[project]/src/pages/Trafic/model/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/shared/config/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_HOSTNAME",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_HOSTNAME"],
    "APP_PORT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_PORT"],
    "CraftworkFontVarName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CraftworkFontVarName"],
    "DOMAIN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOMAIN"],
    "HOSTNAME",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOSTNAME"],
    "InterFontVarName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InterFontVarName"],
    "MODE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODE"],
    "createSocket",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$socket$2d$io$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSocket"],
    "pack_ui",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pack_ui"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$ui$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/ui.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$socket$2d$io$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/socket-io.ts [app-ssr] (ecmascript)");
}),
"[project]/src/pages/Trafic/model/useTraffic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDateTime",
    ()=>formatDateTime,
    "useTraffic",
    ()=>useTraffic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function formatDateTime(ts) {
    return new Date(ts).toLocaleString();
}
function useTraffic() {
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [packets, setPackets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.settings);
    const asyncGetTrafic = async ()=>{
        console.log(settings);
        if (!settings.pcapName || !settings.userName) return;
        try {
            const data = {
                username: settings.userName,
                roomname: "roomName",
                inface: settings.pcapName,
                payloadLimit: 10
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/scan/get-packets", data);
            if (response.status === 200) {
                let data = response.data.data;
                if (typeof data === "string") {
                    setPackets((prev)=>[
                            ...prev,
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_PACKETS"]
                        ]);
                } else {
                    setPackets((prev)=>[
                            ...prev,
                            ...data
                        ]);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interPack = setInterval(()=>asyncGetTrafic(), 3000);
        return ()=>{
            clearInterval(interPack);
        };
    }, []);
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
  "empty": "Page-module-scss-module__TfiqGa__empty",
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
        children: packets.length ? packets.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
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
                                lineNumber: 15,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head__block"],
                                children: item.network.protocol
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["head__block"],
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$model$2f$useTraffic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(item.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["body"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["line"]
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 22,
                                columnNumber: 15
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
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.ethernet.srcMAC
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "MAC получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.ethernet.dstMAC
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Версия IP:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.network.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "IP отправителя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.network.srcIP
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "IP получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.network.dstIP
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Протокол сети:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.network.protocol
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Транспортный протокол:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.transport.proto
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Порт отправителя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.transport.srcPort
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Порт получателя:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.transport.dstPort
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["info"],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "Полезная нагрузка:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.application.join(" ")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this)
                ]
            }, `${idKey}-${index}`, true, {
                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Trafic$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["empty"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: "Пока ничего не найдено"
            }, void 0, false, {
                fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
                lineNumber: 60,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Trafic/ui/Page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_3c04552e._.js.map