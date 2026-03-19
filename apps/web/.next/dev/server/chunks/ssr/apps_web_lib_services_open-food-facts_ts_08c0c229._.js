;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="bcece762-31ba-3db6-9483-4b6ff30099a3")}catch(e){}}();
module.exports = [
"[project]/apps/web/lib/services/open-food-facts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Food Facts API - Busca de produtos por nome e código de barras
 * https://world.openfoodfacts.org/
 */ __turbopack_context__.s([
    "getProductByBarcode",
    ()=>getProductByBarcode,
    "searchOpenFoodFacts",
    ()=>searchOpenFoodFacts
]);
function mapCategory(offCategory) {
    if (!offCategory) return 'Alimentos';
    const cat = (offCategory || '').toLowerCase();
    if (cat.includes('beverage') || cat.includes('bebida') || cat.includes('drink') || cat.includes('en:beverages')) return 'Bebidas';
    if (cat.includes('snack') || cat.includes('salgad') || cat.includes('chips')) return 'Alimentos';
    if (cat.includes('chocolate') || cat.includes('candy') || cat.includes('doce')) return 'Alimentos';
    if (cat.includes('dairy') || cat.includes('latic') || cat.includes('leite')) return 'Alimentos';
    if (cat.includes('bread') || cat.includes('pão') || cat.includes('bakery')) return 'Alimentos';
    return 'Alimentos';
}
async function searchOpenFoodFacts(query) {
    if (!query || query.trim().length < 2) return [];
    const q = encodeURIComponent(query.trim());
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${q}&search_simple=1&action=process&json=1&page_size=20`;
    try {
        const res = await fetch(url, {
            signal: AbortSignal.timeout(8000)
        });
        if (!res.ok) return [];
        const data = await res.json();
        const products = data.products;
        if (!Array.isArray(products)) return [];
        const results = [];
        const seen = new Set();
        for (const p of products){
            const code = p.code?.toString()?.trim();
            const name = (p.product_name || p.brands || '').trim();
            if (!code || !name || seen.has(code)) continue;
            seen.add(code);
            const category = mapCategory(p.categories || p.categories_tags?.[0]);
            results.push({
                sku: code,
                name,
                category,
                source: 'openfoodfacts',
                brand: p.brands || undefined,
                image_url: p.image_small_url || p.image_url
            });
        }
        return results.slice(0, 15);
    } catch  {
        return [];
    }
}
async function getProductByBarcode(barcode) {
    const code = barcode.trim().replace(/\D/g, '');
    if (!code || code.length < 8) return null;
    const url = `https://world.openfoodfacts.org/api/v2/product/${code}.json?fields=code,product_name,brands,categories,categories_tags,image_small_url,image_url`;
    try {
        const res = await fetch(url, {
            signal: AbortSignal.timeout(5000)
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (data.status !== 1 || !data.product) return null;
        const p = data.product;
        const name = (p.product_name || p.brands || '').trim();
        if (!name) return null;
        const category = mapCategory(p.categories || p.categories_tags?.[0]);
        return {
            sku: p.code?.toString() || code,
            name,
            category,
            source: 'openfoodfacts',
            brand: p.brands || undefined,
            image_url: p.image_small_url || p.image_url
        };
    } catch  {
        return null;
    }
}
}),
];

//# debugId=bcece762-31ba-3db6-9483-4b6ff30099a3
//# sourceMappingURL=apps_web_lib_services_open-food-facts_ts_08c0c229._.js.map