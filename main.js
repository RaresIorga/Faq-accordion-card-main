let answers = document.querySelectorAll(".faq");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      answers.forEach((event) => {
        event.classList.remove("active");
      });
      event.classList.remove("active");
    } else {
      answers.forEach((event) => {
        event.classList.remove("active");
      });
      event.classList.add("active");
    }
  });
});