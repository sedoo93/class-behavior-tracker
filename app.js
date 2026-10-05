// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL =
  "https://vhsiojpolntabqfogglu.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// ==========================================
// LOGIN DATA
// ==========================================

const ADMIN_EMAIL = "test";
const ADMIN_PASSWORD = "1234";

alert("NEW APP.JS IS RUNNING");


// ==========================================
// ELEMENTS
// ==========================================

const loginScreen = document.getElementById("login-screen");
const dashboard = document.getElementById("dashboard");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

const loginMessage = document.getElementById("login-message");
const teacherEmail = document.getElementById("teacher-email");


// ==========================================
// SHOW DASHBOARD
// ==========================================

function showDashboard() {

  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  if (teacherEmail) {
    teacherEmail.textContent =
      "Logged in as: " + ADMIN_EMAIL;
  }
}


// ==========================================
// SHOW LOGIN
// ==========================================

function showLogin() {

  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  if (loginMessage) {
    loginMessage.textContent = "";
  }
}


// ==========================================
// LOGIN FUNCTION
// ==========================================

function login() {

  const enteredEmail =
    emailInput.value.trim().toLowerCase();

  const enteredPassword =
    passwordInput.value;


  loginMessage.textContent = "";


  // Empty fields
  if (!enteredEmail || !enteredPassword) {

    loginMessage.textContent =
      "Please enter your email and password.";

    return;
  }


  // Check login
  if (
    enteredEmail === ADMIN_EMAIL.toLowerCase() &&
    enteredPassword === ADMIN_PASSWORD
  ) {

    sessionStorage.setItem(
      "teacherLoggedIn",
      "true"
    );

    passwordInput.value = "";

    showDashboard();

  } else {

    loginMessage.textContent =
      "Incorrect email or password.";

  }
}


// ==========================================
// LOGIN BUTTON
// ==========================================

loginBtn.addEventListener(
  "click",
  login
);


// ==========================================
// ENTER KEY
// ==========================================

emailInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      login();
    }

  }
);


passwordInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      login();
    }

  }
);


// ==========================================
// LOGOUT
// ==========================================

logoutBtn.addEventListener(
  "click",
  function() {

    sessionStorage.removeItem(
      "teacherLoggedIn"
    );

    emailInput.value = "";
    passwordInput.value = "";

    showLogin();
  }
);


// ==========================================
// CHECK LOGIN ON PAGE LOAD
// ==========================================

if (
  sessionStorage.getItem("teacherLoggedIn") === "true"
) {

  showDashboard();

} else {

  showLogin();
}


// ==========================================
// CLASS BUTTONS
// ==========================================

const classButtons =
  document.querySelectorAll(".class-card");


classButtons.forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      const selectedClass =
        button.dataset.class;

      alert(
        "Selected Class: " + selectedClass
      );
    }
  );

});


// ==========================================
// TEST SUPABASE
// ==========================================

async function testConnection() {

  const { data, error } =
    await supabaseClient
      .from("students")
      .select("*")
      .limit(5);


  if (error) {

    console.error(
      "Supabase error:",
      error
    );

  } else {

    console.log(
      "Supabase connected successfully"
    );

    console.log(
      "Students:",
      data
    );
  }
}


testConnection();
