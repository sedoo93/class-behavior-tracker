// ==========================================
// MR. SAYED'S CLASS BEHAVIOR TRACKER
// VERSION 73 - WHATSAPP UPDATE
// PART 1
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
    "Muhammad Ahmad Mahmoud Al-Bar",
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
    "Mohammed Khaled el sharawy",
    "Firas Mohammed Bakr Malibari"
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
// BEHAVIOR OPTIONS
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
// SCREEN ELEMENTS
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


// ==========================================
// LOGIN ELEMENTS
// ==========================================

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
// CLASS ELEMENTS
// ==========================================

const backBtn =
  document.getElementById("back-btn");

const classTitle =
  document.getElementById("class-title");

const classCount =
  document.getElementById("class-count");

const studentsList =
  document.getElementById("students-list");


// ==========================================
// HISTORY ELEMENTS
// ==========================================

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


// ==========================================
// REPORT ELEMENTS
// ==========================================

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
// ANALYSIS ELEMENTS
// ==========================================

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
// PART 2 - VERSION 73
// CELEBRATIONS, LOGIN, STUDENT CARDS
// ==========================================


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

  image.src = imagePath;

  image.alt =
    "Behavior feedback";

  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.background =
    "rgba(255,255,255,0.35)";
  overlay.style.backdropFilter = "blur(4px)";
  overlay.style.zIndex = "999999";
  overlay.style.opacity = "0";
  overlay.style.transition =
    "opacity 0.35s ease";

  image.style.width = "94vw";
  image.style.height = "94vh";
  image.style.maxWidth = "1200px";
  image.style.maxHeight = "94vh";
  image.style.objectFit = "contain";
  image.style.borderRadius = "30px";
  image.style.filter =
    "drop-shadow(0 20px 45px rgba(0,0,0,0.30))";
  image.style.transform = "scale(0.70)";
  image.style.opacity = "0";
  image.style.transition =
    "transform 0.55s cubic-bezier(.2,1.4,.4,1), opacity 0.35s ease";

  overlay.appendChild(image);
  document.body.appendChild(overlay);

  requestAnimationFrame(function() {
    overlay.style.opacity = "1";
    image.style.opacity = "1";
    image.style.transform = "scale(1)";
  });

  setTimeout(function() {
    overlay.style.opacity = "0";
    image.style.transform = "scale(1.03)";
  }, 4000);

  setTimeout(function() {
    overlay.remove();
  }, 4500);

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
// VIOLATION IMAGE
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

  if (classCount) {
    classCount.textContent =
      classStudents.length + " Students";
  }

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

function createStudentCard(studentName, index) {

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


  // ========================================
  // BONUS BUTTON
  // ========================================

  const bonusButton =
    document.createElement("button");

  bonusButton.className = "positive-btn";

  bonusButton.textContent = "★ Bonus";

  bonusButton.addEventListener(
    "click",
    function() {
      showBonusMenu(studentName);
    }
  );


  // ========================================
  // VIOLATION BUTTON
  // ========================================

  const violationButton =
    document.createElement("button");

  violationButton.className = "negative-btn";

  violationButton.textContent = "⚠ Violation";

  violationButton.addEventListener(
    "click",
    function() {
      showViolationMenu(studentName);
    }
  );


  // ========================================
  // HISTORY BUTTON
  // ========================================

  const historyButton =
    document.createElement("button");

  historyButton.className = "history-btn";

  historyButton.textContent = "🕘 History";

  historyButton.addEventListener(
    "click",
    function() {

      openStudentHistory(
        studentName,
        currentClass
      );

    }
  );


  // ========================================
  // REPORT BUTTON
  // ========================================

  const reportButton =
    document.createElement("button");

  reportButton.className = "report-btn";

  reportButton.textContent = "📋 Report";

  reportButton.addEventListener(
    "click",
    function() {

      openStudentReport(
        studentName,
        currentClass
      );

    }
  );


  // ========================================
  // ANALYSIS BUTTON
  // ========================================

  const analysisButton =
    document.createElement("button");

  analysisButton.className = "analysis-btn";

  analysisButton.textContent = "📊 Analysis";

  analysisButton.addEventListener(
    "click",
    function() {

      openStudentAnalysis(
        studentName,
        currentClass
      );

    }
  );


  // ========================================
  // WHATSAPP BUTTON - NEW
  // ========================================

  const whatsappButton =
    document.createElement("button");

  whatsappButton.type = "button";

  whatsappButton.className = "whatsapp-btn";

  whatsappButton.textContent = "💬 WhatsApp";

  whatsappButton.style.background = "#25D366";
  whatsappButton.style.color = "#ffffff";
  whatsappButton.style.border = "none";
  whatsappButton.style.borderRadius = "8px";
  whatsappButton.style.padding = "10px 14px";
  whatsappButton.style.cursor = "pointer";
  whatsappButton.style.fontWeight = "bold";

  whatsappButton.addEventListener(
    "click",
    function() {

      sendStudentWhatsAppReport(
        studentName,
        currentClass
      );

    }
  );


  // ========================================
  // ADD BUTTONS
  // ========================================

  actions.appendChild(bonusButton);
  actions.appendChild(violationButton);
  actions.appendChild(historyButton);
  actions.appendChild(reportButton);
  actions.appendChild(analysisButton);
  actions.appendChild(whatsappButton);


  // ========================================
  // BUILD STUDENT CARD
  // ========================================

  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(actions);

  studentsList.appendChild(card);

}


