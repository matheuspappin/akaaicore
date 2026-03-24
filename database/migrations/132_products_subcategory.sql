-- Subcategoria opcional por produto (ex.: categoria Bebidas → subcategoria Red Bull)
ALTER TABLE products ADD COLUMN IF NOT EXISTS subcategory VARCHAR(150);

COMMENT ON COLUMN products.subcategory IS 'Subcategoria dentro do tipo de produto (ex.: Red Bull em Bebidas)';
