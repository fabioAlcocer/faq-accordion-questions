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




