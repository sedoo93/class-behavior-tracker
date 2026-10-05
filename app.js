const SUPABASE_URL = "https://vhsiojpolntabqfogglu.supabase.co";
const SUPABASE_KEY = "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase connected successfully");
