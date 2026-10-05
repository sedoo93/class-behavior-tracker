// ==========================================
// CLASS BEHAVIOR TRACKER
// APP.JS
// ==========================================


// ==========================================
// SUPABASE CONNECTION
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

const ADMIN_EMAIL = "elsayedramadan500@gmail.com";
const ADMIN_PASSWORD = "Sara9112";


// ==========================================
// PAGE ELEMENTS
// ==========================================

const loginScreen =
  document.getElementById("login-screen");

const dashboard =
  document.getElementById("dashboard");

const emailInput =
  document.getElementById("email");

const passwordInput =
  document.getElementById("password");

const loginBtn =
  document.getElementById("login-btn");

const logoutBtn =
  document.getElementById("logout-btn");

const loginMessage =
  document.getElementById("login-message");

const teacherEmail =
  document.getElementById("teacher-email");


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
// SHOW LOGIN SCREEN
// ==========================================

function showLogin() {

  dashboard.classList.add("hidden");

  loginScreen.classList.remove("hidden");

  if (loginMessage) {

    loginMessage.textContent = "";

  }
}


// ==========================================
// LOGIN
// ==========================================

function login() {

  const enteredEmail =
    emailInput.value.trim().toLowerCase();

  const enteredPassword =
    passwordInput.value.trim();


  loginMessage.textContent = "";


  // Check empty fields

  if (
    enteredEmail === "" ||
    enteredPassword === ""
  ) {

    loginMessage.textContent =
      "Please enter your email and password.";

    return;
  }


  // Check login information

  if (
    enteredEmail === ADMIN_EMAIL.toLowerCase() &&
    enteredPassword === ADMIN_PASSWORD
  ) {

    sessionStorage.setItem(
      "teacherLoggedIn",
      "true"
    );

    sessionStorage.setItem(
      "teacherEmail",
      ADMIN_EMAIL
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

if (loginBtn) {

  loginBtn.addEventListener(
    "click",
    login
  );

}


// ==========================================
// PRESS ENTER TO LOGIN
// ==========================================

if (emailInput) {

  emailInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

        login();

      }

    }
  );

}


if (passwordInput) {

  passwordInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

        login();

      }

    }
  );

}


// ==========================================
// LOGOUT
// ==========================================

if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    function() {

      sessionStorage.removeItem(
        "teacherLoggedIn"
      );

      sessionStorage.removeItem(
        "teacherEmail"
      );

      emailInput.value = "";

      passwordInput.value = "";

      showLogin();

    }
  );

}


// ==========================================
// CHECK EXISTING LOGIN
// ==========================================

const isLoggedIn =
  sessionStorage.getItem(
    "teacherLoggedIn"
  );


if (isLoggedIn === "true") {

  showDashboard();

} else {

  showLogin();

}


// ==========================================
// CLASS BUTTONS
// ==========================================

const classButtons =
  document.querySelectorAll(
    ".class-card"
  );


classButtons.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const selectedClass =
          button.getAttribute(
            "data-class"
          );

        alert(
          "Selected Class: " +
          selectedClass
        );

      }
    );

  }
);


// ==========================================
// SUPABASE CONNECTION TEST
// ==========================================

async function testConnection() {

  try {

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

      return;

    }


    console.log(
      "Supabase connected successfully"
    );

    console.log(
      "Students:",
      data
    );


  } catch (error) {

    console.error(
      "Supabase connection error:",
      error
    );

  }

}


testConnection();


// ==========================================
// APP VERSION
// ==========================================

console.log(
  "Class Behavior Tracker - Version 10"
);