// ==========================================
// END OF PART 2 - VERSION 73
// ==========================================
// ==========================================
// PART 3 - VERSION 73
// BONUS, VIOLATION, DATABASE, WHATSAPP
// ==========================================


// ==========================================
// BONUS MENU
// ==========================================

function showBonusMenu(studentName) {

  let message =
    "Select Bonus for:\n" +
    studentName +
    "\n\n";

  bonuses.forEach(function(item, index) {

    message +=
      (index + 1) +
      ". " +
      item +
      "\n";

  });

  const choice = prompt(message);

  if (choice === null) {
    return;
  }

  const number = Number(choice);

  if (
    !Number.isInteger(number) ||
    number < 1 ||
    number > bonuses.length
  ) {

    alert("Please select a valid number.");
    return;

  }

  let selectedBonus = bonuses[number - 1];

  if (selectedBonus === "Other...") {

    const otherBonus = prompt(
      "Write the bonus description:"
    );

    if (
      otherBonus === null ||
      otherBonus.trim() === ""
    ) {
      return;
    }

    selectedBonus = otherBonus.trim();

  }

  saveBehaviorRecord(
    studentName,
    "Bonus",
    selectedBonus,
    1
  );

}


// ==========================================
// VIOLATION MENU
// ==========================================

function showViolationMenu(studentName) {

  let message =
    "Select Violation for:\n" +
    studentName +
    "\n\n";

  violations.forEach(function(item, index) {

    message +=
      (index + 1) +
      ". " +
      item +
      "\n";

  });

  const choice = prompt(message);

  if (choice === null) {
    return;
  }

  const number = Number(choice);

  if (
    !Number.isInteger(number) ||
    number < 1 ||
    number > violations.length
  ) {

    alert("Please select a valid number.");
    return;

  }

  let selectedViolation =
    violations[number - 1];

  if (selectedViolation === "Other...") {

    const otherViolation = prompt(
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
// SAVE BEHAVIOR RECORD
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

      console.error("Save error:", error);

      alert(
        "Could not save the record."
      );

      return;
    }

    if (category === "Bonus") {
      showBonusCelebration();
    }

    if (category === "Violation") {
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
// WHATSAPP PDF REPORT
// ==========================================

// ==========================================
// WHATSAPP - SHARE STUDENT REPORT AS PDF
// ==========================================

async function sendStudentWhatsAppReport(studentName, className) {

  if (typeof html2pdf === "undefined") {
    alert("PDF library is not loaded. Please refresh the page.");
    return;
  }

  const reportElement = document.getElementById("report-screen");

  if (!reportElement) {
    alert("Report template was not found.");
    return;
  }

  const safeName = studentName
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "_");

  const fileName = safeName + "_Behavior_Report.pdf";

  try {

    // Load the student's real report data
    const loaded = await loadStudentReportData(studentName, className);

if (!loaded) {
  alert("Could not load the student's report.");
  return;
}
    // Create a temporary report copy for PDF export
const pdfContainer = document.createElement("div");

pdfContainer.style.position = "fixed";
pdfContainer.style.left = "-10000px";
pdfContainer.style.top = "0";
pdfContainer.style.width = "794px";
pdfContainer.style.background = "#ffffff";
pdfContainer.style.padding = "20px";
pdfContainer.style.boxSizing = "border-box";

const pdfReport = reportElement.cloneNode(true);

pdfReport.classList.remove("hidden");
pdfReport.style.display = "block";
pdfReport.style.width = "100%";
pdfReport.style.maxWidth = "none";
pdfReport.style.margin = "0";
pdfReport.style.boxShadow = "none";

// Remove buttons from the PDF copy only
pdfReport.querySelectorAll(
  ".screen-top, #report-back-btn, #print-report-btn"
).forEach(function(element) {
  element.remove();
});

pdfContainer.appendChild(pdfReport);
document.body.appendChild(pdfContainer);
    // Keep the report screen hidden during PDF preparation

    const options = {
      margin: 8,
      filename: fileName,
      image: {
        type: "jpeg",
        quality: 0.98
      },
      html2canvas: {
        scale: 2,
        useCORS: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["css", "legacy"]
      }
    };

    const pdfBlob = await html2pdf()
      .set(options)
      .from(reportElement)
      .outputPdf("blob");

    const pdfFile = new File(
      [pdfBlob],
      fileName,
      { type: "application/pdf" }
    );

    // Share the PDF using the device's native share menu
    if (
      navigator.canShare &&
      navigator.canShare({ files: [pdfFile] }) &&
      navigator.share
    ) {

      await navigator.share({
        files: [pdfFile],
        title: "Student Behavior Report",
        text: "Student Behavior Report - " + studentName
      });

    } else {

      // Fallback when PDF file sharing is unsupported
      const downloadUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(function() {
        URL.revokeObjectURL(downloadUrl);
      }, 60000);

      alert(
        "Your PDF has been downloaded.\n\n" +
        "Your browser does not support direct PDF sharing.\n" +
        "Open WhatsApp and attach the downloaded PDF."
      );

    }

  } catch (error) {

    if (error.name === "AbortError") {
      return;
    }

    console.error("WhatsApp PDF sharing error:", error);

    alert(
      "Could not prepare or share the PDF report. " +
      "Please try again."
    );

  }

}
// ==========================================
// END OF PART 3
// ==========================================
// ==========================================
// PART 4 - VERSION 73
// HISTORY, FORGIVE, EDIT, DELETE
// ==========================================


// ==========================================
// STUDENT HISTORY
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
      console.error("History error:", error);
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

    records.forEach(function(record) {
      createHistoryRow(record);
    });

  } catch (error) {

    console.error("History error:", error);

    historyStatus.textContent =
      "Could not load history.";

  }

}


