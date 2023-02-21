import { createClient } from '@supabase/supabase-js';

import { supabaseAnonKey, supabaseURL } from '@/constant/env';

export const supabase = createClient(supabaseURL ?? '', supabaseAnonKey ?? '');

export default supabase;
