// ==========================================
// CLASS BEHAVIOR TRACKER
// VERSION 62
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

const historyScreen =
  document.getElementById("history-screen");

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


// HISTORY

const historyBackBtn =
  document.getElementById("history-back-btn");

const historyStudentName =
  document.getElementById("history-student-name");

const historyClassName =
  document.getElementById("history-class-name");

const historyStatus =
  document.getElementById("history-status");

const historyTableContainer =
  document.getElementById("history-table-container");

const historyTableBody =
  document.getElementById("history-table-body");


// REPORT

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
// CURRENT STATE
// ==========================================

let currentClass = null;
let currentHistoryStudent = null;


// ==========================================
// SCREEN FUNCTIONS
// ==========================================

function hideAllScreens() {

  if (loginScreen) {
    loginScreen.classList.add("hidden");
  }

  if (dashboard) {
    dashboard.classList.add("hidden");
  }

  if (classScreen) {
    classScreen.classList.add("hidden");
  }

  if (historyScreen) {
    historyScreen.classList.add("hidden");
  }

  if (reportScreen) {
    reportScreen.classList.add("hidden");
  }
}


function showDashboard() {

  hideAllScreens();

  dashboard.classList.remove("hidden");

  if (teacherEmail) {
    teacherEmail.textContent =
      "Logged in as: " + ADMIN_EMAIL;
  }
}


function showLogin() {

  hideAllScreens();

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


if (loginBtn) {

  loginBtn.addEventListener(
    "click",
    login
  );
}


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
// OPEN CLASS
// ==========================================

function openClass(className) {

  currentClass = className;

  const classStudents =
    students[className] || [];

  hideAllScreens();

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

  card.className = "student-card";


  const number =
    document.createElement("div");

  number.className = "student-number";
  number.textContent = index + 1;


  const name =
    document.createElement("div");

  name.className = "student-name";
  name.textContent = studentName;


  const actions =
    document.createElement("div");

  actions.className = "student-actions";


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

      showBonusMenu(studentName);
    }
  );


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

      showViolationMenu(studentName);
    }
  );


  // HISTORY

  const historyButton =
    document.createElement("button");

  historyButton.className =
    "history-btn";

  historyButton.textContent =
    "🕘 History";

  historyButton.addEventListener(
    "click",
    function() {

      openStudentHistory(
        studentName,
        currentClass
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


  // ORDER:
  // BONUS → VIOLATION → HISTORY → REPORT

  actions.appendChild(bonusButton);
  actions.appendChild(violationButton);
  actions.appendChild(historyButton);
  actions.appendChild(reportButton);

  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(actions);

  studentsList.appendChild(card);
}


// ==========================================
// BONUS
// ==========================================

function showBonusMenu(studentName) {

  let message =
    "Select Bonus for:\n" +
    studentName +
    "\n\n";


  bonuses.forEach(
    function(item, index) {

      message +=
        (index + 1) +
        ". " +
        item +
        "\n";
    }
  );


  const choice =
    prompt(message);


  if (choice === null) {
    return;
  }


  const number =
    Number(choice);


  if (
    !Number.isInteger(number) ||
    number < 1 ||
    number > bonuses.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  const selectedBonus =
    bonuses[number - 1];


  saveBehaviorRecord(
    studentName,
    "Bonus",
    selectedBonus,
    1
  );
}


// ==========================================
// VIOLATION
// ==========================================

function showViolationMenu(studentName) {

  let message =
    "Select Violation for:\n" +
    studentName +
    "\n\n";


  violations.forEach(
    function(item, index) {

      message +=
        (index + 1) +
        ". " +
        item +
        "\n";
    }
  );


  const choice =
    prompt(message);


  if (choice === null) {
    return;
  }


  const number =
    Number(choice);


  if (
    !Number.isInteger(number) ||
    number < 1 ||
    number > violations.length
  ) {

    alert(
      "Please select a valid number."
    );

    return;
  }


  let selectedViolation =
    violations[number - 1];


  if (selectedViolation === "Other...") {

    const otherViolation =
      prompt(
        "Write the violation:"
      );


    if (
      otherViolation === null ||
      otherViolation.trim() === ""
    ) {

      return;
    }


    selectedViolation =
      otherViolation.trim();
  }


  saveBehaviorRecord(
    studentName,
    "Violation",
    selectedViolation,
    -1
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

  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .insert([
          {
            student_name: studentName,
            class_name: currentClass,
            category: category,
            action_name: actionName,
            points: points,
            forgiven: false
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
      "Student: " +
      studentName +
      "\n" +
      "Class: " +
      currentClass +
      "\n" +
      actionName
    );

  } catch (error) {

    console.error(
      "Unexpected save error:",
      error
    );

    alert(
      "Could not save the record."
    );
  }
}


// ==========================================
// HISTORY
// ==========================================

async function openStudentHistory(
  studentName,
  className
) {

  currentHistoryStudent =
    studentName;

  currentClass =
    className;


  hideAllScreens();

  historyScreen.classList.remove(
    "hidden"
  );


  historyStudentName.textContent =
    studentName;

  historyClassName.textContent =
    className;

  historyStatus.textContent =
    "Loading history...";

  historyTableBody.innerHTML =
    "";

  historyTableContainer.style.display =
    "none";


  try {

    const { data, error } =
      await supabaseClient
        .from("behavior_records")
        .select(
          "id, student_name, class_name, category, action_name, points, created_at, forgiven, forgiven_at"
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
        "History error:",
        error
      );

      historyStatus.textContent =
        "Could not load history.";

      return;
    }


    const records =
      data || [];


    if (records.length === 0) {

      historyStatus.textContent =
        "No records for this student yet.";

      return;
    }


    historyStatus.textContent = "";

    historyTableContainer.style.display =
      "block";


    records.forEach(
      function(record) {

        createHistoryRow(record);
      }
    );

  } catch (error) {

    console.error(
      "History error:",
      error
    );

    historyStatus.textContent =
      "Could not load history.";
  }
}


// ==========================================
// CREATE HISTORY ROW
// ==========================================

function createHistoryRow(record) {

  const row =
    document.createElement("tr");


  if (record.forgiven === true) {

    row.classList.add(
      "forgiven-row"
    );
  }


  const dateObject =
    new Date(record.created_at);


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


  addCell(row, date);
  addCell(row, time);
  addCell(row, record.category);
  addCell(row, record.action_name);


  const pointsCell =
    document.createElement("td");


  pointsCell.textContent =
    (
      Number(record.points) > 0
        ? "+"
        : ""
    ) +
    Number(record.points);


  pointsCell.className =
    Number(record.points) >= 0
      ? "positive-points"
      : "negative-points";


  row.appendChild(pointsCell);


  // STATUS / ACTION

  const actionCell =
    document.createElement("td");


  if (record.forgiven === true) {

    const badge =
      document.createElement("span");

    badge.className =
      "forgiven-badge";

    badge.textContent =
      "✓ Forgiven";

    actionCell.appendChild(badge);

  } else if (
    record.category === "Violation"
  ) {

    const forgiveButton =
      document.createElement("button");

    forgiveButton.type =
      "button";

    forgiveButton.className =
      "forgive-btn";

    forgiveButton.textContent =
      "🤝 Forgive";


    forgiveButton.addEventListener(
      "click",
      function() {

        forgiveRecord(
          record.id,
          record.action_name
        );
      }
    );


    actionCell.appendChild(
      forgiveButton
    );

  } else {

    actionCell.textContent =
      "Active";
  }


  row.appendChild(actionCell);

  historyTableBody.appendChild(row);
}


// ==========================================
// FORGIVE VIOLATION
// ==========================================

async function forgiveRecord(
  recordId,
  actionName
) {

  const confirmed =
    confirm(
      "Forgive this violation?\n\n" +
      actionName +
      "\n\n" +
      "The record will remain in History, " +
      "but it will not appear in the report " +
      "or affect the student's score."
    );


  if (!confirmed) {
    return;
  }


  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .update({
          forgiven: true,
          forgiven_at:
            new Date().toISOString()
        })
        .eq(
          "id",
          recordId
        );


    if (error) {

      console.error(
        "Forgive error:",
        error
      );

      alert(
        "Could not forgive this record."
      );

      return;
    }


    alert(
      "Violation forgiven successfully ✓"
    );


    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );

  } catch (error) {

    console.error(
      "Forgive error:",
      error
    );

    alert(
      "Could not forgive this record."
    );
  }
}


// ==========================================
// REPORT
// ==========================================

async function openStudentReport(
  studentName,
  className
) {

  currentClass =
    className;


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


  try {

    const { data, error } =
      await supabaseClient
        .from("behavior_records")
        .select(
          "id, category, action_name, points, created_at, forgiven"
        )
        .eq(
          "student_name",
          studentName
        )
        .eq(
          "class_name",
          className
        )
        .eq(
          "forgiven",
          false
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
          record.category === "Bonus"
        ) {

          bonusCount++;
        }


        if (
          record.category === "Violation"
        ) {

          violationCount++;
        }


        totalScore +=
          Number(record.points) || 0;


        createReportRow(record);
      }
    );


    reportBonusCount.textContent =
      bonusCount;

    reportViolationCount.textContent =
      violationCount;

    reportTotalScore.textContent =
      (
        totalScore > 0
          ? "+"
          : ""
      ) +
      totalScore;


    reportGeneratedDate.textContent =
      new Date().toLocaleString(
        "en-GB"
      );


    if (records.length === 0) {

      reportStatus.textContent =
        "No active behavior records for this student.";

      reportTableContainer.style.display =
        "none";

    } else {

      reportStatus.textContent = "";

      reportTableContainer.style.display =
        "block";
    }

  } catch (error) {

    console.error(
      "Report error:",
      error
    );

    reportStatus.textContent =
      "Could not load the student report.";
  }
}