// ==========================================
// HELPER - ADD TABLE CELL
// ==========================================

function addCell(row, value) {

  const cell = document.createElement("td");

  cell.textContent =
    value === null || value === undefined
      ? ""
      : String(value);

  row.appendChild(cell);

  return cell;

}


// ==========================================
// CREATE HISTORY ROW
// ==========================================

function createHistoryRow(record) {

  const row = document.createElement("tr");

  if (record.forgiven === true) {
    row.classList.add("forgiven-row");
  }

  const dateObject = new Date(record.created_at);

  const date = dateObject.toLocaleDateString("en-GB");

  const time = dateObject.toLocaleTimeString(
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


  // ========================================
  // POINTS
  // ========================================

  const pointsCell =
    document.createElement("td");

  const points = Number(record.points) || 0;

  pointsCell.textContent =
    (points > 0 ? "+" : "") + points;

  pointsCell.className =
    points >= 0
      ? "positive-points"
      : "negative-points";

  row.appendChild(pointsCell);


  // ========================================
  // ACTION BUTTONS
  // ========================================

  const actionCell =
    document.createElement("td");

  actionCell.className = "history-actions";


  // ========================================
  // FORGIVE BUTTON
  // ========================================

  if (record.forgiven === true) {

    const badge =
      document.createElement("span");

    badge.className = "forgiven-badge";

    badge.textContent = "✓ Forgiven";

    actionCell.appendChild(badge);

  } else if (record.category === "Violation") {

    const forgiveButton =
      document.createElement("button");

    forgiveButton.type = "button";

    forgiveButton.className = "forgive-btn";

    forgiveButton.textContent = "🤝 Forgive";

    forgiveButton.addEventListener(
      "click",
      function() {

        forgiveRecord(
          record.id,
          record.action_name
        );

      }
    );

    actionCell.appendChild(forgiveButton);

  }


  // ========================================
  // EDIT BUTTON
  // ========================================

  const editButton =
    document.createElement("button");

  editButton.type = "button";

  editButton.className = "edit-record-btn";

  editButton.textContent = "✏️ Edit";

  editButton.addEventListener(
    "click",
    function() {

      editBehaviorRecord(
        record.id,
        record.action_name
      );

    }
  );

  actionCell.appendChild(editButton);


  // ========================================
  // DELETE BUTTON
  // ========================================

  const deleteButton =
    document.createElement("button");

  deleteButton.type = "button";

  deleteButton.className = "delete-record-btn";

  deleteButton.textContent = "🗑️ Delete";

  deleteButton.addEventListener(
    "click",
    function() {

      deleteBehaviorRecord(
        record.id,
        record.action_name
      );

    }
  );

  actionCell.appendChild(deleteButton);

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

  const confirmed = confirm(
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
          forgiven_at: new Date().toISOString()
        })
        .eq("id", recordId);

    if (error) {

      console.error("Forgive error:", error);

      alert("Could not forgive this record.");

      return;

    }

    alert("Violation forgiven successfully ✓");

    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );

  } catch (error) {

    console.error("Forgive error:", error);

    alert("Could not forgive this record.");

  }

}


