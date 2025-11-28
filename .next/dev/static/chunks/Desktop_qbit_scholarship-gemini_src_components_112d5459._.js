(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/qbit/scholarship-gemini/src/components/ui/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Magnetic",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Magnetic = ({ children })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Magnetic.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const mouseMove = {
                "Magnetic.useEffect.mouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = el.getBoundingClientRect();
                    const x = clientX - (left + width / 2);
                    const y = clientY - (top + height / 2);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 1,
                        ease: "elastic.out(1, 0.3)"
                    });
                }
            }["Magnetic.useEffect.mouseMove"];
            const mouseLeave = {
                "Magnetic.useEffect.mouseLeave": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "elastic.out(1, 0.3)"
                    });
                }
            }["Magnetic.useEffect.mouseLeave"];
            el.addEventListener("mousemove", mouseMove);
            el.addEventListener("mouseleave", mouseLeave);
            return ({
                "Magnetic.useEffect": ()=>{
                    el.removeEventListener("mousemove", mouseMove);
                    el.removeEventListener("mouseleave", mouseLeave);
                }
            })["Magnetic.useEffect"];
        }
    }["Magnetic.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "inline-block",
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/ui/Magnetic.tsx",
        lineNumber: 35,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Magnetic, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/CaretDown.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Scramble Text Component
const ScrambleText = ({ text, className })=>{
    _s();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const handleEnter = ()=>{
        let iteration = 0;
        const interval = setInterval(()=>{
            setDisplay((prev)=>text.split("").map((letter, index)=>{
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(""));
            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplay(text);
            }
            iteration += 1 / 3;
        }, 30);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onMouseEnter: handleEnter,
        className: `cursor-pointer inline-block ${className}`,
        children: display
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrambleText, "GPz2s4Dp3g2mQnjKBVG9a4Xswwk=");
_c = ScrambleText;
const studyMenu = {
    disciplines: [
        "Agriculture & Forestry",
        "Applied Sciences & Professions",
        "Arts, Design & Architecture",
        "Business & Management",
        "Computer Science & IT",
        "Education & Training",
        "Engineering & Technology",
        "Environmental Studies & Earth Sciences",
        "Hospitality, Leisure & Sports",
        "Humanities",
        "Journalism & Media",
        "Law",
        "Medicine & Health",
        "Natural Sciences & Mathematics",
        "Social Sciences"
    ],
    countries: [
        "Netherlands",
        "France",
        "Germany",
        "Norway",
        "United Kingdom",
        "Canada",
        "United States",
        "Australia"
    ]
};
const Navbar = ()=>{
    _s1();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (navRef.current) {
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "Navbar.useEffect.ctx": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(navRef.current, {
                            yPercent: -100,
                            autoAlpha: 0
                        }, {
                            yPercent: 0,
                            autoAlpha: 1,
                            duration: 1.2,
                            ease: "power4.out",
                            delay: 0.1,
                            clearProps: "transform"
                        });
                    }
                }["Navbar.useEffect.ctx"], navRef);
                return ({
                    "Navbar.useEffect": ()=>ctx.revert()
                })["Navbar.useEffect"];
            }
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: `fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 border-b ${scrolled ? "bg-white/90 backdrop-blur-md border-slate-200 py-4" : "bg-transparent border-transparent py-6"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 cursor-pointer group z-50 cursor-hover",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold tracking-tighter text-slate-900",
                        children: [
                            "GlobalStudyRoad",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 group-hover:text-blue-600 transition-colors",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center space-x-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrambleText, {
                                text: "Smart Match"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors py-2 cursor-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrambleText, {
                                            text: "Study"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretDown"], {
                                            size: 14,
                                            className: "group-hover:rotate-180 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-[800px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-slate-200 shadow-xl p-8 grid grid-cols-12 gap-8 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-8 border-r border-slate-100 pr-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-6",
                                                        children: "View Disciplines"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-x-8 gap-y-3",
                                                        children: studyMenu.disciplines.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all block",
                                                                children: item
                                                            }, item, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-4 pl-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-6",
                                                        children: "Most Popular Countries"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: studyMenu.countries.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all block",
                                                                children: item
                                                            }, item, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group cursor-hover",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrambleText, {
                                text: "Services"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6 z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth?mode=login",
                                className: "hidden md:block text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors cursor-hover px-4 py-2",
                                children: "Log In"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth?mode=signup",
                                className: "bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 transition-all cursor-hover rounded-sm",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Navbar.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Navbar, "tdEmeHb+7SejOUM+3HFGx16X6G4=");
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrambleText");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Footer = ()=>{
    _s();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Footer.useEffect.ctx": ()=>{
                    // 1. Parallax for the Giant Text
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(bgText.current, {
                        y: -100
                    }, {
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: true
                        }
                    });
                    // 2. Content Stagger Entrance
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".footer-col", {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["Footer.useEffect.ctx"], container);
            return ({
                "Footer.useEffect": ()=>ctx.revert()
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: container,
        className: "relative w-full",
        style: {
            zIndex: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: "relative w-full bg-slate-950 text-white flex flex-col justify-between px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 min-h-screen md:min-h-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: bgText,
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 select-none overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[8vw] sm:text-[10vw] md:text-[12vw] lg:text-[14vw] font-black tracking-tighter leading-none text-white whitespace-nowrap break-words",
                        children: "GLOBAL STUDY ROAD"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 pt-8 sm:pt-10 md:pt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:col-span-2 lg:col-span-4 footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl sm:text-2xl font-bold tracking-tighter block mb-6 sm:mb-8",
                                    children: [
                                        "GlobalStudyRoad",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500",
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                            lineNumber: 72,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6 sm:mb-8",
                                    children: "An intelligent infrastructure for global education. We leverage advanced data processing to connect talent with opportunity."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-xs",
                                    children: "Trusted by 10,000+ students"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 70,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-slate-200 mb-4 sm:mb-6 text-xs uppercase tracking-wider",
                                    children: "Programs"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 sm:space-y-3 text-slate-400",
                                    children: [
                                        'Undergraduate',
                                        'Master\'s',
                                        'PhD'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "hover:text-white cursor-pointer transition-colors text-xs sm:text-sm",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 82,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 80,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-slate-200 mb-4 sm:mb-6 text-xs uppercase tracking-wider",
                                    children: "Destinations"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 sm:space-y-3 text-slate-400",
                                    children: [
                                        'United States',
                                        'United Kingdom',
                                        'Canada',
                                        'Australia',
                                        'Germany',
                                        'Switzerland'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "hover:text-white cursor-pointer transition-colors text-xs sm:text-sm",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 89,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-slate-200 mb-4 sm:mb-6 text-xs uppercase tracking-wider",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 sm:space-y-3 text-slate-400",
                                    children: [
                                        'Help Center',
                                        'Contact Us'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "hover:text-white cursor-pointer transition-colors text-xs sm:text-sm",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-slate-200 mb-4 sm:mb-6 text-xs uppercase tracking-wider",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 sm:space-y-3 text-slate-400",
                                    children: [
                                        'About Us',
                                        'Our Mission',
                                        'Privacy Policy',
                                        'Terms of Service'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "hover:text-white cursor-pointer transition-colors text-xs sm:text-sm",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 border-t border-slate-900 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 footer-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-500 font-mono text-center sm:text-left",
                            children: "© 2025 GlobalStudyRoad. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 118,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-500 font-mono justify-center sm:justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                            lineNumber: 121,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
                    lineNumber: 117,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/layout/Footer.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "uVu4YU3TVVKL9xu96WD/mGnTXPQ=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowDownRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/ArrowDownRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ScrambleBadge = ({ text })=>{
    _s();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const chars = "10101010";
    const handleEnter = ()=>{
        let iteration = 0;
        const interval = setInterval(()=>{
            setDisplay((prev)=>text.split("").map((letter, index)=>{
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(""));
            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplay(text);
            }
            iteration += 1 / 3;
        }, 30);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onMouseEnter: handleEnter,
        className: "cursor-default",
        children: display
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrambleBadge, "GPz2s4Dp3g2mQnjKBVG9a4Xswwk=");
_c = ScrambleBadge;
const Hero = ()=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    tl.from(".hero-line-inner", {
                        yPercent: 100,
                        duration: 1.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        delay: 0.2
                    });
                    tl.from(imageContainerRef.current, {
                        scale: 0.9,
                        opacity: 0,
                        duration: 2.2,
                        ease: "power2.out"
                    }, "-=1.5");
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
                        yPercent: 20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                    const btn = searchBtnRef.current;
                    if (btn) {
                        btn.addEventListener("mousemove", {
                            "Hero.useEffect.ctx": (e)=>{
                                const rect = btn.getBoundingClientRect();
                                const x = e.clientX - rect.left - rect.width / 2;
                                const y = e.clientY - rect.top - rect.height / 2;
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                    x: x * 0.4,
                                    y: y * 0.4,
                                    duration: 0.6,
                                    ease: "power2.out"
                                });
                            }
                        }["Hero.useEffect.ctx"]);
                        btn.addEventListener("mouseleave", {
                            "Hero.useEffect.ctx": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                    x: 0,
                                    y: 0,
                                    duration: 0.6,
                                    ease: "elastic.out(1, 0.4)"
                                });
                            }
                        }["Hero.useEffect.ctx"]);
                    }
                }
            }["Hero.useEffect.ctx"], containerRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative pt-32 min-h-screen flex flex-col bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 h-full flex-grow pb-12 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 flex flex-col justify-center z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-line-inner flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-slate-500 uppercase tracking-widest",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrambleBadge, {
                                            text: "Admissions 2025 Open"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                            lineNumber: 102,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-4",
                                children: "GATEWAY TO"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                lineNumber: 106,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-line-inner text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8",
                                children: [
                                    "GLOBAL SUCCESS",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                        lineNumber: 107,
                                        columnNumber: 174
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                lineNumber: 107,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-line-inner text-xl text-slate-500 leading-relaxed font-light mb-12",
                                children: "An intelligent platform connecting ambitious students with world-class education."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                lineNumber: 108,
                                columnNumber: 55
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-line-inner flex flex-wrap gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "What do you want to study?",
                                            className: "w-80 px-0 py-4 bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg cursor-hover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                            lineNumber: 112,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            ref: searchBtnRef,
                                            className: "absolute right-0 top-1/2 -translate-y-1/2 text-slate-900 opacity-50 group-hover:opacity-100 transition-opacity transform duration-300 p-2 cursor-hover",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowDownRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDownRight"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                                lineNumber: 113,
                                                columnNumber: 215
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                            lineNumber: 113,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 109,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 relative h-[60vh] lg:h-auto lg:min-h-[800px] flex flex-col justify-end pb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: imageContainerRef,
                        className: "relative w-full h-full overflow-hidden bg-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            ref: imageRef,
                            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=100",
                            alt: "University Architecture",
                            className: "absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                            lineNumber: 120,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Hero.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Hero, "nOZlIiYAxtqCE/7B7AOVeroh2mU=");
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrambleBadge");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection,
    "ComparisonTable",
    ()=>ComparisonTable,
    "FAQ",
    ()=>FAQ,
    "FeatureDeepDive",
    ()=>FeatureDeepDive,
    "ImpactMetrics",
    ()=>ImpactMetrics,
    "StatsDashboard",
    ()=>StatsDashboard,
    "TrustSection",
    ()=>TrustSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Check.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plus$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Plus.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Shield$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Shield.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Lock.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Medal$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Medal.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/ArrowRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FileText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/FileText.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PenNib$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/PenNib.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sparkle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Sparkle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const StatsDashboard = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scholarships: 0,
        funding: 0,
        students: 0,
        success: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatsDashboard.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "StatsDashboard.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current,
                        start: "top 70%",
                        onEnter: {
                            "StatsDashboard.useEffect.ctx": ()=>{
                                const targets = {
                                    scholarships: 0,
                                    funding: 0,
                                    students: 0,
                                    success: 0
                                };
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(targets, {
                                    scholarships: 15000,
                                    funding: 50,
                                    students: 10000,
                                    success: 98,
                                    duration: 4.0,
                                    ease: "power2.out",
                                    onUpdate: {
                                        "StatsDashboard.useEffect.ctx": ()=>{
                                            setCounts({
                                                scholarships: Math.floor(targets.scholarships),
                                                funding: Math.floor(targets.funding),
                                                students: Math.floor(targets.students),
                                                success: Math.floor(targets.success)
                                            });
                                        }
                                    }["StatsDashboard.useEffect.ctx"]
                                });
                            }
                        }["StatsDashboard.useEffect.ctx"],
                        once: true
                    });
                }
            }["StatsDashboard.useEffect.ctx"], sectionRef);
            return ({
                "StatsDashboard.useEffect": ()=>ctx.revert()
            })["StatsDashboard.useEffect"];
        }
    }["StatsDashboard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-24 bg-slate-950 text-white border-y border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-slate-800",
                children: [
                    {
                        label: "Scholarships Available",
                        value: counts.scholarships.toLocaleString(),
                        suffix: "+"
                    },
                    {
                        label: "Funding Unlocked",
                        value: `$${counts.funding}`,
                        suffix: "M+"
                    },
                    {
                        label: "Students Matched",
                        value: counts.students.toLocaleString(),
                        suffix: "+"
                    },
                    {
                        label: "Success Rate",
                        value: counts.success,
                        suffix: "%"
                    }
                ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 lg:px-12 py-8 lg:py-0 text-center lg:text-left group cursor-hover transition-colors duration-500 hover:bg-slate-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl md:text-5xl font-bold font-mono mb-2 group-hover:text-blue-500 transition-colors duration-300",
                                children: [
                                    stat.value,
                                    stat.suffix
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 72,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 75,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 71,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 64,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 63,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StatsDashboard, "ZcYTIvVtxCymZUXUF4BxN1fFLSw=");
_c = StatsDashboard;
// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "" })=>{
    _s1();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (e)=>{
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        className: `relative group border border-slate-200 bg-white overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100",
                style: {
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)`
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100",
                style: {
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.4), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black)',
                    WebkitMaskImage: 'linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'destination-out',
                    padding: '1px'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 111,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SpotlightCard, "MAMAaDT8oTSNqTzyXCTKnOxvYEU=");
_c1 = SpotlightCard;
const FeatureDeepDive = ()=>{
    _s2();
    const resumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const writingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeatureDeepDive.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            // Resume Animation Context
            const resumeCtx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FeatureDeepDive.useEffect.resumeCtx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        repeat: -1,
                        repeatDelay: 2
                    });
                    // Initial State
                    tl.set(".scan-line", {
                        top: "0%",
                        opacity: 0
                    });
                    tl.set(".doc-line", {
                        backgroundColor: "#e2e8f0"
                    });
                    tl.set(".parsed-badge", {
                        scale: 0,
                        opacity: 0
                    });
                    tl.set(".progress-bar-fill", {
                        width: "0%"
                    });
                    // Start Scan
                    tl.to(".scan-line", {
                        opacity: 1,
                        duration: 0.2
                    });
                    // Scan moves down
                    tl.to(".scan-line", {
                        top: "100%",
                        duration: 2.5,
                        ease: "power1.inOut"
                    }, "<");
                    // Stagger lines turning parsed
                    tl.to(".doc-line", {
                        backgroundColor: "#cbd5e1",
                        stagger: 0.15,
                        duration: 0.3
                    }, "<0.2");
                    // Parsed Badge Pop
                    tl.to(".parsed-badge", {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    }, "-=0.5");
                    // Progress Bar
                    tl.to(".progress-bar-fill", {
                        width: "98%",
                        duration: 0.8,
                        ease: "power2.out"
                    }, "-=0.2");
                    // Fade out scanner
                    tl.to(".scan-line", {
                        opacity: 0,
                        duration: 0.2
                    });
                }
            }["FeatureDeepDive.useEffect.resumeCtx"], resumeRef);
            // Writing Animation Context
            const writingCtx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FeatureDeepDive.useEffect.writingCtx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        repeat: -1,
                        repeatDelay: 1.5
                    });
                    // Initial State
                    tl.set(".prompt-text", {
                        width: "0%"
                    });
                    tl.set(".generate-btn", {
                        scale: 1
                    });
                    tl.set(".type-line", {
                        width: "0%",
                        backgroundColor: "#e2e8f0"
                    });
                    tl.set(".optimization-badge", {
                        scale: 0,
                        opacity: 0
                    });
                    // 1. Type Prompt
                    tl.to(".prompt-text", {
                        width: "70%",
                        duration: 0.6,
                        ease: "power2.out"
                    });
                    // 2. Click Generate
                    tl.to(".generate-btn", {
                        scale: 0.9,
                        duration: 0.1,
                        yoyo: true,
                        repeat: 1
                    });
                    // 3. Typing sequence
                    const lines = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".type-line");
                    lines.forEach({
                        "FeatureDeepDive.useEffect.writingCtx": (line)=>{
                            tl.to(line, {
                                width: line.dataset.width,
                                duration: 0.2,
                                ease: "none"
                            });
                        }
                    }["FeatureDeepDive.useEffect.writingCtx"]);
                    // 4. Optimization Highlight
                    tl.to(".type-line", {
                        backgroundColor: "#dbeafe",
                        duration: 0.3,
                        stagger: 0.05
                    });
                    tl.to(".type-line", {
                        backgroundColor: "#e2e8f0",
                        duration: 0.5
                    }, "+=0.2");
                    // 5. Badge Pop
                    tl.to(".optimization-badge", {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    }, "-=0.3");
                }
            }["FeatureDeepDive.useEffect.writingCtx"], writingRef);
            return ({
                "FeatureDeepDive.useEffect": ()=>{
                    resumeCtx.revert();
                    writingCtx.revert();
                }
            })["FeatureDeepDive.useEffect"];
        }
    }["FeatureDeepDive.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-white border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-24 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 font-mono text-xs uppercase tracking-widest mb-4 block",
                            children: "Core Capabilities"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight",
                            children: [
                                "INTELLIGENT ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 236,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                " TOOLKIT"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 233,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotlightCard, {
                            className: "feature-card rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 min-h-[500px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: resumeRef,
                                        className: "relative bg-slate-50 overflow-hidden flex items-center justify-center p-12 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 247,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full max-w-[340px] bg-white shadow-2xl shadow-slate-200/50 rounded-lg p-8 z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-4 w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 bg-slate-100 rounded-full flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2 w-full pt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-2 w-1/2 bg-slate-200 rounded-full doc-line"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                                lineNumber: 255,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-2 w-1/3 bg-slate-100 rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                                lineNumber: 256,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "parsed-badge bg-green-100 text-green-700 px-2 py-1 text-[10px] font-bold rounded-full flex items-center gap-1 uppercase tracking-wider",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                                        weight: "bold"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Parsed"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 mb-8",
                                                        children: [
                                                            [
                                                                ...Array(6)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-2 w-full bg-slate-100 rounded-full doc-line"
                                                                }, i, false, {
                                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2/3 bg-slate-100 rounded-full doc-line"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-full bg-slate-100 rounded-full doc-line"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 42
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-4/5 bg-slate-100 rounded-full doc-line"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 42
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "scan-line absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20 pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 249,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-12 left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-lg shadow-xl p-4 border border-slate-100 z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                                                                children: "Analysis Complete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold text-green-600",
                                                                children: "98% Match"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "progress-bar-fill h-full bg-green-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 282,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feature-text-block p-12 lg:p-20 flex flex-col justify-center order-1 lg:order-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-lg mb-8 shadow-lg shadow-blue-600/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FileText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileText"], {
                                                    size: 24,
                                                    weight: "fill"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 295,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-bold text-slate-900 mb-6 tracking-tight",
                                                children: "Resume Intelligence"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 298,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-500 leading-relaxed mb-8",
                                                children: "Upload your existing resume and let our engine extract key qualifications, identify gaps, and reformat it for global standards in seconds."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 299,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    'ATS-Friendly Parsing',
                                                    'Skill Gap Analysis',
                                                    'Auto-Formatting'
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-3 text-slate-700 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                                    size: 12,
                                                                    weight: "bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 302,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 294,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 243,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 242,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotlightCard, {
                            className: "feature-card rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 min-h-[500px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feature-text-block p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-lg mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PenNib$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PenNib"], {
                                                    size: 24,
                                                    weight: "fill"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-bold text-slate-900 mb-6 tracking-tight",
                                                children: "AI-Assisted Writing"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-500 leading-relaxed mb-8",
                                                children: "Generate compelling, personalized cover letters tailored to specific universities and programs. Stop staring at a blank page."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 325,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    'Tone Adjustment',
                                                    'University-Specific Context',
                                                    'Keyword Optimization'
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-3 text-slate-700 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                                    size: 12,
                                                                    weight: "bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 328,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 320,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: writingRef,
                                        className: "relative bg-slate-50 overflow-hidden flex items-center justify-center p-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 343,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full max-w-[380px] bg-white shadow-xl border border-slate-100 p-8 rounded-xl transform hover:rotate-0 transition-transform duration-700 z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mb-6 border-b border-slate-100 pb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-grow bg-slate-50 rounded-md h-10 p-2 flex items-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-1.5 bg-slate-400 rounded-full prompt-text"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center text-white generate-btn shadow-lg shadow-purple-200 cursor-pointer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sparkle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkle"], {
                                                                    weight: "fill"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "100%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "95%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "98%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line mb-4",
                                                                "data-width": "60%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "100%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "85%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "92%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 bg-slate-200 rounded-full type-line",
                                                                "data-width": "40%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "optimization-badge absolute -right-4 top-10 bg-white border border-purple-100 shadow-xl px-3 py-2 rounded-lg flex items-center gap-2 z-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 rounded-full bg-purple-500 animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-slate-600 uppercase tracking-wide",
                                                                        children: "Tone: Persuasive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                        lineNumber: 373,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 341,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 318,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 317,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 232,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 231,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(FeatureDeepDive, "VeLBhoYeSWH3veIb0M/5qcMt6k4=");
_c2 = FeatureDeepDive;
const ComparisonTable = ()=>{
    _s3();
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonTable.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ComparisonTable.useEffect.ctx": ()=>{
                    // "Drawing" the lines
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".table-border", {
                        scaleX: 0,
                        duration: 1.5,
                        stagger: 0.1,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: tableRef.current,
                            start: "top 70%"
                        }
                    });
                    // Fading in content
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".table-content", {
                        y: 20,
                        opacity: 0,
                        duration: 1.0,
                        stagger: 0.05,
                        ease: "power2.out",
                        delay: 0.5,
                        scrollTrigger: {
                            trigger: tableRef.current,
                            start: "top 70%"
                        }
                    });
                }
            }["ComparisonTable.useEffect.ctx"], tableRef);
            return ({
                "ComparisonTable.useEffect": ()=>ctx.revert()
            })["ComparisonTable.useEffect"];
        }
    }["ComparisonTable.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: tableRef,
        className: "py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-20 max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-slate-900 tracking-tight mb-4",
                            children: "Why choose intelligence?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 427,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-lg",
                            children: "Traditional consultancy is manual, opaque, and expensive. We are automated, transparent, and precise."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 428,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 426,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 pb-6 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-4 text-sm font-bold text-slate-400 uppercase tracking-widest table-content",
                                    children: "Metric"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 436,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-4 text-center text-xl font-bold text-slate-900 table-content flex items-center justify-center gap-2",
                                    children: [
                                        "GlobalStudyRoad",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] uppercase rounded-full tracking-wider",
                                            children: "AI Powered"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 439,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 437,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-4 text-center text-xl font-bold text-slate-400 table-content",
                                    children: "Traditional Agents"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 441,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-full h-px bg-slate-200 origin-left table-border"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 442,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 435,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0",
                            children: [
                                {
                                    feat: "Matching Accuracy",
                                    gsr: "98% Precision",
                                    trad: "~65% Intuition"
                                },
                                {
                                    feat: "Processing Speed",
                                    gsr: "Milliseconds",
                                    trad: "3-5 Weeks"
                                },
                                {
                                    feat: "Bias Factor",
                                    gsr: "Zero (Data-Driven)",
                                    trad: "High (Commission)"
                                },
                                {
                                    feat: "24/7 Availability",
                                    gsr: "Full Access",
                                    trad: "Office Hours"
                                },
                                {
                                    feat: "Cost Structure",
                                    gsr: "Freemium / Low Cost",
                                    trad: "High Retainer Fees"
                                }
                            ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-12 py-6 relative group hover:bg-slate-50 transition-colors duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-4 font-medium text-slate-700 group-hover:text-slate-900 transition-colors pl-4 table-content flex items-center",
                                            children: row.feat
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 455,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-4 text-center font-bold text-blue-600 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-lg transition-colors py-2 table-content",
                                            children: row.gsr
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-4 text-center text-slate-400 group-hover:text-slate-500 transition-colors py-2 table-content",
                                            children: row.trad
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 461,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 w-full h-px bg-slate-100 origin-left table-border group-hover:bg-slate-200 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 464,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 454,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 446,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 433,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 425,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 424,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ComparisonTable, "bWlprO2XjxYAJuwJTuIAPnZ59fk=");
_c3 = ComparisonTable;
const ImpactMetrics = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-12",
                                children: [
                                    "REAL LIVES ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 482,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " TRANSFORMED"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 481,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12",
                                children: [
                                    {
                                        quote: "I saved $25,000 in tuition fees thanks to the Smart Match algorithm finding a waiver I missed.",
                                        author: "Ananya S.",
                                        metric: "$25k Saved"
                                    },
                                    {
                                        quote: "The resume parser pointed out gaps that would have caused a rejection. Now I'm at Imperial.",
                                        author: "David K.",
                                        metric: "Accepted"
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-l-4 border-blue-600 pl-8 py-2 group cursor-hover hover:border-l-8 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-slate-600 italic mb-6 group-hover:text-slate-900 transition-colors",
                                                children: [
                                                    '"',
                                                    item.quote,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 491,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-slate-900",
                                                                children: item.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-500",
                                                                children: "Verified Student"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 46
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-900 text-white px-4 py-1 text-sm font-bold group-hover:bg-blue-600 transition-colors",
                                                        children: item.metric
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 492,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 490,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 485,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 480,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative cursor-hover group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
                                        className: "rounded-none w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700",
                                        alt: "Student"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 508,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80",
                                        className: "rounded-none w-full h-64 object-cover mt-12 filter grayscale group-hover:grayscale-0 transition-all duration-700 delay-100",
                                        alt: "Student"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 509,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 507,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-slate-200 shadow-2xl text-center hover:scale-110 transition-transform duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-bold text-blue-600 mb-2",
                                        children: "10k+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 512,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-mono uppercase tracking-widest text-slate-500",
                                        children: "Lives Changed"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 513,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 511,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 506,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 479,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 478,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 477,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = ImpactMetrics;
const FAQ = ()=>{
    _s4();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const answerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const faqs = [
        {
            q: "How does Smart Match work?",
            a: "Our proprietary algorithm analyzes 50+ data points from your profile (grades, test scores, research interest) and cross-references them with our database of 15,000+ opportunities to find high-probability matches."
        },
        {
            q: "What data do you need?",
            a: "We start with basics (GPA, Target Country). For deep analysis, we process your resume/CV and academic transcripts securely."
        },
        {
            q: "Is the platform free?",
            a: "Yes, the basic Smart Match and Profile Analysis are completely free. We offer premium tiers for advanced AI editing tools and dedicated human consultation."
        },
        {
            q: "How accurate are the recommendations?",
            a: "Our AI maintains a 98% accuracy rate in eligibility matching, meaning you won't waste time applying to programs you don't qualify for."
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FAQ.useEffect": ()=>{
            faqs.forEach({
                "FAQ.useEffect": (_, i)=>{
                    const el = answerRefs.current[i];
                    if (!el) return;
                    if (openIndex === i) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                            height: "auto",
                            duration: 0.6,
                            ease: "expo.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el.querySelector('.answer-inner'), {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            delay: 0.1,
                            ease: "power2.out"
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                            height: 0,
                            duration: 0.5,
                            ease: "power3.inOut"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el.querySelector('.answer-inner'), {
                            y: -10,
                            opacity: 0,
                            duration: 0.3
                        });
                    }
                }
            }["FAQ.useEffect"]);
        }
    }["FAQ.useEffect"], [
        openIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FAQ.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FAQ.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".faq-item", {
                        y: 50,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 70%"
                        }
                    });
                }
            }["FAQ.useEffect.ctx"], containerRef);
            return ({
                "FAQ.useEffect": ()=>ctx.revert()
            })["FAQ.useEffect"];
        }
    }["FAQ.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 bg-slate-50 border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6",
                                    children: [
                                        "COMMON ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 575,
                                            columnNumber: 131
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " QUERIES"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 575,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-lg leading-relaxed",
                                    children: "Everything you need to know about the platform, billing, and our technology."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 576,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors cursor-hover",
                                        children: [
                                            "Visit Help Center ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 579,
                                                columnNumber: 55
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 578,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 577,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 574,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 573,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-0 border-t border-slate-200",
                        children: faqs.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-item border-b border-slate-200 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(openIndex === i ? null : i),
                                        className: "w-full flex items-start justify-between py-8 text-left focus:outline-none cursor-hover",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-sm text-slate-300 pt-1",
                                                        children: [
                                                            "0",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xl md:text-2xl font-bold transition-colors duration-300 ${openIndex === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-slate-600'}`,
                                                        children: item.q
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 592,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mt-1 text-slate-400 transition-transform duration-500 ease-out ${openIndex === i ? 'rotate-45 text-blue-600' : 'group-hover:text-slate-900'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plus$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plus"], {
                                                    size: 24,
                                                    weight: "bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 598,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 588,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            answerRefs.current[i] = el;
                                        },
                                        className: "h-0 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "answer-inner pl-12 pr-6 pb-8 opacity-0 translate-y-[-10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-500 leading-relaxed max-w-2xl",
                                                children: item.a
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                                lineNumber: 608,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                            lineNumber: 607,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                        lineNumber: 603,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 587,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 585,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 572,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 571,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 570,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(FAQ, "Z+0wwOYdncPfXAoOaMSl69vclfQ=");
_c5 = FAQ;
const TrustSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-white border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-mono text-slate-400 uppercase tracking-widest mb-12",
                    children: "Trusted by Global Institutions & Secure by Design"
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 625,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Shield$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 627,
                                    columnNumber: 145
                                }, ("TURBOPACK compile-time value", void 0)),
                                " GDPR Compliant"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 627,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lock"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 628,
                                    columnNumber: 145
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ISO 27001"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 628,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xl font-bold text-slate-900 cursor-hover hover:scale-110 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Medal$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Medal"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                    lineNumber: 629,
                                    columnNumber: 145
                                }, ("TURBOPACK compile-time value", void 0)),
                                " EdTech Excellence"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                            lineNumber: 629,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                    lineNumber: 626,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
            lineNumber: 624,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 623,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = TrustSection;
