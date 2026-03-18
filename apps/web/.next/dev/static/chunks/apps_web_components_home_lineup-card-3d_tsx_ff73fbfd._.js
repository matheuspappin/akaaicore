;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="3ff2dda6-8612-e993-88b5-fbca22c6ad8a")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/home/lineup-card-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineupCard3D",
    ()=>LineupCard3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Shader 4D Parallax: vertex displacement para profundidade real + UV offset interativo
const parallaxVertex = `
  uniform vec2 uMouseOffset;
  uniform float uDepthFactor;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Displacement 3D: vértices se deslocam conforme mouse e profundidade (parallax real)
    vec3 pos = position;
    float depthScale = 0.15 * uDepthFactor;
    pos.x += uMouseOffset.x * depthScale;
    pos.y += uMouseOffset.y * depthScale;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;
const parallaxFragment = `
  uniform sampler2D uTexture;
  uniform vec2 uMouseOffset;
  uniform float uTime;
  uniform float uDepthFactor;
  uniform float uDriftSpeed;
  varying vec2 vUv;
  void main() {
    float driftX = sin(uTime * uDriftSpeed) * 0.025;
    float driftY = cos(uTime * uDriftSpeed * 0.7) * 0.02;
    vec2 offset = uMouseOffset * (0.12 + uDepthFactor * 0.18) + vec2(driftX, driftY);
    vec2 uv = vUv + offset;
    vec4 tex = texture2D(uTexture, uv);
    float edge = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
    edge *= smoothstep(0.0, 0.04, vUv.x) * smoothstep(1.0, 0.96, vUv.x);
    gl_FragColor = vec4(tex.rgb, tex.a * (0.88 + 0.12 * edge));
  }