// ==========================================
// EDIT BEHAVIOR RECORD
// ==========================================

async function editBehaviorRecord(
  recordId,
  currentDescription
) {

  const newDescription = prompt(
    "Edit behavior description:",
    currentDescription
  );

  if (newDescription === null) {
    return;
  }

  const cleanedDescription =
    newDescription.trim();

  if (cleanedDescription === "") {

    alert("Description cannot be empty.");

    return;

  }

  if (
    cleanedDescription === currentDescription
  ) {
    return;
  }

  const confirmed = confirm(
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
          action_name: cleanedDescription
        })
        .eq("id", recordId);

    if (error) {

      console.error("Edit error:", error);

      alert("Could not edit this record.");

      return;

    }

    alert("Record updated successfully ✓");

    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );

  } catch (error) {

    console.error("Edit error:", error);

    alert("Could not edit this record.");

  }

}


// ==========================================
// DELETE BEHAVIOR RECORD
// ==========================================

async function deleteBehaviorRecord(
  recordId,
  actionName
) {

  const confirmed = confirm(
    "DELETE this record permanently?\n\n" +
    actionName +
    "\n\nThis action cannot be undone."
  );

  if (!confirmed) {
    return;
  }

  try {

    const { error } =
      await supabaseClient
        .from("behavior_records")
        .delete()
        .eq("id", Number(recordId));

    if (error) {

      console.error("Delete error:", error);

      alert(
        "Could not delete this record.\n\n" +
        "Error: " + error.message
      );

      return;

    }

    alert("Record deleted successfully ✓");

    await openStudentHistory(
      currentHistoryStudent,
      currentClass
    );

  } catch (error) {

    console.error("Delete error:", error);

    alert(
      "Could not delete this record.\n\n" +
      "Error: " + (error.message || error)
    );

  }

}


// ==========================================
// END OF PART 4
// ==========================================
// ==========================================
// PART 5 - VERSION 73
// STUDENT REPORT
// ==========================================


// ==========================================
// OPEN STUDENT REPORT
// ==========================================

// ==========================================
// LOAD REPORT DATA WITHOUT OPENING SCREEN
// ==========================================

