const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submitQuiz");
let currentQuestion = 0;

// Ẩn tất cả các câu hỏi ngoại trừ câu hỏi đầu tiên
const questions = quiz.getElementsByTagName("h2");
for (let i = 1; i < questions.length; i++) {
  questions[i].style.display = "none";
}

// Thêm sự kiện click cho nút nộp bài
submitButton.addEventListener("click", showResults);

function showResults() {
  let score = 0;
  const currentAnswers = quiz.getElementsByTagName("input");
  for (let i = 0; i < currentAnswers.length; i++) {
    if (currentAnswers[i].checked) {
      if (currentAnswers[i].value === "a") {
        score++;
      }
    }
  }

  alert(`Bạn đã trả lời đúng ${score} câu hỏi.`);
}

// Thêm sự kiện click cho từng câu trả lời
const answers = quiz.getElementsByTagName("input");
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", showNextQuestion);
}

function showNextQuestion() {
  questions[currentQuestion].style.display = "none";
  currentQuestion++;

  // Nếu đã đến câu hỏi cuối cùng, ẩn nút nộp bài và hiển thị kết quả
  if (currentQuestion === questions.length - 1) {
    submitButton.style.display = "inline-block";
  }

  questions[currentQuestion].style.display = "block";
}


