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

const ADMIN_USERNAME = "Mr. Sayed Ramadan";
const ADMIN_PASSWORD = "Sara9112**";


// ==========================================
// PAGE ELEMENTS
// ==========================================

const loginScreen =
  document.getElementById("login-screen");

const dashboard =
  document.getElementById("dashboard");

const usernameInput =
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
      "Welcome, " + ADMIN_USERNAME;
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

  const enteredUsername =
    usernameInput.value.trim();

  const enteredPassword =
    passwordInput.value;

  loginMessage.textContent = "";


  // Check empty fields

  if (!enteredUsername || !enteredPassword) {

    loginMessage.textContent =
      "Please enter your username and password.";

    return;
  }


  // Check login data

  if (
    enteredUsername === ADMIN_USERNAME &&
    enteredPassword === ADMIN_PASSWORD
  ) {

    // Save login for this browser session

    sessionStorage.setItem(
      "teacherLoggedIn",
      "true"
    );


    // Clear password

    passwordInput.value = "";


    // Open dashboard

    showDashboard();

  } else {

    loginMessage.textContent =
      "Incorrect username or password.";

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
// PRESS ENTER TO LOGIN
// ==========================================

usernameInput.addEventListener(
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

    usernameInput.value = "";
    passwordInput.value = "";

    showLogin();

  }
);


// ==========================================
// CHECK LOGIN WHEN PAGE LOADS
// ==========================================

if (
  sessionStorage.getItem(
    "teacherLoggedIn"
  ) === "true"
) {

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
          button.dataset.class;

        console.log(
          "Selected class:",
          selectedClass
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
// TEST SUPABASE CONNECTION
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
      "Supabase connected successfully."
    );

    console.log(
      "Students loaded:",
      data
    );


  } catch (error) {

    console.error(
      "Connection error:",
      error
    );

  }

}


testConnection();