async function loadStudentReportData(studentName, className) {

  reportStudentName.textContent = studentName;
  reportClassName.textContent = className;

  reportBonusCount.textContent = "0";
  reportViolationCount.textContent = "0";
  reportTotalScore.textContent = "0";

  reportStatus.textContent = "Loading report...";

  reportTableBody.innerHTML = "";
  reportTableContainer.classList.add("hidden");

  try {

    const { data, error } = await supabaseClient
      .from("behavior_records")
      .select(
        "id, category, action_name, points, created_at, forgiven"
      )
      .eq("student_name", studentName)
      .eq("class_name", className)
      .eq("forgiven", false)
      .order("created_at", {
        ascending: false
      });

    if (error) {
      throw error;
    }

    const records = data || [];

    let bonusCount = 0;
    let violationCount = 0;
    let totalScore = 0;

    records.forEach(function(record) {

      if (record.category === "Bonus") {
        bonusCount++;
      }

      if (record.category === "Violation") {
        violationCount++;
      }

      totalScore += Number(record.points) || 0;

      createReportRow(record);

    });

    reportBonusCount.textContent = bonusCount;

    reportViolationCount.textContent =
      violationCount;

    reportTotalScore.textContent =
      (totalScore > 0 ? "+" : "") + totalScore;

    reportGeneratedDate.textContent =
      new Date().toLocaleString("en-GB");

    reportStatus.textContent = records.length
      ? ""
      : "No active behavior records for this student.";

    if (records.length) {
      reportTableContainer.classList.remove("hidden");
    }

    return true;

  } catch (error) {

    console.error("Report error:", error);

    reportStatus.textContent =
      "Could not load report.";

    return false;

  }

}


// ==========================================
// OPEN REPORT SCREEN (ORIGINAL BUTTON)
// ==========================================

async function openStudentReport(studentName, className) {

  currentClass = className;

  hideAllScreens();

  reportScreen.classList.remove("hidden");

  await loadStudentReportData(studentName, className);

}
// ==========================================
// CREATE REPORT ROW
// ==========================================

function createReportRow(record) {

  const row = document.createElement("tr");

  if (record.category === "Bonus") {
    row.classList.add("positive-row");
  } else {
    row.classList.add("negative-row");
  }

  const dateObject = new Date(record.created_at);

  const date = dateObject.toLocaleDateString(
    "en-GB"
  );

  const time = dateObject.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }
  );

  const typeNames = {
    "Violation": "Violation",
    "Bonus": "Bonus"
  };

  const reportNames = {
    "Behavior violation": "Behavior violation",
    "Missed homework": "Missed homework",
    "Didn't bring his sheet": "Didn't bring his sheet",
    "Didn't bring his notebook": "Didn't bring his notebook",
    "Didn't bring his book": "Didn't bring his book",
    "Eating in the session": "Eating in the session",
    "Late for the session": "Late for the session",
    "Making noise": "Making noise",
    "Remaining quiet all the day": "Remaining quiet all the day",
    "Participating actively": "Participating actively"
  };

  const reportType =
    typeNames[record.category] || record.category;

  const reportDetails =
    reportNames[record.action_name] ||
    record.action_name;

  const points = Number(record.points) || 0;

  addCell(row, date);
  addCell(row, time);
  addCell(row, reportType);
  addCell(row, reportDetails);
  addCell(
    row,
    (points > 0 ? "+" : "") + points
  );

  reportTableBody.appendChild(row);

}


// ==========================================
// END OF PART 5
// ==========================================
// ==========================================
// PART 6 - VERSION 73
// STUDENT BEHAVIOR ANALYSIS
// ==========================================


// ==========================================
// ANALYSIS DATA
// ==========================================

let currentAnalysisStudent = null;
let currentAnalysisClass = null;

let currentAnalysisRecords = [];


// ==========================================
// OPEN STUDENT ANALYSIS
// ==========================================

async function openStudentAnalysis(
  studentName,
  className
) {

  currentAnalysisStudent = studentName;
  currentAnalysisClass = className;

  currentAnalysisLanguage = "en";

  hideAllScreens();

  analysisScreen.classList.remove("hidden");

  analysisStudentName.textContent = studentName;
  analysisClassName.textContent = className;

  analysisBonusCount.textContent = "0";
  analysisViolationCount.textContent = "0";
  analysisTotalScore.textContent = "0";
  analysisTopViolation.textContent = "None";

  analysisStatus.textContent =
    "Loading student analysis...";

  analysisChart.innerHTML = "";

  analysisDescription.textContent = "";

  try {

    const { data, error } =
      await supabaseClient
        .from("behavior_records")
        .select(
          "category, action_name, points, created_at"
        )
        .eq("student_name", studentName)
        .eq("class_name", className)
        .eq("forgiven", false)
        .order("created_at", {
          ascending: false
        });

    if (error) {
      throw error;
    }

    currentAnalysisRecords = data || [];

    renderStudentAnalysis();

  } catch (error) {

    console.error(
      "Analysis loading error:",
      error
    );

    analysisStatus.textContent =
      "Could not load student analysis.";

  }

}


