const SUPABASE_URL = "https://vhsiojpolntabqfogglu.supabase.co";
const SUPABASE_KEY = "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase connected successfully");
async function testConnection() {
  const { data, error } = await supabaseClient
    .from("students")
    .select("*")
    .limit(5);

  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Students loaded:", data);
  }
}

testConnection();
