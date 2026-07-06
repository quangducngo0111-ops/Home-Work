// ============================================================
//  questions.js — Chỉnh sửa file này mỗi tuần để đổi bài tập
//  type: "mc" = trắc nghiệm | "fill" = điền vào chỗ trống
// ============================================================

const WEEK_TITLE = "Unit 1 – Antarctica & Biorobotics";
const CLASSES = ["10A1", "10A2", "10A3", "11B1", "11B2", "12C1"];

const QUESTIONS = [
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
    hint: "Paraphrase của 'dog-teams'",
    explanation: "'animals' là paraphrase của 'dog-teams' — chó là động vật được dùng để kéo xe."
  },
  {
    id: 4,
    type: "fill",
    question: "The mantis shrimp sees its underwater world through ___ eyes.",
    answer: "hyperspectral",
    hint: "Nhìn vào đoạn A",
    explanation: "Bài đọc: 'The mantis shrimp scans its aquatic world through hyperspectral eyes.'"
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