// ==========================================
// ANALYSIS CALCULATIONS
// ==========================================

function calculateStudentAnalysis(records) {

  const bonusRecords = records.filter(
    function(record) {
      return record.category === "Bonus";
    }
  );

  const violationRecords = records.filter(
    function(record) {
      return record.category === "Violation";
    }
  );

  const bonusCount = bonusRecords.length;

  const violationCount = violationRecords.length;

  const totalScore = records.reduce(
    function(total, record) {

      return total +
        (Number(record.points) || 0);

    },
    0
  );

  const violationFrequency = {};

  violationRecords.forEach(
    function(record) {

      const action = record.action_name;

      violationFrequency[action] =
        (violationFrequency[action] || 0) + 1;

    }
  );

  let topViolation = "None";
  let topViolationCount = 0;

  Object.keys(violationFrequency).forEach(
    function(action) {

      if (
        violationFrequency[action] >
        topViolationCount
      ) {

        topViolation = action;

        topViolationCount =
          violationFrequency[action];

      }

    }
  );

  return {
    bonusCount: bonusCount,
    violationCount: violationCount,
    totalScore: totalScore,
    topViolation: topViolation,
    topViolationCount: topViolationCount
  };

}


// ==========================================
// RENDER ANALYSIS
// ==========================================

function renderStudentAnalysis() {

  const result =
    calculateStudentAnalysis(
      currentAnalysisRecords
    );

  const isArabic =
    currentAnalysisLanguage === "ar";

  analysisBonusCount.textContent =
    result.bonusCount;

  analysisViolationCount.textContent =
    result.violationCount;

  analysisTotalScore.textContent =
    (result.totalScore > 0 ? "+" : "") +
    result.totalScore;

  analysisTopViolation.textContent =
    result.topViolation === "None"
      ? (isArabic ? "لا توجد" : "None")
      : result.topViolation;

  if (analysisGeneratedDate) {

    analysisGeneratedDate.textContent =
      new Date().toLocaleString(
        isArabic ? "ar-SA" : "en-GB"
      );

  }

  analysisStatus.textContent = "";

  createAnalysisChart(result);

  createAnalysisDescription(result);

}


// ==========================================
// CREATE ANALYSIS CHART
// ==========================================

function createAnalysisChart(result) {

  analysisChart.innerHTML = "";

  const total =
    result.bonusCount +
    result.violationCount;

  const bonusPercentage =
    total === 0
      ? 0
      : Math.round(
          (result.bonusCount / total) * 100
        );

  const violationPercentage =
    total === 0
      ? 0
      : Math.round(
          (result.violationCount / total) * 100
        );

  const chartWrapper =
    document.createElement("div");

  chartWrapper.style.width = "100%";
  chartWrapper.style.maxWidth = "650px";
  chartWrapper.style.margin = "20px auto";

  const items = [
    {
      name:
        currentAnalysisLanguage === "ar"
          ? "المكافآت"
          : "Bonuses",
      count: result.bonusCount,
      percentage: bonusPercentage,
      color: "#22c55e"
    },
    {
      name:
        currentAnalysisLanguage === "ar"
          ? "المخالفات"
          : "Violations",
      count: result.violationCount,
      percentage: violationPercentage,
      color: "#ef4444"
    }
  ];

  items.forEach(function(item) {

    const group =
      document.createElement("div");

    group.style.marginBottom = "22px";

    const label =
      document.createElement("div");

    label.style.display = "flex";
    label.style.justifyContent = "space-between";
    label.style.fontWeight = "bold";
    label.style.marginBottom = "8px";

    const name =
      document.createElement("span");

    name.textContent =
      item.name + " (" + item.count + ")";

    const percentage =
      document.createElement("span");

    percentage.textContent =
      item.percentage + "%";

    label.appendChild(name);
    label.appendChild(percentage);

    const barBackground =
      document.createElement("div");

    barBackground.style.width = "100%";
    barBackground.style.height = "24px";
    barBackground.style.background = "#e5e7eb";
    barBackground.style.borderRadius = "12px";
    barBackground.style.overflow = "hidden";

    const bar =
      document.createElement("div");

    bar.style.width =
      item.percentage + "%";

    bar.style.height = "100%";
    bar.style.background = item.color;
    bar.style.borderRadius = "12px";
    bar.style.transition = "width 0.5s ease";

    barBackground.appendChild(bar);

    group.appendChild(label);
    group.appendChild(barBackground);

    chartWrapper.appendChild(group);

  });

  analysisChart.appendChild(chartWrapper);

}


