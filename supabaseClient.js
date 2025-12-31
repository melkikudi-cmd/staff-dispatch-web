import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://rplmbuoyjlpcxskmtlzk.supabase.co'
const supabaseKey = 'sb_publishable_Ghw5xJ5IoGL2EzlCHCKLLQ_gWZPryTD'

export const supabase = createClient(supabaseUrl, supabaseKey)
window.supabase = supabase
