-- 127. RPC para contar aulas (presenças) por aluno
-- Retorna student_id e classes_attended para uso nas listagens de alunos

CREATE OR REPLACE FUNCTION get_student_attendance_counts(p_studio_id UUID)
RETURNS TABLE(student_id UUID, classes_attended BIGINT)
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT a.student_id, COUNT(*)::BIGINT
  FROM attendance a
  WHERE a.studio_id = p_studio_id
    AND a.student_id IS NOT NULL
    AND a.status IN ('present', 'confirmed')
  GROUP BY a.student_id;
$$;
