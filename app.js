const SUPABASE_URL = "https://vhsiojpolntabqfogglu.supabase.co";
const SUPABASE_KEY = "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


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
// SHOW DASHBOARD
// ==========================

function showDashboard(user) {

  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  if (user && user.email) {
    teacherEmail.textContent = "Logged in as: " + user.email;
  }
}


// ==========================
// SHOW LOGIN
// ==========================

function showLogin() {

  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  teacherEmail.textContent = "";
}


// ==========================
// LOGIN
// ==========================

loginBtn.addEventListener("click", async () => {

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  loginMessage.textContent = "";

  if (!email || !password) {
    loginMessage.textContent =
      "Please enter your email and password.";
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "Logging in...";

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  loginBtn.disabled = false;
  loginBtn.textContent = "Login";

  if (error) {

    console.error(error);

    loginMessage.textContent =
      "Incorrect email or password.";

    return;
  }

  passwordInput.value = "";

  showDashboard(data.user);
});


// ==========================
// ENTER KEY LOGIN
// ==========================

passwordInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    loginBtn.click();
  }

});


// ==========================
// LOGOUT
// ==========================

logoutBtn.addEventListener("click", async () => {

  await supabaseClient.auth.signOut();

  emailInput.value = "";
  passwordInput.value = "";

  showLogin();
});


// ==========================
// CHECK EXISTING SESSION
// ==========================

async function checkSession() {

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (session && session.user) {
    showDashboard(session.user);
  } else {
    showLogin();
  }
}

checkSession();


// ==========================
// AUTH STATE CHANGES
// ==========================

supabaseClient.auth.onAuthStateChange(
  (event, session) => {

    if (session && session.user) {
      showDashboard(session.user);
    }

    if (event === "SIGNED_OUT") {
      showLogin();
    }

  }
);
