import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rplmbuoyjlpcxskmtlzk.supabase.co' // use your Project URL
const supabaseKey = 'sb_publishable_Ghw5xJ5IoGL2EzlCHCKLLQ_gWZPryTD' // use your publishable key
export const supabase = createClient(supabaseUrl, supabaseKey)
