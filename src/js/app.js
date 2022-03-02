const button = document.querySelectorAll(".arrow-btn");
const headers = document.querySelectorAll(".faq__question");

headers.forEach(header => {
  header.addEventListener("click", () => {
    if (header.parentNode.classList.contains("question--with-answer")) {
      header.parentNode.classList.toggle("question--with-answer");
    } else {
      headers.forEach((header) => header.parentNode.classList.remove("question--with-answer"));
      header.parentNode.classList.add("question--with-answer");
    }
  })
});



const section = document.querySelector('section');

section.addEventListener("click", function(e) {

  const questions = Array.from(document.querySelectorAll(".faq__item"));
  
  for (let i = 0; i < questions.length; i++) {
    var question = questions[i]
    question.classList.remove('question--with-answer');
  }

  const currentQuestion = e.target;
  currentQuestion.classList.toggle('question--with-answer')
});





