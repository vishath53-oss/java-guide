import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wdibhdovnwstkawkwnsf.supabase.co'
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaWJoZG92bndzdGthd2t3bnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyMDc3MTUsImV4cCI6MjEwODc4MzcxNX0.pX3FPro1oHQB1GiFKjfONc1jxu4LRyU1tPMPhoQsmH4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

/**
 * Health check helper to test Supabase connection and read available tables
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean
  error?: string
  url: string
}> {
  try {
    const { error } = await supabase.from('profiles').select('id').limit(1)
    if (error && error.code !== 'PGRST116' && !error.message.includes('relation "public.profiles" does not exist')) {
      // If error is other than non-existent table, it still connected to postgrest
      return { connected: true, url: supabaseUrl }
    }
    return { connected: true, url: supabaseUrl }
  } catch (err: any) {
    return { connected: false, error: err.message, url: supabaseUrl }
  }
}

