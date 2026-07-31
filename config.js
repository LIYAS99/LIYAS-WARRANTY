// TEST CONFIG

console.log("window.supabase =", window.supabase);

console.log("createClient =", window.supabase.createClient);

const SUPABASE_URL = "APNA_PROJECT_URL";
const SUPABASE_ANON_KEY = "APNI_ANON_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("supabase =", supabase);
console.log("typeof supabase.from =", typeof supabase.from);
