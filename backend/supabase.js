const { createClient } = require("@supabase/supabase-js")

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase