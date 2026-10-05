// ==========================================
// CLASS BEHAVIOR TRACKER
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
// LOGIN
// ==========================================

const ADMIN_EMAIL =
  "elsayedramadan500@gmail.com";

const ADMIN_PASSWORD =
  "Sara9112";


// ==========================================
// STUDENTS
// ==========================================

const students = {

  "7/A": [

    "AHMAD ABDULRAHIM AWADH ALZAHRANI",
    "Ahmed Ehab Maged Mohamed Abdelrahman",
    "ASSAF ABDULRAHMAN HIZAB ALSULAMI",
    "Yassin Hani Othman Al Shaibi",
    "Yassin Mahmoud Sharaf Al-Din",
    "EYAD ELSAYED WAGIH FOUAD",
    "Youssef Ziad Amjad Helmy",
    "Abdulaziz Ahmed Abdulaziz Diab Shandi",
    "Abdulrahman Amr Gaber Ismail Abulkassem",
    "Baraa sameh zakaria awad",
    "ABDALLAH YOUSSEF ABDULLAH YOUSSEF",
    "Yassin Ali Youssef Ibrahim",
    "ASER ALI MAHMOUD SHAHIN",
    "Mazen BaSiM Mahmoud Mokhtar Gouda",
    "Dan Ahmed Elhanafy",
    "Elias Hatim Lahza",
    "Malik Ahmed",
    "Mohammed Khaled el sharawy"

  ],


  "7/B": [

    "WASEEM OMAR S LABANI",
    "Magdi MOAZ HARIRI",
    "Abdul Rahman Awad Al-Maliki",
    "MOWAFFAA MUHANNAD HARIRI",
    "MOHAMMED Hossam Murad",
    "Hamza Faisal Minshawi",
    "Abdulrahman Ageel ALOgla",
    "KENAN WASEEM ALZAMZAMI",
    "Jasser Muhammad Hashim Al-Ansari",
    "Elias Luai Zakariya Zamil",
    "Noureldin Mohamed Ahmed Badr",
    "hasan Abdulwahab shafei",
    "Ahmed Raed Al-Ghamdi",
    "Mohammed Hamad Al-Otaibi",
    "Hashem Ahmed Essam Bajaber",
    "Yazan Eyad Alhwsawi",
    "EYAD MOHAMED IBRAHIM ESMAIL ELSAYED",
    "Adham yasser mouhamed",
    "Omar Ahmed salah eldefrawy",
    "Anmar salman althagafi",
    "Feras Muwaffaq Aljuaid",
    "Mohammed Abdulmajeed Mohammed Alanqazi",
    "Luai Imad Saeed Mohammed Ghaleb",
    "AHMAD IHAB FAROUK ELMADANI"

  ]

};


// ==========================================
// ELEMENTS
// ==========================================

const loginScreen =
  document.getElementById("login-screen");

const dashboard =
  document.getElementById("dashboard");

const classScreen =
  document.getElementById("class-screen");

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

const backBtn =
  document.getElementById("back-btn");

const classTitle =
  document.getElementById("class-title");

const classCount =
  document.getElementById("class-count");

const studentsList =
  document.getElementById("students-list");


// ==========================================
// LOGIN
// ==========================================

function login() {

  const email =
    emailInput.value.trim().toLowerCase();

  const password =
    passwordInput.value.trim();

  loginMessage.textContent = "";


  if (
    email === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD
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


loginBtn.addEventListener(
  "click",
  login
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
// DASHBOARD
// ==========================================

function showDashboard() {

  loginScreen.classList.add("hidden");
  classScreen.classList.add("hidden");

  dashboard.classList.remove("hidden");

  teacherEmail.textContent =
    "Logged in as: " + ADMIN_EMAIL;

}


function showLogin() {

  dashboard.classList.add("hidden");
  classScreen.classList.add("hidden");

  loginScreen.classList.remove("hidden");

}


// ==========================================
// OPEN CLASS
// ==========================================

function openClass(className) {

  const classStudents =
    students[className];

  dashboard.classList.add("hidden");
  classScreen.classList.remove("hidden");

  classTitle.textContent =
    "Class " + className;

  classCount.textContent =
    classStudents.length + " Students";

  studentsList.innerHTML = "";


  classStudents.forEach(
    function(studentName, index) {

      const card =
        document.createElement("div");

      card.className =
        "student-card";


      const number =
        document.createElement("div");

      number.className =
        "student-number";

      number.textContent =
        index + 1;


      const name =
        document.createElement("div");

      name.className =
        "student-name";

      name.textContent =
        studentName;


      const actions =
        document.createElement("div");

      actions.className =
        "student-actions";


      const positiveBtn =
        document.createElement("button");

      positiveBtn.className =
        "positive-btn";

      positiveBtn.textContent =
        "+ Positive";


      const behaviorBtn =
        document.createElement("button");

      behaviorBtn.className =
        "negative-btn";

      behaviorBtn.textContent =
        "− Behavior";


      const homeworkBtn =
        document.createElement("button");

      homeworkBtn.className =
        "homework-btn";

      homeworkBtn.textContent =
        "Homework";


      actions.appendChild(
        positiveBtn
      );

      actions.appendChild(
        behaviorBtn
      );

      actions.appendChild(
        homeworkBtn
      );


      card.appendChild(
        number
      );

      card.appendChild(
        name
      );

      card.appendChild(
        actions
      );


      studentsList.appendChild(
        card
      );

    }
  );

}


// ==========================================
// CLASS BUTTONS
// ==========================================

document
  .querySelectorAll(".class-card")
  .forEach(function(button) {

    button.addEventListener(
      "click",
      function() {

        openClass(
          button.dataset.class
        );

      }
    );

  });


// ==========================================
// BACK
// ==========================================

backBtn.addEventListener(
  "click",
  showDashboard
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
// SESSION
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