const CTASection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-40 relative overflow-hidden bg-fixed bg-center bg-cover bg-slate-950",
        style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-950/80 z-0"
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 645,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white drop-shadow-2xl",
                        children: [
                            "READY TO ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 649,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)),
                            " LAUNCH?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 648,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-slate-200 mb-12 max-w-2xl mx-auto drop-shadow-md",
                        children: "Join the platform that is redefining global admissions. Start your free Smart Match assessment today."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 651,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth?mode=signup",
                                className: "bg-white text-slate-900 px-10 py-5 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors cursor-hover shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300",
                                children: "Start Smart Match Quiz"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 656,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-hover hover:-translate-y-1 transform duration-300 backdrop-blur-sm",
                                children: "Explore All Scholarships"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                                lineNumber: 659,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                        lineNumber: 655,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
                lineNumber: 647,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/NewSections.tsx",
        lineNumber: 639,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = CTASection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "StatsDashboard");
__turbopack_context__.k.register(_c1, "SpotlightCard");
__turbopack_context__.k.register(_c2, "FeatureDeepDive");
__turbopack_context__.k.register(_c3, "ComparisonTable");
__turbopack_context__.k.register(_c4, "ImpactMetrics");
__turbopack_context__.k.register(_c5, "FAQ");
__turbopack_context__.k.register(_c6, "TrustSection");
__turbopack_context__.k.register(_c7, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIFeatures",
    ()=>AIFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Target$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Target.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Robot.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Scan$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Scan.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sparkle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Sparkle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Brain$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Brain.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ChartBar$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/ChartBar.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lightning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Lightning.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FileText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/FileText.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PenNib$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/PenNib.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$RocketLaunch$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/RocketLaunch.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/ArrowRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const aiFeatures = [
    {
        id: 1,
        title: "Smart Match System",
        desc: "Adaptive algorithm filtering scholarships by profile data.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Target$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Target"]
    },
    {
        id: 2,
        title: "Qubit AI Chatbot",
        desc: "Natural language assistant for instant scholarship queries.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot"]
    },
    {
        id: 3,
        title: "Resume Parsing",
        desc: "Extraction of candidate profiles from PDF/DOCX files.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Scan$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scan"]
    },
    {
        id: 4,
        title: "Summary Generator",
        desc: "Context-aware professional summary generation.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sparkle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkle"]
    },
    {
        id: 5,
        title: "Skill Suggestion",
        desc: "Intelligent skill gap analysis and recommendation.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Brain$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain"]
    },
    {
        id: 6,
        title: "Compatibility Report",
        desc: "Detailed scoring with gap analysis and priorities.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ChartBar$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartBar"]
    },
    {
        id: 7,
        title: "Smart Feeds",
        desc: "Personalized feeds prioritizing tuition waivers.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lightning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightning"]
    },
    {
        id: 8,
        title: "Resume Builder",
        desc: "Professional templates with one-click AI customization.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FileText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileText"]
    },
    {
        id: 9,
        title: "Cover Letter AI",
        desc: "Drafts compelling letters using extracted profile data.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PenNib$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PenNib"]
    },
    {
        id: 10,
        title: "Application Portal",
        desc: "Unified tracking system for all global applications.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$RocketLaunch$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RocketLaunch"]
    }
];
const AIFeatures = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIFeatures.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AIFeatures.useEffect.ctx": ()=>{
                    const track = trackRef.current;
                    const container = containerRef.current;
                    if (!track || !container) return;
                    const totalWidth = track.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    const xTranslation = -(totalWidth - viewportWidth + 100);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(track, {
                        x: xTranslation,
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: {
                                "AIFeatures.useEffect.ctx": ()=>`+=${totalWidth}`
                            }["AIFeatures.useEffect.ctx"],
                            scrub: 1.5,
                            pin: true,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }["AIFeatures.useEffect.ctx"], containerRef);
            return ({
                "AIFeatures.useEffect": ()=>ctx.revert()
            })["AIFeatures.useEffect"];
        }
    }["AIFeatures.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "bg-slate-50 relative overflow-hidden h-screen flex flex-col justify-center border-y border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 md:px-12 mb-16 w-full flex-shrink-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-mono text-slate-500 mb-4 uppercase tracking-widest",
                                    children: "Qubit Dynamics Engine"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight",
                                    children: [
                                        "INTELLIGENCE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 65,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " MODULES"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:text-right pb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm font-mono",
                                children: [
                                    "SCROLL TO EXPLORE THE ECOSYSTEM ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block ml-2",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                        lineNumber: 70,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                lineNumber: 69,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pl-6 md:pl-[max(3rem,calc(50vw-42rem))] overflow-visible z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: trackRef,
                    className: "flex gap-0 w-max border-l border-slate-200",
                    children: aiFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative w-[300px] md:w-[400px] h-[400px] bg-white border-r border-y border-slate-200 p-8 flex flex-col justify-between hover:bg-slate-900 transition-colors duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-slate-50 border border-slate-100 group-hover:bg-slate-800 group-hover:border-slate-700 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                className: "text-slate-900 group-hover:text-white transition-colors",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs text-slate-300 group-hover:text-slate-600",
                                            children: feature.id.toString().padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors",
                                            children: feature.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-8 h-[1px] bg-slate-200 group-hover:bg-slate-600 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 106,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                            size: 14,
                                            className: "text-slate-400 group-hover:text-white transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                            lineNumber: 107,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, feature.id, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/AIFeatures.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AIFeatures, "FTeY2OLyVzszm0o58pUkyFAeHL4=");
_c = AIFeatures;
var _c;
__turbopack_context__.k.register(_c, "AIFeatures");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Workflow",
    ()=>Workflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Check.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$DownloadSimple$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/DownloadSimple.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TerminalWindow$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/TerminalWindow.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/Circuitry.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Workflow = ()=>{
    _s();
    const [completedSteps, setCompletedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const workflowSteps = [
        {
            id: 1,
            label: "PROFILE QUIZ",
            desc: "Gathering academic & preference data.",
            duration: 3000
        },
        {
            id: 2,
            label: "AI ANALYSIS",
            desc: "Cross-referencing 15,000+ databases.",
            duration: 2500
        },
        {
            id: 3,
            label: "SMART MATCHING",
            desc: "Identifying high-probability opportunities.",
            duration: 3000
        },
        {
            id: 4,
            label: "DOC PREPARATION",
            desc: "Generating optimized resumes & essays.",
            duration: 3500
        },
        {
            id: 5,
            label: "APPLICATION",
            desc: "Direct submission & tracking.",
            duration: 2000
        },
        {
            id: 6,
            label: "ADMISSION",
            desc: "Offer received & verified.",
            duration: 1500
        }
    ];
    // Initialize ScrollTrigger to start animation when in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Workflow.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Workflow.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current,
                        start: "top 60%",
                        onEnter: {
                            "Workflow.useEffect.ctx": ()=>setIsActive(true)
                        }["Workflow.useEffect.ctx"],
                        once: true // Only trigger start once
                    });
                }
            }["Workflow.useEffect.ctx"], sectionRef);
            return ({
                "Workflow.useEffect": ()=>ctx.revert()
            })["Workflow.useEffect"];
        }
    }["Workflow.useEffect"], []);
    // Timer Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Workflow.useEffect": ()=>{
            if (!isActive) return;
            if (currentStep < workflowSteps.length) {
                const stepTimer = setTimeout({
                    "Workflow.useEffect.stepTimer": ()=>{
                        setCompletedSteps({
                            "Workflow.useEffect.stepTimer": (prev)=>[
                                    ...prev,
                                    workflowSteps[currentStep].id
                                ]
                        }["Workflow.useEffect.stepTimer"]);
                        setCurrentStep({
                            "Workflow.useEffect.stepTimer": (prev)=>prev + 1
                        }["Workflow.useEffect.stepTimer"]);
                    }
                }["Workflow.useEffect.stepTimer"], workflowSteps[currentStep].duration);
                return ({
                    "Workflow.useEffect": ()=>clearTimeout(stepTimer)
                })["Workflow.useEffect"];
            } else {
                const loopTimer = setTimeout({
                    "Workflow.useEffect.loopTimer": ()=>{
                        setCompletedSteps([]);
                        setCurrentStep(0);
                    }
                }["Workflow.useEffect.loopTimer"], 5000);
                return ({
                    "Workflow.useEffect": ()=>clearTimeout(loopTimer)
                })["Workflow.useEffect"];
            }
        }
    }["Workflow.useEffect"], [
        currentStep,
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-100 p-2 rounded-lg text-blue-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circuitry"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 71,
                                                columnNumber: 26
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                            lineNumber: 70,
                                            columnNumber: 22
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-blue-600 uppercase tracking-widest",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                            lineNumber: 73,
                                            columnNumber: 22
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                    lineNumber: 69,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6",
                                    children: [
                                        "INTELLIGENT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " WORKFLOW"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                    lineNumber: 75,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 max-w-md leading-relaxed",
                                    children: "From your first quiz to your final acceptance letter, our neural engine optimizes every step of the journey."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                    lineNumber: 78,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-end items-start lg:items-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full transition-colors duration-500 ${isActive ? 'bg-green-50 border-green-200' : 'bg-white'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-slate-600 uppercase",
                                        children: isActive ? 'Pipeline Active' : 'System Idle'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-slate-200 p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 min-h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-0 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-8 text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TerminalWindow$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalWindow"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 98,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs uppercase",
                                                children: "System Log"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 99,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-xs space-y-4 flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-400 pb-4 border-b border-slate-200",
                                                children: [
                                                    "> INITIALIZING SESSION... ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 58
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "> CONNECTING TO GLOBAL DB... ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 61
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-600",
                                                        children: "> PIPELINE STARTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 103,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            workflowSteps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `transition-opacity duration-300 ${isActive && idx > currentStep ? 'opacity-0' : isActive ? 'opacity-100' : 'opacity-0'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-300",
                                                                children: [
                                                                    "0",
                                                                    step.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: idx === currentStep && isActive ? 'text-blue-600' : 'text-slate-700',
                                                                        children: [
                                                                            "> ",
                                                                            step.label
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 41
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    idx === currentStep && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 text-slate-400 animate-pulse",
                                                                        children: [
                                                                            "[ ",
                                                                            step.desc,
                                                                            " ]"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    idx < currentStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 text-green-600",
                                                                        children: "[ COMPLETED ]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, step.id, false, {
                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 137,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 space-y-8 min-h-[300px] flex flex-col justify-center",
                                        children: [
                                            !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-slate-400 font-mono text-sm uppercase tracking-widest animate-pulse",
                                                children: "Scroll to activate..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 141,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isActive && workflowSteps.map((step, index)=>{
                                                const isCurrent = currentStep === index;
                                                if (!isCurrent) return null;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 border border-slate-200 bg-white flex items-center justify-center mb-6 shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-2xl font-bold text-slate-900",
                                                                children: [
                                                                    "0",
                                                                    step.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-4xl font-bold text-slate-900 mb-2",
                                                            children: step.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500 text-lg",
                                                            children: step.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 h-1 w-full bg-slate-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-slate-900",
                                                                style: {
                                                                    animation: `progressFill ${step.duration}ms linear forwards`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, step.id, true, {
                                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            isActive && currentStep >= workflowSteps.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 animate-in zoom-in duration-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 mx-auto bg-slate-900 text-white flex items-center justify-center rounded-full mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                            size: 32
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-slate-900 mb-6",
                                                        children: "Process Complete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 mx-auto transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$DownloadSimple$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadSimple"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Download Roadmap"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes progressFill {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes scan {
            0%, 100% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/Workflow.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Workflow, "kUOXPaSC8oDbvEPu2lRWDDDCZdk=");
_c = Workflow;
var _c;
__turbopack_context__.k.register(_c, "Workflow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Destinations",
    ()=>Destinations,
    "ExpertGuidance",
    ()=>ExpertGuidance,
    "Newsletter",
    ()=>Newsletter,
    "TrustedBy",
    ()=>TrustedBy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/next@16.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowUpRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/@phosphor-icons+react@2.1.1_dd4c3d434c7421dc2e70674c4a5049f9/node_modules/@phosphor-icons/react/dist/csr/ArrowUpRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/qbit/scholarship-gemini/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Reusable hook for header reveals
const useSectionReveal = (ref)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSectionReveal.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useSectionReveal.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".reveal-text", {
                        yPercent: 100,
                        duration: 1.5,
                        ease: "power3.out",
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%"
                        }
                    });
                }
            }["useSectionReveal.useEffect.ctx"], ref);
            return ({
                "useSectionReveal.useEffect": ()=>ctx.revert()
            })["useSectionReveal.useEffect"];
        }
    }["useSectionReveal.useEffect"], [
        ref
    ]);
};
_s(useSectionReveal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const Destinations = ()=>{
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useSectionReveal(sectionRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Destinations.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Destinations.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".destination-card", {
                        y: 100,
                        opacity: 0,
                        duration: 1.6,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".destination-grid",
                            start: "top 75%"
                        }
                    });
                    const cards = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".destination-card");
                    cards.forEach({
                        "Destinations.useEffect.ctx": (card)=>{
                            const img = card.querySelector("img");
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(img, {
                                scale: 1.15,
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: 1.5
                                }
                            });
                        }
                    }["Destinations.useEffect.ctx"]);
                }
            }["Destinations.useEffect.ctx"], sectionRef);
            return ({
                "Destinations.useEffect": ()=>ctx.revert()
            })["Destinations.useEffect"];
        }
    }["Destinations.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-32 bg-slate-50 border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "reveal-text text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none",
                                children: [
                                    "GLOBAL ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                        lineNumber: 74,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " CAMPUSES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "reveal-text block text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 hover:pb-2 transition-all",
                                children: "View All Locations"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "destination-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200 bg-white",
                    children: [
                        {
                            country: "United States",
                            img: "https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNhfGVufDB8fDB8fHww"
                        },
                        {
                            country: "United Kingdom",
                            img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
                        },
                        {
                            country: "Canada",
                            img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80"
                        },
                        {
                            country: "Australia",
                            img: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fHww"
                        },
                        {
                            country: "Germany",
                            img: "https://plus.unsplash.com/premium_photo-1661962435210-e6cdbb2cbeb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D"
                        },
                        {
                            country: "Japan",
                            img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D"
                        }
                    ].map((dest, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "destination-card group relative h-[450px] border-r border-b border-slate-200 overflow-hidden cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: dest.img,
                                        alt: dest.country,
                                        className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                        lineNumber: 95,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 101,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-6 left-6 z-10 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mix-blend-difference transform group-hover:translate-x-2 transition-transform duration-500",
                                        children: dest.country
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 103,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white text-slate-900 p-4 rounded-full shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$1_dd4c3d434c7421dc2e70674c4a5049f9$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowUpRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                            lineNumber: 109,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 93,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
            lineNumber: 70,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Destinations, "HVY0r1RXp53//m2y5mq3znvVuiY=", false, function() {
    return [
        useSectionReveal
    ];
});
_c = Destinations;
const ExpertGuidance = ()=>{
    _s2();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertGuidance.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ExpertGuidance.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".guidance-item", {
                        x: -50,
                        opacity: 0,
                        duration: 1.5,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".guidance-image-container", {
                        opacity: 0,
                        y: 50,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imageRef.current, {
                        yPercent: -15,
                        scale: 1.3
                    }, {
                        yPercent: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0
                        }
                    });
                }
            }["ExpertGuidance.useEffect.ctx"], sectionRef);
            return ({
                "ExpertGuidance.useEffect": ()=>ctx.revert()
            })["ExpertGuidance.useEffect"];
        }
    }["ExpertGuidance.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-32 bg-slate-900 text-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1 bg-white mb-8"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 173,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "guidance-item text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9]",
                                children: [
                                    "EXPERT ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                        lineNumber: 176,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " CONSULTATION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 174,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "guidance-item text-slate-400 text-xl leading-relaxed mb-12 max-w-lg",
                            children: "We don't just use algorithms. We employ industry leaders to validate every step of your journey."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 179,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                "Guaranteed Transparency",
                                "24hr Expert Response",
                                "Certified Documentation"
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "guidance-item flex items-center gap-4 py-4 border-b border-slate-800 group hover:border-white transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-slate-500 group-hover:text-white",
                                            children: [
                                                "0",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                            lineNumber: 186,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-medium group-hover:translate-x-2 transition-transform",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                            lineNumber: 187,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 185,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 183,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "guidance-item bg-white text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors",
                                children: "Schedule Consultation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                lineNumber: 193,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 192,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 172,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full min-h-[500px] overflow-hidden rounded-lg guidance-image-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-slate-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                ref: imageRef,
                                src: "https://plus.unsplash.com/premium_photo-1669704098858-8cd103f4ac2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FyYWh8ZW58MHx8MHx8fDA%3D",
                                alt: "Consultant",
                                className: "w-full h-full object-cover opacity-60 mix-blend-overlay will-change-transform"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                lineNumber: 201,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 200,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 p-8 w-full border-t border-white/10 bg-slate-900/50 backdrop-blur-sm z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-bold text-lg",
                                    children: "Dr. Sarah Mitchell"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 209,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-slate-400 text-sm uppercase tracking-wider mt-1",
                                    children: "Lead Strategist"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                                    lineNumber: 210,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 208,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 199,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
            lineNumber: 171,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
        lineNumber: 170,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ExpertGuidance, "BCAzgYgAlqDYu3HREF5rGnzz1oA=");
_c1 = ExpertGuidance;
const TrustedBy = ()=>{
    _s3();
    const row1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrustedBy.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TrustedBy.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(row1.current, {
                        xPercent: -50,
                        repeat: -1,
                        duration: 60,
                        ease: "linear"
                    });
                }
            }["TrustedBy.useEffect.ctx"]);
            return ({
                "TrustedBy.useEffect": ()=>ctx.revert()
            })["TrustedBy.useEffect"];
        }
    }["TrustedBy.useEffect"], []);
    const universities = [
        "HARVARD",
        "MIT",
        "OXFORD",
        "CAMBRIDGE",
        "STANFORD",
        "YALE",
        "IMPERIAL",
        "ETH ZURICH"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-white border-y border-slate-200 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-[100vw] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: row1,
                className: "flex gap-24 w-max items-center whitespace-nowrap px-8",
                children: [
                    ...universities,
                    ...universities,
                    ...universities
                ].map((uni, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl md:text-7xl font-bold text-slate-100 select-none hover:text-slate-900 transition-colors duration-500 cursor-default",
                        children: uni
                    }, i, false, {
                        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                        lineNumber: 243,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                lineNumber: 241,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
            lineNumber: 240,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
        lineNumber: 239,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(TrustedBy, "UIf4c0hasRtwJ+a3WMgDoosZ6tw=");
_c2 = TrustedBy;
const Newsletter = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-slate-900 mb-6 tracking-tight",
                    children: "Stay updated."
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 258,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 mb-10",
                    children: "Receive the latest intelligence on global admissions directly."
                }, void 0, false, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 259,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex flex-col sm:flex-row gap-4 relative",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Email address",
                            className: "flex-1 px-6 py-4 bg-white border border-slate-200 focus:outline-none focus:border-slate-900 font-medium transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 264,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$qbit$2f$scholarship$2d$gemini$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95",
                            children: "Subscribe"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                            lineNumber: 269,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
                    lineNumber: 263,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
            lineNumber: 257,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/qbit/scholarship-gemini/src/components/sections/ContentSections.tsx",
        lineNumber: 256,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Newsletter;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Destinations");
__turbopack_context__.k.register(_c1, "ExpertGuidance");
__turbopack_context__.k.register(_c2, "TrustedBy");
__turbopack_context__.k.register(_c3, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_qbit_scholarship-gemini_src_components_112d5459._.js.map