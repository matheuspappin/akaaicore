-- Otimiza get_auth_studio_id: 1 query em vez de 4, STABLE para cache do planner
CREATE OR REPLACE FUNCTION get_auth_studio_id()
RETURNS UUID AS $$
  SELECT COALESCE(
    (SELECT studio_id FROM users_internal 
     WHERE id = auth.uid() AND role != 'super_admin' 
     LIMIT 1),
    (SELECT studio_id FROM professionals 
     WHERE user_id = auth.uid() 
     ORDER BY studio_id NULLS LAST 
     LIMIT 1),
    (SELECT studio_id FROM students 
     WHERE id = auth.uid() 
     LIMIT 1)
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- Índices para garantir buscas rápidas (idempotente)
CREATE INDEX IF NOT EXISTS idx_users_internal_id ON users_internal(id);
CREATE INDEX IF NOT EXISTS idx_professionals_user_id ON professionals(user_id);
CREATE INDEX IF NOT EXISTS idx_students_id ON students(id);
