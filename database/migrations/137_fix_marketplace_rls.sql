-- Fix RLS policies for marketplace_settings to use get_auth_studio_id()
-- This ensures that users within the studio (admins, teachers, students) can see their store
-- even if it's not yet marked as 'is_active' (useful for previewing).

DROP POLICY IF EXISTS "Users can manage their own marketplace" ON marketplace_settings;
DROP POLICY IF EXISTS "Public can view active marketplaces" ON marketplace_settings;

CREATE POLICY "tenant_isolation_marketplace_settings" ON marketplace_settings 
FOR ALL 
USING (studio_id = get_auth_studio_id() OR is_active = true OR is_super_admin());
