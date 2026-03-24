;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="7c87032f-49bf-ac69-f6f4-da71ac2f8142")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.14_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:scale-105", {
    variants: {
        variant: {
            default: 'bg-white text-black hover:bg-white/90 rounded-full',
            outline: 'border-[0.5px] border-white bg-transparent backdrop-blur-md text-white hover:bg-white/10 rounded-full',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 rounded-full',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-full',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.4_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        onContextMenu: (e)=>e.stopPropagation(),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.14_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/common/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LanguageSwitcher({ className, variant = "ghost", showIcon = false }) {
    _s();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcher.useEffect": ()=>{
            setMounted(true);
        }
    }["LanguageSwitcher.useEffect"], []);
    const toggleLanguage = ()=>{
        const newLang = language === 'pt' ? 'en' : 'pt';
        setLanguage(newLang);
    };
    // Prevent hydration mismatch by rendering a consistent state initially
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: variant,
            size: "sm",
            disabled: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-xs px-2 h-8 rounded-lg transition-all border border-foreground/10 opacity-0", className),
            children: [
                showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                    className: "w-4 h-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/common/language-switcher.tsx",
                    lineNumber: 44,
                    columnNumber: 22
                }, this),
                "🇧🇷 PT"
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/common/language-switcher.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: "sm",
        onClick: toggleLanguage,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-xs px-2 h-8 rounded-lg transition-all border border-foreground/10", variant === "ghost" && "hover:bg-primary/5 hover:text-primary", className),
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                className: "w-4 h-4 mr-2"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/common/language-switcher.tsx",
                lineNumber: 61,
                columnNumber: 20
            }, this),
            language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/common/language-switcher.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "TrZ6qUdHkf0lHu+66rD9bkZNXs4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/config/portal-routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mapeamento centralizado de niche para rotas de cada portal/verticalização.
 * Usado em fluxos genéricos (ex: /s/[slug]/login) para redirecionar corretamente.
 */ __turbopack_context__.s([
    "NICHE_TO_VERTICALIZATION",
    ()=>NICHE_TO_VERTICALIZATION,
    "getLoginUrlForNiche",
    ()=>getLoginUrlForNiche,
    "getPortalRoutes",
    ()=>getPortalRoutes,
    "getVerticalizationSlug",
    ()=>getVerticalizationSlug
]);
const NICHE_TO_VERTICALIZATION = {
    fire_protection: 'fire-protection',
    environmental_compliance: 'agroflowai',
    agroflowai: 'agroflowai',
    dance: 'estudio-de-danca'
};
const ROUTES_BY_SLUG = {
    'fire-protection': {
        baseUrl: '/solutions/fire-protection',
        loginUrl: '/solutions/fire-protection/login',
        registerUrl: '/solutions/fire-protection/register',
        dashboardUrl: '/solutions/fire-protection/dashboard',
        clientUrl: '/solutions/fire-protection/client'
    },
    agroflowai: {
        baseUrl: '/solutions/agroflowai',
        loginUrl: '/solutions/agroflowai/login',
        registerUrl: '/solutions/agroflowai/register',
        dashboardUrl: '/solutions/agroflowai/dashboard',
        clientUrl: '/solutions/agroflowai/client'
    },
    'estudio-de-danca': {
        baseUrl: '/solutions/estudio-de-danca',
        loginUrl: '/solutions/estudio-de-danca/login',
        registerUrl: '/solutions/estudio-de-danca/register',
        dashboardUrl: '/solutions/estudio-de-danca/dashboard',
        clientUrl: '/solutions/estudio-de-danca/student'
    }
};
function getPortalRoutes(niche) {
    const slug = niche && NICHE_TO_VERTICALIZATION[niche] || 'fire-protection';
    return ROUTES_BY_SLUG[slug] ?? ROUTES_BY_SLUG['fire-protection'];
}
function getVerticalizationSlug(niche) {
    return niche && NICHE_TO_VERTICALIZATION[niche] || 'fire-protection';
}
function getLoginUrlForNiche(niche) {
    const slug = niche && NICHE_TO_VERTICALIZATION[niche];
    if (!slug) return '/login';
    return ROUTES_BY_SLUG[slug]?.loginUrl ?? '/login';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/niche-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNicheBranding",
    ()=>getNicheBranding,
    "getNicheIcon",
    ()=>getNicheIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-client] (ecmascript) <export default as PawPrint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/beer.js [app-client] (ecmascript) <export default as Beer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$land$2d$plot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LandPlot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/land-plot.js [app-client] (ecmascript) <export default as LandPlot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fire$2d$extinguisher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireExtinguisher$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/fire-extinguisher.js [app-client] (ecmascript) <export default as FireExtinguisher>");
