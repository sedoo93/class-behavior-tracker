const SUPABASE_URL = "https://vhsiojpolntabqfogglu.supabase.co";
const SUPABASE_KEY = "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ==========================
// LOGIN DETAILS
// ==========================

const ADMIN_USERNAME = "Mr. Sayed Ramadan";
const ADMIN_PASSWORD = "Sara9112**";

// ==========================
// ELEMENTS
// ==========================

const loginScreen = document.getElementById("login-screen");
const dashboard = document.getElementById("dashboard");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

const loginMessage = document.getElementById("login-message");
const teacherEmail = document.getElementById("teacher-email");

// ==========================
// LOGIN
// ==========================

loginBtn.addEventListener("click", function () {

  const username = emailInput.value.trim();
  const password = passwordInput.value;

  loginMessage.textContent = "";

  if (
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {

    sessionStorage.setItem("teacherLoggedIn", "true");

    loginScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");

    if (teacherEmail) {
      teacherEmail.textContent = ADMIN_USERNAME;
    }

    passwordInput.value = "";

  } else {

    loginMessage.textContent =
      "Incorrect username or password.";

  }
});

// ==========================
// ENTER KEY
// ==========================

passwordInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    loginBtn.click();
  }

});

// ==========================
// LOGOUT
// ==========================

logoutBtn.addEventListener("click", function () {

  sessionStorage.removeItem("teacherLoggedIn");

  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  emailInput.value = "";
  passwordInput.value = "";
});

// ==========================
// KEEP LOGIN DURING SESSION
// ==========================

if (sessionStorage.getItem("teacherLoggedIn") === "true") {

  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  if (teacherEmail) {
    teacherEmail.textContent = ADMIN_USERNAME;
  }
}

// ==========================
// TEST SUPABASE CONNECTION
// ==========================

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
