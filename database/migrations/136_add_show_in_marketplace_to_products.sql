-- Adiciona a coluna show_in_marketplace na tabela products
ALTER TABLE products ADD COLUMN IF NOT EXISTS show_in_marketplace BOOLEAN DEFAULT FALSE;

-- Opcional: Atualiza produtos existentes para TRUE se quisermos que apareçam por padrão, 
-- mas seguindo o requisito de "ter uma opção", melhor começar como FALSE.
-- No entanto, para não "quebrar" a loja atual que mostra tudo, talvez devêssemos setar TRUE para os que têm estoque.
UPDATE products SET show_in_marketplace = TRUE WHERE status = 'active' AND quantity > 0;