// ==========================================
// CREATE ANALYSIS DESCRIPTION
// ==========================================

function createAnalysisDescription(result) {

  const studentName =
    currentAnalysisStudent;

  const isArabic =
    currentAnalysisLanguage === "ar";

  let englishText = "";
  let arabicText = "";

  if (
    result.bonusCount === 0 &&
    result.violationCount === 0
  ) {

    englishText =
      studentName +
      " has no active behavior records yet. " +
      "More classroom observations are needed " +
      "before making a behavior assessment.";

    arabicText =
      "لا توجد سجلات سلوكية نشطة للطالب " +
      studentName +
      " حتى الآن. نحتاج إلى المزيد من " +
      "الملاحظات الصفية قبل تقييم سلوكه.";

  } else if (
    result.violationCount === 0
  ) {

    englishText =
      studentName +
      " has demonstrated positive classroom " +
      "behavior based on the recorded bonuses. " +
      "The student received " +
      result.bonusCount +
      " bonuses and has no active violations. " +
      "Continued encouragement is recommended.";

    arabicText =
      "أظهر الطالب " +
      studentName +
      " سلوكًا إيجابيًا وفقًا للمكافآت المسجلة. " +
      "حصل على " +
      result.bonusCount +
      " مكافآت، ولا توجد لديه مخالفات نشطة. " +
      "يُنصح بالاستمرار في تشجيعه.";

  } else if (
    result.bonusCount >
    result.violationCount
  ) {

    englishText =
      studentName +
      " has more positive behavior records " +
      "than violations. The student received " +
      result.bonusCount +
      " bonuses and " +
      result.violationCount +
      " violations. " +
      "The most frequent violation is: " +
      result.topViolation +
      ". Continued positive reinforcement " +
      "and attention to this behavior are recommended.";

    arabicText =
      "لدى الطالب " +
      studentName +
      " سجلات إيجابية أكثر من المخالفات. " +
      "حصل على " +
      result.bonusCount +
      " مكافآت مقابل " +
      result.violationCount +
      " مخالفات. " +
      "وأكثر مخالفة متكررة هي: " +
      result.topViolation +
      ". يُنصح بتعزيز السلوك الإيجابي " +
      "ومتابعة هذه المخالفة.";

  } else {

    englishText =
      studentName +
      " has " +
      result.violationCount +
      " active violations and " +
      result.bonusCount +
      " bonuses. " +
      "The most frequent violation is: " +
      result.topViolation +
      ". A supportive improvement plan, " +
      "clear expectations, and regular " +
      "positive reinforcement are recommended.";

    arabicText =
      "لدى الطالب " +
      studentName +
      " عدد " +
      result.violationCount +
      " من المخالفات النشطة، مقابل " +
      result.bonusCount +
      " مكافآت. " +
      "وأكثر مخالفة متكررة هي: " +
      result.topViolation +
      ". يُنصح بوضع خطة تحسين داعمة، " +
      "وتوضيح التوقعات السلوكية، " +
      "وتعزيز السلوك الإيجابي بانتظام.";

  }

  currentAnalysisText = {
    en: englishText,
    ar: arabicText
  };

  analysisDescription.textContent =
    isArabic ? arabicText : englishText;

  analysisDescription.setAttribute(
    "dir",
    isArabic ? "rtl" : "ltr"
  );

  if (analysisSummaryTitle) {

    analysisSummaryTitle.textContent =
      isArabic
        ? "ملخص تحليل سلوك الطالب"
        : "Student Behavior Analysis Summary";

  }

}


