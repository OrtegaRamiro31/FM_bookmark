const body = document.querySelector("body");
const btnOptions = document.querySelectorAll(".section__features--border");

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  menuHamburger(); // Open and close hamburger menu
  featureOptions();
  optionDefault();
  optionsDescriptions();
  questionsList();
  emailVerify();
}

function menuHamburger() {
  const defaultHeader = document.querySelector(".header__default");
  const hideMenu = document.querySelector(".header__hideListMenu");
  const btnHamburger = document.querySelector(
    ".header__default--iconHamburger"
  );
  const btnClose = document.querySelector(".hideListMenu__top--iconClose");
  const mainContainer = document.querySelector(".main");

  btnHamburger.addEventListener("click", () => {
    defaultHeader.style.visibility = "hidden";
    hideMenu.style.display = "block";
    body.classList.add("fixed");
    mainContainer.style.zIndex = -1;
  });

  btnClose.addEventListener("click", () => {
    defaultHeader.style.visibility = "visible";
    hideMenu.style.display = "none";
    body.classList.remove("fixed");
    mainContainer.style.zIndex = 1;
  });
}

function featureOptions() {
  for (let i = 0; i < btnOptions.length - 1; i++) {
    selectedOption(btnOptions[i].children[0]);
  }
}

function selectedOption(optionTag) {
  optionTag.addEventListener("click", (e) => {
    cleanOption();
    e.target.classList.add("btnActive");
  });
}

function cleanOption() {
  for (let i = 0; i < btnOptions.length - 1; i++) {
    btnOptions[i].children[0].classList.remove("btnActive");
  }
}

function optionDefault() {
  btnOptions[0].children[0].classList.add("btnActive");
}

function optionsDescriptions() {
  const containerImage = document.querySelector(".features__ilustrations--img");
  const titleTextInfo = document.querySelector(".features__textInfo--title");
  const bodyTextInfo = document.querySelector(".features__textInfo--text");

  const btnBookmarking = document.querySelector(".section__features--option1");
  const btnSpeSearching = document.querySelector(".section__features--option2");
  const btnEasySharing = document.querySelector(".section__features--option3");

  btnBookmarking.addEventListener("click", (e) => {
    containerImage.src = "./images/illustration-features-tab-1.svg";
    titleTextInfo.textContent = "Bookmark in one click";
    bodyTextInfo.textContent =
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
  });

  btnSpeSearching.addEventListener("click", (e) => {
    containerImage.src = "./images/illustration-features-tab-2.svg";
    titleTextInfo.textContent = "Intelligent search";
    bodyTextInfo.textContent =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  });

  btnEasySharing.addEventListener("click", (e) => {
    containerImage.src = "./images/illustration-features-tab-3.svg";
    titleTextInfo.textContent = "Share your bookmarks";
    bodyTextInfo.textContent =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  });
}

function questionsList() {
  const questionSelected = document.querySelectorAll(
    ".questions__list--question"
  );
  questionSelected.forEach((question) => {
    question.addEventListener("mouseover", () => {
      question.children[0].style.color = "hsl(0, 94%, 66%)";
      question.style.cursor = "pointer";
    });

    question.addEventListener("mouseout", () => {
      question.children[0].style.color = "hsl(0, 0%, 0%)";
    });

    question.addEventListener("click", () => {
      if (window.getComputedStyle(question.children[2]).display == "none") {
        question.children[0].style.color = "rgb(0,0,0)";
        animateAnswer(question.children[2], 0, 1, 500);
        question.children[2].style.display = "block";
        question.children[1].style.transform = "scaleY(-1)";
        question.children[1].style.filter =
          "invert(13%) sepia(94%) saturate(7466%) hue-rotate(0deg) brightness(94%) contrast(115%)";
        question.setAttribute("grid-template-rows", "repeat(3,1fr)");
      } else {
        question.children[2].style.display = "none";
        question.children[1].style.transform = "scaleY(1)";
        question.children[1].style.filter = "none";
        question.setAttribute("grid-template-rows", "repeat(1,1fr)");
      }
    });
  });

  questionSelected.forEach((question) => {
    question.addEventListener("mouseover", () => {});
  });
}

function animateAnswer(element, initOpacity, finalOpacity, timeTransition) {
  element.animate(
    {
      opacity: [initOpacity, finalOpacity],
    },
    {
      duration: timeTransition,
      iterations: 1,
    }
  );
  element.style.opacity = finalOpacity;
}

function emailVerify() {
  const btnSubmit = document.querySelector(".contact__email--submit");
  const emailInput = document.querySelector(".contact__email--input");
  const containerEmailForm = document.querySelector(
    ".contact__email--container"
  );
  const iconError = document.querySelector(".contact__icon--error");
  const textError = document.querySelector(".contact__text--error");
  const expRegular =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let okEmail = expRegular.test(emailInput.value);
    if (okEmail) {
      containerEmailForm.classList.remove("errorEmail");
      iconError.style.visibility = "hidden";
      textError.style.visibility = "hidden";
      return;
    }
    containerEmailForm.classList.add("errorEmail");
    iconError.style.visibility = "visible";
    textError.style.visibility = "visible";

/*     setInterval(() => {
      containerEmailForm.classList.remove("errorEmail");
      iconError.style.visibility = "hidden";
      textError.style.visibility = "hidden";
    }, 5000); */
  });
}