// ==========================================
// CREATE REPORT ROW
// ==========================================

function createReportRow(record) {

  const row =
    document.createElement("tr");


  const dateObject =
    new Date(record.created_at);


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


  addCell(row, date);
  addCell(row, time);
  addCell(row, record.category);
  addCell(row, record.action_name);


  const pointsCell =
    document.createElement("td");


  pointsCell.textContent =
    (
      Number(record.points) > 0
        ? "+"
        : ""
    ) +
    Number(record.points);


  pointsCell.className =
    Number(record.points) >= 0
      ? "positive-points"
      : "negative-points";


  row.appendChild(pointsCell);

  reportTableBody.appendChild(row);
}


// ==========================================
// SAFE TABLE CELL
// ==========================================

function addCell(row, value) {

  const cell =
    document.createElement("td");

  cell.textContent =
    value ?? "";

  row.appendChild(cell);
}


// ==========================================
// CLASS BUTTONS
// ==========================================

document
  .querySelectorAll(".class-card")
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
// BACK BUTTONS
// ==========================================

if (backBtn) {

  backBtn.addEventListener(
    "click",
    showDashboard
  );
}


if (historyBackBtn) {

  historyBackBtn.addEventListener(
    "click",
    function() {

      openClass(currentClass);
    }
  );
}


if (reportBackBtn) {

  reportBackBtn.addEventListener(
    "click",
    function() {

      openClass(currentClass);
    }
  );
}


// ==========================================
// PDF
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
// START APP
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
  "Class Behavior Tracker - Version 62"
);
