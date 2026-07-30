// ===============================
// LIYAS WARRANTY PORTAL
// Supabase Configuration
// ===============================

const SUPABASE_URL = "https://qhuygccueklrlmrmsavi.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodXlnY2N1ZWtscmxtcm1zYXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0MjcyNTUsImV4cCI6MjEwMTAwMzI1NX0.168BBeR0BvrjCu-MRu2FTA05oTzXc9aXDrOWJHIejKA";

// Supabase Client
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
