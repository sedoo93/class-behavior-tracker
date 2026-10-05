// ==========================================
// CLASS BEHAVIOR TRACKER
// VERSION 50
// ==========================================


// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL =
  "https://vhsiojpolntabqfogglu.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_yIT1oGw3YRyiYypxlmETwg_foN3Yk3u";

const supabaseClient =
  window.supabase.createClient(
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
// OPTIONS
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

const reportScreen =
  document.getElementById("report-screen");

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

const reportBackBtn =
  document.getElementById("report-back-btn");

const printReportBtn =
  document.getElementById("print-report-btn");

const reportStudentName =
  document.getElementById("report-student-name");

const reportClassName =
  document.getElementById("report-class-name");

const reportBonusCount =
  document.getElementById("report-bonus-count");

const reportViolationCount =
  document.getElementById("report-violation-count");

const reportTotalScore =
  document.getElementById("report-total-score");

const reportStatus =
  document.getElementById("report-status");

const reportTableContainer =
  document.getElementById("report-table-container");

const reportTableBody =
  document.getElementById("report-table-body");

const reportGeneratedDate =
  document.getElementById("report-generated-date");


// ==========================================
// CURRENT CLASS
// ==========================================

let currentClass = null;


// ==========================================
// LOGIN
// ==========================================

function login() {

  const email =
    emailInput.value
      .trim()
      .toLowerCase();

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
// SCREENS
// ==========================================

function hideAllScreens() {

  loginScreen.classList.add("hidden");

  dashboard.classList.add("hidden");

  classScreen.classList.add("hidden");

  reportScreen.classList.add("hidden");

}


function showDashboard() {

  hideAllScreens();

  dashboard.classList.remove("hidden");

  teacherEmail.textContent =
    "Logged in as: " + ADMIN_EMAIL;

}


function showLogin() {

  hideAllScreens();

  loginScreen.classList.remove("hidden");

}


// ==========================================
// OPEN CLASS
// ==========================================

function openClass(className) {

  currentClass = className;

  const classStudents =
    students[className];


  hideAllScreens();

  classScreen.classList.remove("hidden");


  classTitle.textContent =
    "Class " + className;

  classCount.textContent =
    classStudents.length +
    " Students";


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
// STUDENT CARD
// ==========================================

function createStudentCard(
  studentName,
  index
) {

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


  // VIOLATION

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


  // BONUS

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


  // REPORT

  const reportButton =
    document.createElement("button");

  reportButton.className =
    "report-btn";

  reportButton.textContent =
    "📋 Report";

  reportButton.addEventListener(
    "click",
    function() {

      openStudentReport(
        studentName,
        currentClass
      );

    }
  );


  actions.appendChild(
    violationButton
  );

  actions.appendChild(
    bonusButton
  );

  actions.appendChild(
    reportButton
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
// VIOLATION
// ==========================================

function showViolationMenu(
  studentName
) {

  let text =
    "Select Violation for:\n" +
    studentName +
    "\n\n";


  violations.forEach(
    function(item, index) {

      text +=
        (index + 1) +
        ". " +
        item +
        "\n";

    }
  );


  const choice =
    prompt(text);


  if (choice === null) {
    return;
  }


  const number =
    parseInt(choice);


  if (
    isNaN(number) ||
    number < 1 ||
    number > violations.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  let action =
    violations[number - 1];


  if (action === "Other...") {

    const other =
      prompt(
        "Write the violation:"
      );


    if (
      other === null ||
      other.trim() === ""
    ) {

      return;

    }


    action =
      other.trim();

  }


  saveBehaviorRecord(
    studentName,
    "Violation",
    action,
    -1
  );

}


// ==========================================
// BONUS
// ==========================================

function showBonusMenu(
  studentName
) {

  let text =
    "Select Bonus for:\n" +
    studentName +
    "\n\n";


  bonuses.forEach(
    function(item, index) {

      text +=
        (index + 1) +
        ". " +
        item +
        "\n";

    }
  );


  const choice =
    prompt(text);


  if (choice === null) {
    return;
  }


  const number =
    parseInt(choice);


  if (
    isNaN(number) ||
    number < 1 ||
    number > bonuses.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  const action =
    bonuses[number - 1];


  saveBehaviorRecord(
    studentName,
    "Bonus",
    action,
    1
  );

}


// ==========================================
// SAVE RECORD
// ==========================================

async function saveBehaviorRecord(
  studentName,
  category,
  actionName,
  points
) {

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


  alert(
    "Saved successfully ✓\n\n" +
    studentName +
    "\n" +
    currentClass +
    "\n" +
    actionName
  );

}


// ==========================================
// STUDENT REPORT
// ==========================================

async function openStudentReport(
  studentName,
  className
) {

  hideAllScreens();

  reportScreen.classList.remove(
    "hidden"
  );


  reportStudentName.textContent =
    studentName;

  reportClassName.textContent =
    className;


  reportBonusCount.textContent =
    "0";

  reportViolationCount.textContent =
    "0";

  reportTotalScore.textContent =
    "0";


  reportTableBody.innerHTML =
    "";


  reportTableContainer.style.display =
    "none";


  reportStatus.textContent =
    "Loading student report...";


  const { data, error } =
    await supabaseClient
      .from("behavior_records")
      .select(
        "id, student_name, class_name, category, action_name, points, created_at"
      )
      .eq(
        "student_name",
        studentName
      )
      .eq(
        "class_name",
        className
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "Report error:",
      error
    );

    reportStatus.textContent =
      "Could not load the student report.";

    return;

  }


  const records =
    data || [];


  let bonusCount = 0;

  let violationCount = 0;

  let totalScore = 0;


  records.forEach(
    function(record) {

      if (
        record.category ===
        "Bonus"
      ) {

        bonusCount++;

      }


      if (
        record.category ===
        "Violation"
      ) {

        violationCount++;

      }


      totalScore +=
        Number(record.points) || 0;


      const row =
        document.createElement("tr");


      const dateObject =
        new Date(
          record.created_at
        );


      const date =
        dateObject.toLocaleDateString(
          "en-GB"
        );


      const time =
        dateObject.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        );


      const pointClass =
        record.points >= 0
          ? "positive-points"
          : "negative-points";


      row.innerHTML = `
        <td>${escapeHTML(date)}</td>

        <td>${escapeHTML(time)}</td>

        <td>${escapeHTML(record.category)}</td>

        <td>${escapeHTML(record.action_name)}</td>

        <td class="${pointClass}">
          ${record.points > 0 ? "+" : ""}
          ${record.points}
        </td>
      `;


      reportTableBody.appendChild(
        row
      );

    }
  );


  reportBonusCount.textContent =
    bonusCount;

  reportViolationCount.textContent =
    violationCount;

  reportTotalScore.textContent =
    (totalScore > 0 ? "+" : "") +
    totalScore;


  const now =
    new Date();


  reportGeneratedDate.textContent =
    now.toLocaleString(
      "en-GB"
    );


  if (records.length === 0) {

    reportStatus.textContent =
      "No behavior records have been recorded for this student yet.";

    reportTableContainer.style.display =
      "none";

  } else {

    reportStatus.textContent =
      "";

    reportTableContainer.style.display =
      "block";

  }

}


// ==========================================
// SAFE TABLE TEXT
// ==========================================

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

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
// BACK FROM CLASS
// ==========================================

if (backBtn) {

  backBtn.addEventListener(
    "click",
    showDashboard
  );

}


// ==========================================
// BACK FROM REPORT
// ==========================================

if (reportBackBtn) {

  reportBackBtn.addEventListener(
    "click",
    function() {

      openClass(
        currentClass
      );

    }
  );

}


// ==========================================
// SAVE PDF
// ==========================================

if (printReportBtn) {

  printReportBtn.addEventListener(
    "click",
    function() {

      window.print();

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

      emailInput.value = "";

      passwordInput.value = "";

      showLogin();

    }
  );

}


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


console.log(
  "Class Behavior Tracker - Version 50"
);