;
const nicheBranding = {
    fire_protection: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fire$2d$extinguisher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireExtinguisher$3e$__["FireExtinguisher"],
        primaryColor: 'text-white',
        secondaryColor: 'text-red-500',
        name: 'Fire',
        accentName: 'Control',
        gradient: 'from-red-600 to-orange-600',
        accentText: 'text-red-600',
        accentBg: 'bg-red-600',
        accentBgMuted: 'bg-red-600/10',
        accentShadow: 'shadow-red-600/20'
    },
    dance: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        primaryColor: 'text-foreground',
        secondaryColor: 'text-violet-400',
        name: 'Dance',
        accentName: 'Flow',
        gradient: 'from-violet-600 to-violet-500',
        accentText: 'text-violet-400',
        accentBg: 'bg-violet-600',
        accentBgMuted: 'bg-violet-600/10',
        accentShadow: 'shadow-violet-600/20'
    }
};
const getNicheBranding = (niche)=>{
    const b = nicheBranding[niche] || nicheBranding.dance;
    // Fallback accent classes for niches without explicit accent
    return {
        ...b,
        accentText: b.accentText ?? 'text-red-600',
        accentBg: b.accentBg ?? 'bg-red-600',
        accentBgMuted: b.accentBgMuted ?? 'bg-red-600/10',
        accentShadow: b.accentShadow ?? 'shadow-red-600/20'
    };
};
// Mapeamento de ícones para clientes
const clientIcons = {
    pet_shop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    dog_daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    dog_trainer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    pet_hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    clinic_vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"],
    mechanic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
    auto_detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
    car_wash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
    real_estate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    construction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    gym: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    crossfit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    personal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    pilates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    yoga: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    martial_arts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    sports_center: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    dance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    dentist: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    clinic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    beauty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    aesthetics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    barber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    spa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    physio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    nutrition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    podiatry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    tanning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    music_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    language_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    art_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    cooking_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    photography: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    cleaning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    interior_design: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    party_venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    photographer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    coworking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    tattoo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    tech_repair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    law: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    psychology: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    wine_club: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    brewery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    barista: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    confectionery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    consulting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    marketing_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    dev_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    event_planning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    travel_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    insurance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    landscaping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    plumbing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    electrician: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    logistics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    tailoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    tutoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    elderly_care: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    driving_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    swim_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    beach_tennis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    fire_protection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fire$2d$extinguisher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireExtinguisher$3e$__["FireExtinguisher"],
    environmental_compliance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$land$2d$plot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LandPlot$3e$__["LandPlot"],
    default_generic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
};
// Mapeamento de ícones para provedores/profissionais (parcial - nichos sem ícone usam User)
const providerIcons = {
    language_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    tutoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    music_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    gym: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    crossfit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    personal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    sports_center: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    health: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    clinic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    physio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    psychology: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    dentist: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    nutrition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    podiatry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    clinic_vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    mechanic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    electrician: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    plumbing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    construction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    tech_repair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    auto_detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    car_wash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    beauty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    aesthetics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    barber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    tattoo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    spa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    pet_shop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    cooking_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    confectionery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    restaurant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    barista: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    brewery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__["Beer"],
    wine_club: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__["Beer"],
    art_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    interior_design: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    tailoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    landscaping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    photography: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    photographer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    law: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    consulting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    accounting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    marketing_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    insurance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    real_estate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    dance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    pilates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    yoga: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    martial_arts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    dog_daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    dog_trainer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    pet_hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    party_venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    coworking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    event_planning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    travel_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    logistics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    cleaning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    elderly_care: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    driving_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
};
// Mapeamento de ícones para serviços
const serviceIcons = {
    music_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
    barista: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    brewery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__["Beer"],
    wine_club: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__["Beer"],
    language_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    tutoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    dance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    yoga: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    pilates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    martial_arts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    sports_center: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    gym: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    crossfit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    personal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    mechanic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    auto_detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    car_wash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    tech_repair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    plumbing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    electrician: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    cleaning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    landscaping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    consulting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    law: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    psychology: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    nutrition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    physio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    clinic_vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    interior_design: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    dev_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    marketing_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    pet_shop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    beauty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    aesthetics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    barber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    spa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    logistics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    retail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    supermarket: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    photography: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    photographer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    art_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    cooking_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    confectionery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    real_estate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    construction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    event_planning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    travel_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    insurance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
    tailoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"],
    daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
    elderly_care: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    driving_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
    party_venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    coworking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    tattoo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"]
};
// Mapeamento de ícones para estabelecimentos
const establishmentIcons = {
    dance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    dentist: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    gym: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    clinic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    beauty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    aesthetics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    pilates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    yoga: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    barber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    spa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    physio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    nutrition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    podiatry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    tanning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    pet_shop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    dog_daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    dog_trainer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    pet_hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    martial_arts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    crossfit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    swim_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    personal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    beach_tennis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    music_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    language_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    art_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    cooking_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    photography: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    auto_detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    mechanic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    car_wash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    cleaning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    interior_design: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    party_venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    photographer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    coworking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    tattoo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    tech_repair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    law: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    psychology: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    wine_club: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    brewery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    barista: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    confectionery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    real_estate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    consulting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    marketing_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    dev_studio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    event_planning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    travel_agency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    insurance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    landscaping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    plumbing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    electrician: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    construction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    logistics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    tailoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    tutoring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    daycare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    elderly_care: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    driving_school: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    sports_center: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    clinic_vet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    fire_protection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fire$2d$extinguisher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireExtinguisher$3e$__["FireExtinguisher"],
    environmental_compliance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$land$2d$plot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LandPlot$3e$__["LandPlot"],
    default_generic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
};
const getNicheIcon = (niche, type)=>{
    const n = niche;
    switch(type){
        case 'client':
            return clientIcons[n] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"];
        case 'provider':
            return providerIcons[n] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"];
        case 'service':
            return serviceIcons[n] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"];
        case 'establishment':
            return establishmentIcons[n] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-select@2.1.4_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select({ /** false evita conflito de foco/camadas com Dialog e outros modais (Radix Select modal trava interação externa). */ modal = false, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        modal: modal,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[300] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'max-h-[min(300px,var(--radix-select-content-available-height))] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/select.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/dashboard/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-client] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$common$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/common/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$portal$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/portal-routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$niche$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/niche-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Header({ title, children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, vocabulary, studios, studioId, switchStudio, t, niche } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"])();
    const branding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$niche$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNicheBranding"])(niche || 'dance');
    const isDance = branding.secondaryColor === "text-violet-400";
    const isDanceStudio = pathname?.startsWith("/solutions/estudio-de-danca");
    const settingsHref = isDanceStudio ? "/solutions/estudio-de-danca/dashboard/configuracoes" : "/dashboard/configuracoes";
    const profileHref = isDanceStudio ? "/solutions/estudio-de-danca/dashboard/configuracoes" : "/dashboard/configuracoes";
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingNotifications, setLoadingNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const userData = localStorage.getItem("danceflow_user");
            if (userData) {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
                loadNotifications(parsedUser.id, parsedUser.studio_id || parsedUser.studioId);
            }
        }
    }["Header.useEffect"], []);
    const loadNotifications = async (userId, studioId)=>{
        if (!userId || !studioId) return;
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('*').eq('user_id', userId).eq('studio_id', studioId).order('created_at', {
                ascending: false
            }).limit(10);
            if (error) throw error;
            setNotifications(data || []);
        } catch (e) {
            console.error('Erro ao carregar notificações:', e);
        } finally{
            setLoadingNotifications(false);
        }
    };
    const markAsRead = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
                is_read: true
            }).eq('id', id);
            setNotifications(notifications.map((n)=>n.id === id ? {
                    ...n,
                    is_read: true
                } : n));
        } catch (e) {
            console.error('Erro ao marcar como lida:', e);
        }
    };
    const handleLogout = async ()=>{
        const loginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$portal$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoginUrlForNiche"])(niche);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            await fetch('/api/auth/logout', {
                method: 'POST'
            });
        } catch (e) {
            console.error('Erro ao realizar logout:', e);
        }
        localStorage.removeItem("danceflow_user");
        localStorage.removeItem("workflow_pro_active_studio");
        window.location.href = loginUrl;
    };
    const unreadCount = notifications.filter((n)=>!n.is_read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-slate-950 border-b border-white/10 flex items-center justify-between px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-black text-white tracking-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    children,
                    studios.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block ml-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: studioId || "",
                            onValueChange: switchStudio,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "h-9 w-[220px] bg-white/5 border-white/10 hover:bg-white/10 transition-colors text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 truncate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 shrink-0", branding.secondaryColor)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Selecionar Unidade"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    className: "bg-slate-900 border-white/10 text-white",
                                    children: studios.map((studio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: studio.id,
                                            className: isDance ? "hover:bg-violet-600 focus:bg-violet-600" : "hover:bg-red-600 focus:bg-red-600",
                                            children: studio.name
                                        }, studio.id, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden md:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: t.common.searchPlaceholder,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-64 pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500", isDance ? "focus:border-violet-500/50" : "focus:border-red-500/50")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$common$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                        variant: "ghost",
                        showIcon: true,
                        className: "hidden md:flex text-slate-400 hover:text-white hover:bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative text-slate-400 hover:text-white hover:bg-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-white text-xs border-none", isDance ? "bg-violet-600" : "bg-red-600"),
                                            children: unreadCount
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-80 bg-slate-900 border-white/10 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-4 border-b border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm uppercase tracking-widest text-slate-400",
                                                children: t.common.notifications
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 170,
                                                columnNumber: 16
                                            }, this),
                                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-white border-none text-[10px]", isDance ? "bg-violet-600" : "bg-red-600"),
                                                children: [
                                                    unreadCount,
                                                    " ",
                                                    t.common.newNotifications
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 171,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[300px] overflow-y-auto",
                                        children: loadingNotifications ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 text-center text-xs text-slate-500 italic",
                                            children: t.common.loading
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this) : notifications.length > 0 ? notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "flex flex-col items-start gap-1 p-4 cursor-default border-b border-white/5 last:border-0 hover:bg-white/5 focus:bg-white/5",
                                                onClick: ()=>markAsRead(notification.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 w-full",
                                                        children: [
                                                            !notification.is_read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full shrink-0", isDance ? "bg-violet-600" : "bg-red-600")
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-bold truncate ${!notification.is_read ? 'text-white' : 'text-slate-500'}`,
                                                                children: notification.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-auto text-[10px] text-slate-500 whitespace-nowrap",
                                                                children: new Date(notification.created_at).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 leading-relaxed line-clamp-2 pl-4",
                                                        children: notification.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, notification.id, true, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center text-xs text-slate-500",
                                            children: t.common.noNotifications
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 border-t border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-8 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5", isDance ? "text-violet-400 hover:text-violet-300" : "text-red-500 hover:text-red-400"),
                                            children: t.dashboard.viewAll
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 207,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "flex items-center gap-2 px-2 hover:bg-white/5 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform", isDance ? "bg-violet-600 shadow-violet-600/20" : "bg-red-600 shadow-red-600/20"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-white leading-none",
                                                    children: user?.name || t.common.user
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold text-slate-500 uppercase tracking-tighter mt-1",
                                                    children: user?.studioName || vocabulary.establishment
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-56 bg-slate-900 border-white/10 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-xs font-bold uppercase tracking-widest text-slate-500",
                                        children: t.common.myAccount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                        className: "bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>router.push(profileHref),
                                        className: "hover:bg-white/5 focus:bg-white/5 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mr-2", branding.secondaryColor)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            t.common.adminProfile
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>router.push(settingsHref),
                                        className: "hover:bg-white/5 focus:bg-white/5 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mr-2", branding.secondaryColor)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this),
                                            t.common.systemSettings
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                        className: "bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: handleLogout,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer font-bold", isDance ? "text-violet-400 hover:bg-violet-500/10 focus:bg-violet-500/10" : "text-red-500 hover:bg-red-500/10 focus:bg-red-500/10"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            t.sidebar.logout
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/dashboard/header.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/dashboard/header.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/dashboard/header.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(Header, "lrN2xEr+VrDDFNTZilYJC8osuww=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1.4_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, onInteractOutside, onPointerDownOutside: onPointerDownOutsideProp, ...props }) {
    _s();
    const isOutsideFromSelectOrPopover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "DialogContent.useCallback[isOutsideFromSelectOrPopover]": (target)=>{
            const el = target;
            if (!el?.closest) return false;
            return Boolean(el.closest('[data-slot="select-content"]') || el.closest('[data-slot="popover-content"]') || el.closest('[data-radix-select-content]') || el.closest('[data-radix-popper-content-wrapper]') || el.closest('[role="listbox"]') || el.closest('[data-radix-select-viewport]'));
        }
    }["DialogContent.useCallback[isOutsideFromSelectOrPopover]"], []);
    const handleInteractOutside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "DialogContent.useCallback[handleInteractOutside]": (e)=>{
            if (isOutsideFromSelectOrPopover(e.target)) {
                e.preventDefault();
            }
            onInteractOutside?.(e);
        }
    }["DialogContent.useCallback[handleInteractOutside]"], [
        isOutsideFromSelectOrPopover,
        onInteractOutside
    ]);
    const handlePointerDownOutside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "DialogContent.useCallback[handlePointerDownOutside]": (e)=>{
            if (isOutsideFromSelectOrPopover(e.target)) {
                e.preventDefault();
            }
            onPointerDownOutsideProp?.(e);
        }
    }["DialogContent.useCallback[handlePointerDownOutside]"], [
        isOutsideFromSelectOrPopover,
        onPointerDownOutsideProp
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                onInteractOutside: handleInteractOutside,
                onPointerDownOutside: handlePointerDownOutside,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg max-h-[calc(100vh-4rem)] overflow-y-auto', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/dialog.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(DialogContent, "/MoM9m256CmffqwSRD7wilEA+rQ=");
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-label@2.1.1_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Padrão unificado: useToast delega para sonner (lib sonner)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.0_react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(props) {
    const title = props.title ?? '';
    const description = props.description;
    if (props.variant === 'destructive') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(title || 'Erro', {
            description
        });
    } else if (props.variant === 'warning') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(title || 'Atenção', {
            description
        });
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(title || 'Sucesso', {
            description
        });
    }
    return {
        id: genId(),
        dismiss: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(),
        update: ()=>{}
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:ab9df8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4016f4057d5176ced1c78890dc18df645a70cf88a6":"getInventory"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "getInventory",
    ()=>getInventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getInventory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4016f4057d5176ced1c78890dc18df645a70cf88a6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getInventory"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQTJEc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:917e21 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600cc50b64c9a47912773a1ded737263ded3277718":"createProduct"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "createProduct",
    ()=>createProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("600cc50b64c9a47912773a1ded737263ded3277718", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProduct"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQTJGc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:c736d5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f3978fc4c880969bf9c366376071b8b15d69fba5c":"registerTransaction"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "registerTransaction",
    ()=>registerTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var registerTransaction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f3978fc4c880969bf9c366376071b8b15d69fba5c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "registerTransaction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQXNOc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:3f8693 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40aa970573708620973f4b545121f4f8ff0d2646c4":"getRecentTransactions"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "getRecentTransactions",
    ()=>getRecentTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getRecentTransactions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40aa970573708620973f4b545121f4f8ff0d2646c4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRecentTransactions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQTJTc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:8a9ae1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6097436fdc476398d7294ba11eaf61aed93939ed5b":"getProductBySku"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "getProductBySku",
    ()=>getProductBySku
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getProductBySku = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6097436fdc476398d7294ba11eaf61aed93939ed5b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProductBySku"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQXNDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:96f14a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"706f4edabf2a603ef50affeec57f6626c94a4e63f7":"updateProduct"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("706f4edabf2a603ef50affeec57f6626c94a4e63f7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProduct"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQThLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/actions/data:331daf [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e0974d392386f2cb069609e9ec799c4ac30d24f4":"deleteProduct"},"apps/web/lib/actions/inventory.ts",""] */ __turbopack_context__.s([
    "deleteProduct",
    ()=>deleteProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e0974d392386f2cb069609e9ec799c4ac30d24f4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProduct"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcbmltcG9ydCB7IGd1YXJkTW9kdWxlIH0gZnJvbSAnQC9saWIvbW9kdWxlcy1zZXJ2ZXInXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0AvbGliL2xvZ2dlcidcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdWJjYXRlZ29yeT86IHN0cmluZyB8IG51bGxcbiAgcXVhbnRpdHk6IG51bWJlclxuICBtaW5fcXVhbnRpdHk6IG51bWJlclxuICBjb3N0X3ByaWNlOiBudW1iZXJcbiAgc2VsbGluZ19wcmljZTogbnVtYmVyXG4gIHByaWNlX2luX2NyZWRpdHM/OiBudW1iZXJcbiAgcHJpY2VfaW5fY3VycmVuY3k/OiBudW1iZXJcbiAgc2t1Pzogc3RyaW5nXG4gIG5jbT86IHN0cmluZyAvLyBBZGljaW9uYWRvIGNhbXBvIE5DTVxuICBpbWFnZV91cmw/OiBzdHJpbmdcbiAgc3RhdHVzOiAnYWN0aXZlJyB8ICdhcmNoaXZlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnXG4gIHF1YW50aXR5OiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbiAgY3JlYXRlZF9hdDogc3RyaW5nXG4gIHByb2R1Y3Q/OiB7IG5hbWU6IHN0cmluZyB9XG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIHN0dWRlbnRfaWQ/OiBzdHJpbmcgLy8gQWRpY2lvbmFyIGVzdGEgbGluaGFcbn1cblxuLyoqXG4gKiBCdXNjYSBwcm9kdXRvIHBvciBjw7NkaWdvIGRlIGJhcnJhcyAoU0tVKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5U2t1KHNrdTogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLmVxKCdza3UnLCBza3UpXG4gICAgLm1heWJlU2luZ2xlKClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIHBvciBTS1U6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIGRhdGEgYXMgUHJvZHVjdCB8IG51bGxcbn1cblxuLyoqXG4gKiBCdXNjYSBvIGludmVudMOhcmlvIGNvbSBjw6FsY3VsbyBkZSB2YWx1YXRpb24gKHZhbG9yIHRvdGFsIGVtIGVzdG9xdWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZlbnRvcnkoc3R1ZGlvSWQ6IHN0cmluZykge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5lcSgnc3RhdHVzJywgJ2FjdGl2ZScpXG4gICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG5cbiAgLy8gQ8OhbGN1bG8gZGUgS1BJcyBkZSBFc3RvcXVlXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnF1YW50aXR5LCAwKVxuICBjb25zdCB0b3RhbENvc3RWYWx1ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChjdXJyLnF1YW50aXR5ICogY3Vyci5jb3N0X3ByaWNlKSwgMClcbiAgY29uc3QgdG90YWxTYWxlc1ZhbHVlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKGN1cnIucXVhbnRpdHkgKiBjdXJyLnNlbGxpbmdfcHJpY2UpLCAwKVxuICBjb25zdCBwb3RlbnRpYWxQcm9maXQgPSB0b3RhbFNhbGVzVmFsdWUgLSB0b3RhbENvc3RWYWx1ZVxuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IGRhdGEgYXMgUHJvZHVjdFtdLFxuICAgIHN0YXRzOiB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgdG90YWxDb3N0VmFsdWUsXG4gICAgICB0b3RhbFNhbGVzVmFsdWUsXG4gICAgICBwb3RlbnRpYWxQcm9maXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gcHJvZHV0b1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogYW55LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3Qgc2t1ID0gcHJvZHVjdERhdGEuc2t1Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHNrdSA/IGF3YWl0IGdldFByb2R1Y3RCeVNrdShza3UsIHN0dWRpb0lkKSA6IG51bGxcblxuICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgLy8gU2UgbyBwcm9kdXRvIGNvbSBvIG1lc21vIFNLVSBqw6EgZXhpc3RlLCBhdHVhbGl6YSBvIGVzdG9xdWUgZSwgb3BjaW9uYWxtZW50ZSwgb3MgcHJlw6dvc1xuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5ICsgKHByb2R1Y3REYXRhLnF1YW50aXR5IHx8IDApXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KGV4aXN0aW5nUHJvZHVjdC5pZCwge1xuICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgLy8gUG9kZSBhZGljaW9uYXIgbMOzZ2ljYSBwYXJhIHJlY2FsY3VsYXIgY29zdF9wcmljZSBlIHNlbGxpbmdfcHJpY2Ugc2UgbmVjZXNzw6FyaW9cbiAgICAgIC8vIFBvciBleGVtcGxvLCB1bWEgbcOpZGlhIHBvbmRlcmFkYSBvdSBtYW50ZXIgbyBleGlzdGVudGVcbiAgICAgIC8vIFBhcmEgc2ltcGxpY2lkYWRlLCB2YW1vcyBtYW50ZXIgb3MgcHJlw6dvcyBleGlzdGVudGVzIG91IGF0dWFsaXrDoS1sb3Mgc2UgZm9yZW0gcGFzc2Fkb3MgZXhwbGljaXRhbWVudGVcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgfHwgZXhpc3RpbmdQcm9kdWN0LmNvc3RfcHJpY2UsXG4gICAgICBzZWxsaW5nX3ByaWNlOiBwcm9kdWN0RGF0YS5zZWxsaW5nX3ByaWNlIHx8IGV4aXN0aW5nUHJvZHVjdC5zZWxsaW5nX3ByaWNlLFxuICAgIH0sIHN0dWRpb0lkKVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBvIGVzdG9xdWUgYWRpY2lvbmFkb1xuICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICBleGlzdGluZ1Byb2R1Y3QuaWQsXG4gICAgICAnaW4nLFxuICAgICAgcHJvZHVjdERhdGEucXVhbnRpdHkgfHwgMCxcbiAgICAgIGBFbnRyYWRhIGRlIGVzdG9xdWUgdmlhIEVSUCAoU0tVIHVuaWZpY2FkbylgLCBcbiAgICAgIHN0dWRpb0lkLFxuICAgICAgcHJvZHVjdERhdGEuY29zdF9wcmljZSAvLyBVc2FyIG8gY3VzdG8gZG8gbm92byBsb3RlXG4gICAgKVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0XG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbsOjbyBleGlzdGUsIGNyaWEgdW0gbm92byBwcm9kdXRvIChhcGVuYXMgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYSB0YWJlbGEpXG4gICAgY29uc3QgaW5zZXJ0RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICBzdHVkaW9faWQ6IHN0dWRpb0lkLFxuICAgICAgbmFtZTogcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHV0byBzZW0gbm9tZScsXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdERhdGEuY2F0ZWdvcnkgfHwgJ0dlcmFsJyxcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwLFxuICAgICAgbWluX3F1YW50aXR5OiBwcm9kdWN0RGF0YS5taW5fcXVhbnRpdHkgPz8gNSxcbiAgICAgIGNvc3RfcHJpY2U6IHByb2R1Y3REYXRhLmNvc3RfcHJpY2UgPz8gMCxcbiAgICAgIHNlbGxpbmdfcHJpY2U6IHByb2R1Y3REYXRhLnNlbGxpbmdfcHJpY2UgPz8gMCxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgfVxuICAgIGNvbnN0IHNrdVZhbCA9IHByb2R1Y3REYXRhLnNrdT8udG9TdHJpbmc/LigpPy50cmltPy4oKVxuICAgIGlmIChza3VWYWwpIGluc2VydERhdGEuc2t1ID0gc2t1VmFsXG4gICAgLy8gU2Ugc2t1IHZhemlvLCBuw6NvIGVudmlhbW9zIChldml0YSBjb25mbGl0byBVTklRVUUgY29tIG91dHJvcyBwcm9kdXRvcyBzZW0gU0tVKVxuICAgIGlmIChwcm9kdWN0RGF0YS5uY20/LnRyaW0oKSkgaW5zZXJ0RGF0YS5uY20gPSBwcm9kdWN0RGF0YS5uY20udHJpbSgpXG4gICAgaWYgKHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uPy50cmltKCkpIGluc2VydERhdGEuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbi50cmltKClcbiAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VfdXJsPy50cmltKCkpIGluc2VydERhdGEuaW1hZ2VfdXJsID0gcHJvZHVjdERhdGEuaW1hZ2VfdXJsLnRyaW0oKVxuICAgIGNvbnN0IHN1YiA9IHByb2R1Y3REYXRhLnN1YmNhdGVnb3J5Py50b1N0cmluZz8uKCk/LnRyaW0/LigpXG4gICAgaWYgKHN1YikgaW5zZXJ0RGF0YS5zdWJjYXRlZ29yeSA9IHN1YlxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0cycpXG4gICAgICAuaW5zZXJ0KGluc2VydERhdGEpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2NyZWF0ZVByb2R1Y3QgaW5zZXJ0IGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gYW8gc2FsdmFyIHByb2R1dG8gbm8gZXN0b3F1ZScpXG4gICAgfVxuXG4gICAgLy8gUmVnaXN0cmFyIHRyYW5zYcOnw6NvIGRlIGVudHJhZGEgcGFyYSBlc3RvcXVlIGluaWNpYWwgKGFwYXJlY2UgZW0gw5psdGltYXMgTW92aW1lbnRhw6fDtWVzKVxuICAgIGNvbnN0IGluaXRpYWxRdHkgPSBwcm9kdWN0RGF0YS5xdWFudGl0eSA/PyAwXG4gICAgaWYgKGRhdGEgJiYgaW5pdGlhbFF0eSA+IDApIHtcbiAgICAgIGF3YWl0IHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gICAgICAgIGRhdGEuaWQsXG4gICAgICAgICdpbicsXG4gICAgICAgIGluaXRpYWxRdHksXG4gICAgICAgICdFbnRyYWRhIFZpYSBDYWRhc3RybycsXG4gICAgICAgIHN0dWRpb0lkLFxuICAgICAgICBwcm9kdWN0RGF0YS5jb3N0X3ByaWNlXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF0dWFsaXphIHVtIHByb2R1dG8gZXhpc3RlbnRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPFByb2R1Y3Q+LCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUodXBkYXRlcylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5lcSgnc3R1ZGlvX2lkJywgc3R1ZGlvSWQpXG4gICAgLnNlbGVjdCgpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2VzdG9xdWUnKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFJlbW92ZSAoYXJxdWl2YSkgdW0gcHJvZHV0byAtIFNvZnQgRGVsZXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nLCBzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC51cGRhdGUoeyBzdGF0dXM6ICdhcmNoaXZlZCcgfSkgLy8gU29mdCBkZWxldGUgZW0gdmV6IGRlIGV4Y2x1c8OjbyBwZXJtYW5lbnRlXG4gICAgLmVxKCdpZCcsIHByb2R1Y3RJZClcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuXG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcignRXJybyBhbyBhcnF1aXZhciBwcm9kdXRvOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZWdpc3RyYSBtb3ZpbWVudGHDp8OjbyBkZSBlc3RvcXVlIChPIENvcmHDp8OjbyBkbyBTaXN0ZW1hKVxuICogQXR1YWxpemEgbyBzYWxkbyBkbyBwcm9kdXRvIGUgY3JpYSBvIGxvZyBzaW11bHRhbmVhbWVudGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNhY3Rpb24oXG4gIHByb2R1Y3RJZDogc3RyaW5nLCBcbiAgdHlwZTogJ2luJyB8ICdvdXQnIHwgJ3NhbGUnIHwgJ2FkanVzdG1lbnQnLCBcbiAgcXVhbnRpdHk6IG51bWJlciwgXG4gIHJlYXNvbjogc3RyaW5nLFxuICBzdHVkaW9JZDogc3RyaW5nLFxuICB1bml0UHJpY2U/OiBudW1iZXIsIC8vIFByZcOnbyB1bml0w6FyaW8gZXNwZWPDrWZpY28gcGFyYSBlc3RhIHRyYW5zYcOnw6NvIChvcGNpb25hbClcbiAgcGF5bWVudE1ldGhvZD86IHN0cmluZywgLy8gTm92byBwYXLDom1ldHJvXG4gIHN0dWRlbnRJZD86IHN0cmluZyAvLyBOb3ZvIHBhcsOibWV0cm9cbikge1xuICBhd2FpdCBndWFyZE1vZHVsZSgnaW52ZW50b3J5JywgeyBzdHVkaW9JZCB9KVxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gIC8vIDEuIEJ1c2NhciBwcm9kdXRvIGF0dWFsIHBhcmEgdmFsaWRhw6fDtWVzXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ3F1YW50aXR5LCBzZWxsaW5nX3ByaWNlLCBjb3N0X3ByaWNlJylcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIG7Do28gZW5jb250cmFkbycpXG5cbiAgLy8gVmFsaWRhw6fDo28gZGUgRXN0b3F1ZSBOZWdhdGl2b1xuICBpZiAoKHR5cGUgPT09ICdvdXQnIHx8IHR5cGUgPT09ICdzYWxlJykgJiYgcHJvZHVjdC5xdWFudGl0eSA8IHF1YW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFc3RvcXVlIGluc3VmaWNpZW50ZS4gQXR1YWw6ICR7cHJvZHVjdC5xdWFudGl0eX1gKVxuICB9XG5cbiAgLy8gMi4gQ2FsY3VsYXIgbm92byBzYWxkbyBlIEN1c3RvIE3DqWRpbyBQb25kZXJhZG8gKHNlIGZvciBlbnRyYWRhKVxuICBsZXQgbmV3UXVhbnRpdHkgPSB0eXBlID09PSAnaW4nIFxuICAgID8gcHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5IFxuICAgIDogcHJvZHVjdC5xdWFudGl0eSAtIHF1YW50aXR5XG5cbiAgbGV0IG5ld0Nvc3RQcmljZSA9IHByb2R1Y3QuY29zdF9wcmljZVxuXG4gIC8vIEzDs2dpY2EgZGUgQ3VzdG8gTcOpZGlvIFBvbmRlcmFkbzpcbiAgLy8gKFZhbG9yIFRvdGFsIEFudGlnbyArIFZhbG9yIFRvdGFsIE5vdm8pIC8gUXVhbnRpZGFkZSBUb3RhbCBOb3ZhXG4gIGlmICh0eXBlID09PSAnaW4nICYmIHVuaXRQcmljZSAhPT0gdW5kZWZpbmVkICYmIHVuaXRQcmljZSA+IDApIHtcbiAgICBjb25zdCBjdXJyZW50VG90YWxWYWx1ZSA9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LmNvc3RfcHJpY2VcbiAgICBjb25zdCBpbmNvbWluZ1RvdGFsVmFsdWUgPSBxdWFudGl0eSAqIHVuaXRQcmljZVxuICAgIC8vIEV2aXRhIGRpdmlzw6NvIHBvciB6ZXJvIHNlIGZvciBvIHByaW1laXJvIGl0ZW1cbiAgICBpZiAobmV3UXVhbnRpdHkgPiAwKSB7XG4gICAgICBuZXdDb3N0UHJpY2UgPSAoY3VycmVudFRvdGFsVmFsdWUgKyBpbmNvbWluZ1RvdGFsVmFsdWUpIC8gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29zdFByaWNlID0gdW5pdFByaWNlXG4gICAgfVxuICB9XG5cbiAgLy8gMy4gQXR1YWxpemFyIFByb2R1dG9cbiAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RzJylcbiAgICAudXBkYXRlKHsgXG4gICAgICBxdWFudGl0eTogbmV3UXVhbnRpdHksXG4gICAgICBjb3N0X3ByaWNlOiBuZXdDb3N0UHJpY2UgXG4gICAgfSlcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxuXG4gIGlmICh1cGRhdGVFcnJvcikgdGhyb3cgdXBkYXRlRXJyb3JcblxuICAvLyA0LiBDcmlhciBMb2cgZGUgVHJhbnNhw6fDo28gKEF1ZGl0IFRyYWlsKVxuICBjb25zdCB0cmFuc2FjdGlvblByaWNlID0gdW5pdFByaWNlICE9PSB1bmRlZmluZWQgPyB1bml0UHJpY2UgOiAodHlwZSA9PT0gJ2luJyA/IHByb2R1Y3QuY29zdF9wcmljZSA6IHByb2R1Y3Quc2VsbGluZ19wcmljZSlcblxuICBjb25zdCB0eEluc2VydDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgc3R1ZGlvX2lkOiBzdHVkaW9JZCxcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgdHlwZSxcbiAgICBxdWFudGl0eSxcbiAgICB1bml0X3ByaWNlOiB0cmFuc2FjdGlvblByaWNlLFxuICAgIHJlYXNvbixcbiAgICB0b3RhbF92YWx1ZTogcXVhbnRpdHkgKiB0cmFuc2FjdGlvblByaWNlXG4gIH1cbiAgaWYgKHBheW1lbnRNZXRob2QpIHR4SW5zZXJ0LnBheW1lbnRfbWV0aG9kID0gcGF5bWVudE1ldGhvZFxuICBpZiAoc3R1ZGVudElkKSB0eEluc2VydC5zdHVkZW50X2lkID0gc3R1ZGVudElkXG5cbiAgY29uc3QgeyBlcnJvcjogbG9nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2ludmVudG9yeV90cmFuc2FjdGlvbnMnKVxuICAgIC5pbnNlcnQodHhJbnNlcnQpXG5cbiAgaWYgKGxvZ0Vycm9yKSBsb2dnZXIuZXJyb3IoJ0Vycm8gYW8gbG9nYXIgdHJhbnNhw6fDo286JywgbG9nRXJyb3IpXG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZXN0b3F1ZScpXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnVzY2EgaGlzdMOzcmljbyBkZSB0cmFuc2HDp8O1ZXMgcmVjZW50ZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VudFRyYW5zYWN0aW9ucyhzdHVkaW9JZDogc3RyaW5nKSB7XG4gIGF3YWl0IGd1YXJkTW9kdWxlKCdpbnZlbnRvcnknLCB7IHN0dWRpb0lkIH0pXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdpbnZlbnRvcnlfdHJhbnNhY3Rpb25zJylcbiAgICAuc2VsZWN0KCcqLCBwcm9kdWN0OnByb2R1Y3RzKG5hbWUpJylcbiAgICAuZXEoJ3N0dWRpb19pZCcsIHN0dWRpb0lkKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgIC5saW1pdCgxMClcblxuICByZXR1cm4gZGF0YSBhcyBUcmFuc2FjdGlvbltdXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQWtNc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/dashboard/barcode-scanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarcodeScanner",
    ()=>BarcodeScanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/html5-qrcode@2.3.8/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/html5-qrcode@2.3.8/node_modules/html5-qrcode/esm/html5-qrcode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/html5-qrcode@2.3.8/node_modules/html5-qrcode/esm/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BarcodeScanner({ onScanSuccess, isOpen, onClose }) {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarcodeScanner.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "BarcodeScanner.useEffect": ()=>{
                        startScanner();
                    }
                }["BarcodeScanner.useEffect"], 100);
            } else {
                stopScanner();
            }
            return ({
                "BarcodeScanner.useEffect": ()=>{
                    stopScanner();
                }
            })["BarcodeScanner.useEffect"];
        }
    }["BarcodeScanner.useEffect"], [
        isOpen
    ]);
    const startScanner = async ()=>{
        try {
            const element = document.getElementById("reader");
            if (!element) return;
            // Se já existe, garante que para antes de reiniciar
            if (scannerRef.current) {
                await stopScanner();
            }
            const scanner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5Qrcode"]("reader");
            scannerRef.current = scanner;
            await scanner.start({
                facingMode: "environment"
            }, {
                fps: 30,
                qrbox: (viewfinderWidth, viewfinderHeight)=>{
                    const width = Math.min(viewfinderWidth * 0.85, 400);
                    const height = Math.min(viewfinderHeight * 0.3, 150);
                    return {
                        width,
                        height
                    };
                },
                aspectRatio: 1.0,
                formatsToSupport: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].EAN_13,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].EAN_8,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].CODE_128,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].CODE_39,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].UPC_A,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].UPC_E,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].ITF,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$html5$2d$qrcode$40$2$2e$3$2e$8$2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].QR_CODE
                ],
                experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true
                }
            }, (decodedText)=>{
                // Sucesso
                onScanSuccess(decodedText);
                stopScanner();
                onClose();
            }, (errorMessage)=>{
            // Erro de leitura (frame vazio, normal)
            });
            // Tentar forçar o foco contínuo se o navegador suportar
            try {
                const videoElement = element.querySelector('video');
                if (videoElement && videoElement.srcObject) {
                    const stream = videoElement.srcObject;
                    const track = stream.getVideoTracks()[0];
                    const capabilities = track.getCapabilities();
                    if (capabilities.focusMode && capabilities.focusMode.includes('continuous')) {
                        await track.applyConstraints({
                            advanced: [
                                {
                                    focusMode: 'continuous'
                                }
                            ]
                        });
                    }
                }
            } catch (e) {
                console.warn("Não foi possível aplicar foco automático avançado:", e);
            }
        } catch (err) {
            console.error("Erro ao iniciar scanner:", err);
            setError("Não foi possível acessar a câmera. Verifique as permissões.");
        }
    };
    const stopScanner = async ()=>{
        if (scannerRef.current) {
            try {
                if (scannerRef.current.isScanning) {
                    await scannerRef.current.stop();
                }
                scannerRef.current.clear();
            } catch (e) {
                console.error("Erro ao parar scanner:", e);
            }
            scannerRef.current = null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                " Escanear Código de Barras"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Aponte a câmera para o código de barras ou QR Code para escanear."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center min-h-[300px] p-4 bg-muted/20 rounded-lg relative overflow-hidden",
                    children: [
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-red-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "mt-4",
                                    onClick: ()=>{
                                        setError(null);
                                        startScanner();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        " Tentar Novamente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "reader",
                                    className: "w-full h-full rounded-lg overflow-hidden"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[2px] bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse z-10 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground mt-4 text-center px-4",
                            children: [
                                "Aponte a câmera para o código de barras. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 148,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] opacity-70",
                                    children: "Dica: Tente aproximar ou afastar lentamente para ajudar no foco."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/dashboard/barcode-scanner.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(BarcodeScanner, "GPN6UBOPxtJETMnpkeB2qhyt3t8=");
_c = BarcodeScanner;
var _c;
__turbopack_context__.k.register(_c, "BarcodeScanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/constants/global-skus.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOBAL_SKU_LIST",
    ()=>GLOBAL_SKU_LIST,
    "getProductByBarcodeFromCatalog",
    ()=>getProductByBarcodeFromCatalog,
    "searchCatalog",
    ()=>searchCatalog,
    "searchLocalCatalog",
    ()=>searchLocalCatalog
]);
const GLOBAL_SKU_LIST = [
    // ==============================================================================
    // ENERGÉTICOS (RED BULL & MONSTER - VARIAÇÕES COMPLETAS)
    // ==============================================================================
    // Red Bull 250ml
    {
        sku: "9002490200035",
        name: "Red Bull Energy Drink 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490200530",
        name: "Red Bull Sugar Free 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490216920",
        name: "Red Bull Tropical 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490226325",
        name: "Red Bull Melancia 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490234856",
        name: "Red Bull Pitaya 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490240956",
        name: "Red Bull Açaí 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490238687",
        name: "Red Bull Coco e Açaí 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490250269",
        name: "Red Bull Figo e Maçã (Winter) 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490244466",
        name: "Red Bull Morango e Pêssego 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490257572",
        name: "Red Bull Pera e Canela 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "9002490263696",
        name: "Red Bull Curuba e Flor de Sabugueiro 250ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    // Red Bull 355ml
    {
        sku: "9002490206655",
        name: "Red Bull Energy Drink 355ml",
        category: "Bebidas",
        suggested_price: 12.00
    },
    {
        sku: "9002490206693",
        name: "Red Bull Sugar Free 355ml",
        category: "Bebidas",
        suggested_price: 12.00
    },
    {
        sku: "9002490220644",
        name: "Red Bull Tropical 355ml",
        category: "Bebidas",
        suggested_price: 12.00
    },
    {
        sku: "9002490234726",
        name: "Red Bull Melancia 355ml",
        category: "Bebidas",
        suggested_price: 12.00
    },
    // Red Bull 473ml
    {
        sku: "9002490200752",
        name: "Red Bull Energy Drink 473ml",
        category: "Bebidas",
        suggested_price: 15.00
    },
    {
        sku: "9002490200875",
        name: "Red Bull Sugar Free 473ml",
        category: "Bebidas",
        suggested_price: 15.00
    },
    {
        sku: "9002490237703",
        name: "Red Bull Tropical 473ml",
        category: "Bebidas",
        suggested_price: 15.00
    },
    // Monster
    {
        sku: "708470000109",
        name: "Monster Energy Original 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470000123",
        name: "Monster Energy Absolutely Zero 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470243018",
        name: "Monster Energy Mango Loco 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470370011",
        name: "Monster Energy Ultra White 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470322010",
        name: "Monster Energy Ultra Violet 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470358019",
        name: "Monster Energy Pacific Punch 473ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "708470350013",
        name: "Monster Dragon Ice Tea Limão 473ml",
        category: "Bebidas",
        suggested_price: 8.00
    },
    {
        sku: "708470351010",
        name: "Monster Dragon Ice Tea Pêssego 473ml",
        category: "Bebidas",
        suggested_price: 8.00
    },
    // ==============================================================================
    // REFRIGERANTES (COCA, AMBEV - TODAS AS EMBALAGENS)
    // ==============================================================================
    // Coca-Cola
    {
        sku: "7891000100103",
        name: "Coca-Cola Original 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7894900011517",
        name: "Coca-Cola Zero 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7894900010152",
        name: "Coca-Cola Original 600ml",
        category: "Bebidas",
        suggested_price: 7.00
    },
    {
        sku: "7894900011609",
        name: "Coca-Cola Zero 600ml",
        category: "Bebidas",
        suggested_price: 7.00
    },
    {
        sku: "7894900010015",
        name: "Coca-Cola Original 2L",
        category: "Bebidas",
        suggested_price: 12.00
    },
    {
        sku: "7894900011715",
        name: "Coca-Cola Zero 2L",
        category: "Bebidas",
        suggested_price: 12.00
    },
    {
        sku: "7894900092011",
        name: "Coca-Cola KS 290ml (Vidro)",
        category: "Bebidas",
        suggested_price: 4.50
    },
    {
        sku: "7894900027013",
        name: "Coca-Cola Original 1.5L",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7894900020113",
        name: "Coca-Cola Original 200ml Mini",
        category: "Bebidas",
        suggested_price: 3.00
    },
    {
        sku: "7894900020212",
        name: "Coca-Cola Zero 200ml Mini",
        category: "Bebidas",
        suggested_price: 3.00
    },
    {
        sku: "7894900012552",
        name: "Coca-Cola Original 220ml Lata",
        category: "Bebidas",
        suggested_price: 3.50
    },
    {
        sku: "7894900012651",
        name: "Coca-Cola Zero 220ml Lata",
        category: "Bebidas",
        suggested_price: 3.50
    },
    {
        sku: "7894900012019",
        name: "Coca-Cola Original 2.5L",
        category: "Bebidas",
        suggested_price: 14.00
    },
    {
        sku: "7894900010251",
        name: "Coca-Cola Original 1L",
        category: "Bebidas",
        suggested_price: 8.00
    },
    // Fanta & Sprite & Kuat
    {
        sku: "7894900700077",
        name: "Fanta Laranja 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7894900700343",
        name: "Fanta Uva 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7894900709841",
        name: "Fanta Laranja 2L",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7894900709940",
        name: "Fanta Uva 2L",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7894900700244",
        name: "Sprite Original 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7894900701623",
        name: "Sprite Original 2L",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7894900030013",
        name: "Kuat Guaraná 2L",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "7894900031515",
        name: "Schweppes Citrus 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.50
    },
    {
        sku: "7894900031812",
        name: "Schweppes Tônica 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.50
    },
    // Guaraná Antarctica & Pepsi
    {
        sku: "7894900700046",
        name: "Guaraná Antarctica 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7891991001344",
        name: "Guaraná Antarctica Zero 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7891991001221",
        name: "Guaraná Antarctica 2L",
        category: "Bebidas",
        suggested_price: 11.00
    },
    {
        sku: "7891991001429",
        name: "Guaraná Antarctica Zero 2L",
        category: "Bebidas",
        suggested_price: 11.00
    },
    {
        sku: "7891991001306",
        name: "Guaraná Antarctica 600ml",
        category: "Bebidas",
        suggested_price: 6.50
    },
    {
        sku: "7891991000675",
        name: "Pepsi Original 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7891991000668",
        name: "Pepsi Black 350ml Lata",
        category: "Bebidas",
        suggested_price: 5.00
    },
    {
        sku: "7891991000729",
        name: "Pepsi Original 2L",
        category: "Bebidas",
        suggested_price: 11.00
    },
    {
        sku: "7891991000767",
        name: "Pepsi Black 2L",
        category: "Bebidas",
        suggested_price: 11.00
    },
    {
        sku: "7892840800101",
        name: "H2OH! Limão 500ml",
        category: "Bebidas",
        suggested_price: 6.00
    },
    {
        sku: "7892840800118",
        name: "H2OH! Limão 1.5L",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "7892840800149",
        name: "H2OH! Limoneto 500ml",
        category: "Bebidas",
        suggested_price: 6.00
    },
    // ==============================================================================
    // SALGADINHOS (ELMA CHIPS - VARIAÇÕES DE TAMANHO)
    // ==============================================================================
    // Lay's
    {
        sku: "7892840222835",
        name: "Batata Lays Clássica 45g",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7892840222828",
        name: "Batata Lays Clássica 30g",
        category: "Alimentos",
        suggested_price: 4.00
    },
    {
        sku: "7892840222880",
        name: "Batata Lays Clássica 80g",
        category: "Alimentos",
        suggested_price: 10.00
    },
    {
        sku: "7892840816928",
        name: "Batata Lays Clássica 140g",
        category: "Alimentos",
        suggested_price: 16.00
    },
    {
        sku: "7892840222941",
        name: "Batata Lays Sour Cream 45g",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7892840222958",
        name: "Batata Lays Sour Cream 80g",
        category: "Alimentos",
        suggested_price: 10.00
    },
    {
        sku: "7892840812975",
        name: "Batata Lays Sensações Frango Grelhado 45g",
        category: "Alimentos",
        suggested_price: 7.00
    },
    // Doritos
    {
        sku: "7892840813354",
        name: "Doritos Queijo Nacho 45g",
        category: "Alimentos",
        suggested_price: 6.50
    },
    {
        sku: "7892840813330",
        name: "Doritos Queijo Nacho 30g",
        category: "Alimentos",
        suggested_price: 4.50
    },
    {
        sku: "7892840813293",
        name: "Doritos Queijo Nacho 84g",
        category: "Alimentos",
        suggested_price: 12.00
    },
    {
        sku: "7892840813309",
        name: "Doritos Queijo Nacho 140g",
        category: "Alimentos",
        suggested_price: 18.00
    },
    {
        sku: "7892840813262",
        name: "Doritos Queijo Nacho 300g (Mega)",
        category: "Alimentos",
        suggested_price: 25.00
    },
    {
        sku: "7892840813361",
        name: "Doritos Sweet Chili 45g",
        category: "Alimentos",
        suggested_price: 6.50
    },
    // Ruffles
    {
        sku: "7892840816027",
        name: "Ruffles Original 45g",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7892840816003",
        name: "Ruffles Original 85g",
        category: "Alimentos",
        suggested_price: 10.00
    },
    {
        sku: "7892840816010",
        name: "Ruffles Original 145g",
        category: "Alimentos",
        suggested_price: 16.00
    },
    {
        sku: "7892840816362",
        name: "Ruffles Cebola e Salsa 45g",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7892840816348",
        name: "Ruffles Cebola e Salsa 85g",
        category: "Alimentos",
        suggested_price: 10.00
    },
    {
        sku: "7892840816065",
        name: "Ruffles Churrasco 45g",
        category: "Alimentos",
        suggested_price: 6.00
    },
    // Cheetos
    {
        sku: "7892840813088",
        name: "Cheetos Requeijão 45g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    {
        sku: "7892840813040",
        name: "Cheetos Requeijão 85g",
        category: "Alimentos",
        suggested_price: 9.00
    },
    {
        sku: "7892840813095",
        name: "Cheetos Requeijão 140g",
        category: "Alimentos",
        suggested_price: 15.00
    },
    {
        sku: "7892840813132",
        name: "Cheetos Onda Requeijão 84g",
        category: "Alimentos",
        suggested_price: 9.00
    },
    {
        sku: "7892840813156",
        name: "Cheetos Lua Parmesão 45g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    // Fandangos
    {
        sku: "7892840812067",
        name: "Fandangos Presunto 45g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    {
        sku: "7892840812036",
        name: "Fandangos Presunto 90g",
        category: "Alimentos",
        suggested_price: 9.00
    },
    {
        sku: "7892840812043",
        name: "Fandangos Presunto 140g",
        category: "Alimentos",
        suggested_price: 15.00
    },
    // ==============================================================================
    // CERVEJAS (AMBEV, HEINEKEN - LATA, LATÃO, LONG NECK)
    // ==============================================================================
    // Heineken
    {
        sku: "7891149103102",
        name: "Cerveja Heineken Long Neck 330ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "7896045504445",
        name: "Cerveja Heineken Lata 350ml",
        category: "Bebidas",
        suggested_price: 7.00
    },
    {
        sku: "7896045505961",
        name: "Cerveja Heineken Lata 269ml",
        category: "Bebidas",
        suggested_price: 5.50
    },
    {
        sku: "7896045506081",
        name: "Cerveja Heineken Zero Long Neck 330ml",
        category: "Bebidas",
        suggested_price: 9.00
    },
    {
        sku: "8712000030588",
        name: "Cerveja Heineken Barril 5L",
        category: "Bebidas",
        suggested_price: 90.00
    },
    // Budweiser
    {
        sku: "7891991010049",
        name: "Cerveja Budweiser Long Neck 330ml",
        category: "Bebidas",
        suggested_price: 8.00
    },
    {
        sku: "7891991010063",
        name: "Cerveja Budweiser Lata 350ml",
        category: "Bebidas",
        suggested_price: 6.00
    },
    {
        sku: "7891991010322",
        name: "Cerveja Budweiser Lata 269ml",
        category: "Bebidas",
        suggested_price: 4.50
    },
    {
        sku: "7891991010537",
        name: "Cerveja Budweiser Latão 473ml",
        category: "Bebidas",
        suggested_price: 8.00
    },
    // Outras Cervejas
    {
        sku: "7891991009142",
        name: "Cerveja Stella Artois Long Neck 330ml",
        category: "Bebidas",
        suggested_price: 8.00
    },
    {
        sku: "7891991012678",
        name: "Cerveja Corona Extra Long Neck 330ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7891149200603",
        name: "Cerveja Brahma Chopp Lata 350ml",
        category: "Bebidas",
        suggested_price: 4.50
    },
    {
        sku: "7891149105403",
        name: "Cerveja Brahma Chopp Latão 473ml",
        category: "Bebidas",
        suggested_price: 6.00
    },
    {
        sku: "7891149200504",
        name: "Cerveja Brahma Chopp Lata 269ml",
        category: "Bebidas",
        suggested_price: 3.50
    },
    {
        sku: "7891149000104",
        name: "Cerveja Skol Lata 350ml",
        category: "Bebidas",
        suggested_price: 4.50
    },
    {
        sku: "7891149006601",
        name: "Cerveja Skol Latão 473ml",
        category: "Bebidas",
        suggested_price: 6.00
    },
    {
        sku: "7891149000111",
        name: "Cerveja Skol Lata 269ml",
        category: "Bebidas",
        suggested_price: 3.50
    },
    {
        sku: "7891991003010",
        name: "Cerveja Antarctica Original 600ml",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7891149010509",
        name: "Cerveja Skol 1L (Litrão)",
        category: "Bebidas",
        suggested_price: 10.00
    },
    {
        sku: "7891149107100",
        name: "Cerveja Brahma 1L (Litrão)",
        category: "Bebidas",
        suggested_price: 10.00
    },
    // ==============================================================================
    // MERCEARIA BÁSICA & HIGIENE (MERCADO DE BAIRRO)
    // ==============================================================================
    // Higiene Pessoal
    {
        sku: "7891150004504",
        name: "Creme Dental Colgate Tripla Ação 90g",
        category: "Higiene",
        suggested_price: 5.00
    },
    {
        sku: "7891037746356",
        name: "Creme Dental Sorriso 90g",
        category: "Higiene",
        suggested_price: 3.50
    },
    {
        sku: "7891150029514",
        name: "Sabonete Protex Erva Doce 85g",
        category: "Higiene",
        suggested_price: 4.50
    },
    {
        sku: "7891022101344",
        name: "Sabonete Dove Original 90g",
        category: "Higiene",
        suggested_price: 4.50
    },
    {
        sku: "7891035800234",
        name: "Papel Higiênico Neve (4 Rolos)",
        category: "Higiene",
        suggested_price: 12.00
    },
    {
        sku: "7791293026604",
        name: "Desodorante Dove Aerosol Original 150ml",
        category: "Higiene",
        suggested_price: 18.00
    },
    {
        sku: "7791293023801",
        name: "Desodorante Rexona Aerosol 150ml",
        category: "Higiene",
        suggested_price: 15.00
    },
    {
        sku: "7891010573966",
        name: "Shampoo Seda Ceramidas 325ml",
        category: "Higiene",
        suggested_price: 12.00
    },
    {
        sku: "7891010023829",
        name: "Condicionador Seda Ceramidas 325ml",
        category: "Higiene",
        suggested_price: 14.00
    },
    // Limpeza
    {
        sku: "7891035900224",
        name: "Sabão em Pó Omo Lavagem Perfeita 800g",
        category: "Limpeza",
        suggested_price: 15.00
    },
    {
        sku: "7896090700441",
        name: "Detergente Ypê Neutro 500ml",
        category: "Limpeza",
        suggested_price: 3.00
    },
    {
        sku: "7896090701448",
        name: "Detergente Ypê Maçã 500ml",
        category: "Limpeza",
        suggested_price: 3.00
    },
    {
        sku: "7896090701646",
        name: "Detergente Ypê Coco 500ml",
        category: "Limpeza",
        suggested_price: 3.00
    },
    {
        sku: "7891022633005",
        name: "Esponja Scott Brite Multiuso (Unidade)",
        category: "Limpeza",
        suggested_price: 2.50
    },
    {
        sku: "7891038000402",
        name: "Água Sanitária Ypê 1L",
        category: "Limpeza",
        suggested_price: 5.00
    },
    {
        sku: "7896090704302",
        name: "Amaciante Ypê Azul 2L",
        category: "Limpeza",
        suggested_price: 12.00
    },
    // Alimentos Básicos
    {
        sku: "7896006711113",
        name: "Arroz Tio João Tipo 1 1kg",
        category: "Alimentos",
        suggested_price: 8.00
    },
    {
        sku: "7896006751119",
        name: "Arroz Tio João Tipo 1 5kg",
        category: "Alimentos",
        suggested_price: 35.00
    },
    {
        sku: "7896012300216",
        name: "Feijão Carioca Camil 1kg",
        category: "Alimentos",
        suggested_price: 9.00
    },
    {
        sku: "7896012306119",
        name: "Feijão Preto Camil 1kg",
        category: "Alimentos",
        suggested_price: 9.00
    },
    {
        sku: "7891000366806",
        name: "Óleo de Soja Liza 900ml",
        category: "Alimentos",
        suggested_price: 7.00
    },
    {
        sku: "7896005300066",
        name: "Açúcar Refinado União 1kg",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7891710004245",
        name: "Café Pilão Torrado e Moído 500g",
        category: "Alimentos",
        suggested_price: 20.00
    },
    {
        sku: "7891710018891",
        name: "Café Melitta Tradicional 500g",
        category: "Alimentos",
        suggested_price: 20.00
    },
    {
        sku: "7896004000134",
        name: "Macarrão Espaguete Adria 500g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    {
        sku: "7891048037004",
        name: "Molho de Tomate Pomarola Tradicional 340g",
        category: "Alimentos",
        suggested_price: 4.00
    },
    {
        sku: "7896051111019",
        name: "Leite Condensado Moça Lata 395g",
        category: "Alimentos",
        suggested_price: 8.00
    },
    {
        sku: "7896051113051",
        name: "Creme de Leite Nestlé Lata 300g",
        category: "Alimentos",
        suggested_price: 8.00
    },
    {
        sku: "7891000070109",
        name: "Leite UHT Integral Ninho 1L",
        category: "Alimentos",
        suggested_price: 6.00
    },
    {
        sku: "7898215152013",
        name: "Leite UHT Integral Piracanjuba 1L",
        category: "Alimentos",
        suggested_price: 5.00
    },
    // --- CHOCOLATES & DOCES (EXTRAS) ---
    {
        sku: "7622300850630",
        name: "Chocolate Bis ao Leite (Caixa)",
        category: "Alimentos",
        suggested_price: 7.00
    },
    {
        sku: "7622300850654",
        name: "Chocolate Bis Branco (Caixa)",
        category: "Alimentos",
        suggested_price: 7.00
    },
    {
        sku: "7891000103302",
        name: "Kit Kat Ao Leite 41.5g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    {
        sku: "7891095011995",
        name: "Snickers Original 45g",
        category: "Alimentos",
        suggested_price: 5.00
    },
    {
        sku: "7891008102024",
        name: "Bala Tic Tac Laranja",
        category: "Alimentos",
        suggested_price: 3.00
    },
    {
        sku: "7891008102017",
        name: "Bala Tic Tac Menta",
        category: "Alimentos",
        suggested_price: 3.00
    },
    {
        sku: "7622210595768",
        name: "Trident Hortelã 8g",
        category: "Alimentos",
        suggested_price: 3.00
    },
    {
        sku: "7622210595805",
        name: "Trident Melancia 8g",
        category: "Alimentos",
        suggested_price: 3.00
    },
    // Águas (Outras marcas)
    {
        sku: "7896050601337",
        name: "Água Mineral Bonafont 500ml",
        category: "Bebidas",
        suggested_price: 4.00
    },
    {
        sku: "7898236370014",
        name: "Água Mineral Minalba Sem Gás 510ml",
        category: "Bebidas",
        suggested_price: 3.00
    }
];
/** Normaliza texto para busca (remove acentos, hyphens, espaços extras) */ function normalizeForSearch(s) {
    return s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_\s]+/g, ' ').trim();
}
function searchLocalCatalog(query) {
    const q = query.trim();
    if (q.length < 2) return [];
    const qNorm = normalizeForSearch(q);
    const qParts = qNorm.split(/\s+/).filter(Boolean);
    return GLOBAL_SKU_LIST.filter((p)=>{
        const nameNorm = normalizeForSearch(p.name);
        const skuMatch = p.sku.includes(q);
        const nameContains = nameNorm.includes(qNorm);
        const allPartsMatch = qParts.every((part)=>nameNorm.includes(part));
        return skuMatch || nameContains || allPartsMatch;
    }).slice(0, 15).map((p)=>({
            sku: p.sku,
            name: p.name,
            category: p.category,
            suggested_price: p.suggested_price,
            source: 'global'
        }));
}
async function searchCatalog(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const seen = new Set();
    const results = [];
    // 1. Catálogo local (instantâneo)
    const localMatches = searchLocalCatalog(query);
    for (const p of localMatches){
        seen.add(p.sku);
        results.push(p);
    }
    // 2. Open Food Facts (API externa - pode demorar)
    const { searchOpenFoodFacts } = await __turbopack_context__.A("[project]/apps/web/lib/services/open-food-facts.ts [app-client] (ecmascript, async loader)");
    const offResults = await searchOpenFoodFacts(query);
    for (const p of offResults){
        if (!seen.has(p.sku)) {
            seen.add(p.sku);
            results.push({
                sku: p.sku,
                name: p.name,
                category: p.category,
                suggested_price: p.suggested_price,
                source: 'openfoodfacts'
            });
        }
    }
    return results.slice(0, 20);
}
async function getProductByBarcodeFromCatalog(barcode) {
    const code = barcode.trim().replace(/\D/g, '');
    if (!code || code.length < 8) return null;
    // 1. Busca local
    const local = GLOBAL_SKU_LIST.find((p)=>p.sku === code);
    if (local) {
        return {
            sku: local.sku,
            name: local.name,
            category: local.category,
            suggested_price: local.suggested_price,
            source: 'global'
        };
    }
    // 2. Open Food Facts
    const { getProductByBarcode } = await __turbopack_context__.A("[project]/apps/web/lib/services/open-food-facts.ts [app-client] (ecmascript, async loader)");
    const off = await getProductByBarcode(code);
    if (off) {
        return {
            sku: off.sku,
            name: off.name,
            category: off.category,
            suggested_price: off.suggested_price,
            source: 'openfoodfacts'
        };
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/services/brasil-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMON_NCMS",
    ()=>COMMON_NCMS,
    "searchNcm",
    ()=>searchNcm
]);
const COMMON_NCMS = [
    {
        code: "22011000",
        description: "Águas minerais naturais ou artificiais"
    },
    {
        code: "22021000",
        description: "Águas, incluindo as águas minerais e as águas gaseificadas, adicionadas de açúcar ou de outros edulcorantes ou aromatizadas"
    },
    {
        code: "19059090",
        description: "Outros produtos de padaria, pastelaria ou da indústria de bolachas e biscoitos"
    },
    {
        code: "18063110",
        description: "Chocolates e outras preparações alimentícias contendo cacau, recheados"
    },
    {
        code: "18063210",
        description: "Chocolates e outras preparações alimentícias contendo cacau, não recheados"
    },
    {
        code: "20098990",
        description: "Outros sucos de fruta ou de produtos hortícolas"
    },
    {
        code: "61091000",
        description: "Camisetas de malha de algodão"
    },
    {
        code: "61099000",
        description: "Camisetas de outras matérias têxteis"
    },
    {
        code: "62046200",
        description: "Calças, jardineiras, bermudas e shorts, de algodão"
    },
    {
        code: "61159500",
        description: "Meias de outras matérias têxteis (Ballet)"
    },
    {
        code: "64041100",
        description: "Calçados para esporte; calçados de tênis, basquetebol, ginástica, treino e semelhantes"
    },
    {
        code: "64035900",
        description: "Outros calçados com sola exterior de couro natural"
    }
];
async function searchNcm(query) {
    // 1. Busca local primeiro (mais rápido e garantido para itens comuns)
    const localResults = COMMON_NCMS.filter((ncm)=>ncm.code.includes(query) || ncm.description.toLowerCase().includes(query.toLowerCase()));
    // Se a query for muito curta, retorna só local para não floodar a API
    if (query.length < 3) return localResults;
    // 2. Busca na BrasilAPI
    try {
        const response = await fetch(`https://brasilapi.com.br/api/ncm/v1?search=${query}`);
        if (response.ok) {
            const data = await response.json();
            // A BrasilAPI retorna um array de objetos NCM. Vamos limitar a 20 resultados.
            const apiResults = data.slice(0, 20).map((item)=>({
                    code: item.codigo,
                    description: item.descricao
                }));
            // Combinar resultados, removendo duplicatas (pelo código)
            const combined = [
                ...localResults,
                ...apiResults
            ];
            const unique = Array.from(new Map(combined.map((item)=>[
                    item.code,
                    item
                ])).values());
            return unique;
        }
    } catch (error) {
        console.warn("Erro ao buscar NCM na BrasilAPI:", error);
    }
    return localResults;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/money-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entrada monetária / numérica no padrão brasileiro: vírgula como decimal e ponto como milhar (ex.: 1.234,56).
 */ __turbopack_context__.s([
    "formatMoneyBr",
    ()=>formatMoneyBr,
    "parseMoneyInput",
    ()=>parseMoneyInput
]);
function parseMoneyInput(raw) {
    let s = raw.trim().replace(/\s/g, "");
    if (!s) return 0;
    if (s.includes(",") && s.includes(".")) {
        const lastComma = s.lastIndexOf(",");
        const lastDot = s.lastIndexOf(".");
        if (lastComma > lastDot) {
            s = s.replace(/\./g, "").replace(",", ".");
        } else {
            s = s.replace(/,/g, "");
        }
    } else if (s.includes(",")) {
        s = s.replace(",", ".");
    }
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
}
function formatMoneyBr(value) {
    if (!Number.isFinite(value)) return "";
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/common/module-lock-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleLockScreen",
    ()=>ModuleLockScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/dashboard/header.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function ModuleLockScreen({ title, description, currentPlan = "GRATUITO", upgradeUrl = "/dashboard/configuracoes?tab=plano", upgradeText = "Fazer Upgrade", onUpgrade }) {
    const handleUpgrade = ()=>{
        if (onUpgrade) {
            onUpgrade();
        } else if (upgradeUrl) {
            window.location.href = upgradeUrl;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                title: title
            }, void 0, false, {
                fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center p-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "max-w-md p-8 border-dashed border-2 bg-muted/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-10 h-10 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            className: "text-base mb-8",
                            children: [
                                description,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, this),
                                "Sua conta atual: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "font-bold uppercase",
                                    children: currentPlan
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                    lineNumber: 44,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full bg-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform",
                                    onClick: handleUpgrade,
                                    children: upgradeText
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground italic",
                                    children: upgradeText === "Planos e Preços" ? "Acesse Planos e Preços para ver os planos disponíveis e fazer upgrade." : "A liberação é automática após a confirmação do upgrade no banco de dados."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/common/module-lock-screen.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = ModuleLockScreen;
var _c;
__turbopack_context__.k.register(_c, "ModuleLockScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/config/module-pricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MODULE_PRICING",
    ()=>MODULE_PRICING
]);
const MODULE_PRICING = {
    dashboard: {
        price: 0,
        benefits: [
            'Visão geral do negócio',
            'Indicadores principais',
            'Atalhos rápidos'
        ],
        description: 'Painel principal de controle.'
    },
    students: {
        price: 50,
        benefits: [
            'Cadastro ilimitado de clientes',
            'Histórico completo',
            'Ficha de anamnese'
        ],
        description: 'Gestão completa da sua base de clientes.'
    },
    classes: {
        price: 50,
        benefits: [
            'Agendamento de aulas/serviços',
            'Controle de presença',
            'Grade horária'
        ],
        description: 'Organize sua agenda e serviços.'
    },
    financial: {
        price: 100,
        benefits: [
            'Controle de fluxo de caixa',
            'Gestão de mensalidades/pacotes',
            'Relatórios financeiros detalhados',
            'Emissão de boletos/cobranças (integrado)'
        ],
        description: 'Tenha o controle total das finanças do seu negócio.'
    },
    whatsapp: {
        price: 150,
        benefits: [
            'Envio automático de lembretes',
            'Campanhas de marketing em massa',
            'Atendimento automatizado (Chatbot)',
            'Confirmação de agendamentos'
        ],
        description: 'Automatize sua comunicação e venda mais pelo WhatsApp.'
    },
    ai_chat: {
        price: 200,
        benefits: [
            'Assistente virtual 24/7',
            'Análise de dados avançada',
            'Respostas automáticas inteligentes',
            'Insights de negócio'
        ],
        description: 'Inteligência Artificial para impulsionar seu negócio.'
    },
    pos: {
        price: 80,
        benefits: [
            'Frente de caixa rápido',
            'Emissão de cupom não fiscal',
            'Controle de caixa diário',
            'Venda de produtos/serviços'
        ],
        description: 'Ponto de venda ágil para o balcão.'
    },
    inventory: {
        price: 60,
        benefits: [
            'Controle de estoque de produtos',
            'Alerta de estoque baixo',
            'Fornecedores e compras',
            'Movimentação de entrada/saída'
        ],
        description: 'Nunca mais perca vendas por falta de produto.'
    },
    gamification: {
        price: 50,
        benefits: [
            'Sistema de pontos e recompensas',
            'Ranking de clientes',
            'Engajamento e retenção',
            'Desafios e conquistas'
        ],
        description: 'Fidelize seus clientes tornando a experiência divertida.'
    },
    leads: {
        price: 90,
        benefits: [
            'Funil de vendas (Kanban)',
            'Gestão de oportunidades',
            'Origem e conversão de leads',
            'Follow-up automático'
        ],
        description: 'Transforme interessados em clientes pagantes.'
    },
    scanner: {
        price: 40,
        benefits: [
            'Check-in via QR Code',
            'Controle de acesso na portaria',
            'Registro automático de presença',
            'Segurança e agilidade'
        ],
        description: 'Agilize a entrada e saída do seu estabelecimento.'
    },
    marketplace: {
        price: 120,
        benefits: [
            'Loja virtual integrada',
            'Venda online de produtos/serviços',
            'Pagamento online seguro',
            'Vitrine digital'
        ],
        description: 'Sua loja online aberta 24 horas por dia.'
    },
    erp: {
        price: 300,
        benefits: [
            'Gestão multi-unidades/franquias',
            'Relatórios consolidados',
            'Controle fiscal e contábil',
            'Permissões avançadas'
        ],
        description: 'Solução completa para grandes operações.'
    },
    multi_unit: {
        price: 150,
        benefits: [
            'Gerenciamento de múltiplas filiais',
            'Centralização de dados',
            'Relatórios por unidade'
        ],
        description: 'Gestão Multi-unidade.'
    },
    service_orders: {
        price: 80,
        benefits: [
            'Controle de consertos e manutenções',
            'Assinatura digital do cliente',
            'Rastreabilidade completa'
        ],
        description: 'Ordens de Serviço (OS).'
    },
    fiscal: {
        price: 49.90,
        benefits: [
            'Emissão de Notas Fiscais Eletrônicas',
            'Integração direta com SEFAZ',
            'Certificado digital A1 por tenant'
        ],
        description: 'Emissor Fiscal (NF-e) via SEFAZ.'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/providers/module-guard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleGuard",
    ()=>ModuleGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$common$2f$module$2d$lock$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/common/module-lock-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$module$2d$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/module-pricing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$plan$2d$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/plan-limits.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ModuleGuard({ module, children, fallback, showFullError = false }) {
    _s();
    const { enabledModules, isLoading, planName, niche, studioId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"])();
    const [fetchedPlanName, setFetchedPlanName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mesma fonte que a página Planos e Preços: /api/dance-studio/usage + danceflow_user
    const effectiveStudioId = studioId ?? (("TURBOPACK compile-time truthy", 1) ? (()=>{
        try {
            const u = localStorage.getItem('danceflow_user');
            if (u) {
                const p = JSON.parse(u);
                return p.studio_id || p.studioId || null;
            }
        } catch  {}
        return null;
    })() : "TURBOPACK unreachable");
    // Fallback: buscar plano via API (mesma fonte que Planos e Preços)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleGuard.useEffect": ()=>{
            if (!showFullError || !effectiveStudioId || planName) return;
            fetch(`/api/dance-studio/usage?studioId=${encodeURIComponent(effectiveStudioId)}`).then({
                "ModuleGuard.useEffect": (r)=>r.json()
            }["ModuleGuard.useEffect"]).then({
                "ModuleGuard.useEffect": (data)=>data.planName && setFetchedPlanName(data.planName)
            }["ModuleGuard.useEffect"]).catch({
                "ModuleGuard.useEffect": ()=>{}
            }["ModuleGuard.useEffect"]);
        }
    }["ModuleGuard.useEffect"], [
        showFullError,
        effectiveStudioId,
        planName
    ]);
    if (isLoading) return null;
    const isEnabled = enabledModules[module];
    if (!isEnabled) {
        if (fallback) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: fallback
        }, void 0, false);
        if (showFullError) {
            const pricing = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$module$2d$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_PRICING"][module];
            const title = `Módulo ${pricing?.description || module}`;
            const description = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Este ecossistema de gestão é exclusivo para parceiros com o módulo ativo."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/providers/module-guard.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-left list-disc list-inside opacity-80",
                        children: pricing?.benefits?.slice(0, 3).map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: b
                            }, i, false, {
                                fileName: "[project]/apps/web/components/providers/module-guard.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/providers/module-guard.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/providers/module-guard.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this);
            const isEstudioDeDanca = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.location.pathname.includes('/solutions/estudio-de-danca');
            const upgradeUrl = niche === 'dance' && isEstudioDeDanca ? '/solutions/estudio-de-danca/dashboard/planos' : '/dashboard/configuracoes?tab=plano';
            const upgradeText = isEstudioDeDanca ? 'Planos e Preços' : 'Fazer Upgrade';
            const displayPlan = planName ?? fetchedPlanName ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$plan$2d$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAN_LIMITS"].gratuito.name;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$common$2f$module$2d$lock$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleLockScreen"], {
                title: title,
                description: description,
                currentPlan: displayPlan,
                upgradeUrl: upgradeUrl,
                upgradeText: upgradeText
            }, void 0, false, {
                fileName: "[project]/apps/web/components/providers/module-guard.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this);
        }
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ModuleGuard, "teuZy2ccS2CAOb0zQX51nVcg2V4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"]
    ];
});
_c = ModuleGuard;
var _c;
__turbopack_context__.k.register(_c, "ModuleGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/alert-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.4_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = AlertDialog;
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = AlertDialogTrigger;
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = AlertDialogPortal;
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = AlertDialogOverlay;
function AlertDialogContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "alert-dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c4 = AlertDialogContent;
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c5 = AlertDialogHeader;
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = AlertDialogFooter;
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c7 = AlertDialogTitle;
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c8 = AlertDialogDescription;
function AlertDialogAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c9 = AlertDialogAction;
function AlertDialogCancel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$alert$2d$dialog$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: 'outline'
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/alert-dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c10 = AlertDialogCancel;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "AlertDialog");
__turbopack_context__.k.register(_c1, "AlertDialogTrigger");
__turbopack_context__.k.register(_c2, "AlertDialogPortal");
__turbopack_context__.k.register(_c3, "AlertDialogOverlay");
__turbopack_context__.k.register(_c4, "AlertDialogContent");
__turbopack_context__.k.register(_c5, "AlertDialogHeader");
__turbopack_context__.k.register(_c6, "AlertDialogFooter");
__turbopack_context__.k.register(_c7, "AlertDialogTitle");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction");
__turbopack_context__.k.register(_c10, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/pluralize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helper simples para pluralização em Português (PT-BR)
 * Focado nos termos utilizados no sistema de vocabulário.
 */ __turbopack_context__.s([
    "pluralize",
    ()=>pluralize
]);
function pluralize(word) {
    if (!word) return '';
    // Se já terminar em 's', assume que já está no plural ou é invariável
    if (word.toLowerCase().endsWith('s')) return word;
    // Casos especiais para termos compostos ou com plural irregular
    const specialPlurals = {
        'Vistoria/OS': 'Vistorias e OS',
        'vistoria/OS': 'vistorias e OS'
    };
    if (specialPlurals[word]) return specialPlurals[word];
    // Casos especiais de palavras em inglês/estrangeiras comuns no sistema
    const foreignWords = {
        'coach': 'coaches',
        'teacher': 'teachers',
        'workshop': 'workshops',
        'chef': 'chefs',
        'sommelier': 'sommeliers',
        'coworker': 'coworkers',
        'designer': 'designers',
        'personal': 'personais',
        'caretaker': 'caretakers',
        'wod': 'wods',
        'guardian': 'guardians',
        'parent/guardian': 'parents/guardians',
        'category': 'categories',
        'modality': 'modalities',
        'specialty': 'specialties',
        'property': 'properties',
        'activity': 'activities',
        'utility': 'utilities',
        'itinerary': 'itineraries',
        'agency': 'agencies',
        'professional': 'professionals',
        'patient': 'patients',
        'client': 'clients',
        'service': 'services',
        'establishment': 'establishments',
        'class': 'classes',
        'member': 'members'
    };
    if (foreignWords[word.toLowerCase()]) {
        return foreignWords[word.toLowerCase()];
    }
    // Regras básicas de Português
    // 1. Termina em 'm' -> 'ns' (ex: Massagem -> Massagens)
    if (word.endsWith('m')) {
        return word.slice(0, -1) + 'ns';
    }
    // 2. Termina em 'r', 'z' ou 'n' -> 'es' (ex: Professor -> Professores, Doutor -> Doutores)
    if (word.endsWith('r') || word.endsWith('z') || word.endsWith('n') && !word.endsWith('on')) {
        return word + 'es';
    }
    // 3. Termina em 'al', 'el', 'ol', 'ul' -> 'ais', 'eis', 'ois', 'uis' (ex: Profissional -> Profissionais)
    if (word.endsWith('al')) return word.slice(0, -2) + 'ais';
    if (word.endsWith('el')) return word.slice(0, -2) + 'eis';
    if (word.endsWith('ol')) return word.slice(0, -2) + 'ois';
    if (word.endsWith('ul')) return word.slice(0, -2) + 'uis';
    // 4. Termina em 'ão' -> 'ões' (Regra geral para substantivos de serviço/ação no sistema)
    // Ex: Sessão -> Sessões, Degustação -> Degustações
    if (word.endsWith('ão')) {
        return word.slice(0, -2) + 'ões';
    }
    // 5. Caso padrão: apenas adiciona 's'
    return word + 's';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/hooks/use-vocabulary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVocabulary",
    ()=>useVocabulary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$pluralize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/pluralize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/translations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useVocabulary() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { vocabulary: orgVocabulary, niche, enabledModules, isLoading, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"])();
    // Verifica se está em área de portal (aluno/profissional/afiliado)
    const isPortal = pathname?.startsWith('/portal') || pathname?.startsWith('/s/') || pathname?.startsWith('/student') || pathname?.startsWith('/teacher');
    // Vocabulário padrão para portais
    const standardVocabulary = {
        name: 'Geral',
        client: 'Cliente',
        provider: 'Profissional',
        service: 'Serviço',
        establishment: 'Empresa',
        category: 'Categoria'
    };
    // Usa vocabulário padrão nos portais, EXCETO se for nicho fire_protection que tem vocabulário próprio nos portais
    const shouldForceStandard = isPortal && niche !== 'fire_protection';
    const vocabulary = shouldForceStandard ? standardVocabulary : orgVocabulary;
    // Traduções para Inglês se o idioma for 'en'
    const translatedVocab = language === 'en' ? {
        ...vocabulary,
        client: translateToEnglish(vocabulary.client),
        provider: translateToEnglish(vocabulary.provider),
        service: translateToEnglish(vocabulary.service),
        establishment: translateToEnglish(vocabulary.establishment),
        category: translateToEnglish(vocabulary.category)
    } : vocabulary;
    // Correção para evitar pluralização incorreta de termos como "Tutor"
    const pluralClients = language === 'pt' && vocabulary.client === 'Tutor' ? 'Tutores' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$pluralize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(translatedVocab.client);
    const pluralProviders = language === 'pt' && vocabulary.provider === 'Tutor' ? 'Tutores' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$pluralize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(translatedVocab.provider);
    // Adiciona versões plurais automaticamente
    const pluralVocabulary = {
        ...translatedVocab,
        clients: pluralClients,
        providers: pluralProviders,
        services: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$pluralize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(translatedVocab.service),
        establishments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$pluralize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(translatedVocab.establishment)
    };
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].pt;
    return {
        vocabulary: pluralVocabulary,
        niche,
        schemas: {},
        enabledModules,
        loading: isLoading,
        language,
        t
    };
}
_s(useVocabulary, "5D3i8kPWDEYDNk5mNraNAUzfHk8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"]
    ];
});
// Helper simples para tradução de termos de vocabulário
function translateToEnglish(term) {
    const dictionary = {
        'Aluno': 'Client',
        'Professor': 'Professional',
        'Aula': 'Class',
        'Estúdio': 'Studio',
        'Modalidade': 'Category',
        'Paciente': 'Patient',
        'Doutor': 'Doctor',
        'Consulta': 'Appointment',
        'Consultório': 'Office',
        'Especialidade': 'Specialty',
        'Membro': 'Member',
        'Instrutor': 'Professional',
        'Treino': 'Workout',
        'Academia': 'Gym',
        'Médico': 'Doctor',
        'Exame': 'Exam',
        'Clínica': 'Clinic',
        'Cliente': 'Client',
        'Profissional': 'Professional',
        'Procedimento': 'Procedure',
        'Salão': 'Salon',
        'Serviço': 'Service',
        'Esteticista': 'Aesthetician',
        'Sessão': 'Session',
        'Nível': 'Level',
        'Prática': 'Practice',
        'Barbeiro': 'Barber',
        'Barbearia': 'Barbershop',
        'Corte': 'Cut',
        'Terapeuta': 'Therapist',
        'Massagem': 'Massage',
        'Fisioterapeuta': 'Physiotherapist',
        'Nutricionista': 'Nutritionist',
        'Plano': 'Plan',
        'Podólogo': 'Podiatrist',
        'Atendimento': 'Service',
        'Atendente': 'Attendant',
        'Tutor': 'Professional',
        'Tosador': 'Groomer',
        'Banho/Tosa': 'Grooming',
        'Pet Shop': 'Pet Shop',
        'Veterinário': 'Vet',
        'Creche Canina': 'Dog Daycare',
        'Monitor': 'Monitor',
        'Diária': 'Day use',
        'Creche': 'Daycare',
        'Atividade': 'Activity',
        'Adestrador': 'Professional',
        'Centro': 'Center',
        'Hóspede': 'Guest',
        'Cuidador': 'Caretaker',
        'Hospedagem': 'Lodging',
        'Hotel': 'Hotel',
        'Acomodação': 'Accommodation',
        'Artes Marciais': 'Martial Arts',
        'Sensei': 'Professional',
        'Dojo': 'Dojo',
        'Atleta': 'Athlete',
        'Coach': 'Coach',
        'WOD': 'WOD',
        'Box': 'Box',
        'Natação': 'Swimming',
        'Escola': 'School',
        'Personal Trainer': 'Professional',
        'Personal': 'Professional',
        'Consultoria': 'Consultancy',
        'Foco': 'Focus',
        'Beach Tennis': 'Beach Tennis',
        'Arena': 'Arena',
        'Escola de Música': 'Music School',
        'Instrumento': 'Instrument',
        'Escola de Idiomas': 'Language School',
        'Teacher': 'Professional',
        'Idioma': 'Language',
        'Ateliê de Arte': 'Art Studio',
        'Workshop': 'Workshop',
        'Ateliê': 'Studio',
        'Técnica': 'Technique',
        'Gastronomia': 'Gastronomy',
        'Chef': 'Professional',
        'Culinária': 'Cooking',
        'Fotografia (Escola)': 'Photography (School)',
        'Fotógrafo': 'Professional',
        'Curso': 'Course',
        'Estética Automotiva': 'Auto Detailing',
        'Oficina Mecânica': 'Auto Repair',
        'Mecânico': 'Professional',
        'Reparo': 'Repair',
        'Oficina': 'Shop',
        'Lava-jato': 'Car Wash',
        'Lavador': 'Professional',
        'Lavagem': 'Wash',
        'Serviços de Limpeza': 'Cleaning Services',
        'Limpeza': 'Cleaning',
        'Empresa': 'Company',
        'Design de Interiores': 'Interior Design',
        'Designer': 'Professional',
        'Projeto': 'Project',
        'Escritório': 'Office',
        'Espaço de Eventos': 'Event Space',
        'Contratante': 'Contractor',
        'Organizador': 'Professional',
        'Evento': 'Event',
        'Espaço': 'Space',
        'Fotógrafo (Studio)': 'Photographer (Studio)',
        'Ensaio': 'Shoot',
        'Coworking': 'Coworking',
        'Coworker': 'Coworker',
        'Gestor': 'Professional',
        'Reserva': 'Booking',
        'Tattoo & Piercing': 'Tattoo & Piercing',
        'Tatuador': 'Professional',
        'Assistência Técnica': 'Tech Support',
        'Técnico': 'Professional',
        'Assistência': 'Support',
        'Aparelho': 'Device',
        'Advocacia': 'Law',
        'Advogado': 'Professional',
        'Processo': 'Process',
        'Área': 'Area',
        'Psicologia': 'Psychology',
        'Psicólogo': 'Professional',
        'Abordagem': 'Approach',
        'Clube do Vinho': 'Wine Club',
        'Sócio': 'Member',
        'Sommelier': 'Professional',
        'Degustação': 'Tasting',
        'Clube': 'Club',
        'Cervejaria': 'Brewery',
        'Mestre': 'Professional',
        'Cafeteria/Barista': 'Coffee Shop/Barista',
        'Barista': 'Professional',
        'Grão': 'Bean',
        'Confeitaria': 'Bakery',
        'Confeiteiro': 'Professional',
        'Encomenda': 'Order',
        'Produto': 'Product',
        'Imobiliária': 'Real Estate',
        'Corretor': 'Professional',
        'Visita': 'Visit',
        'Imóvel': 'Property',
        'Consultor': 'Professional',
        'Reunião': 'Meeting',
        'Agência de Marketing': 'Marketing Agency',
        'Analista': 'Professional',
        'Campanha': 'Campaign',
        'Agência': 'Agency',
        'Canal': 'Channel',
        'Desenvolvimento': 'Development',
        'Dev': 'Professional',
        'Sprint': 'Sprint',
        'Tech': 'Tech',
        'Organização de Eventos': 'Event Planning',
        'Agência de Viagens': 'Travel Agency',
        'Agente': 'Professional',
        'Roteiro': 'Itinerary',
        'Destino': 'Destination',
        'Corretora de Seguros': 'Insurance Broker',
        'Segurado': 'Insured',
        'Apólice': 'Policy',
        'Corretora': 'Brokerage',
        'Ramo': 'Branch',
        'Paisagismo': 'Landscaping',
        'Paisagista': 'Professional',
        'Manutenção': 'Maintenance',
        'Encanador': 'Professional',
        'Eletricista': 'Professional',
        'Instalação': 'Installation',
        'Construção Civil': 'Construction',
        'Engenheiro': 'Professional',
        'Obra': 'Construction Site',
        'Etapa': 'Stage',
        'Logística': 'Logistics',
        'Entregador': 'Professional',
        'Entrega': 'Delivery',
        'Transportadora': 'Carrier',
        'Rota': 'Route',
        'Alfaiataria/Costura': 'Tailoring/Sewing',
        'Costureiro(a)': 'Professional',
        'Ajuste': 'Adjustment',
        'Peça': 'Garment',
        'Aulas Particulares': 'Tutoring',
        'Local': 'Location',
        'Matéria': 'Subject',
        'Creche Infantil': 'Daycare',
        'Responsável': 'Parent/Guardian',
        'Casa de Repouso': 'Nursing Home',
        'Residente': 'Resident',
        'Casa': 'Home',
        'Cuidados': 'Care',
        'Auto Escola': 'Driving School',
        'CFC': 'Driving School',
        'Categoria': 'Category',
        'Aula Prática': 'Driving Class',
        'Centro Esportivo': 'Sports Center',
        'Esporte': 'Sport',
        'Clínica Veterinária': 'Veterinary Clinic'
    };
    return dictionary[term] || term;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-popover@1.1.4_@types+react-dom@19.2.3_@types+react@19.2.14_react-dom@19.2.0_react@19.2.0/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Popover;
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = PopoverTrigger;
function PopoverContent({ className, align = 'center', sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[200] w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/popover.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/popover.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = PopoverContent;
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1$2e$4_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/popover.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
_c3 = PopoverAnchor;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverAnchor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/inventory/entity-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityPicker",
    ()=>EntityPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const triggerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground", "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", "dark:bg-input/30 dark:hover:bg-input/50 flex w-full min-w-0 items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow]", "outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9 text-left");
const rowClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-2 pl-2 pr-8 text-sm outline-none", "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground");
function EntityPicker({ value, options, onChange, onCreateSubmit, createNewLabel, createInputPlaceholder = "Nome…", allowEmpty = false, emptyLabel = "—", placeholder = "Selecione…", id, "aria-labelledby": ariaLabelledBy }) {
    _s();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [creating, setCreating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [draft, setDraft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "EntityPicker.useEffect": ()=>{
            if (creating && open) {
                window.setTimeout({
                    "EntityPicker.useEffect": ()=>inputRef.current?.focus()
                }["EntityPicker.useEffect"], 0);
            }
        }
    }["EntityPicker.useEffect"], [
        creating,
        open
    ]);
    const display = allowEmpty && !value.trim() ? emptyLabel : value.trim() || placeholder;
    const finishCreate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "EntityPicker.useCallback[finishCreate]": ()=>{
            const n = draft.trim();
            if (!n) return;
            onCreateSubmit(n);
            setDraft("");
            setCreating(false);
            setOpen(false);
        }
    }["EntityPicker.useCallback[finishCreate]"], [
        draft,
        onCreateSubmit
    ]);
    const cancelCreate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "EntityPicker.useCallback[cancelCreate]": ()=>{
            setDraft("");
            setCreating(false);
        }
    }["EntityPicker.useCallback[cancelCreate]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        modal: false,
        open: open,
        onOpenChange: (o)=>{
            setOpen(o);
            if (!o) {
                setCreating(false);
                setDraft("");
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    id: id,
                    "aria-labelledby": ariaLabelledBy,
                    role: "combobox",
                    "aria-expanded": open,
                    "data-placeholder": !value.trim() && allowEmpty ? true : undefined,
                    className: triggerClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate flex-1",
                            children: display
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "size-4 shrink-0 opacity-50",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "start",
                sideOffset: 4,
                collisionPadding: 12,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-0 z-[200] max-h-[min(320px,var(--radix-popover-content-available-height))]", "w-[var(--radix-popover-trigger-width)] min-w-[12rem] max-w-[calc(100vw-2rem)]", "border bg-popover text-popover-foreground shadow-md"),
                onCloseAutoFocus: (e)=>e.preventDefault(),
                children: creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            ref: inputRef,
                            value: draft,
                            onChange: (e)=>setDraft(e.target.value),
                            placeholder: createInputPlaceholder,
                            className: "h-9",
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    finishCreate();
                                }
                                if (e.key === "Escape") cancelCreate();
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-8",
                                    onClick: cancelCreate,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    className: "h-8",
                                    onClick: finishCreate,
                                    children: "Adicionar"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto overflow-x-hidden p-1 max-h-[280px]",
                    role: "listbox",
                    children: [
                        allowEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "option",
                            "aria-selected": !value.trim(),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(rowClass, !value.trim() && "bg-accent/80"),
                            onClick: ()=>{
                                onChange("");
                                setOpen(false);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 truncate text-left",
                                    children: emptyLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this),
                                !value.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "absolute right-2 size-4 shrink-0",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                    lineNumber: 161,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this),
                        options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "option",
                                "aria-selected": value === opt,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(rowClass, value === opt && "bg-accent/80"),
                                onClick: ()=>{
                                    onChange(opt);
                                    setOpen(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 truncate text-left",
                                        children: opt
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    value === opt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "absolute right-2 size-4 shrink-0",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                        lineNumber: 177,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, opt, true, {
                                fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border mt-1 pt-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(rowClass, "text-primary font-medium hover:bg-primary/10 focus:bg-primary/10"),
                                onClick: ()=>setCreating(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "size-4 shrink-0",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 truncate text-left",
                                        children: createNewLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/inventory/entity-picker.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(EntityPicker, "QW194I7Gza++DbMNDv2CUC7xcAQ=");
_c = EntityPicker;
var _c;
__turbopack_context__.k.register(_c, "EntityPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/dashboard/estoque/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/dashboard/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$ab9df8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:ab9df8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$917e21__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:917e21 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$c736d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:c736d5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$3f8693__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:3f8693 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$8a9ae1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:8a9ae1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$96f14a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:96f14a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$331daf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:331daf [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$barcode$2d$scanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/dashboard/barcode-scanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$global$2d$skus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/constants/global-skus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$brasil$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/brasil-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/money-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$module$2d$guard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/module-guard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$vocabulary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/use-vocabulary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$entity$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/inventory/entity-picker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function InventoryPage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { vocabulary, t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$vocabulary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVocabulary"])();
    const { studioId: orgStudioId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalItems: 0,
        totalSalesValue: 0,
        potentialProfit: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [studioId, setStudioId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modais
    const [isNewProductOpen, setIsNewProductOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTransactionOpen, setIsTransactionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transactionType, setTransactionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('in');
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isScannerOpen, setIsScannerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditProductOpen, setIsEditProductOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProduct, setEditingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productToDelete, setProductToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Categorias e subcategorias (ex.: Bebidas → Red Bull)
    const [customCategories, setCustomCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customSubcategoriesByCategory, setCustomSubcategoriesByCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const defaultCategories = [
        "Bebidas",
        "Alimentos",
        "Acessórios",
        "Uniformes",
        "Equipamentos",
        "Suplementos",
        "Geral"
    ];
    const allCategories = Array.from(new Set([
        ...defaultCategories,
        ...products.map((p)=>p.category).filter(Boolean),
        ...customCategories
    ])).sort();
    // Busca
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Formulários
    const [newProduct, setNewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        category: "Geral",
        subcategory: "",
        min_quantity: 5,
        quantity: 0,
        cost_price: 0,
        selling_price: 0,
        sku: "",
        ncm: ""
    });
    const allSubcategoriesForNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InventoryPage.useMemo[allSubcategoriesForNew]": ()=>{
            const cat = newProduct.category;
            const fromProducts = [
                ...new Set(products.filter({
                    "InventoryPage.useMemo[allSubcategoriesForNew]": (p)=>p.category === cat && p.subcategory
                }["InventoryPage.useMemo[allSubcategoriesForNew]"]).map({
                    "InventoryPage.useMemo[allSubcategoriesForNew]": (p)=>String(p.subcategory).trim()
                }["InventoryPage.useMemo[allSubcategoriesForNew]"]).filter(Boolean))
            ];
            const custom = customSubcategoriesByCategory[cat] || [];
            return Array.from(new Set([
                ...fromProducts,
                ...custom
            ])).sort({
                "InventoryPage.useMemo[allSubcategoriesForNew]": (a, b)=>a.localeCompare(b, "pt-BR")
            }["InventoryPage.useMemo[allSubcategoriesForNew]"]);
        }
    }["InventoryPage.useMemo[allSubcategoriesForNew]"], [
        newProduct.category,
        products,
        customSubcategoriesByCategory
    ]);
    const allSubcategoriesForEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InventoryPage.useMemo[allSubcategoriesForEdit]": ()=>{
            const cat = editingProduct?.category;
            if (!cat) return [];
            const fromProducts = [
                ...new Set(products.filter({
                    "InventoryPage.useMemo[allSubcategoriesForEdit]": (p)=>p.category === cat && p.subcategory
                }["InventoryPage.useMemo[allSubcategoriesForEdit]"]).map({
                    "InventoryPage.useMemo[allSubcategoriesForEdit]": (p)=>String(p.subcategory).trim()
                }["InventoryPage.useMemo[allSubcategoriesForEdit]"]).filter(Boolean))
            ];
            const custom = customSubcategoriesByCategory[cat] || [];
            return Array.from(new Set([
                ...fromProducts,
                ...custom
            ])).sort({
                "InventoryPage.useMemo[allSubcategoriesForEdit]": (a, b)=>a.localeCompare(b, "pt-BR")
            }["InventoryPage.useMemo[allSubcategoriesForEdit]"]);
        }
    }["InventoryPage.useMemo[allSubcategoriesForEdit]"], [
        editingProduct?.category,
        products,
        customSubcategoriesByCategory
    ]);
    const [catalogSearchQuery, setCatalogSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [catalogResults, setCatalogResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [catalogSearching, setCatalogSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCatalogResults, setShowCatalogResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ncmSearchQuery, setNcmSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ncmResults, setNcmResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showNcmResults, setShowNcmResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transactionData, setTransactionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        quantity: 1,
        reason: "",
        costPrice: 0
    });
    // Resolver studioId: OrganizationProvider (workflow_pro) ou localStorage (legado)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryPage.useEffect": ()=>{
            if (orgStudioId) {
                setStudioId(orgStudioId);
                return;
            }
            let resolved = null;
            const userStr = localStorage.getItem("danceflow_user");
            if (userStr) {
                try {
                    const user = JSON.parse(userStr);
                    resolved = user.studioId || user.studio_id || null;
                } catch  {
                // ignore
                }
            }
            if (!resolved) {
                resolved = localStorage.getItem("workflow_pro_active_studio");
            }
            setStudioId(resolved);
        }
    }["InventoryPage.useEffect"], [
        orgStudioId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryPage.useEffect": ()=>{
            if (studioId) fetchData();
        }
    }["InventoryPage.useEffect"], [
        studioId
    ]);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            const inventory = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$ab9df8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getInventory"])(studioId);
            const history = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$3f8693__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRecentTransactions"])(studioId);
            setProducts(inventory.products);
            setStats(inventory.stats);
            setTransactions(history);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    const formatPrice = (price)=>{
        return `${language === 'en' ? '$' : 'R$'} ${price.toFixed(2)}`;
    };
    const roundMoney = (n)=>Number.isFinite(n) ? Math.round(n * 100) / 100 : 0;
    /** Rascunho local para permitir vírgula decimal e digitação sem “pular” o valor. */ const [newProductMoneyDrafts, setNewProductMoneyDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cost: null,
        markup: null,
        selling: null,
        profit: null
    });
    /** Markup % sobre o custo (quando custo > 0). */ const markupFromCostSelling = (cost, selling)=>cost > 0 ? roundMoney((selling - cost) / cost * 100) : 0;
    const profitFromCostSelling = (cost, selling)=>roundMoney(selling - cost);
    const handleNewProductCostChange = (raw)=>{
        const cost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMoneyInput"])(raw);
        setNewProduct((prev)=>({
                ...prev,
                cost_price: cost
            }));
    };
    /** Referência: markup % — receita = custo × (1 + markup/100). */ const handleNewProductMarkupChange = (raw)=>{
        const markupPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMoneyInput"])(raw);
        setNewProduct((prev)=>{
            const cost = prev.cost_price;
            const selling = roundMoney(cost * (1 + markupPct / 100));
            return {
                ...prev,
                selling_price: selling
            };
        });
    };
    /** Referência: receita (preço de venda) — lucro e markup derivam do custo. */ const handleNewProductSellingChange = (raw)=>{
        const selling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMoneyInput"])(raw);
        setNewProduct((prev)=>({
                ...prev,
                selling_price: selling
            }));
    };
    /** Referência: lucro unitário — receita = custo + lucro. */ const handleNewProductProfitChange = (raw)=>{
        const profit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMoneyInput"])(raw);
        setNewProduct((prev)=>{
            const cost = prev.cost_price;
            const selling = roundMoney(cost + profit);
            return {
                ...prev,
                selling_price: selling
            };
        });
    };
    const handleCreateProduct = async ()=>{
        if (!studioId) {
            toast({
                title: "Erro",
                description: "Nenhum estúdio selecionado. Faça login novamente.",
                variant: "destructive"
            });
            return;
        }
        if (!newProduct.name?.trim()) {
            toast({
                title: "Campo obrigatório",
                description: "Informe o nome do produto.",
                variant: "destructive"
            });
            return;
        }
        if (newProduct.sku?.trim()) {
            const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$8a9ae1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductBySku"])(newProduct.sku.trim(), studioId);
            if (existing) {
                if (confirm(`O produto "${existing.name}" já está cadastrado com este SKU.\n\nDeseja adicionar estoque a ele ao invés de criar um novo?`)) {
                    setIsNewProductOpen(false);
                    setSelectedProduct(existing.id);
                    setTransactionType('in');
                    setTransactionData({
                        quantity: newProduct.quantity || 1,
                        reason: "Entrada via Cadastro (Merge)",
                        costPrice: newProduct.cost_price
                    });
                    setIsTransactionOpen(true);
                }
                return;
            }
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$917e21__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProduct"])(newProduct, studioId);
            toast({
                title: "Produto cadastrado!"
            });
            setIsNewProductOpen(false);
            resetNewProductForm();
            fetchData();
        } catch (error) {
            const msg = error instanceof Error ? error.message : "Erro ao salvar";
            toast({
                title: "Erro ao criar produto",
                description: msg,
                variant: "destructive"
            });
        }
    };
    const handleEditClick = (product)=>{
        setEditingProduct(product);
        setIsEditProductOpen(true);
    };
    const handleSaveEdit = async ()=>{
        if (!editingProduct) return;
        try {
            const sub = editingProduct.subcategory?.toString?.().trim?.();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$96f14a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProduct"])(editingProduct.id, {
                ...editingProduct,
                subcategory: sub || null
            }, studioId);
            toast({
                title: "Produto atualizado!"
            });
            setIsEditProductOpen(false);
            fetchData();
        } catch (error) {
            toast({
                title: "Erro ao atualizar produto",
                variant: "destructive"
            });
        }
    };
    const handleDeleteClick = (productId)=>{
        setProductToDelete(productId);
        setIsDeleteAlertOpen(true);
    };
    const handleConfirmDelete = async ()=>{
        if (!productToDelete) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$331daf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProduct"])(productToDelete, studioId);
            toast({
                title: "Produto removido!"
            });
            setIsDeleteAlertOpen(false);
            fetchData();
        } catch (error) {
            toast({
                title: "Erro ao remover produto",
                variant: "destructive"
            });
        }
    };
    const handleTransaction = async ()=>{
        try {
            const reason = transactionData.reason || (transactionType === 'in' ? 'Entrada Manual' : 'Ajuste de Estoque');
            const price = transactionType === 'in' && transactionData.costPrice > 0 ? transactionData.costPrice : undefined;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$c736d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["registerTransaction"])(selectedProduct, transactionType, transactionData.quantity, reason, studioId, price);
            toast({
                title: "Movimentação registrada com sucesso!"
            });
            setIsTransactionOpen(false);
            setTransactionData({
                quantity: 1,
                reason: "",
                costPrice: 0
            });
            fetchData();
        } catch (error) {
            toast({
                title: "Erro na movimentação",
                description: error.message,
                variant: "destructive"
            });
        }
    };
    const handleScanSuccess = async (decodedText)=>{
        if (!studioId) {
            toast({
                title: "Erro",
                description: "Estúdio não identificado. Faça login e vincule-se a um estúdio.",
                variant: "destructive"
            });
            return;
        }
        try {
            const existingProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$8a9ae1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductBySku"])(decodedText, studioId);
            if (existingProduct) {
                handleEditClick(existingProduct);
            } else {
                const fromCatalog = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$global$2d$skus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductByBarcodeFromCatalog"])(decodedText);
                setNewProduct({
                    name: fromCatalog?.name ?? "",
                    category: fromCatalog?.category ?? "Geral",
                    subcategory: "",
                    min_quantity: 5,
                    quantity: 0,
                    cost_price: 0,
                    selling_price: fromCatalog?.suggested_price ?? 0,
                    sku: decodedText,
                    ncm: ""
                });
                setNewProductMoneyDrafts({
                    cost: null,
                    markup: null,
                    selling: null,
                    profit: null
                });
                setIsNewProductOpen(true);
            }
        } catch (err) {
            toast({
                title: "Erro",
                description: err?.message || "Não foi possível buscar o produto.",
                variant: "destructive"
            });
        }
    };
    const catalogSearchTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastCatalogQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const handleCatalogSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InventoryPage.useCallback[handleCatalogSearch]": (query)=>{
            setCatalogSearchQuery(query);
            if (catalogSearchTimeout.current) clearTimeout(catalogSearchTimeout.current);
            if (query.length < 2) {
                setCatalogResults([]);
                setShowCatalogResults(false);
                setCatalogSearching(false);
                return;
            }
            // 1. Resultados locais IMEDIATOS (sem debounce)
            const localResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$global$2d$skus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchLocalCatalog"])(query);
            setCatalogResults(localResults);
            setShowCatalogResults(true);
            setCatalogSearching(true);
            // 2. API Open Food Facts com debounce curto (150ms)
            lastCatalogQuery.current = query;
            catalogSearchTimeout.current = setTimeout({
                "InventoryPage.useCallback[handleCatalogSearch]": async ()=>{
                    const q = lastCatalogQuery.current;
                    if (!q || q.length < 2) {
                        setCatalogSearching(false);
                        return;
                    }
                    try {
                        const fullResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$global$2d$skus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchCatalog"])(q);
                        // Só atualiza se o usuário não mudou a busca
                        if (lastCatalogQuery.current === q) {
                            setCatalogResults(fullResults);
                        }
                    } finally{
                        if (lastCatalogQuery.current === q) {
                            setCatalogSearching(false);
                        }
                    }
                }
            }["InventoryPage.useCallback[handleCatalogSearch]"], 150);
        }
    }["InventoryPage.useCallback[handleCatalogSearch]"], []);
    const handleSelectCatalogResult = (item)=>{
        setNewProduct((prev)=>({
                ...prev,
                sku: item.sku,
                name: item.name,
                category: item.category,
                subcategory: "",
                selling_price: item.suggested_price ?? prev.selling_price
            }));
        setNewProductMoneyDrafts({
            cost: null,
            markup: null,
            selling: null,
            profit: null
        });
        setCatalogSearchQuery("");
        setCatalogResults([]);
        setShowCatalogResults(false);
    };
    const resetNewProductForm = ()=>{
        setNewProduct({
            name: "",
            category: "Geral",
            subcategory: "",
            min_quantity: 5,
            quantity: 0,
            cost_price: 0,
            selling_price: 0,
            sku: "",
            ncm: ""
        });
        setCatalogSearchQuery("");
        setCatalogResults([]);
        setShowCatalogResults(false);
        setNewProductMoneyDrafts({
            cost: null,
            markup: null,
            selling: null,
            profit: null
        });
    };
    const handleNcmSearch = async (query)=>{
        setNcmSearchQuery(query);
        if (query.length >= 2) {
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$brasil$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchNcm"])(query);
            setNcmResults(results);
            setShowNcmResults(true);
        } else {
            setNcmResults([]);
            setShowNcmResults(false);
        }
    };
    const filteredProducts = products.filter((p)=>{
        const q = searchInput.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.sku && p.sku.includes(searchInput) || p.subcategory && String(p.subcategory).toLowerCase().includes(q);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$module$2d$guard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleGuard"], {
        module: "inventory",
        showFullError: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        title: `Gestão de Estoque - ${vocabulary.establishment}`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$barcode$2d$scanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarcodeScanner"], {
                        isOpen: isScannerOpen,
                        onClose: ()=>setIsScannerOpen(false),
                        onScanSuccess: handleScanSuccess
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                        lineNumber: 447,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-primary/10 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 14
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold",
                                                        children: "Controle de Inventário"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Gerencie produtos, entradas e alertas de estoque."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 14
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                size: "lg",
                                                className: "h-12 bg-primary hover:bg-primary/90 px-4",
                                                onClick: ()=>setIsNewProductOpen(true),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 15
                                                    }, this),
                                                    " Novo Produto"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                size: "lg",
                                                variant: "outline",
                                                className: "h-12 border-primary/20 text-primary hover:bg-primary/5",
                                                onClick: ()=>setIsScannerOpen(true),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 15
                                                    }, this),
                                                    " Escanear"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 456,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-primary/5 border-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-muted-foreground",
                                                            children: "Valor em Estoque (Venda)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-primary",
                                                            children: formatPrice(stats.totalSalesValue)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-8 h-8 text-primary/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-green-700 dark:text-green-300",
                                                            children: "Lucro Potencial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-green-600 dark:text-green-400",
                                                            children: formatPrice(stats.potentialProfit)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-8 h-8 text-green-500/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-muted-foreground",
                                                            children: "Itens em Estoque"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold",
                                                            children: [
                                                                stats.totalItems,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-normal text-muted-foreground",
                                                                    children: "unid."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 71
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                    className: "w-8 h-8 text-muted-foreground/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 478,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-none shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Inventário Atual"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full md:w-96",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Buscar por nome ou SKU...",
                                                        className: "pl-9",
                                                        value: searchInput,
                                                        onChange: (e)=>setSearchInput(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md border overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-muted/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "text-left border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-3 font-medium",
                                                                    children: "Produto"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-3 font-medium text-center",
                                                                    children: "Qtd."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 528,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-3 font-medium text-right",
                                                                    children: "Preço"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 529,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-3 font-medium text-center",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-3 font-medium text-center",
                                                                    children: "Ações"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: [
                                                            filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b last:border-0 hover:bg-muted/50 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "p-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold",
                                                                                        children: product.name.charAt(0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                        lineNumber: 539,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium",
                                                                                                children: product.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 543,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-2 mt-0.5 flex-wrap",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        variant: "secondary",
                                                                                                        className: "text-[10px] h-4 px-1 py-0 font-normal bg-muted text-muted-foreground",
                                                                                                        children: product.subcategory ? `${product.category} — ${product.subcategory}` : product.category
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                        lineNumber: 545,
                                                                                                        columnNumber: 31
                                                                                                    }, this),
                                                                                                    product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-[10px] text-muted-foreground",
                                                                                                        children: [
                                                                                                            "SKU: ",
                                                                                                            product.sku
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                        lineNumber: 551,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 544,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                        lineNumber: 542,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                lineNumber: 538,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 537,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "p-3 text-center font-bold",
                                                                            children: product.quantity
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 559,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "p-3 text-right font-medium",
                                                                            children: formatPrice(product.selling_price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 562,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "p-3 text-center",
                                                                            children: product.quantity === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "destructive",
                                                                                children: "Esgotado"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 27
                                                                            }, this) : product.quantity <= product.min_quantity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: "border-yellow-500 text-yellow-600 bg-yellow-50",
                                                                                children: "Baixo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                lineNumber: 567,
                                                                                columnNumber: 27
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: "border-green-500 text-green-600 bg-green-50",
                                                                                children: "OK"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                lineNumber: 569,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 563,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "p-3 text-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                                        asChild: true,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "ghost",
                                                                                            className: "h-8 w-8 p-0",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                                                className: "h-4 w-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 576,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                            lineNumber: 575,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                        lineNumber: 574,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                                        align: "end",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                                onClick: ()=>handleEditClick(product),
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                                        className: "mr-2 h-4 w-4"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                        lineNumber: 581,
                                                                                                        columnNumber: 31
                                                                                                    }, this),
                                                                                                    " Editar"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 580,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                                onClick: ()=>{
                                                                                                    setSelectedProduct(product.id);
                                                                                                    setTransactionType('in');
                                                                                                    setIsTransactionOpen(true);
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                                        className: "mr-2 h-4 w-4"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                        lineNumber: 588,
                                                                                                        columnNumber: 31
                                                                                                    }, this),
                                                                                                    " Adicionar Estoque"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 583,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                                className: "text-red-600 focus:text-red-600",
                                                                                                onClick: ()=>handleDeleteClick(product.id),
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                        className: "mr-2 h-4 w-4"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                        lineNumber: 594,
                                                                                                        columnNumber: 31
                                                                                                    }, this),
                                                                                                    " Excluir"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                                lineNumber: 590,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                        lineNumber: 579,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                                lineNumber: 573,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 572,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, product.id, true, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 21
                                                                }, this)),
                                                            filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 5,
                                                                    className: "p-8 text-center text-muted-foreground",
                                                                    children: "Nenhum produto encontrado."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 603,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 509,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-none shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Últimas Movimentações"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                            children: transactions.slice(0, 8).map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'sale' ? 'bg-green-100 text-green-600' : tx.type === 'in' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`,
                                                                    children: tx.type === 'in' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 44
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 75
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium truncate max-w-[100px]",
                                                                            children: tx.product?.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-muted-foreground capitalize",
                                                                            children: tx.reason
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                            lineNumber: 630,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 628,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs font-bold ${tx.type === 'in' ? 'text-blue-600' : 'text-red-600'}`,
                                                                children: [
                                                                    tx.type === 'in' ? '+' : '-',
                                                                    tx.quantity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, tx.id, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 613,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                        lineNumber: 453,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isNewProductOpen,
                onOpenChange: (open)=>{
                    setIsNewProductOpen(open);
                    if (!open) resetNewProductForm();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[500px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Cadastrar Novo Produto"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Inclua SKU, categoria e preços. A categoria e a subcategoria podem ser criadas aqui."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Buscar produto por nome (Open Food Facts + catálogo)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 661,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Digite o nome do produto...",
                                                    className: "pl-9",
                                                    value: catalogSearchQuery,
                                                    onChange: (e)=>handleCatalogSearch(e.target.value),
                                                    onFocus: ()=>catalogResults.length > 0 && setShowCatalogResults(true),
                                                    onBlur: ()=>setTimeout(()=>setShowCatalogResults(false), 200)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 17
                                                }, this),
                                                catalogSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 38
                                                }, this),
                                                showCatalogResults && catalogResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute z-50 mt-1 w-full rounded-md border bg-background shadow-lg max-h-48 overflow-auto",
                                                    children: catalogResults.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "w-full px-3 py-2 text-left text-sm hover:bg-muted flex justify-between items-center gap-2",
                                                            onMouseDown: (e)=>{
                                                                e.preventDefault();
                                                                handleSelectCatalogResult(item);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-muted-foreground shrink-0",
                                                                    children: [
                                                                        item.sku,
                                                                        " · ",
                                                                        item.category,
                                                                        item.suggested_price ? ` · R$ ${item.suggested_price.toFixed(2)}` : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                                    lineNumber: 686,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item.sku, true, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Código de Barras (SKU)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 697,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: newProduct.sku,
                                                    onChange: (e)=>setNewProduct({
                                                            ...newProduct,
                                                            sku: e.target.value
                                                        }),
                                                    placeholder: "Ou escaneie"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ()=>setIsScannerOpen(true),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 108
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 696,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Nome"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: newProduct.name,
                                            onChange: (e)=>setNewProduct({
                                                    ...newProduct,
                                                    name: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Tipo de Produto (Categoria)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$entity$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityPicker"], {
                                            value: newProduct.category,
                                            options: allCategories,
                                            placeholder: "Selecione o tipo...",
                                            onChange: (v)=>setNewProduct((prev)=>({
                                                        ...prev,
                                                        category: v,
                                                        subcategory: ""
                                                    })),
                                            onCreateSubmit: (n)=>{
                                                setCustomCategories((prev)=>[
                                                        ...prev,
                                                        n
                                                    ]);
                                                setNewProduct((prev)=>({
                                                        ...prev,
                                                        category: n,
                                                        subcategory: ""
                                                    }));
                                            },
                                            createNewLabel: "Criar novo tipo...",
                                            createInputPlaceholder: "Ex.: Bebidas, Snacks…"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 709,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Subcategoria"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 723,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Opcional. Ex.: Bebidas — Red Bull"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 724,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$entity$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityPicker"], {
                                            value: newProduct.subcategory?.trim() ? newProduct.subcategory : "",
                                            options: allSubcategoriesForNew,
                                            allowEmpty: true,
                                            emptyLabel: "Sem subcategoria",
                                            placeholder: "Nenhuma — ex.: Red Bull",
                                            onChange: (v)=>setNewProduct((prev)=>({
                                                        ...prev,
                                                        subcategory: v
                                                    })),
                                            onCreateSubmit: (n)=>{
                                                setCustomSubcategoriesByCategory((prev)=>({
                                                        ...prev,
                                                        [newProduct.category]: Array.from(new Set([
                                                            ...prev[newProduct.category] || [],
                                                            n
                                                        ]))
                                                    }));
                                                setNewProduct((prev)=>({
                                                        ...prev,
                                                        subcategory: n
                                                    }));
                                            },
                                            createNewLabel: "Nova subcategoria...",
                                            createInputPlaceholder: "Ex.: Red Bull, Água…"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 725,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 722,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2 rounded-lg border bg-muted/30 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Precificação: qualquer campo pode ser a referência — ao editar custo, a receita (preço) mantém-se; ao editar markup, lucro ou receita, os demais recalculam. Use vírgula ou ponto nos valores (ex.: 12,50 ou 1.234,56)."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            children: "Custo (base)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "text",
                                                            inputMode: "decimal",
                                                            autoComplete: "off",
                                                            placeholder: "0,00",
                                                            value: newProductMoneyDrafts.cost ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(newProduct.cost_price),
                                                            onFocus: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        cost: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(newProduct.cost_price)
                                                                    })),
                                                            onChange: (e)=>{
                                                                const raw = e.target.value;
                                                                setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        cost: raw
                                                                    }));
                                                                handleNewProductCostChange(raw);
                                                            },
                                                            onBlur: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        cost: null
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            children: "Markup (%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "text",
                                                            inputMode: "decimal",
                                                            autoComplete: "off",
                                                            placeholder: "0",
                                                            value: newProductMoneyDrafts.markup ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(markupFromCostSelling(newProduct.cost_price, newProduct.selling_price)),
                                                            onFocus: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        markup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(markupFromCostSelling(newProduct.cost_price, newProduct.selling_price))
                                                                    })),
                                                            onChange: (e)=>{
                                                                const raw = e.target.value;
                                                                setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        markup: raw
                                                                    }));
                                                                handleNewProductMarkupChange(raw);
                                                            },
                                                            onBlur: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        markup: null
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            children: "Receita (preço de venda)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "text",
                                                            inputMode: "decimal",
                                                            autoComplete: "off",
                                                            placeholder: "0,00",
                                                            value: newProductMoneyDrafts.selling ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(newProduct.selling_price),
                                                            onFocus: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        selling: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(newProduct.selling_price)
                                                                    })),
                                                            onChange: (e)=>{
                                                                const raw = e.target.value;
                                                                setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        selling: raw
                                                                    }));
                                                                handleNewProductSellingChange(raw);
                                                            },
                                                            onBlur: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        selling: null
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            children: "Lucro (unitário)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 820,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "text",
                                                            inputMode: "decimal",
                                                            autoComplete: "off",
                                                            placeholder: "0,00",
                                                            value: newProductMoneyDrafts.profit ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(profitFromCostSelling(newProduct.cost_price, newProduct.selling_price)),
                                                            onFocus: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        profit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoneyBr"])(profitFromCostSelling(newProduct.cost_price, newProduct.selling_price))
                                                                    })),
                                                            onChange: (e)=>{
                                                                const raw = e.target.value;
                                                                setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        profit: raw
                                                                    }));
                                                                handleNewProductProfitChange(raw);
                                                            },
                                                            onBlur: ()=>setNewProductMoneyDrafts((d)=>({
                                                                        ...d,
                                                                        profit: null
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Estoque Inicial"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 849,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            min: "0",
                                            value: newProduct.quantity,
                                            onChange: (e)=>setNewProduct({
                                                    ...newProduct,
                                                    quantity: parseInt(e.target.value, 10) || 0
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 850,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 848,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleCreateProduct,
                                className: "w-full",
                                children: "Salvar"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 858,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 858,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                lineNumber: 647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isTransactionOpen,
                onOpenChange: setIsTransactionOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Movimentação"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Registre entrada, saída ou ajuste de quantidade."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 866,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 864,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Quantidade"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 870,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            value: transactionData.quantity,
                                            onChange: (e)=>setTransactionData({
                                                    ...transactionData,
                                                    quantity: parseInt(e.target.value) || 0
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 871,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 869,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Motivo"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 874,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: transactionData.reason,
                                            onChange: (e)=>setTransactionData({
                                                    ...transactionData,
                                                    reason: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 875,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 873,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 868,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleTransaction,
                                className: "w-full",
                                children: "Confirmar"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 878,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 878,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                    lineNumber: 863,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                lineNumber: 862,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isEditProductOpen,
                onOpenChange: setIsEditProductOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Editar produto"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 885,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Altere categoria, subcategoria, preço ou quantidade."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 886,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this),
                        editingProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Nome"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: editingProduct.name,
                                            onChange: (e)=>setEditingProduct({
                                                    ...editingProduct,
                                                    name: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 890,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Tipo de Produto (Categoria)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$entity$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityPicker"], {
                                            value: editingProduct.category,
                                            options: allCategories,
                                            placeholder: "Selecione o tipo...",
                                            onChange: (v)=>setEditingProduct((prev)=>prev ? {
                                                        ...prev,
                                                        category: v,
                                                        subcategory: ""
                                                    } : null),
                                            onCreateSubmit: (n)=>{
                                                setCustomCategories((prev)=>[
                                                        ...prev,
                                                        n
                                                    ]);
                                                setEditingProduct((prev)=>prev ? {
                                                        ...prev,
                                                        category: n,
                                                        subcategory: ""
                                                    } : null);
                                            },
                                            createNewLabel: "Criar novo tipo...",
                                            createInputPlaceholder: "Ex.: Bebidas, Snacks…"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 896,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 894,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Subcategoria"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 912,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Opcional. Ex.: Bebidas — Red Bull"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$entity$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityPicker"], {
                                            value: editingProduct.subcategory && String(editingProduct.subcategory).trim() ? String(editingProduct.subcategory) : "",
                                            options: allSubcategoriesForEdit,
                                            allowEmpty: true,
                                            emptyLabel: "Sem subcategoria",
                                            placeholder: "Nenhuma — ex.: Red Bull",
                                            onChange: (v)=>setEditingProduct((prev)=>prev ? {
                                                        ...prev,
                                                        subcategory: v
                                                    } : null),
                                            onCreateSubmit: (n)=>{
                                                if (!editingProduct) return;
                                                const cat = editingProduct.category;
                                                setCustomSubcategoriesByCategory((prev)=>({
                                                        ...prev,
                                                        [cat]: Array.from(new Set([
                                                            ...prev[cat] || [],
                                                            n
                                                        ]))
                                                    }));
                                                setEditingProduct((prev)=>prev ? {
                                                        ...prev,
                                                        subcategory: n
                                                    } : null);
                                            },
                                            createNewLabel: "Nova subcategoria...",
                                            createInputPlaceholder: "Ex.: Red Bull, Água…"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 914,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: "Preço Venda"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    step: "0.01",
                                                    value: editingProduct.selling_price,
                                                    onChange: (e)=>setEditingProduct({
                                                            ...editingProduct,
                                                            selling_price: parseFloat(e.target.value)
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: "Estoque"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    value: editingProduct.quantity,
                                                    onChange: (e)=>setEditingProduct({
                                                            ...editingProduct,
                                                            quantity: parseInt(e.target.value)
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 940,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleSaveEdit,
                                children: "Salvar"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 952,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 952,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                    lineNumber: 883,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                lineNumber: 882,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: isDeleteAlertOpen,
                onOpenChange: setIsDeleteAlertOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: "Excluir?"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                lineNumber: 958,
                                columnNumber: 30
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 958,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: "Não"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: handleConfirmDelete,
                                    className: "bg-red-600",
                                    children: "Sim"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 72
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                            lineNumber: 959,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                    lineNumber: 957,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/dashboard/estoque/page.tsx",
        lineNumber: 443,
        columnNumber: 5
    }, this);
}
_s(InventoryPage, "H+y9jU6nwor7aAzEbPrS5wVDWHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$vocabulary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVocabulary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrganization"]
    ];
});
_c = InventoryPage;
var _c;
__turbopack_context__.k.register(_c, "InventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/solutions/estudio-de-danca/dashboard/estoque/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DanceStudioEstoquePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/providers/organization-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$estoque$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/estoque/page.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function DanceStudioEstoquePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$providers$2f$organization$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$estoque$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/dashboard/estoque/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/dashboard/estoque/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = DanceStudioEstoquePage;
var _c;
__turbopack_context__.k.register(_c, "DanceStudioEstoquePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# debugId=7c87032f-49bf-ac69-f6f4-da71ac2f8142
//# sourceMappingURL=apps_web_b3602d73._.js.map