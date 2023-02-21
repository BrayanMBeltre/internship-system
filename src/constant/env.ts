export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
