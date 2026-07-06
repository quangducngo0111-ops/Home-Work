# Smartcom Homework System — Hướng dẫn cài đặt

## Cấu trúc file
```
homework-system/
├── index.html       ← Web cho học sinh làm bài
├── questions.js     ← Câu hỏi (chỉnh file này mỗi tuần)
├── Code.gs          ← Backend Google Apps Script
└── README.md
```

---

## Bước 1 — Tạo Google Sheets

1. Vào [sheets.google.com](https://sheets.google.com) → tạo spreadsheet mới
2. Copy **Spreadsheet ID** từ URL:  
   `https://docs.google.com/spreadsheets/d/**[ID_Ở_ĐÂY]**/edit`
3. Mở file `Code.gs`, dán ID vào dòng:
   ```js
   const SHEET_ID = "dán-id-vào-đây";
   ```

---

## Bước 2 — Tạo Google Apps Script

1. Vào [script.google.com](https://script.google.com) → **New Project**
2. Copy toàn bộ nội dung `Code.gs` → dán vào editor → **Save**
3. Click **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy** → Copy **Web app URL**
5. Mở `index.html`, dán URL vào dòng:
   ```js
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/...";
   ```

---

## Bước 3 — Đưa web lên mạng

### Cách A — GitHub Pages (miễn phí, khuyên dùng)
1. Tạo tài khoản [github.com](https://github.com)
2. Tạo repository mới → upload 2 file: `index.html` + `questions.js`
3. Vào **Settings → Pages → Source: main branch**
4. URL học sinh dùng: `https://[tên-bạn].github.io/[repo-name]`

### Cách B — Google Sites
1. Vào [sites.google.com](https://sites.google.com) → tạo trang mới
2. Nhúng file HTML vào trang (Insert → Embed)

---

## Đổi câu hỏi mỗi tuần

Chỉ cần chỉnh file `questions.js`:

```js
const WEEK_TITLE = "Unit 2 – Climate Change";  // ← đổi tiêu đề

const QUESTIONS = [
  {
    id: 1,
    type: "mc",                          // trắc nghiệm
    question: "Carbon dioxide is a type of ___.",
    options: ["A. metal", "B. greenhouse gas", "C. mineral", "D. liquid"],
    answer: "B",
    explanation: "CO₂ là khí nhà kính chính gây ra hiện tượng nóng lên toàn cầu."
  },
  {
    id: 2,
    type: "fill",                        // điền vào chỗ trống
    question: "The Earth's temperature has ___ by 1.1°C since pre-industrial times.",
    answer: "risen",
    hint: "Động từ chỉ sự tăng lên",
    explanation: "'risen' là quá khứ phân từ của 'rise' — nhiệt độ đã tăng."
  }
];
```

---

## Kết quả trong Google Sheets

Mỗi lần học sinh nộp bài, một dòng sẽ tự động xuất hiện:

| Timestamp | Họ tên | Lớp | Điểm | Tổng | % Đúng | Thời gian | Chi tiết |
|-----------|--------|-----|------|------|--------|-----------|----------|
| 2024-01-15 08:30 | Nguyễn A | 10A1 | 4 | 5 | 80% | 245 | [...] |
