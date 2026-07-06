// ============================================================
//  Code.gs — Google Apps Script Backend
//  Dán toàn bộ file này vào Apps Script editor
// ============================================================

const SHEET_ID = ""; // ← Dán Spreadsheet ID của bạn vào đây
const SHEET_NAME = "Submissions";

// ------ CORS wrapper ------
function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  const callback = e && e.parameter && e.parameter.callback;
  let result;
  try {
    const action = (e && e.parameter && e.parameter.action) || "";
    if (action === "submit") {
      result = submitAnswers(e);
    } else if (action === "getQuestions") {
      result = getQuestions();
    } else {
      result = { status: "error", message: "Unknown action" };
    }
  } catch (err) {
    result = { status: "error", message: err.toString() };
  }

  const json = JSON.stringify(result);
  const output = callback
    ? ContentService.createTextOutput(callback + "(" + json + ")")
        .setMimeType(ContentService.MimeType.JAVASCRIPT)
    : ContentService.createTextOutput(json)
        .setMimeType(ContentService.MimeType.JSON);

  return output;
}

// ------ Submit answers ------
function submitAnswers(e) {
  const params = e.parameter;
  const studentName = params.studentName || "";
  const className   = params.className   || "";
  const score       = params.score       || "0";
  const total       = params.total       || "0";
  const answers     = params.answers     || "{}";
  const timeTaken   = params.timeTaken   || "0";

  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let sheet   = ss.getSheetByName(SHEET_NAME);

  // Tạo sheet nếu chưa có
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp", "Họ tên", "Lớp", "Điểm", "Tổng số câu",
      "% Đúng", "Thời gian làm (giây)", "Chi tiết đáp án"
    ]);
    sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
  }

  const pct = total > 0 ? Math.round((score / total) * 100) + "%" : "0%";

  sheet.appendRow([
    new Date(),
    studentName,
    className,
    score,
    total,
    pct,
    timeTaken,
    answers
  ]);

  return { status: "success", message: "Đã lưu kết quả!" };
}

// ------ Get questions (optional: load from sheet) ------
function getQuestions() {
  // Trả về mảng câu hỏi mẫu; bạn có thể đọc từ sheet "Questions" nếu muốn
  return { status: "success", questions: SAMPLE_QUESTIONS };
}

// ============================================================
//  Câu hỏi mẫu — chỉnh sửa tại đây mỗi tuần
//  type: "mc" = trắc nghiệm | "fill" = điền vào chỗ trống
// ============================================================
const SAMPLE_QUESTIONS = [
  {
    id: 1,
    type: "mc",
    question: "The modern scientific age in Antarctica began with the introduction of ___.",
    options: ["A. dog-teams", "B. aircraft", "C. ships", "D. snowmobiles"],
    answer: "B",
    explanation: "Bài đọc: 'The modern scientific age in Antarctica really began with the introduction of aircraft in the 1920s.'"
  },
  {
    id: 2,
    type: "mc",
    question: "Before the 1920s, Antarctic travel depended mainly on ___.",
    options: ["A. aircraft", "B. motor vehicles", "C. dog-teams pulling sledges", "D. boats"],
    answer: "C",
    explanation: "Bài đọc: 'Antarctic travel had been limited to the use of dog-teams pulling sledges.'"
  },
  {
    id: 3,
    type: "fill",
    question: "Until the 1920s, humans relied on ___ to explore Antarctica.",
    answer: "animals",
    explanation: "'animals' là paraphrase của 'dog-teams' — chó là động vật được dùng để kéo xe."
  },
  {
    id: 4,
    type: "fill",
    question: "The mantis shrimp sees its underwater world through ___ eyes.",
    answer: "hyperspectral",
    explanation: "Bài đọc ghi rõ: 'The mantis shrimp scans its aquatic world through hyperspectral eyes.'"
  },
  {
    id: 5,
    type: "mc",
    question: "Which insect uses polarised light to navigate?",
    options: ["A. Cockroach", "B. Wasp", "C. Mantis shrimp", "D. Cataglyphis ant"],
    answer: "D",
    explanation: "Đoạn C: 'Cataglyphis uses polarised light... to orient and steer itself.'"
  }
];