`;
// Shader futurista: gradientes neon animados
const futuristicVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const futuristicFragment = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;
  void main() {
    float t = uTime * 0.4;
    float n1 = sin(vUv.x * 12.0 + t) * sin(vUv.y * 8.0 + t * 0.8) * 0.5 + 0.5;
    float n2 = sin((vUv.x + vUv.y) * 7.0 + t * 1.3) * 0.5 + 0.5;
    float grid = max(sin(vUv.x * 40.0) * sin(vUv.y * 30.0), 0.0);
    grid = pow(grid, 8.0) * (0.3 + 0.2 * sin(t * 2.0));
    vec3 col = mix(uColor1, uColor2, n1);
    col = mix(col, uColor3, n2 * 0.6);
    col += grid * vec3(1.0, 1.0, 1.0);
    float edge = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
    col *= 0.5 + 0.5 * edge;
    gl_FragColor = vec4(col, 0.98);
  }
`;
// DanceFlow: shader temático — fitas de dança, ondas rítmicas, luzes de palco
const danceFlowVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const danceFlowFragment = `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    float t = uTime * 1.2;
    // Ondas rítmicas (batida de música)
    float beat = 0.75 + 0.25 * sin(t * 5.0);
    // Fitas verticais fluindo (movimento de dança / coreografia)
    float ribbon1 = sin(vUv.x * 10.0 + t) * sin(vUv.y * 8.0 + t * 0.7) * 0.5 + 0.5;
    float ribbon2 = sin((vUv.x - vUv.y * 1.2) * 6.0 + t * 1.8) * 0.5 + 0.5;
    float ribbon3 = sin((vUv.x + vUv.y) * 4.0 - t * 1.2) * 0.5 + 0.5;
    // Luz de holofote (palco de estúdio)
    vec2 spotCenter = vec2(0.5 + sin(t * 0.4) * 0.12, 0.5 + cos(t * 0.3) * 0.08);
    float spotlight = 1.0 - 0.5 * length(vUv - spotCenter);
    spotlight = pow(max(spotlight, 0.0), 1.2);
    // Cores de estúdio de dança (roxo, magenta, rosa)
    vec3 purple = vec3(0.55, 0.12, 0.92);
    vec3 magenta = vec3(0.92, 0.18, 0.65);
    vec3 pink = vec3(1.0, 0.45, 0.82);
    vec3 col = mix(purple, magenta, ribbon1);
    col = mix(col, pink, ribbon2 * 0.6);
    col += ribbon3 * 0.08 * vec3(1.0, 0.9, 1.0);
    col *= beat * (0.9 + 0.1 * spotlight);
    // Brilho nas bordas (espelho de estúdio)
    float edge = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
    col *= 0.65 + 0.35 * edge;
    gl_FragColor = vec4(col, 0.95);
  }
`;
const FUTURISTIC_THEMES = {
    fire: [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0.15, 0.05),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.8, 0.35, 0),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.4, 0.05, 0.15)
    ],
    agro: [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.9, 0.5),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.2, 0.6, 0.9),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.05, 0.4, 0.3)
    ],
    dance: [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.8, 0.2, 1),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.5, 0.1, 0.8),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0.4, 0.7)
    ]
};
// 4D Parallax interativo: 5 camadas de profundidade + tilt 3D + vertex displacement + animação
function ParallaxImagePlane({ imageSrc, pointerRef, aspect, index }) {
    _s();
    const { gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(imageSrc);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    texture.wrapS = texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.generateMipmaps = true;
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    const planeHeight = 2.2;
    const planeWidth = planeHeight * aspect;
    const layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParallaxImagePlane.useMemo[layers]": ()=>[
                {
                    z: -0.25,
                    depthFactor: 0.15,
                    scale: 1.12,
                    driftSpeed: 0.12
                },
                {
                    z: -0.1,
                    depthFactor: 0.35,
                    scale: 1.06,
                    driftSpeed: 0.18
                },
                {
                    z: 0,
                    depthFactor: 0.6,
                    scale: 1.0,
                    driftSpeed: 0.25
                },
                {
                    z: 0.12,
                    depthFactor: 0.82,
                    scale: 0.96,
                    driftSpeed: 0.32
                },
                {
                    z: 0.22,
                    depthFactor: 1.0,
                    scale: 0.92,
                    driftSpeed: 0.4
                }
            ]
    }["ParallaxImagePlane.useMemo[layers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParallaxImagePlane.useFrame": (state, delta)=>{
            if (!pointerRef.current || !groupRef.current) return;
            const p = pointerRef.current;
            const t = state.clock.elapsedTime;
            // Parallax UV + vertex: forte interação com mouse (profundidade 4D)
            const parallaxStrength = 0.22;
            const mx = p.hover ? p.x * parallaxStrength : 0;
            const my = p.hover ? p.y * parallaxStrength : 0;
            // Tilt 3D no hover: inclinação da cena conforme cursor (efeito "olhar para dentro")
            const tiltAmount = 0.35;
            targetRotation.current.y = p.hover ? p.x * tiltAmount : 0;
            targetRotation.current.x = p.hover ? -p.y * tiltAmount * 0.7 : 0;
            const lerp = 1 - Math.exp(-12 * delta);
            currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerp;
            currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerp;
            groupRef.current.rotation.x = currentRotation.current.x;
            groupRef.current.rotation.y = currentRotation.current.y;
            // Pulso sutil + float
            const pulse = Math.sin(t * 0.4 + index * 0.7) * 0.012;
            groupRef.current.position.z = pulse;
            groupRef.current.children.forEach({
                "ParallaxImagePlane.useFrame": (mesh, i)=>{
                    const mat = mesh.material;
                    if (mat?.uniforms) {
                        mat.uniforms.uMouseOffset.value.set(mx, my);
                        mat.uniforms.uTime.value = t;
                    }
                }
            }["ParallaxImagePlane.useFrame"]);
        }
    }["ParallaxImagePlane.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 1.2,
        rotationIntensity: 0,
        floatIntensity: 0.06,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            children: layers.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        layer.z
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                planeWidth * layer.scale,
                                planeHeight * layer.scale
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                            vertexShader: parallaxVertex,
                            fragmentShader: parallaxFragment,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            transparent: true,
                            depthWrite: i === 2,
                            uniforms: {
                                uTexture: {
                                    value: texture
                                },
                                uMouseOffset: {
                                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                                },
                                uTime: {
                                    value: 0
                                },
                                uDepthFactor: {
                                    value: layer.depthFactor
                                },
                                uDriftSpeed: {
                                    value: layer.driftSpeed
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s(ParallaxImagePlane, "iCxvH7esirgzPv7up5494g8tTZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParallaxImagePlane;
function PointerTracker({ pointerRef }) {
    _s1();
    const { pointer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PointerTracker.useFrame": ()=>{
            if (!pointerRef.current) return;
            current.current.x += (pointer.x - current.current.x) * 0.22;
            current.current.y += (pointer.y - current.current.y) * 0.22;
            pointerRef.current.x = current.current.x;
            pointerRef.current.y = current.current.y;
        }
    }["PointerTracker.useFrame"]);
    return null;
}
_s1(PointerTracker, "kjtehoM81LDeNj8eca0k+LCVDjI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = PointerTracker;
function ViewportProvider({ children }) {
    _s2();
    const { viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = viewport.width / viewport.height;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children(aspect)
    }, void 0, false);
}
_s2(ViewportProvider, "6JpWNUbsZ0/v1F2PQOyht8yDdjc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c2 = ViewportProvider;
function FuturisticPlane({ index, pointerRef, aspect, theme }) {
    _s3();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colors = FUTURISTIC_THEMES[theme];
    const planeHeight = 2;
    const planeWidth = planeHeight * aspect;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FuturisticPlane.useFrame": (state, delta)=>{
            if (!meshRef.current || !pointerRef.current) return;
            if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            const p = pointerRef.current;
            const tiltAmount = 0.25;
            targetRotation.current.y = p.hover ? p.x * tiltAmount : 0;
            targetRotation.current.x = p.hover ? -p.y * tiltAmount * 0.8 : 0;
            const t = 1 - Math.exp(-10 * delta);
            currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * t;
            currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * t;
            meshRef.current.rotation.x = currentRotation.current.x;
            meshRef.current.rotation.y = currentRotation.current.y;
            const pulse = Math.sin(state.clock.elapsedTime * 0.4 + index * 0.7) * 0.015;
            meshRef.current.position.z = pulse;
        }
    }["FuturisticPlane.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 1.2,
        rotationIntensity: 0.05,
        floatIntensity: 0.08,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: meshRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        planeWidth,
                        planeHeight
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                    ref: matRef,
                    vertexShader: futuristicVertex,
                    fragmentShader: futuristicFragment,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uColor1: {
                            value: colors[0]
                        },
                        uColor2: {
                            value: colors[1]
                        },
                        uColor3: {
                            value: colors[2]
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
            lineNumber: 297,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_s3(FuturisticPlane, "8XbAw6w8XC5boQwNPiOXq3dv5Z0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = FuturisticPlane;
// Partículas de movimento (traços de dança)
function DanceFlowParticles({ pointerRef }) {
    _s4();
    const count = 80;
    const { positions, phases, speeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DanceFlowParticles.useMemo": ()=>{
            const pos = new Float32Array(count * 3);
            const phs = new Float32Array(count);
            const spd = new Float32Array(count);
            for(let i = 0; i < count; i++){
                pos[i * 3] = (Math.random() - 0.5) * 2.5;
                pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
                pos[i * 3 + 2] = 0.02;
                phs[i] = Math.random() * Math.PI * 2;
                spd[i] = 0.8 + Math.random() * 1.2;
            }
            return {
                positions: pos,
                phases: phs,
                speeds: spd
            };
        }
    }["DanceFlowParticles.useMemo"], []);
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const danceParticleVertex = `
    attribute float aPhase;
    attribute float aSpeed;
    uniform float uTime;
    varying float vAlpha;
    void main() {
      float wave = sin(position.x * 3.0 + uTime * aSpeed + aPhase) * 0.15;
      vec3 pos = position + vec3(0.0, wave, 0.0);
      vAlpha = 0.6 + 0.4 * sin(uTime * 2.0 + aPhase);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = 3.0 * (0.8 + 0.2 * sin(uTime + aPhase));
    }
  `;
    const danceParticleFragment = `
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - 0.5) * 2.0;
      float alpha = (1.0 - smoothstep(0.0, 1.0, d)) * vAlpha * 0.9;
      vec3 col = mix(vec3(1.0, 0.5, 0.9), vec3(0.8, 0.3, 1.0), gl_PointCoord.x);
      gl_FragColor = vec4(col, alpha);
    }
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DanceFlowParticles.useFrame": (state)=>{
            if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            if (pointsRef.current && pointerRef.current?.hover) {
                pointsRef.current.rotation.z += 0.002 * pointerRef.current.x;
            }
        }
    }["DanceFlowParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        args: [
                            positions,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-aPhase",
                        args: [
                            phases,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-aSpeed",
                        args: [
                            speeds,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                ref: matRef,
                vertexShader: danceParticleVertex,
                fragmentShader: danceParticleFragment,
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTime: {
                        value: 0
                    }
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_s4(DanceFlowParticles, "GqoE4Sxbrf5OTvOK+DV5JpGGmiY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = DanceFlowParticles;
// Cena DanceFlow: fitas, partículas e animação rítmica
function DanceFlowPlane({ index, pointerRef, aspect }) {
    _s5();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const planeHeight = 2;
    const planeWidth = planeHeight * aspect;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DanceFlowPlane.useFrame": (state, delta)=>{
            if (!meshRef.current || !pointerRef.current) return;
            if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            const p = pointerRef.current;
            const tiltAmount = 0.3;
            targetRotation.current.y = p.hover ? p.x * tiltAmount : 0;
            targetRotation.current.x = p.hover ? -p.y * tiltAmount * 0.6 : 0;
            const t = 1 - Math.exp(-8 * delta);
            currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * t;
            currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * t;
            meshRef.current.rotation.x = currentRotation.current.x;
            meshRef.current.rotation.y = currentRotation.current.y;
            const pulse = Math.sin(state.clock.elapsedTime * 1.5 + index * 0.7) * 0.02;
            meshRef.current.position.z = pulse;
        }
    }["DanceFlowPlane.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 1.5,
        rotationIntensity: 0.08,
        floatIntensity: 0.12,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: meshRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                planeWidth,
                                planeHeight
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                            ref: matRef,
                            vertexShader: danceFlowVertex,
                            fragmentShader: danceFlowFragment,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            uniforms: {
                                uTime: {
                                    value: 0
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DanceFlowParticles, {
                    pointerRef: pointerRef
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
            lineNumber: 425,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
_s5(DanceFlowPlane, "zDCZ2Qb/G8CCodMidX1fYollyyc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = DanceFlowPlane;
function SceneContent({ index, pointerRef, theme, imageSrc }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PointerTracker, {
                pointerRef: pointerRef
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.7
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    2,
                    2,
                    3
                ],
                intensity: 1.2
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -2,
                    -2,
                    2
                ],
                intensity: 0.5
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewportProvider, {
                children: (aspect)=>imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxImagePlane, {
                            imageSrc: imageSrc,
                            pointerRef: pointerRef,
                            aspect: aspect,
                            index: index
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                            lineNumber: 463,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 462,
                        columnNumber: 13
                    }, this) : theme === "dance" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DanceFlowPlane, {
                        index: index,
                        pointerRef: pointerRef,
                        aspect: aspect
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 466,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FuturisticPlane, {
                        index: index,
                        pointerRef: pointerRef,
                        aspect: aspect,
                        theme: theme
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 468,
                        columnNumber: 13
                    }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c6 = SceneContent;
function LineupCard3D({ icon: Icon, index, theme = 'fire', imageSrc }) {
    _s6();
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        hover: false
    });
    const cardTheme = theme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden",
        onMouseEnter: ()=>{
            pointerRef.current.hover = true;
        },
        onMouseLeave: ()=>{
            pointerRef.current.hover = false;
            pointerRef.current.x = 0;
            pointerRef.current.y = 0;
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        2.2
                    ],
                    fov: 48
                },
                gl: {
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                },
                dpr: [
                    2,
                    3
                ],
                className: "absolute inset-0 w-full h-full",
                style: {
                    background: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContent, {
                    index: index,
                    pointerRef: pointerRef,
                    theme: cardTheme,
                    imageSrc: imageSrc
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-6 flex items-center gap-2 pointer-events-none z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "w-8 h-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-white/70 uppercase tracking-wider",
                        children: "Powered by AKAAI CORE"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/home/lineup-card-3d.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, this);
}
_s6(LineupCard3D, "wi8OBQFkWUlVR2oJK4Q+c+OO4X4=");
_c7 = LineupCard3D;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ParallaxImagePlane");
__turbopack_context__.k.register(_c1, "PointerTracker");
__turbopack_context__.k.register(_c2, "ViewportProvider");
__turbopack_context__.k.register(_c3, "FuturisticPlane");
__turbopack_context__.k.register(_c4, "DanceFlowParticles");
__turbopack_context__.k.register(_c5, "DanceFlowPlane");
__turbopack_context__.k.register(_c6, "SceneContent");
__turbopack_context__.k.register(_c7, "LineupCard3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/home/lineup-card-3d.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/components/home/lineup-card-3d.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=3ff2dda6-8612-e993-88b5-fbca22c6ad8a
//# sourceMappingURL=apps_web_components_home_lineup-card-3d_tsx_ff73fbfd._.js.map