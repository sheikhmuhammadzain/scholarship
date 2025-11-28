module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/ui/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
const CustomCursor = ()=>{
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cursor = cursorRef.current;
        if (!cursor) return;
        // Center cursor initially to prevent jump
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cursor, {
            xPercent: -50,
            yPercent: -50
        });
        const moveCursor = (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out"
            });
        };
        const hoverScale = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                scale: 3,
                backgroundColor: "white",
                mixBlendMode: "difference",
                duration: 0.5,
                ease: "power2.out"
            });
        };
        const hoverReset = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor, {
                scale: 1,
                backgroundColor: "#3b82f6",
                mixBlendMode: "normal",
                duration: 0.5,
                ease: "power2.out"
            });
        };
        window.addEventListener("mousemove", moveCursor);
        // Attach hover listeners to interactive elements
        const handleMouseOver = (e)=>{
            const target = e.target;
            if (target.closest('a, button, input, .cursor-hover')) {
                hoverScale();
            } else {
                hoverReset();
            }
        };
        window.addEventListener("mouseover", handleMouseOver);
        return ()=>{
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden md:block"
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/ui/CustomCursor.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e60f7677._.js.map