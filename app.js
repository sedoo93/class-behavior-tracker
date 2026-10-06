// ==========================================
// REPORT
// ==========================================

async function openStudentReport(studentName, className) {

  currentClass = className;

  hideAllScreens();
  reportScreen.classList.remove("hidden");

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
      .select("id, category, action_name, points, created_at, forgiven")
      .eq("student_name", studentName)
      .eq("class_name", className)
      .eq("forgiven", false)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Report error:", error);
      reportStatus.textContent = "Could not load report.";
      return;
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
    reportViolationCount.textContent = violationCount;

    reportTotalScore.textContent =
      (totalScore > 0 ? "+" : "") + totalScore;

    reportGeneratedDate.textContent =
      new Date().toLocaleString("en-GB");

    if (records.length === 0) {
      reportStatus.textContent =
        "No active behavior records for this student.";
      return;
    }

    reportStatus.textContent = "";

    reportTableContainer.classList.remove("hidden");

  } catch (error) {

    console.error("Report error:", error);

    reportStatus.textContent =
      "Could not load report.";
  }
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

  const date =
    dateObject.toLocaleDateString("en-GB");

  const time =
    dateObject.toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }
    );


  // ========================================
  // ✏️ EDIT HERE — TYPE NAMES
  // غير الكلام الموجود على اليمين فقط
  // ========================================

  const typeNames = {

    "Violation": "Violation", // ✏️ EDIT HERE

    "Bonus": "Bonus" // ✏️ EDIT HERE

  };


  // ========================================
  // ✏️ EDIT HERE — REPORT DETAILS
  //
  // LEFT  = الاسم المحفوظ في Supabase
  // RIGHT = الاسم الذي يظهر في التقرير
  //
  // غير اليمين فقط
  // ========================================

  const reportNames = {

    "Behavior violation":
      "Behavior violation", // ✏️ EDIT HERE

    "Missed homework":
      "Missed homework", // ✏️ EDIT HERE

    "Didn't bring his sheet":
      "Didn't bring his sheet", // ✏️ EDIT HERE

    "Didn't bring his notebook":
      "Didn't bring his notebook", // ✏️ EDIT HERE

    "Eating in the session":
      "Eating in the session", // ✏️ EDIT HERE

    "Late for the session":
      "Late for the session", // ✏️ EDIT HERE

    "Making noise":
      "Making noise", // ✏️ EDIT HERE

    "Remaining quiet all the day":
      "Remaining quiet all the day", // ✏️ EDIT HERE

    "Participating actively":
      "Participating actively" // ✏️ EDIT HERE

  };


  const reportType =
    typeNames[record.category] ||
    record.category;

  const reportDetails =
    reportNames[record.action_name] ||
    record.action_name;

  const points =
    Number(record.points) || 0;


  // ========================================
  // 5 COLUMNS
  // Date | Time | Type | Details | Points
  // ========================================

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
