// ==========================================
// CLASS BEHAVIOR TRACKER
// VERSION 68
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
    "Mohamed El-Bar",
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
  "Didn't bring his book",
  "Eating in the session",
  "Late for the session",
  "Making noise",
  "Other..."
];

const bonuses = [
  "Remaining quiet all the day",
  "Participating actively",
  "Other..."
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

const analysisScreen =
  document.getElementById("analysis-screen");


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


// ANALYSIS

const analysisBackBtn =
  document.getElementById("analysis-back-btn");

const translateAnalysisBtn =
  document.getElementById("translate-analysis-btn");

const printAnalysisBtn =
  document.getElementById("print-analysis-btn");

const analysisStudentName =
  document.getElementById("analysis-student-name");

const analysisClassName =
  document.getElementById("analysis-class-name");

const analysisBonusCount =
  document.getElementById("analysis-bonus-count");

const analysisViolationCount =
  document.getElementById("analysis-violation-count");

const analysisTotalScore =
  document.getElementById("analysis-total-score");

const analysisTopViolation =
  document.getElementById("analysis-top-violation");

const analysisStatus =
  document.getElementById("analysis-status");

const analysisChart =
  document.getElementById("analysis-chart");

const analysisDescription =
  document.getElementById("analysis-description");

const analysisSummaryTitle =
  document.getElementById("analysis-summary-title");

const analysisGeneratedDate =
  document.getElementById("analysis-generated-date");


// ==========================================
// CURRENT STATE
// ==========================================

let currentClass = null;

let currentHistoryStudent = null;

let currentAnalysisLanguage = "en";

let currentAnalysisText = {
  en: "",
  ar: ""
};


// ==========================================
// CELEBRATION / FEEDBACK IMAGE
// ==========================================

function showBehaviorImage(imagePath) {

  const oldOverlay =
    document.getElementById(
      "behavior-feedback-overlay"
    );

  if (oldOverlay) {
    oldOverlay.remove();
  }


  const overlay =
    document.createElement("div");

  overlay.id =
    "behavior-feedback-overlay";


  const image =
    document.createElement("img");

  image.src =
    imagePath;

  image.alt =
    "Behavior feedback";


  // OVERLAY

  overlay.style.position =
    "fixed";

  overlay.style.top =
    "0";

  overlay.style.left =
    "0";

  overlay.style.width =
    "100%";

  overlay.style.height =
    "100%";

  overlay.style.display =
    "flex";

  overlay.style.alignItems =
    "center";

  overlay.style.justifyContent =
    "center";

  overlay.style.background =
    "rgba(255,255,255,0.25)";

  overlay.style.backdropFilter =
    "blur(2px)";

  overlay.style.zIndex =
    "999999";

  overlay.style.opacity =
    "0";

  overlay.style.transition =
    "opacity 0.25s ease";


  // IMAGE

  image.style.width =
    "min(430px, 82vw)";

  image.style.maxHeight =
    "78vh";

  image.style.objectFit =
    "contain";

  image.style.borderRadius =
    "28px";

  image.style.filter =
    "drop-shadow(0 18px 35px rgba(0,0,0,0.25))";

  image.style.transform =
    "scale(0.45)";

  image.style.opacity =
    "0";

  image.style.transition =
    "transform 0.45s cubic-bezier(.2,1.4,.4,1), opacity 0.25s ease";


  overlay.appendChild(image);

  document.body.appendChild(
    overlay
  );


  requestAnimationFrame(
    function() {

      overlay.style.opacity =
        "1";

      image.style.opacity =
        "1";

      image.style.transform =
        "scale(1)";

    }
  );


  setTimeout(
    function() {

      overlay.style.opacity =
        "0";

      image.style.transform =
        "scale(1.08)";

    },
    1800
  );


  setTimeout(
    function() {

      overlay.remove();

    },
    2200
  );

}


// ==========================================
// BONUS IMAGE
// ==========================================

function showBonusCelebration() {

  showBehaviorImage(
    "./bonus-celebration.png?v=68"
  );

}


// ==========================================
// VIOLATION / MINUS IMAGE
// ==========================================

function showMinusCelebration() {

  showBehaviorImage(
    "./minus-celebration.png?v=68"
  );

}


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

  if (analysisScreen) {
    analysisScreen.classList.add("hidden");
  }

}


