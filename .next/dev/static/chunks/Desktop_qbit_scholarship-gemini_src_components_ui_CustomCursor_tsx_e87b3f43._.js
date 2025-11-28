(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/qbit/scholarship-gemini/src/components/ui/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CustomCursor = ()=>{
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const cursor = cursorRef.current;
            if (!cursor) return;
            // Center cursor initially to prevent jump
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cursor, {
                xPercent: -50,
                yPercent: -50
            });
            const moveCursor = {
                "CustomCursor.useEffect.moveCursor": (e)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                }
            }["CustomCursor.useEffect.moveCursor"];
            const hoverScale = {
                "CustomCursor.useEffect.hoverScale": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                        scale: 3,
                        backgroundColor: "white",
                        mixBlendMode: "difference",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }["CustomCursor.useEffect.hoverScale"];
            const hoverReset = {
                "CustomCursor.useEffect.hoverReset": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                        scale: 1,
                        backgroundColor: "#3b82f6",
                        mixBlendMode: "normal",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }["CustomCursor.useEffect.hoverReset"];
            window.addEventListener("mousemove", moveCursor);
            // Attach hover listeners to interactive elements
            const handleMouseOver = {
                "CustomCursor.useEffect.handleMouseOver": (e)=>{
                    const target = e.target;
                    if (target.closest('a, button, input, .cursor-hover')) {
                        hoverScale();
                    } else {
                        hoverReset();
                    }
                }
            }["CustomCursor.useEffect.handleMouseOver"];
            window.addEventListener("mouseover", handleMouseOver);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", moveCursor);
                    window.removeEventListener("mouseover", handleMouseOver);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden md:block"
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/ui/CustomCursor.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomCursor, "BAOXNtFTrLv46f15Gc0vVLC8KO4=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_qbit_scholarship-gemini_src_components_ui_CustomCursor_tsx_e87b3f43._.js.map