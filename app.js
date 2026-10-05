// ==========================================
// CLASS BEHAVIOR TRACKER
// VERSION 40
// ==========================================


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
// VIOLATIONS
// ==========================================

const violations = [

  "Missed homework",

  "Didn't bring his sheet",

  "Didn't bring his notebook",

  "Eating in the session",

  "Late for the session",

  "Making noise",

  "Other..."

];


// ==========================================
// BONUS
// ==========================================

const bonuses = [

  "Remaining quiet all the day",

  "Participating actively"

];


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
// CURRENT CLASS
// ==========================================

let currentClass = null;


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


if (loginBtn) {

  loginBtn.addEventListener(
    "click",
    login
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
// SHOW DASHBOARD
// ==========================================

function showDashboard() {

  loginScreen.classList.add("hidden");

  classScreen.classList.add("hidden");

  dashboard.classList.remove("hidden");

  teacherEmail.textContent =
    "Logged in as: " + ADMIN_EMAIL;

}


// ==========================================
// SHOW LOGIN
// ==========================================

function showLogin() {

  dashboard.classList.add("hidden");

  classScreen.classList.add("hidden");

  loginScreen.classList.remove("hidden");

}


// ==========================================
// OPEN CLASS
// ==========================================

function openClass(className) {

  currentClass = className;

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

      createStudentCard(
        studentName,
        index
      );

    }
  );

}


// ==========================================
// CREATE STUDENT CARD
// ==========================================

function createStudentCard(
  studentName,
  index
) {

  const card =
    document.createElement("div");

  card.className =
    "student-card";


  // NUMBER

  const number =
    document.createElement("div");

  number.className =
    "student-number";

  number.textContent =
    index + 1;


  // NAME

  const name =
    document.createElement("div");

  name.className =
    "student-name";

  name.textContent =
    studentName;


  // ACTIONS

  const actions =
    document.createElement("div");

  actions.className =
    "student-actions";


  // VIOLATION BUTTON

  const violationButton =
    document.createElement("button");

  violationButton.className =
    "negative-btn";

  violationButton.textContent =
    "⚠ Violation";


  violationButton.addEventListener(
    "click",
    function() {

      showViolationMenu(
        studentName
      );

    }
  );


  // BONUS BUTTON

  const bonusButton =
    document.createElement("button");

  bonusButton.className =
    "positive-btn";

  bonusButton.textContent =
    "★ Bonus";


  bonusButton.addEventListener(
    "click",
    function() {

      showBonusMenu(
        studentName
      );

    }
  );


  actions.appendChild(
    violationButton
  );

  actions.appendChild(
    bonusButton
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


// ==========================================
// VIOLATION MENU
// ==========================================

function showViolationMenu(
  studentName
) {

  let menuText =
    "Select Violation for:\n" +
    studentName +
    "\n\n";


  violations.forEach(
    function(item, index) {

      menuText +=
        (index + 1) +
        ". " +
        item +
        "\n";

    }
  );


  const choice =
    prompt(menuText);


  if (choice === null) {
    return;
  }


  const choiceNumber =
    parseInt(choice);


  if (
    isNaN(choiceNumber) ||
    choiceNumber < 1 ||
    choiceNumber > violations.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  let selectedViolation =
    violations[
      choiceNumber - 1
    ];


  // OTHER

  if (
    selectedViolation ===
    "Other..."
  ) {

    const customViolation =
      prompt(
        "Write the violation:"
      );


    if (
      customViolation === null ||
      customViolation.trim() === ""
    ) {

      return;

    }


    selectedViolation =
      customViolation.trim();

  }


  saveBehaviorRecord(
    studentName,
    "Violation",
    selectedViolation,
    -1
  );

}


// ==========================================
// BONUS MENU
// ==========================================

function showBonusMenu(
  studentName
) {

  let menuText =
    "Select Bonus for:\n" +
    studentName +
    "\n\n";


  bonuses.forEach(
    function(item, index) {

      menuText +=
        (index + 1) +
        ". " +
        item +
        "\n";

    }
  );


  const choice =
    prompt(menuText);


  if (choice === null) {
    return;
  }


  const choiceNumber =
    parseInt(choice);


  if (
    isNaN(choiceNumber) ||
    choiceNumber < 1 ||
    choiceNumber > bonuses.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  const selectedBonus =
    bonuses[
      choiceNumber - 1
    ];


  saveBehaviorRecord(
    studentName,
    "Bonus",
    selectedBonus,
    1
  );

}


// ==========================================
// SAVE RECORD TO SUPABASE
// ==========================================

async function saveBehaviorRecord(
  studentName,
  category,
  actionName,
  points
) {

  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .insert([
          {

            student_name:
              studentName,

            class_name:
              currentClass,

            category:
              category,

            action_name:
              actionName,

            points:
              points

          }
        ]);


    if (error) {

      console.error(
        "Save error:",
        error
      );


      alert(
        "Could not save the record."
      );

      return;

    }


    // DATE FOR DISPLAY ONLY
    // Supabase also saves created_at automatically

    const now =
      new Date();


    const date =
      now.toLocaleDateString(
        "en-GB"
      );


    const time =
      now.toLocaleTimeString(
        "en-US",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );


    alert(
      "Saved successfully ✓\n\n" +

      "Student: " +
      studentName +

      "\nClass: " +
      currentClass +

      "\nType: " +
      category +

      "\nReason: " +
      actionName +

      "\nPoints: " +
      (points > 0 ? "+" : "") +
      points +

      "\nDate: " +
      date +

      "\nTime: " +
      time
    );


  } catch (error) {

    console.error(
      "Save error:",
      error
    );


    alert(
      "Could not save the record."
    );

  }

}


// ==========================================
// CLASS BUTTONS
// ==========================================

document
  .querySelectorAll(
    ".class-card"
  )
  .forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          openClass(
            button.dataset.class
          );

        }
      );

    }
  );


// ==========================================
// BACK
// ==========================================

if (backBtn) {

  backBtn.addEventListener(
    "click",
    showDashboard
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

      emailInput.value = "";

      passwordInput.value = "";

      showLogin();

    }
  );

}


// ==========================================
// CHECK LOGIN
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
// VERSION
// ==========================================

console.log(
  "Class Behavior Tracker - Version 40"
);