function showDashboard() {

  hideAllScreens();

  dashboard.classList.remove(
    "hidden"
  );

  if (teacherEmail) {

    teacherEmail.textContent =
      "Logged in as: " +
      ADMIN_EMAIL;

  }

}


function showLogin() {

  hideAllScreens();

  loginScreen.classList.remove(
    "hidden"
  );

  if (loginMessage) {
    loginMessage.textContent = "";
  }

}


// ==========================================
// LOGIN
// ==========================================

function login() {

  const enteredEmail =
    emailInput.value
      .trim()
      .toLowerCase();

  const enteredPassword =
    passwordInput.value.trim();

  loginMessage.textContent = "";


  if (
    enteredEmail ===
      ADMIN_EMAIL.toLowerCase() &&
    enteredPassword ===
      ADMIN_PASSWORD
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

  currentClass =
    className;

  const classStudents =
    students[className] || [];

  hideAllScreens();

  classScreen.classList.remove(
    "hidden"
  );

  classTitle.textContent =
    "Class " +
    className;

  if (classCount) {

    classCount.textContent =
      classStudents.length +
      " Students";

  }

  studentsList.innerHTML =
    "";


  classStudents.forEach(
    function(
      studentName,
      index
    ) {

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
    document.createElement(
      "div"
    );

  card.className =
    "student-card";


  const number =
    document.createElement(
      "div"
    );

  number.className =
    "student-number";

  number.textContent =
    index + 1;


  const name =
    document.createElement(
      "div"
    );

  name.className =
    "student-name";

  name.textContent =
    studentName;


  const actions =
    document.createElement(
      "div"
    );

  actions.className =
    "student-actions";


  // BONUS

  const bonusButton =
    document.createElement(
      "button"
    );

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


  // VIOLATION

  const violationButton =
    document.createElement(
      "button"
    );

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


  // HISTORY

  const historyButton =
    document.createElement(
      "button"
    );

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
    document.createElement(
      "button"
    );

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


  // ANALYSIS

  const analysisButton =
    document.createElement(
      "button"
    );

  analysisButton.className =
    "analysis-btn";

  analysisButton.textContent =
    "📊 Analysis";

  analysisButton.addEventListener(
    "click",
    function() {

      openStudentAnalysis(
        studentName,
        currentClass
      );

    }
  );


  actions.appendChild(
    bonusButton
  );

  actions.appendChild(
    violationButton
  );

  actions.appendChild(
    historyButton
  );

  actions.appendChild(
    reportButton
  );

  actions.appendChild(
    analysisButton
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
// BONUS
// ==========================================

function showBonusMenu(
  studentName
) {

  let message =
    "Select Bonus for:\n" +
    studentName +
    "\n\n";


  bonuses.forEach(
    function(
      item,
      index
    ) {

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


  let selectedBonus =
    bonuses[number - 1];


  if (
    selectedBonus ===
    "Other..."
  ) {

    const otherBonus =
      prompt(
        "Write the bonus description:"
      );


    if (
      otherBonus === null ||
      otherBonus.trim() === ""
    ) {

      return;
    }


    selectedBonus =
      otherBonus.trim();

  }


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

function showViolationMenu(
  studentName
) {

  let message =
    "Select Violation for:\n" +
    studentName +
    "\n\n";


  violations.forEach(
    function(
      item,
      index
    ) {

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


  if (
    selectedViolation ===
    "Other..."
  ) {

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
        .from(
          "behavior_records"
        )
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
              points,

            forgiven:
              false

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


    // BONUS IMAGE

    if (
      category ===
      "Bonus"
    ) {

      showBonusCelebration();

    }


    // VIOLATION IMAGE

    if (
      category ===
      "Violation"
    ) {

      showMinusCelebration();

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
// END OF PART 1 - VERSION 68
// PASTE PART 2 DIRECTLY BELOW
// ==========================================
// ==========================================
// HISTORY
// ==========================================

async function openStudentHistory(
  studentName,
  className
) {

  currentHistoryStudent = studentName;
  currentClass = className;

  hideAllScreens();
  historyScreen.classList.remove("hidden");

  historyStudentName.textContent = studentName;
  historyClassName.textContent = className;

  historyStatus.textContent = "Loading history...";
  historyTableBody.innerHTML = "";

  historyTableContainer.classList.add("hidden");

  try {

    const { data, error } =
      await supabaseClient
        .from("behavior_records")
        .select(
          "id, student_name, class_name, category, action_name, points, created_at, forgiven, forgiven_at"
        )
        .eq("student_name", studentName)
        .eq("class_name", className)
        .order("created_at", {
          ascending: false
        });

    if (error) {

      console.error(
        "History error:",
        error
      );

      historyStatus.textContent =
        "Could not load history.";

      return;
    }

    const records = data || [];

    if (records.length === 0) {

      historyStatus.textContent =
        "No records for this student yet.";

      return;
    }

    historyStatus.textContent = "";

    historyTableContainer.classList.remove(
      "hidden"
    );

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
        minute: "2-digit",
        hour12: true
      }
    );


  addCell(row, date);
  addCell(row, time);
  addCell(row, record.category);
  addCell(row, record.action_name);


  // POINTS

  const pointsCell =
    document.createElement("td");


  const points =
    Number(record.points) || 0;


  pointsCell.textContent =
    (points > 0 ? "+" : "") +
    points;


  pointsCell.className =
    points >= 0
      ? "positive-points"
      : "negative-points";


  row.appendChild(
    pointsCell
  );


  // ========================================
  // ACTIONS
  // ========================================

  const actionCell =
    document.createElement("td");

  actionCell.className =
    "history-actions";


  // FORGIVE / FORGIVEN

  if (record.forgiven === true) {

    const badge =
      document.createElement("span");

    badge.className =
      "forgiven-badge";

    badge.textContent =
      "✓ Forgiven";

    actionCell.appendChild(
      badge
    );

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

  }


  // EDIT

  const editButton =
    document.createElement("button");

  editButton.type =
    "button";

  editButton.className =
    "edit-record-btn";

  editButton.textContent =
    "✏️ Edit";


  editButton.addEventListener(
    "click",
    function() {

      editBehaviorRecord(
        record.id,
        record.action_name
      );

    }
  );


  actionCell.appendChild(
    editButton
  );


  // DELETE

  const deleteButton =
    document.createElement("button");

  deleteButton.type =
    "button";

  deleteButton.className =
    "delete-record-btn";

  deleteButton.textContent =
    "🗑️ Delete";


  deleteButton.addEventListener(
    "click",
    function() {

      deleteBehaviorRecord(
        record.id,
        record.action_name
      );

    }
  );


  actionCell.appendChild(
    deleteButton
  );


  row.appendChild(
    actionCell
  );


  historyTableBody.appendChild(
    row
  );

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
        .eq("id", recordId);


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
// EDIT BEHAVIOR RECORD
// ==========================================

async function editBehaviorRecord(
  recordId,
  currentDescription
) {

  const newDescription =
    prompt(
      "Edit behavior description:",
      currentDescription
    );


  if (newDescription === null) {
    return;
  }


  const cleanedDescription =
    newDescription.trim();


  if (cleanedDescription === "") {

    alert(
      "Description cannot be empty."
    );

    return;
  }


  if (
    cleanedDescription ===
    currentDescription
  ) {
    return;
  }


  const confirmed =
    confirm(
      "Save this change?\n\n" +
      "Old:\n" +
      currentDescription +
      "\n\n" +
      "New:\n" +
      cleanedDescription
    );


  if (!confirmed) {
    return;
  }


  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .update({

          action_name:
            cleanedDescription

        })
        .eq("id", recordId);


    if (error) {

      console.error(
        "Edit error:",
        error
      );

      alert(
        "Could not edit this record."
      );

      return;
    }


    alert(
      "Record updated successfully ✓"
    );


    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );


  } catch (error) {

    console.error(
      "Edit error:",
      error
    );

    alert(
      "Could not edit this record."
    );

  }

}


// ==========================================
// DELETE BEHAVIOR RECORD
// ==========================================

async function deleteBehaviorRecord(
  recordId,
  actionName
) {

  const confirmed =
    confirm(
      "DELETE this record permanently?\n\n" +
      actionName +
      "\n\n" +
      "This action cannot be undone."
    );


  if (!confirmed) {
    return;
  }


  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .delete()
        .eq("id", recordId);


    if (error) {

      console.error(
        "Delete error:",
        error
      );

      alert(
        "Could not delete this record."
      );

      return;
    }


    alert(
      "Record deleted successfully ✓"
    );


    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );


  } catch (error) {

    console.error(
      "Delete error:",
      error
    );

    alert(
      "Could not delete this record."
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

  currentClass = className;

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

  reportStatus.textContent =
    "Loading report...";

  reportTableBody.innerHTML =
    "";

  reportTableContainer.classList.add(
    "hidden"
  );


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
        "Could not load report.";

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


        createReportRow(
          record
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


    reportGeneratedDate.textContent =
      new Date().toLocaleString(
        "en-GB"
      );


    if (records.length === 0) {

      reportStatus.textContent =
        "No active behavior records for this student.";

      return;
    }


    reportStatus.textContent =
      "";


    reportTableContainer.classList.remove(
      "hidden"
    );


  } catch (error) {

    console.error(
      "Report error:",
      error
    );


    reportStatus.textContent =
      "Could not load report.";

  }

}


// ==========================================
// CREATE REPORT ROW
// ==========================================

function createReportRow(record) {

  const row =
    document.createElement("tr");


  if (
    record.category ===
    "Bonus"
  ) {

    row.classList.add(
      "positive-row"
    );

  } else {

    row.classList.add(
      "negative-row"
    );

  }


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
        minute: "2-digit",
        hour12: true
      }
    );


  const typeNames = {

    "Violation":
      "Violation",

    "Bonus":
      "Bonus"

  };


  const reportNames = {

    "Behavior violation":
      "Behavior violation",

    "Missed homework":
      "Missed homework",

    "Didn't bring his sheet":
      "Didn't bring his sheet",

    "Didn't bring his notebook":
      "Didn't bring his notebook",

    "Didn't bring his book":
      "Didn't bring his book",

    "Eating in the session":
      "Eating in the session",

    "Late for the session":
      "Late for the session",

    "Making noise":
      "Making noise",

    "Remaining quiet all the day":
      "Remaining quiet all the day",

    "Participating actively":
      "Participating actively"

  };


  const reportType =
    typeNames[
      record.category
    ] ||
    record.category;


  const reportDetails =
    reportNames[
      record.action_name
    ] ||
    record.action_name;


  const points =
    Number(
      record.points
    ) || 0;


  addCell(
    row,
    date
  );


  addCell(
    row,
    time
  );


  addCell(
    row,
    reportType
  );


  addCell(
    row,
    reportDetails
  );


  addCell(
    row,
    (points > 0 ? "+" : "") +
    points
  );


  reportTableBody.appendChild(
    row
  );

}


// ==========================================
// ANALYSIS
// ==========================================

async function openStudentAnalysis(
  studentName,
  className
) {

  currentClass =
    className;


  currentAnalysisLanguage =
    "en";


  hideAllScreens();


  analysisScreen.classList.remove(
    "hidden"
  );


  analysisStudentName.textContent =
    studentName;


  analysisClassName.textContent =
    className;


  analysisBonusCount.textContent =
    "0";


  analysisViolationCount.textContent =
    "0";


  analysisTotalScore.textContent =
    "0";


  analysisTopViolation.textContent =
    "None";


  analysisChart.innerHTML =
    "";


  analysisDescription.textContent =
    "";


  analysisDescription.classList.remove(
    "arabic"
  );


  analysisSummaryTitle.textContent =
    "Behavior Summary";


  translateAnalysisBtn.textContent =
    "🌐 العربية";


  analysisStatus.textContent =
    "Loading behavior analysis...";


  try {

    const { data, error } =
      await supabaseClient
        .from("behavior_records")
        .select(
          "category, action_name, points, created_at, forgiven"
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
            ascending: true
          }
        );


    if (error) {

      console.error(
        "Analysis error:",
        error
      );


      analysisStatus.textContent =
        "Could not load the behavior analysis.";


      return;
    }


    const records =
      data || [];


    let bonusCount = 0;
    let violationCount = 0;
    let totalScore = 0;


    const counts = {};
    const violationCounts = {};


    records.forEach(
      function(record) {

        const action =
          record.action_name ||
          "Other";


        counts[action] =
          (counts[action] || 0) +
          1;


        totalScore +=
          Number(record.points) || 0;


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


          violationCounts[action] =
            (
              violationCounts[action] ||
              0
            ) + 1;

        }

      }
    );


    let topViolation =
      "None";


    let topViolationCount =
      0;


    Object.keys(
      violationCounts
    ).forEach(
      function(action) {

        if (
          violationCounts[action] >
          topViolationCount
        ) {

          topViolation =
            action;


          topViolationCount =
            violationCounts[action];

        }

      }
    );


    analysisBonusCount.textContent =
      bonusCount;


    analysisViolationCount.textContent =
      violationCount;


    analysisTotalScore.textContent =
      (totalScore > 0 ? "+" : "") +
      totalScore;


    analysisTopViolation.textContent =
      topViolation;


    renderBehaviorChart(
      counts,
      records
    );


    currentAnalysisText =
      buildBehaviorSummary(
        studentName,
        bonusCount,
        violationCount,
        totalScore,
        topViolation,
        topViolationCount
      );


    analysisDescription.textContent =
      currentAnalysisText.en;


    analysisGeneratedDate.textContent =
      new Date().toLocaleString(
        "en-GB"
      );


    if (
      records.length === 0
    ) {

      analysisStatus.textContent =
        "No active behavior records for this student yet.";

    } else {

      analysisStatus.textContent =
        "";

    }


  } catch (error) {

    console.error(
      "Analysis error:",
      error
    );


    analysisStatus.textContent =
      "Could not load the behavior analysis.";

  }

}


// ==========================================
// BAR CHART
// ==========================================

function renderBehaviorChart(
  counts,
  records
) {

  analysisChart.innerHTML =
    "";


  const categories =
    Object.keys(counts)
      .sort(
        function(a, b) {

          return (
            counts[b] -
            counts[a]
          );

        }
      );


  if (
    categories.length === 0
  ) {

    analysisChart.textContent =
      "No active records available for charting.";

    return;
  }


  const maxCount =
    Math.max(
      ...categories.map(
        function(name) {

          return counts[name];

        }
      )
    );


  categories.forEach(
    function(name) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "chart-row";


      const label =
        document.createElement(
          "div"
        );


      label.className =
        "chart-label";


      label.textContent =
        name;


      const track =
        document.createElement(
          "div"
        );


      track.className =
        "chart-track";


      const bar =
        document.createElement(
          "div"
        );


      const matchingRecord =
        records.find(
          function(record) {

            return (
              record.action_name ===
              name
            );

          }
        );


      if (
        matchingRecord &&
        matchingRecord.category ===
          "Bonus"
      ) {

        bar.className =
          "chart-bar bonus";

      } else {

        bar.className =
          "chart-bar violation";

      }


      bar.style.width =
        (
          (
            counts[name] /
            maxCount
          ) *
          100
        ) +
        "%";


      const value =
        document.createElement(
          "div"
        );


      value.className =
        "chart-value";


      value.textContent =
        counts[name];


      track.appendChild(
        bar
      );


      row.appendChild(
        label
      );


      row.appendChild(
        track
      );


      row.appendChild(
        value
      );


      analysisChart.appendChild(
        row
      );

    }
  );

}


// ==========================================
// BUILD BEHAVIOR SUMMARY
// ==========================================

function buildBehaviorSummary(
  studentName,
  bonusCount,
  violationCount,
  totalScore,
  topViolation,
  topViolationCount
) {

  let en = "";
  let ar = "";


  if (
    bonusCount === 0 &&
    violationCount === 0
  ) {

    en =
      studentName +
      " currently has no active behavior records. " +
      "There is not yet enough recorded information " +
      "to provide a reliable behavior assessment.";


    ar =
      "لا توجد حاليًا سجلات سلوكية فعّالة للطالب " +
      studentName +
      "، ولذلك لا تتوفر معلومات مسجلة كافية " +
      "لتقديم تقييم موثوق لمستوى السلوك.";

  }


  else if (
    violationCount === 0 &&
    bonusCount > 0
  ) {

    en =
      studentName +
      " demonstrates very positive classroom behavior " +
      "based on the available records. " +
      "The student has received " +
      bonusCount +
      " positive recognition" +
      (
        bonusCount === 1
          ? ""
          : "s"
      ) +
      " and has no active violations. " +
      "Continued positive participation and responsible " +
      "classroom conduct are encouraged.";


    ar =
      "يُظهر الطالب " +
      studentName +
      " سلوكًا صفيًا إيجابيًا جدًا وفقًا للسجلات المتاحة. " +
      "حصل الطالب على " +
      bonusCount +
      " من سجلات التعزيز الإيجابي، " +
      "ولا توجد عليه مخالفات فعّالة حاليًا. " +
      "يُنصح بالاستمرار في تعزيز المشاركة الإيجابية " +
      "والالتزام بالسلوك المسؤول داخل الصف.";

  }


  else if (
    violationCount <= 2 &&
    totalScore >= -2
  ) {

    en =
      studentName +
      " generally demonstrates satisfactory classroom behavior. " +
      "A small number of behavior concerns have been recorded" +
      (
        topViolation !== "None"
          ? ", with " +
            topViolation +
            " being the most frequent concern"
          : ""
      ) +
      ". Continued guidance and positive reinforcement " +
      "are recommended to support consistent classroom conduct.";


    ar =
      "يُظهر الطالب " +
      studentName +
      " مستوى مُرضيًا من السلوك الصفي بشكل عام. " +
      "تم تسجيل عدد محدود من الملاحظات السلوكية" +
      (
        topViolation !== "None"
          ? "، وأكثرها تكرارًا هو: " +
            topViolation
          : ""
      ) +
      ". يُوصى بالاستمرار في التوجيه والتعزيز الإيجابي " +
      "للمساعدة على ثبات السلوك الجيد داخل الصف.";

  }


  else if (
    violationCount <= 5
  ) {

    en =
      studentName +
      " shows a developing level of classroom behavior. " +
      violationCount +
      " active violations have been recorded" +
      (
        topViolation !== "None"
          ? ", and the most frequent concern is " +
            topViolation
          : ""
      ) +
      ". Greater consistency with classroom expectations " +
      "is recommended, while positive behavior should " +
      "continue to be recognized and encouraged.";


    ar =
      "يُظهر الطالب " +
      studentName +
      " مستوى سلوكيًا يحتاج إلى مزيد من التطور. " +
      "تم تسجيل " +
      violationCount +
      " مخالفات فعّالة" +
      (
        topViolation !== "None"
          ? "، وأكثر الملاحظات تكرارًا هي: " +
            topViolation
          : ""
      ) +
      ". يُوصى بزيادة الالتزام بتوقعات الصف، " +
      "مع الاستمرار في تعزيز السلوك الإيجابي وتشجيعه.";

  }


  else {

    en =
      studentName +
      " requires focused support to improve consistency " +
      "with classroom expectations. " +
      violationCount +
      " active violations have been recorded" +
      (
        topViolation !== "None"
          ? ", with " +
            topViolation +
            " occurring most frequently"
          : ""
      ) +
      ". Regular follow-up between the student, teacher, " +
      "and family is recommended, together with clear " +
      "expectations and recognition of positive improvement.";


    ar =
      "يحتاج الطالب " +
      studentName +
      " إلى متابعة مركزة لتحسين مستوى الالتزام بتوقعات الصف. " +
      "تم تسجيل " +
      violationCount +
      " مخالفات فعّالة" +
      (
        topViolation !== "None"
          ? "، وأكثرها تكرارًا هو: " +
            topViolation
          : ""
      ) +
      ". يُوصى بالمتابعة المنتظمة بين الطالب والمعلم والأسرة، " +
      "مع توضيح التوقعات وتعزيز أي تحسن إيجابي في السلوك.";

  }


  return {
    en: en,
    ar: ar
  };

}


// ==========================================
// TRANSLATE ANALYSIS
// ==========================================

if (
  translateAnalysisBtn
) {

  translateAnalysisBtn.addEventListener(
    "click",
    function() {

      if (
        currentAnalysisLanguage ===
        "en"
      ) {

        currentAnalysisLanguage =
          "ar";


        analysisDescription.textContent =
          currentAnalysisText.ar;


        analysisDescription.classList.add(
          "arabic"
        );


        analysisSummaryTitle.textContent =
          "ملخص السلوك";


        translateAnalysisBtn.textContent =
          "🌐 English";


      } else {

        currentAnalysisLanguage =
          "en";


        analysisDescription.textContent =
          currentAnalysisText.en;


        analysisDescription.classList.remove(
          "arabic"
        );


        analysisSummaryTitle.textContent =
          "Behavior Summary";


        translateAnalysisBtn.textContent =
          "🌐 العربية";

      }

    }
  );

}


// ==========================================
// HELPER
// ==========================================

function addCell(
  row,
  value
) {

  const cell =
    document.createElement(
      "td"
    );


  cell.textContent =
    value;


  row.appendChild(
    cell
  );

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

          const className =
            button.dataset.class;


          openClass(
            className
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
    function() {

      showDashboard();

    }
  );

}


if (historyBackBtn) {

  historyBackBtn.addEventListener(
    "click",
    function() {

      openClass(
        currentClass
      );

    }
  );

}


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


if (analysisBackBtn) {

  analysisBackBtn.addEventListener(
    "click",
    function() {

      openClass(
        currentClass
      );

    }
  );

}


// ==========================================
// PRINT REPORT
// ==========================================

if (printReportBtn) {

  printReportBtn.addEventListener(
    "click",
    function() {

      document.body.classList.add(
        "print-report"
      );


      window.print();


      setTimeout(
        function() {

          document.body.classList.remove(
            "print-report"
          );

        },
        500
      );

    }
  );

}


// ==========================================
// PRINT ANALYSIS
// ==========================================

if (printAnalysisBtn) {

  printAnalysisBtn.addEventListener(
    "click",
    function() {

      document.body.classList.add(
        "print-analysis"
      );


      window.print();


      setTimeout(
        function() {

          document.body.classList.remove(
            "print-analysis"
          );

        },
        500
      );

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


      emailInput.value =
        "";


      passwordInput.value =
        "";


      showLogin();

    }
  );

}


// ==========================================
// INITIAL LOAD
// ==========================================

const isLoggedIn =
  sessionStorage.getItem(
    "teacherLoggedIn"
  );


if (
  isLoggedIn ===
  "true"
) {

  showDashboard();

} else {

  showLogin();

}


// ==========================================
// VERSION
// ==========================================

console.log(
  "Mr. Sayed's Class Behavior Tracker - Version 68"
);