// ==========================================
// CHANGE ANALYSIS LANGUAGE
// ==========================================

function toggleAnalysisLanguage() {

  currentAnalysisLanguage =
    currentAnalysisLanguage === "en"
      ? "ar"
      : "en";

  renderStudentAnalysis();

  if (translateAnalysisBtn) {

    translateAnalysisBtn.textContent =
      currentAnalysisLanguage === "en"
        ? "🌐 العربية"
        : "🌐 English";

  }

}


// ==========================================
// END OF PART 6
// ==========================================
// ==========================================
// PART 7 - VERSION 73
// NAVIGATION, PDF, LOGOUT, STARTUP
// ==========================================


// ==========================================
// CLASS BUTTONS
// ==========================================

function initializeClassButtons() {

  const classButtons =
    document.querySelectorAll(
      "[data-class]"
    );

  classButtons.forEach(function(button) {

    button.addEventListener(
      "click",
      function() {

        const className =
          button.getAttribute("data-class");

        if (students[className]) {
          openClass(className);
        }

      }
    );

  });

}


// ==========================================
// BACK TO DASHBOARD
// ==========================================

if (backBtn) {

  backBtn.addEventListener(
    "click",
    function() {
      showDashboard();
    }
  );

}


// ==========================================
// HISTORY BACK BUTTON
// ==========================================

if (historyBackBtn) {

  historyBackBtn.addEventListener(
    "click",
    function() {

      if (currentClass) {
        openClass(currentClass);
      } else {
        showDashboard();
      }

    }
  );

}


// ==========================================
// REPORT BACK BUTTON
// ==========================================

if (reportBackBtn) {

  reportBackBtn.addEventListener(
    "click",
    function() {

      if (currentClass) {
        openClass(currentClass);
      } else {
        showDashboard();
      }

    }
  );

}


// ==========================================
// ANALYSIS BACK BUTTON
// ==========================================

if (analysisBackBtn) {

  analysisBackBtn.addEventListener(
    "click",
    function() {

      if (currentClass) {
        openClass(currentClass);
      } else {
        showDashboard();
      }

    }
  );

}


// ==========================================
// REPORT PDF
// ==========================================

if (printReportBtn) {

  printReportBtn.addEventListener("click", function() {

    document.body.classList.remove("print-analysis");
    document.body.classList.add("print-report");

    window.print();

  });

}

// ==========================================
// ANALYSIS PDF
// ==========================================

if (printAnalysisBtn) {

  printAnalysisBtn.addEventListener("click", function() {

    document.body.classList.remove("print-report");
    document.body.classList.add("print-analysis");

    window.print();

  });

}


// ==========================================
// ANALYSIS LANGUAGE
// ==========================================

if (translateAnalysisBtn) {

  translateAnalysisBtn.addEventListener(
    "click",
    function() {

      toggleAnalysisLanguage();

    }
  );

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

  const confirmed = confirm(
    "Are you sure you want to log out?"
  );

  if (!confirmed) {
    return;
  }

  sessionStorage.removeItem(
    "teacherLoggedIn"
  );

  currentClass = null;
  currentHistoryStudent = null;
  currentAnalysisStudent = null;
  currentAnalysisClass = null;

  if (emailInput) {
    emailInput.value = "";
  }

  if (passwordInput) {
    passwordInput.value = "";
  }

  showLogin();

}


if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    logout
  );

}


// ==========================================
// APPLICATION STARTUP
// ==========================================

function initializeApplication() {

  initializeClassButtons();

  const isLoggedIn =
    sessionStorage.getItem(
      "teacherLoggedIn"
    ) === "true";

  if (isLoggedIn) {

    showDashboard();

  } else {

    showLogin();

  }

}


// ==========================================
// START APPLICATION
// ==========================================

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication
  );

} else {

  initializeApplication();

}


// ==========================================
// END OF APP.JS - VERSION 73
// ==========================================
// ==========================================
// CLEAN PRINT MODE AFTER PRINTING
// ==========================================

window.addEventListener("afterprint", function() {

  document.body.classList.remove(
    "print-report",
    "print-analysis"
  );

});
