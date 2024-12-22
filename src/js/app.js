//
const closeButtonTarget = document.querySelector(".header__burger");
const closeButton = document.querySelector(".header__nav-close-button");
const headerMenu = document.querySelector(".header__nav");

closeButtonTarget.addEventListener("click", () => {
  headerMenu.classList.add("active");
});
closeButton.addEventListener("click", () => {
  headerMenu.classList.remove("active");
});

//

const answerTarget = document.querySelector(".questions__content");

answerTarget.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("questions__btn")) {
    let questionElement = target.parentNode;
    let answerElment = target
      .closest(".questions__item")
      .querySelector(".questions__answer");

    questionElement.classList.toggle("active");
    answerElment.classList.toggle("active");
  }
});
