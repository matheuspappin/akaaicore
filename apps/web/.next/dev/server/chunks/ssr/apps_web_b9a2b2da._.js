;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="34b35672-ebe6-9923-3067-68280a9fabdb")}catch(e){}}();
module.exports = [
"[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:scale-105", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(title || 'Erro', {
            description
        });
    } else if (props.variant === 'warning') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(title || 'Atenção', {
            description
        });
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(title || 'Sucesso', {
            description
        });
    }
    return {
        id: genId(),
        dismiss: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(),
        update: ()=>{}
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
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
;
}),
"[project]/apps/web/lib/password-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilitários para validação de força de senha
 */ __turbopack_context__.s([
    "MIN_STRONG_PASSWORD_SCORE",
    ()=>MIN_STRONG_PASSWORD_SCORE,
    "checkPasswordStrength",
    ()=>checkPasswordStrength
]);
function checkPasswordStrength(password) {
    const requirements = {
        length: password.length >= 8,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    const metRequirements = Object.values(requirements).filter(Boolean).length;
    let score = 0;
    if (password.length > 0) {
        if (password.length < 6) score = 0;
        else if (metRequirements <= 2) score = 1;
        else if (metRequirements === 3) score = 2;
        else if (metRequirements === 4) score = 3;
        else score = 4;
    }
    const map = {
        0: {
            label: 'Muito Fraca',
            color: 'bg-red-500'
        },
        1: {
            label: 'Fraca',
            color: 'bg-orange-500'
        },
        2: {
            label: 'Média',
            color: 'bg-yellow-500'
        },
        3: {
            label: 'Forte',
            color: 'bg-emerald-500'
        },
        4: {
            label: 'Muito Forte',
            color: 'bg-indigo-600'
        }
    };
    return {
        score,
        ...map[score],
        requirements
    };
}
const MIN_STRONG_PASSWORD_SCORE = 3; // Exigir pelo menos "Forte"
}),
"[project]/apps/web/components/ui/password-strength-meter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordStrengthMeter",
    ()=>PasswordStrengthMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$password$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/password-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PasswordStrengthMeter({ password }) {
    if (!password) return null;
    const strength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$password$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPasswordStrength"])(password);
    const RequirementItem = ({ met, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-[10px] sm:text-xs",
            children: [
                met ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3 h-3 text-emerald-500"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3 text-slate-300 dark:text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-colors", met ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-slate-400"),
                    children: label
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 space-y-3 animate-in fade-in slide-in-from-top-1 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                children: "Força da Senha"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white", strength.color),
                                children: strength.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
                        children: [
                            0,
                            1,
                            2,
                            3
                        ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 transition-all duration-500", strength.score > step ? strength.color : "bg-transparent")
                            }, step, false, {
                                fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RequirementItem, {
                        met: strength.requirements.length,
                        label: "Mínimo 8 caracteres"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RequirementItem, {
                        met: strength.requirements.upper,
                        label: "Letra maiúscula"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RequirementItem, {
                        met: strength.requirements.lower,
                        label: "Letra minúscula"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RequirementItem, {
                        met: strength.requirements.number,
                        label: "Um número"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RequirementItem, {
                        met: strength.requirements.special,
                        label: "Caractere especial"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/password-strength-meter.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/lib/validation-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilitários para validação de documentos brasileiros (CPF e CNPJ)
 */ __turbopack_context__.s([
    "validateCNPJ",
    ()=>validateCNPJ,
    "validateCPF",
    ()=>validateCPF,
    "validateGTIN",
    ()=>validateGTIN
]);
function validateCPF(cpf) {
    const cleanCPF = cpf.replace(/\D/g, "");
    if (cleanCPF.length !== 11) return false;
    // Bloqueia CPFs conhecidos como inválidos (todos os dígitos iguais)
    if (/^(\d)\1+$/.test(cleanCPF)) return false;
    let sum = 0;
    let remainder;
    for(let i = 1; i <= 9; i++){
        sum = sum + parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
    }
    remainder = sum * 10 % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false;
    sum = 0;
    for(let i = 1; i <= 10; i++){
        sum = sum + parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
    }
    remainder = sum * 10 % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false;
    return true;
}
function validateCNPJ(cnpj) {
    const cleanCNPJ = cnpj.replace(/\D/g, "");
    if (cleanCNPJ.length !== 14) return false;
    // Bloqueia CNPJs conhecidos como inválidos (todos os dígitos iguais)
    if (/^(\d)\1+$/.test(cleanCNPJ)) return false;
    let size = cleanCNPJ.length - 2;
    let numbers = cleanCNPJ.substring(0, size);
    const digits = cleanCNPJ.substring(size);
    let sum = 0;
    let pos = size - 7;
    for(let i = size; i >= 1; i--){
        sum += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;
    size = size + 1;
    numbers = cleanCNPJ.substring(0, size);
    sum = 0;
    pos = size - 7;
    for(let i = size; i >= 1; i--){
        sum += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(1))) return false;
    return true;
}
function validateGTIN(gtin) {
    if (!gtin) return false;
    const cleanGTIN = gtin.replace(/\D/g, "");
    if (![
        8,
        12,
        13,
        14
    ].includes(cleanGTIN.length)) {
        return cleanGTIN.length > 0 && cleanGTIN.length <= 6;
    }
    const digits = cleanGTIN.split('').map(Number);
    const checkDigit = digits.pop();
    const reversedDigits = digits.reverse();
    const sum = reversedDigits.reduce((acc, digit, index)=>{
        const multiplier = index % 2 === 0 ? 3 : 1;
        return acc + digit * multiplier;
    }, 0);
    const calculatedCheckDigit = (10 - sum % 10) % 10;
    return checkDigit === calculatedCheckDigit;
}
}),
"[project]/apps/web/lib/actions/data:5fe124 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0061464f4e546b0c7c3bb01872bce47a82211e3e66":"getSystemModules"},"apps/web/lib/actions/modules.ts",""] */ __turbopack_context__.s([
    "getSystemModules",
    ()=>getSystemModules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getSystemModules = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0061464f4e546b0c7c3bb01872bce47a82211e3e66", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getSystemModules"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbW9kdWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZVwiXG5pbXBvcnQgeyBjaGVja1N1cGVyQWRtaW5EZXRhaWxlZCB9IGZyb20gXCJAL2xpYi9hY3Rpb25zL3N1cGVyLWFkbWluXCJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIkAvbGliL2xvZ2dlclwiXG5cbi8qKlxuICogQnVzY2EgdG9kb3Mgb3MgbcOzZHVsb3MgZG8gc2lzdGVtYSBjb20gc2V1cyBwcmXDp29zIGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTeXN0ZW1Nb2R1bGVzKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdzeXN0ZW1fbW9kdWxlcycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdwcmljZScsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKCfinYwgRXJybyBhbyBidXNjYXIgbcOzZHVsb3MgZG8gc2lzdGVtYTonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogQXR1YWxpemEgdW0gbcOzZHVsbyBkbyBzaXN0ZW1hIChhcGVuYXMgU3VwZXIgQWRtaW4pXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTeXN0ZW1Nb2R1bGUobW9kdWxlSWQ6IHN0cmluZywgZGF0YTogYW55LCBhY2Nlc3NUb2tlbj86IHN0cmluZykge1xuICBjb25zdCB7IGlzQWRtaW4sIGFkbWluQ2xpZW50IH0gPSBhd2FpdCBjaGVja1N1cGVyQWRtaW5EZXRhaWxlZChhY2Nlc3NUb2tlbilcbiAgXG4gIGlmICghaXNBZG1pbikge1xuICAgIGxvZ2dlci5lcnJvcign4p2MIHVwZGF0ZVN5c3RlbU1vZHVsZTogQWNlc3NvIG5lZ2FkbyAobsOjbyDDqSBTdXBlciBBZG1pbiknKVxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICB9XG5cbiAgaWYgKCFhZG1pbkNsaWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYWRtaW4gY2xpZW50LlwiKVxuICB9XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgYWRtaW5DbGllbnRcbiAgICAuZnJvbSgnc3lzdGVtX21vZHVsZXMnKVxuICAgIC51cGRhdGUoZGF0YSlcbiAgICAuZXEoJ2lkJywgbW9kdWxlSWQpXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKCfinYwgdXBkYXRlU3lzdGVtTW9kdWxlOiBFcnJvIGFvIGF0dWFsaXphciBtw7NkdWxvJywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5U0FTc0IifQ==
}),
"[project]/apps/web/components/ui/switch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: 'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/config/niche-modules.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NICHE_CONCEPTS",
    ()=>NICHE_CONCEPTS,
    "getBusinessConcept",
    ()=>getBusinessConcept,
    "getDefaultModulesForNiche",
    ()=>getDefaultModulesForNiche,
    "monetaryBasedNiches",
    ()=>monetaryBasedNiches
]);
const defaultModules = {
    dashboard: true,
    students: true,
    classes: false,
    financial: true,
    pos: false,
    inventory: false,
    whatsapp: false,
    ai_chat: false,
    scanner: false,
    marketplace: false,
    leads: false,
    gamification: false,
    service_orders: false,
    erp: false,
    multi_unit: false,
    fiscal: false,
    satellite_monitor: false
};
// Grupo A: Aulas/Turmas
const classBasedNiches = [
    'dance',
    'gym',
    'pilates',
    'yoga',
    'crossfit',
    'swim_school',
    'personal',
    'beach_tennis',
    'music_school',
    'language_school',
    'art_studio',
    'cooking_school',
    'photography',
    'tutoring',
    'driving_school',
    'sports_center',
    'martial_arts'
];
// Grupo B: Consultas/Agendamentos Individuais (Usam Classes como Agenda ou Service Orders)
// Vamos priorizar Service Orders para fluxos mais complexos de serviço, e Classes para agendamento simples
const appointmentBasedNiches = [
    'dentist',
    'clinic',
    'beauty',
    'aesthetics',
    'barber',
    'spa',
    'physio',
    'nutrition',
    'podiatry',
    'tanning',
    'vet',
    'clinic_vet',
    'psychology',
    'law',
    'consulting',
    'marketing_agency',
    'dev_studio',
    'interior_design',
    'real_estate',
    'insurance',
    'travel_agency',
    'coworking',
    'tattoo',
    'pet_shop',
    'dog_daycare',
    'pet_hotel',
    'daycare',
    'elderly_care',
    'photographer',
    'event_planning'
];
// Grupo C: Serviços Técnicos/Manutenção/Ordens de Serviço (Forte uso de OS)
const serviceOrderBasedNiches = [
    'auto_detail',
    'mechanic',
    'tech_repair',
    'plumbing',
    'electrician',
    'construction',
    'landscaping',
    'tailoring',
    'cleaning',
    'car_wash',
    'party_venue',
    'logistics',
    'fire_protection',
    'environmental_compliance'
];
const monetaryBasedNiches = [
    'dance',
    'auto_detail',
    'mechanic',
    'tech_repair',
    'car_wash',
    'dentist',
    'clinic',
    'vet',
    'clinic_vet',
    'law',
    'marketing_agency',
    'dev_studio',
    'real_estate',
    'insurance',
    'consulting',
    'plumbing',
    'electrician',
    'construction',
    'logistics',
    'cleaning',
    'interior_design',
    'photographer',
    'event_planning',
    'travel_agency',
    'tailoring',
    'tattoo',
    'barista',
    'confectionery',
    'brewery',
    'wine_club',
    'barber',
    'beauty',
    'aesthetics',
    'spa',
    'tanning',
    'physio',
    'nutrition',
    'podiatry',
    'pet_shop',
    'psychology',
    'pet_hotel',
    'personal',
    'art_studio',
    'cooking_school',
    'tutoring',
    'daycare',
    'elderly_care',
    'driving_school',
    'party_venue',
    'coworking',
    'fire_protection',
    'environmental_compliance'
];
const NICHE_CONCEPTS = {
    // Padroes para nichos baseados em Educação/Fitness (CREDIT)
    DEFAULT_CREDIT: {
        hiddenModules: [],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ]
    },
    // Padroes para nichos baseados em Serviços/Ordens (MONETARY)
    DEFAULT_MONETARY: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'scanner': 'Scanner de Entrada'
        }
    },
    DEFAULT_GENERIC: {
        hiddenModules: [],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial',
            'service-orders'
        ],
        sidebarOverrides: {
            'scanner': 'Scanner',
            'classes': 'Agenda',
            'teachers': 'Profissionais',
            'students': 'Clientes',
            'service-orders': 'Ordens de Serviço'
        }
    },
    // Ajustes específicos por nicho
    dance: {
        hiddenModules: [],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Turmas e Aulas',
            'teachers': 'Professores'
        }
    },
    pilates: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Horários',
            'teachers': 'Instrutores',
            'students': 'Alunos/Clientes'
        }
    },
    yoga: {
        hiddenModules: [
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Práticas/Aulas',
            'teachers': 'Instrutores',
            'students': 'Praticantes'
        }
    },
    beauty: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Procedimentos',
            'teachers': 'Profissionais/Esteticistas',
            'service-orders': 'Ordens de Serviço'
        }
    },
    barber: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Cortes',
            'teachers': 'Barbeiros'
        }
    },
    auto_detail: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'pos',
            'inventory'
        ],
        sidebarOverrides: {
            'scanner': 'Check-in de Veículos',
            'service-orders': 'Serviços/OS',
            'students': 'Clientes (Proprietários)'
        }
    },
    mechanic: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'inventory',
            'financial'
        ],
        sidebarOverrides: {
            'scanner': 'Entrada de Veículos',
            'service-orders': 'Ordens de Serviço'
        }
    },
    event_planning: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'financial',
            'students'
        ],
        sidebarOverrides: {
            'service-orders': 'Eventos/Cronogramas',
            'students': 'Contratantes',
            'classes': 'Agenda de Visitas'
        }
    },
    interior_design: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'service-orders': 'Projetos',
            'students': 'Meus Clientes',
            'teachers': 'Designers/Equipe',
            'classes': 'Agenda de Projetos'
        }
    },
    gym: {
        hiddenModules: [],
        priorityModules: [
            'dashboard',
            'scanner',
            'classes',
            'students'
        ],
        sidebarOverrides: {
            'scanner': 'Catraca/Acesso',
            'classes': 'Grade de Horários'
        }
    },
    aesthetics: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Sessões',
            'teachers': 'Esteticistas',
            'service-orders': 'Procedimentos/OS'
        }
    },
    pet_shop: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Banhos/Tosa',
            'teachers': 'Tosadores/Equipe',
            'students': 'Tutores/Pets'
        }
    },
    vet: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Consultas',
            'teachers': 'Veterinários'
        }
    },
    clinic_vet: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda Médica',
            'teachers': 'Corpo Clínico',
            'students': 'Pacientes (Pets)'
        }
    },
    law: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'service-orders': 'Processos/Casos',
            'students': 'Meus Clientes',
            'classes': 'Agenda de Reuniões'
        }
    },
    dentist: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Consultas',
            'teachers': 'Dentistas/Doutores'
        }
    },
    clinic: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Exames/Consultas',
            'teachers': 'Corpo Médico'
        }
    },
    physio: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Fisioterapia',
            'teachers': 'Fisioterapeutas'
        }
    },
    nutrition: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Consultas',
            'teachers': 'Nutricionistas'
        }
    },
    psychology: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Sessões',
            'teachers': 'Psicólogos'
        }
    },
    car_wash: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'pos',
            'inventory'
        ],
        sidebarOverrides: {
            'scanner': 'Check-in de Veículos',
            'classes': 'Agenda de Lavagens',
            'students': 'Assinantes/Clientes'
        }
    },
    photographer: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Ensaios',
            'service-orders': 'Ensaios/Sessões'
        }
    },
    art_studio: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Workshops/Aulas',
            'teachers': 'Artistas/Instrutores'
        }
    },
    cooking_school: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Aulas',
            'teachers': 'Chefs/Instrutores'
        }
    },
    tattoo: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Agenda de Sessões',
            'teachers': 'Tatuadores'
        }
    },
    coworking: {
        hiddenModules: [
            'ao-vivo',
            'gamification',
            'scanner'
        ],
        priorityModules: [
            'dashboard',
            'classes',
            'students',
            'financial'
        ],
        sidebarOverrides: {
            'classes': 'Reserva de Espaços',
            'students': 'Membros/Coworkers'
        }
    },
    fire_protection: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'scanner',
            'students'
        ],
        sidebarOverrides: {
            'students': 'Clientes (Condomínios)',
            'service-orders': 'Vistorias / OS',
            'scanner': 'Gate Scanner / Validador',
            'classes': 'Lista de Coletas/Entregas',
            'teachers': 'Técnicos/Engenheiros'
        }
    },
    environmental_compliance: {
        hiddenModules: [
            'ao-vivo',
            'gamification'
        ],
        priorityModules: [
            'dashboard',
            'service-orders',
            'scanner',
            'students',
            'satellite-monitor'
        ],
        sidebarOverrides: {
            'students': 'Clientes (Proprietários Rurais)',
            'service-orders': 'Laudos / Vistorias / OS',
            'scanner': 'Documentos / CAR',
            'classes': 'Agenda de Vistorias',
            'teachers': 'Engenheiros / Técnicos',
            'satellite-monitor': 'Monitor Satélite'
        }
    }
};
function getBusinessConcept(niche) {
    if (NICHE_CONCEPTS[niche]) return NICHE_CONCEPTS[niche];
    if (monetaryBasedNiches.includes(niche)) {
        return NICHE_CONCEPTS.DEFAULT_MONETARY;
    }
    // Fallback para um conceito genérico se o nicho não for encontrado
    return NICHE_CONCEPTS.DEFAULT_GENERIC || NICHE_CONCEPTS.DEFAULT_CREDIT;
}
// Grupo D: Varejo/Estoque
const retailBasedNiches = [
    'pet_shop',
    'confectionery',
    'brewery',
    'wine_club',
    'barista',
    'auto_detail',
    'mechanic',
    'tech_repair',
    'beauty',
    'barber',
    'spa' // Muitas vezes vendem produtos
];
function getDefaultModulesForNiche(niche) {
    const modules = {
        ...defaultModules
    };
    // 1. Lógica baseada em Grupo Principal
    if (classBasedNiches.includes(niche)) {
        modules.classes = true;
        // Ativar gamification APENAS se o modelo de negócio não for monetário
        if (!monetaryBasedNiches.includes(niche)) {
            modules.gamification = true;
        }
    }
    if (appointmentBasedNiches.includes(niche)) {
        // Para estética/barbearia/saúde, classes funciona bem como agenda de horários
        modules.classes = true;
        // Mas também podem querer OS para procedimentos complexos
        if ([
            'dentist',
            'clinic',
            'mechanic',
            'tech_repair'
        ].includes(niche)) {
            modules.service_orders = true;
        }
    }
    if (serviceOrderBasedNiches.includes(niche)) {
        modules.service_orders = true;
        modules.inventory = true; // Geralmente usam peças/produtos
        // Para esses, 'classes' (agenda de turmas) faz menos sentido, 
        // mas se usarmos a lógica de "Agenda de Recursos", poderíamos manter true.
        // Vamos manter true pois o "Agendamento" é vital, mesmo que via OS.
        // Se o sistema usar 'classes' para agendar a entrada, precisa estar true.
        modules.classes = true;
    }
    // 2. Adicionais de Varejo/Estoque
    if (retailBasedNiches.includes(niche)) {
        modules.pos = true;
        modules.inventory = true;
        modules.marketplace = true;
        modules.fiscal = true;
    }
    // 3. Ajustes Específicos por Nicho
    switch(niche){
        case 'auto_detail':
        case 'mechanic':
        case 'car_wash':
            modules.service_orders = true;
            modules.scanner = true; // Para entrada/saída de veículos
            modules.inventory = true;
            break;
        case 'dance':
            modules.scanner = true; // QR Code portaria
            modules.gamification = true;
            break;
        case 'gym':
        case 'crossfit':
        case 'martial_arts':
            modules.scanner = true; // Controle de acesso de alunos
            modules.gamification = true;
            break;
        case 'confectionery':
        case 'brewery':
            modules.pos = true;
            modules.inventory = true;
            modules.service_orders = true; // Para encomendas
            break;
        case 'coworking':
        case 'party_venue':
            modules.classes = true; // Reserva de salas/espaços
            break;
        case 'aesthetics':
        case 'physio':
        case 'nutrition':
        case 'podiatry':
        case 'tanning':
        case 'psychology':
        case 'vet':
        case 'clinic_vet':
        case 'law':
        case 'travel_agency':
        case 'insurance':
            modules.service_orders = true; // Para procedimentos/processos longos
            modules.marketplace = true;
            modules.pos = true;
            modules.inventory = true;
            break;
        case 'dog_daycare':
        case 'daycare':
        case 'pet_hotel':
            modules.scanner = true; // Entrada/Saída
            modules.marketplace = true;
            modules.pos = true;
            modules.inventory = true;
            modules.gamification = true;
            break;
        case 'elderly_care':
            modules.scanner = true;
            modules.marketplace = true;
            modules.pos = true;
            modules.inventory = true;
            break;
        case 'interior_design':
        case 'real_estate':
        case 'consulting':
        case 'marketing_agency':
        case 'dev_studio':
        case 'event_planning':
        case 'photographer':
        case 'tattoo':
            modules.service_orders = true; // Gerenciamento de projetos/ensaios/sessões
            break;
        case 'logistics':
            modules.service_orders = true;
            modules.inventory = true;
            modules.scanner = true;
            break;
        case 'fire_protection':
            modules.service_orders = true;
            modules.scanner = true;
            modules.inventory = true;
            modules.classes = true; // Lista de Coletas
            modules.fiscal = true;
            break;
        case 'environmental_compliance':
            modules.service_orders = true;
            modules.scanner = true;
            modules.classes = true;
            modules.leads = true;
            modules.whatsapp = true;
            modules.multi_unit = true;
            modules.satellite_monitor = true;
            modules.fiscal = true;
            break;
    }
    return modules;
}
}),
"[project]/apps/web/lib/constants/storage-keys.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chaves de localStorage padronizadas para o ecossistema akaaicore.
 *
 * IMPORTANTE: Cada verticalização tem uma chave específica para contexto de usuário,
 * mas TODAS compartilham a mesma estrutura de dados:
 * { id, name, email, role, studio_id, studioId, studioName, studioSlug }
 *
 * A chave legada "danceflow_user" é mantida por retrocompatibilidade nas verticalizações
 * que já estavam em produção (fire-protection, estudio-de-danca).
 */ __turbopack_context__.s([
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS,
    "clearLocalUser",
    ()=>clearLocalUser,
    "getLocalUser",
    ()=>getLocalUser,
    "getSessionKey",
    ()=>getSessionKey
]);
const STORAGE_KEYS = {
    // Sessão de usuário por verticalização
    DANCEFLOW_USER: 'danceflow_user',
    AGROFLOW_USER: 'workflow_user',
    WORKFLOW_USER: 'danceflow_user',
    // Estúdio/tenant ativo
    ACTIVE_STUDIO: 'workflow_pro_active_studio',
    // Preferências globais
    LANGUAGE: 'workflow_pro_lang'
};
function getSessionKey(verticalization) {
    if (verticalization === 'agroflowai') return STORAGE_KEYS.AGROFLOW_USER;
    return STORAGE_KEYS.DANCEFLOW_USER;
}
function getLocalUser(verticalization) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const key = undefined;
    const raw = undefined;
}
function clearLocalUser(verticalization) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$password$2d$strength$2d$meter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/password-strength-meter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$password$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/password-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$validation$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/validation-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$5fe124__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/data:5fe124 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$niche$2d$modules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/niche-modules.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$storage$2d$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/constants/storage-keys.ts [app-ssr] (ecmascript)");
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
const NICHE_ID = 'dance';
const VERTICALIZATION_SLUG = 'estudio-de-danca';
const DANCE_SESSION_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$storage$2d$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionKey"])('estudio-de-danca');
const benefits = [
    "14 dias de teste grátis (Estúdio)",
    "Chamada digital e frequência automática",
    "Portal do Responsável / Aluno",
    "Cobranças e mensalidades automáticas",
    "WhatsApp e comunicados automáticos"
];
function RegisterContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialStudioId = searchParams.get('studioId') || undefined;
    const inviteCode = searchParams.get('code') || undefined;
    const initialRoleFromUrl = searchParams.get('role');
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(inviteCode ? initialRoleFromUrl === 'teacher' ? 'teacher' : 'student' : initialStudioId && initialRoleFromUrl === 'finance' ? 'finance' : initialRoleFromUrl || 'admin');
    const [inviteStudioName, setInviteStudioName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inviteLoading, setInviteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!inviteCode);
    const [plan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('custom');
    const [loadingPlans, setLoadingPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [systemModules, setSystemModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedModules, setSelectedModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [customTotal, setCustomTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        taxId: "",
        studioName: "",
        password: "",
        confirmPassword: ""
    });
    const [taxIdType, setTaxIdType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('cnpj');
    const [isEmailVerified, setIsEmailVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [codeSent, setCodeSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSendingCode, setIsSendingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVerifyingCode, setIsVerifyingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSendCode = async ()=>{
        if (!formData.email || !formData.email.includes("@")) {
            toast({
                title: "E-mail inválido",
                description: "Preencha seu e-mail para receber o código.",
                variant: "destructive"
            });
            return;
        }
        setIsSendingCode(true);
        try {
            const response = await fetch("/api/auth/verify-email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email
                })
            });
            const data = await response.json();
            if (response.ok) {
                setCodeSent(true);
                toast({
                    title: "Código enviado!",
                    description: "Verifique seu e-mail."
                });
            } else {
                toast({
                    title: "Erro ao enviar código",
                    description: data.error,
                    variant: "destructive"
                });
            }
        } catch  {
            toast({
                title: "Erro de conexão",
                variant: "destructive"
            });
        } finally{
            setIsSendingCode(false);
        }
    };
    const handleVerifyCode = async ()=>{
        if (verificationCode.length !== 6) {
            toast({
                title: "Código inválido",
                description: "O código deve ter 6 dígitos.",
                variant: "destructive"
            });
            return;
        }
        setIsVerifyingCode(true);
        try {
            const response = await fetch("/api/auth/verify-email/confirm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email,
                    code: verificationCode
                })
            });
            const data = await response.json();
            if (response.ok) {
                setIsEmailVerified(true);
                toast({
                    title: "E-mail verificado!"
                });
            } else {
                toast({
                    title: "Código incorreto",
                    description: data.error || "Código inválido ou expirado.",
                    variant: "destructive"
                });
            }
        } catch  {
            toast({
                title: "Erro de conexão",
                variant: "destructive"
            });
        } finally{
            setIsVerifyingCode(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inviteCode) return;
        async function resolveInvite() {
            try {
                const roleParam = initialRoleFromUrl === 'teacher' ? 'teacher' : 'student';
                const res = await fetch(`/api/dance-studio/matricula?code=${inviteCode}&role=${roleParam}`);
                if (res.ok) {
                    const data = await res.json();
                    setInviteStudioName(data.studio_name || null);
                }
            } catch  {} finally{
                setInviteLoading(false);
            }
        }
        resolveInvite();
    }, [
        inviteCode,
        initialRoleFromUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadData() {
            try {
                const [modulesData] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$data$3a$5fe124__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSystemModules"])()
                ]);
                setSystemModules(modulesData || []);
                const suggestedModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$niche$2d$modules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultModulesForNiche"])(NICHE_ID);
                const initialSelected = {};
                modulesData?.forEach((m)=>{
                    if (m.id in suggestedModules) {
                        initialSelected[m.id] = suggestedModules[m.id];
                    } else if (m.active && Number(m.price) === 0) {
                        initialSelected[m.id] = true;
                    }
                });
                setSelectedModules(initialSelected);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error loading plans/modules:', err);
            } finally{
                setLoadingPlans(false);
            }
        }
        loadData();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (plan === 'custom') {
            const total = systemModules.reduce((acc, mod)=>{
                if (selectedModules[mod.id]) {
                    return acc + Number(mod.price);
                }
                return acc;
            }, 0);
            setCustomTotal(total);
        }
    }, [
        selectedModules,
        plan,
        systemModules
    ]);
    const formatTaxId = (value, type)=>{
        const digits = value.replace(/\D/g, "");
        if (type === 'cpf') {
            return digits.slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        return digits.slice(0, 14).replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$3").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    };
    const handleTaxIdChange = (e)=>{
        const docType = role === 'admin' ? taxIdType : 'cpf';
        setFormData({
            ...formData,
            taxId: formatTaxId(e.target.value, docType)
        });
    };
    const handlePhoneChange = (e)=>{
        const digits = e.target.value.replace(/\D/g, "");
        const formatted = digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
        setFormData({
            ...formData,
            phone: formatted
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isEmailVerified) {
            toast({
                title: "E-mail não verificado",
                description: "Verifique seu e-mail antes de continuar.",
                variant: "destructive"
            });
            return;
        }
        const isValidTaxId = role === 'admin' ? taxIdType === 'cpf' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$validation$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCPF"])(formData.taxId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$validation$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCNPJ"])(formData.taxId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$validation$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCPF"])(formData.taxId);
        if (!isValidTaxId) {
            toast({
                title: "Documento inválido",
                description: `Insira um ${role === 'admin' ? taxIdType.toUpperCase() : 'CPF'} válido.`,
                variant: "destructive"
            });
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "Senhas não coincidem",
                variant: "destructive"
            });
            return;
        }
        const strength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$password$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPasswordStrength"])(formData.password);
        if (strength.score < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$password$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_STRONG_PASSWORD_SCORE"]) {
            toast({
                title: "Senha muito fraca",
                description: "Siga os requisitos de senha segura.",
                variant: "destructive"
            });
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    role,
                    studioId: role === 'finance' || role === 'student' ? initialStudioId : undefined,
                    niche: NICHE_ID,
                    businessModel: 'CREDIT',
                    plan: role === 'admin' ? plan : undefined,
                    taxId: formData.taxId,
                    taxIdType: role === 'admin' ? taxIdType : 'cpf',
                    modules: role === 'admin' && plan === 'custom' ? Object.keys(selectedModules).filter((k)=>selectedModules[k]) : undefined,
                    language: 'pt',
                    verticalizationSlug: role === 'admin' ? VERTICALIZATION_SLUG : undefined
                })
            });
            const data = await response.json();
            if (response.ok && data.success) {
                localStorage.setItem(DANCE_SESSION_KEY, JSON.stringify(data.user));
                if (data.session) await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.setSession(data.session);
                // Auto-vincular ao estúdio se veio de link de convite (aluno ou professor)
                if (inviteCode && (role === 'student' || role === 'teacher') && data.session?.access_token) {
                    try {
                        const vincularRes = await fetch('/api/dance-studio/vincular', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${data.session.access_token}`
                            },
                            body: JSON.stringify({
                                invite_code: inviteCode
                            })
                        });
                        if (!vincularRes.ok) {
                            const vincularErr = await vincularRes.json().catch(()=>({}));
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].warn('Vincular retornou erro:', vincularErr);
                        }
                    } catch (err) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].warn('Falha ao vincular ao estúdio:', err);
                    }
                }
                toast({
                    title: "Conta criada com sucesso!",
                    description: inviteStudioName ? `Bem-vindo ao ${inviteStudioName}!` : "Bem-vindo ao DanceFlow!"
                });
                await new Promise((resolve)=>setTimeout(resolve, 400));
                if (role === 'student') router.push("/solutions/estudio-de-danca/student");
                else if (role === 'teacher') router.push("/solutions/estudio-de-danca/teacher");
                else router.push("/solutions/estudio-de-danca/dashboard");
            } else {
                toast({
                    title: "Erro no cadastro",
                    description: data.error || "Não foi possível criar sua conta.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error('Erro ao registrar:', error);
            toast({
                title: "Erro de conexão",
                description: "Verifique sua internet.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-950 flex relative font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/solutions/estudio-de-danca",
                className: "absolute top-6 left-6 z-50 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    " Voltar"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-800 via-violet-700 to-pink-700 p-12 flex-col justify-between relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ],
                                rotate: [
                                    0,
                                    90,
                                    0
                                ],
                                opacity: [
                                    0.1,
                                    0.2,
                                    0.1
                                ]
                            },
                            transition: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute -top-1/4 -left-1/4 w-full h-full border-[100px] border-white/10 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/solutions/estudio-de-danca",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                    className: "w-6 h-6 text-violet-600"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-black text-white tracking-tighter",
                                children: [
                                    "Dance",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-violet-200",
                                        children: "Flow"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl font-black text-white mb-10 leading-[0.9] tracking-tighter",
                                children: [
                                    "Pronto para ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-100 to-white",
                                        children: "Modernizar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 21
                                    }, this),
                                    "seu Estúdio?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-6",
                                children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.4 + index * 0.1
                                        },
                                        className: "flex items-center gap-4 text-white/90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold tracking-tight",
                                                children: benefit
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/20 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex -space-x-3",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-slate-800 border-2 border-violet-500 flex items-center justify-center text-xs font-black text-white",
                                                children: String.fromCharCode(64 + i)
                                            }, i, false, {
                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black text-white/80 uppercase tracking-[0.2em]",
                                        children: "+500 Estúdios"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/80 leading-relaxed font-medium",
                                children: [
                                    "O ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: "DanceFlow"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    " transformou minha gestão. Antes eu passava horas com planilhas, agora tudo é automático."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex gap-0.5",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "⭐"
                                    }, i, false, {
                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 39
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center p-6 md:p-8 overflow-y-auto bg-slate-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xl my-8 md:my-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "rounded-2xl border border-white/10 py-6 px-6 md:px-8 bg-slate-900 shadow-2xl shadow-black/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "text-center pb-0 px-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-2xl md:text-3xl font-black text-white tracking-tight",
                                            children: "Criar Nova Conta"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            className: "text-slate-400 font-medium text-sm mt-1",
                                            children: "Escolha seu perfil e comece agora mesmo"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "px-0 pt-4",
                                    children: [
                                        inviteCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-4 rounded-xl bg-violet-600/10 border border-violet-500/20 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                                    className: "w-5 h-5 text-violet-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: inviteLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-slate-300",
                                                        children: "Verificando convite..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, this) : inviteStudioName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-bold text-white",
                                                                children: [
                                                                    "Convite de ",
                                                                    inviteStudioName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-400",
                                                                children: "Ao criar sua conta, você será vinculado automaticamente."
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-slate-300",
                                                        children: "Cadastro via link de convite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this) : initialStudioId && role === 'finance' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-4 rounded-xl bg-violet-600/10 border border-violet-500/20 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-5 h-5 text-violet-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-slate-300",
                                                    children: "Financeiro — cadastro via convite do estúdio"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",
                                            children: [
                                                {
                                                    id: 'admin',
                                                    label: 'Estúdio',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                                                    desc: 'Dono'
                                                },
                                                {
                                                    id: 'teacher',
                                                    label: 'Professor',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                                                    desc: 'Docente'
                                                },
                                                {
                                                    id: 'finance',
                                                    label: 'Financeiro',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                                    desc: 'Contas'
                                                },
                                                {
                                                    id: 'student',
                                                    label: 'Aluno',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                                                    desc: 'Responsável'
                                                }
                                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setRole(r.id),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 transition-all duration-200 min-h-[88px]", role === r.id ? "border-violet-600 bg-violet-600/15 shadow-lg shadow-violet-600/20 text-white" : "border-white/5 bg-slate-800/50 text-slate-500 hover:border-white/15 hover:text-slate-300"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(r.icon, {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", role === r.id ? "text-violet-500" : "text-slate-500")
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold uppercase tracking-wider",
                                                            children: r.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[10px] opacity-70", role === r.id ? "text-violet-400/80" : "text-slate-500"),
                                                            children: r.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: "Nome Completo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Nome do Responsável",
                                                                    value: formData.name,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            name: e.target.value
                                                                        }),
                                                                    required: true,
                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl focus:border-violet-500/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "flex justify-between text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: role === 'admin' ? 'Documento (CPF/CNPJ)' : 'CPF'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setTaxIdType('cpf'),
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-0.5 rounded text-[9px] font-black", taxIdType === 'cpf' ? "bg-violet-600 text-white" : "bg-slate-800 text-slate-500"),
                                                                                    children: "CPF"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 441,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setTaxIdType('cnpj'),
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-0.5 rounded text-[9px] font-black", taxIdType === 'cnpj' ? "bg-violet-600 text-white" : "bg-slate-800 text-slate-500"),
                                                                                    children: "CNPJ"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 442,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: role === 'admin' ? taxIdType === 'cnpj' ? "00.000.000/0001-00" : "000.000.000-00" : "000.000.000-00",
                                                                    value: formData.taxId,
                                                                    onChange: handleTaxIdChange,
                                                                    required: true,
                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl focus:border-violet-500/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full sm:col-span-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "flex items-center gap-2 text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: [
                                                                        "E-mail",
                                                                        isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "w-4 h-4 text-emerald-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 458,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            type: "email",
                                                                            placeholder: "seu@email.com",
                                                                            value: formData.email,
                                                                            onChange: (e)=>{
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    email: e.target.value
                                                                                });
                                                                                if (e.target.value !== formData.email) {
                                                                                    setIsEmailVerified(false);
                                                                                    setCodeSent(false);
                                                                                    setVerificationCode("");
                                                                                }
                                                                            },
                                                                            required: true,
                                                                            className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl focus:border-violet-500/50 flex-1",
                                                                            disabled: codeSent && !isEmailVerified
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        !codeSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            onClick: handleSendCode,
                                                                            disabled: isSendingCode || !formData.email?.includes("@"),
                                                                            className: "h-12 shrink-0 border-white/10 text-white hover:bg-violet-600/20",
                                                                            children: [
                                                                                isSendingCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                    className: "w-4 h-4 animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 44
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 91
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ml-1.5 hidden sm:inline",
                                                                                    children: isSendingCode ? "..." : "Enviar código"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 487,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 25
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 21
                                                                }, this),
                                                                codeSent && !isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1.5 pt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2 items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    placeholder: "000000",
                                                                                    maxLength: 6,
                                                                                    value: verificationCode,
                                                                                    onChange: (e)=>setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6)),
                                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 w-32 text-center text-lg tracking-[0.5em] font-mono rounded-xl"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 494,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    type: "button",
                                                                                    variant: "default",
                                                                                    size: "sm",
                                                                                    onClick: handleVerifyCode,
                                                                                    disabled: isVerifyingCode || verificationCode.length !== 6,
                                                                                    className: "h-12 bg-violet-600 hover:bg-violet-700",
                                                                                    children: isVerifyingCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                        className: "w-4 h-4 animate-spin"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                        lineNumber: 509,
                                                                                        columnNumber: 48
                                                                                    }, this) : "Verificar"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 501,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleSendCode(),
                                                                            disabled: isSendingCode,
                                                                            className: "text-xs text-slate-500 hover:text-slate-300 underline",
                                                                            children: isSendingCode ? "Enviando..." : "Reenviar código"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 512,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full sm:col-span-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: "WhatsApp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "(00) 00000-0000",
                                                                    value: formData.phone,
                                                                    onChange: handlePhoneChange,
                                                                    required: true,
                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl focus:border-violet-500/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 19
                                                        }, this),
                                                        role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: "Nome do Estúdio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Ex: Studio Ballet Clássico",
                                                                    value: formData.studioName,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            studioName: e.target.value
                                                                        }),
                                                                    required: true,
                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl focus:border-violet-500/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this),
                                                        role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 col-span-full pt-2",
                                                            children: loadingPlans ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-center py-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "w-6 h-6 animate-spin text-violet-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                                className: "border-dashed border-2 border-violet-500/30 bg-violet-500/5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                                    className: "p-6 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                                            children: systemModules.map((mod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between p-3 bg-slate-900/50 rounded-xl border border-white/5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex flex-col",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs font-bold text-white uppercase tracking-tighter",
                                                                                                    children: mod.label
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                                    lineNumber: 561,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-[9px] text-slate-500",
                                                                                                    children: Number(mod.price) === 0 ? "Grátis" : `+ R$ ${Number(mod.price)}`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                                    lineNumber: 562,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                            lineNumber: 560,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Switch"], {
                                                                                            checked: selectedModules[mod.id] || false,
                                                                                            onCheckedChange: (c)=>setSelectedModules((prev)=>({
                                                                                                        ...prev,
                                                                                                        [mod.id]: c
                                                                                                    })),
                                                                                            disabled: Number(mod.price) === 0 && mod.active
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                            lineNumber: 564,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, mod.id, true, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 559,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 557,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pt-4 border-t border-white/10 flex justify-between items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-black text-white uppercase tracking-widest",
                                                                                    children: "Total Estimado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 573,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-2xl font-black text-violet-500",
                                                                                    children: [
                                                                                        "R$ ",
                                                                                        customTotal
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                    lineNumber: 574,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 572,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full sm:col-span-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: "Criar Senha"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            type: showPassword ? "text" : "password",
                                                                            placeholder: "Mínimo 8 caracteres",
                                                                            value: formData.password,
                                                                            onChange: (e)=>setFormData({
                                                                                    ...formData,
                                                                                    password: e.target.value
                                                                                }),
                                                                            required: true,
                                                                            className: "bg-slate-800/50 border-white/5 text-white h-12 pr-12 rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 585,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setShowPassword(!showPassword),
                                                                            className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors",
                                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                lineNumber: 594,
                                                                                columnNumber: 41
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                                lineNumber: 594,
                                                                                columnNumber: 74
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 col-span-full sm:col-span-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-slate-300 font-bold uppercase tracking-widest text-[10px]",
                                                                    children: "Confirmar Senha"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: showPassword ? "text" : "password",
                                                                    placeholder: "Repita sua senha",
                                                                    value: formData.confirmPassword,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            confirmPassword: e.target.value
                                                                        }),
                                                                    required: true,
                                                                    className: "bg-slate-800/50 border-white/5 text-white h-12 rounded-xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$password$2d$strength$2d$meter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordStrengthMeter"], {
                                                        password: formData.password
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    className: "w-full bg-violet-600 hover:bg-violet-700 text-white font-black h-16 rounded-2xl text-lg shadow-xl shadow-violet-600/20 hover:scale-[1.02] transition-all",
                                                    disabled: isLoading || !isEmailVerified,
                                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-6 h-6 mr-3 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                                lineNumber: 622,
                                                                columnNumber: 23
                                                            }, this),
                                                            " PROCESSANDO..."
                                                        ]
                                                    }, void 0, true) : "CRIAR MINHA CONTA GRÁTIS"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 font-medium",
                                                children: [
                                                    "Já tem uma conta?",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/solutions/estudio-de-danca/login",
                                                        className: "text-violet-500 hover:text-violet-400 font-bold underline underline-offset-4",
                                                        children: "Fazer Login"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[10px] text-slate-500 mt-8 px-8 leading-relaxed uppercase tracking-widest",
                            children: [
                                "Ao criar sua conta, você concorda com nossos ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-slate-300 underline",
                                    children: "Termos"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 58
                                }, this),
                                " e ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-slate-300 underline",
                                    children: "Privacidade"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 126
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
function RegisterPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin text-violet-600"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
                lineNumber: 653,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
            lineNumber: 652,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RegisterContent, {}, void 0, false, {
            fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
            lineNumber: 656,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/solutions/estudio-de-danca/register/page.tsx",
        lineNumber: 651,
        columnNumber: 5
    }, this);
}
}),
];

//# debugId=34b35672-ebe6-9923-3067-68280a9fabdb
//# sourceMappingURL=apps_web_b9a2b2da._.js.map