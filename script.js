"use strict";

const modal = document.querySelector(".selection-modal");
const overlay = document.querySelector(".overlay");
const projectBtn = document.querySelector(".project-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

// const openModal = function () {
//   modal.classList.remove("hide");
//   overlay.classList.remove("hide");
//   document.body.classList.add("modal-open");
//   modal.setAttribute("aria-hidden", "false");
//   closeModalBtn.focus();

//   modal.classList.add("animate__animated", "animate__zoomIn");

//   modal.addEventListener(
//     "animationend",
//     function () {
//       modal.classList.remove("animate__animated", "animate__zoomIn");
//     },
//     { once: true }
//   );
// };

// projectBtn.addEventListener("click", openModal);
const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();

  // Add the animation class and set duration
  modal.classList.add("animate__animated", "animate__zoomIn");
  modal.style.setProperty("--animate-duration", "0.3s"); // Set desired duration here

  modal.addEventListener(
    "animationend",
    function () {
      modal.classList.remove("animate__animated", "animate__zoomIn");
    },
    { once: true }
  );
};

projectBtn.addEventListener("click", openModal);

const closeModal = function () {
  overlay.classList.add("hide");
  modal.setAttribute("aria-hidden", "true");
  projectBtn.focus();

  modal.classList.add("animate__animated", "animate__zoomOut");
  modal.style.setProperty("--animate-duration", "0.3s");

  modal.addEventListener(
    "animationend",
    function () {
      modal.classList.remove("animate__animated", "animate__zoomOut");
      modal.classList.add("hide");

      document.body.classList.remove("modal-open");
    },
    { once: true }
  );

  const inputPledge = document.querySelectorAll(".saisir");
  inputPledge.forEach((pledge) => {
    pledge.classList.add("cache");
    pledge.classList.remove("cache-visible");
  });

  let checkedRadio = document.querySelector(".form-radio:checked");
  if (checkedRadio) {
    const formElement = checkedRadio.closest(".form");
    if (formElement) {
      formElement.classList.remove("border-highlight");
    }
    checkedRadio.checked = false;
  }
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const menu = document.querySelector(".mobile-menu");
const hamburgerBtn = document.querySelector(".ham-btn");
const openIcon = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>`;
const closeIcon = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;

hamburgerBtn.innerHTML = openIcon;

function navToggle() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("animate__animated", "animate__backInUp");
    menu.style.setProperty("--animate-duration", "0.3s");
    overlay.classList.remove("hide");

    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);

    menu.addEventListener(
      "animationend",
      function () {
        menu.classList.remove("animate__animated", "animate__backInUp");
      },
      { once: true }
    );

    hamburgerBtn.innerHTML = closeIcon;
  } else {
    menu.classList.add("animate__animated", "animate__backOutDown");
    overlay.classList.add("hide");

    menu.addEventListener(
      "animationend",
      function () {
        menu.classList.remove("animate__animated", "animate__backOutDown");
        menu.classList.add("hidden");
      },
      { once: true }
    );

    hamburgerBtn.innerHTML = openIcon;
  }
}

hamburgerBtn.addEventListener("click", navToggle);

const closeMenu = function () {
  menu.classList.add("hidden");
  hamburgerBtn.innerHTML = openIcon;
};

overlay.addEventListener("click", closeMenu);

const form = document.querySelectorAll(".form");

const updateFormBorder = function () {
  document.querySelectorAll(".form").forEach((form) => {
    form.classList.remove("border-highlight");
  });

  const checkedRadio = document.querySelector(".form-radio:checked");
  if (checkedRadio) {
    const formElement = checkedRadio.closest(".form");
    if (formElement) {
      formElement.classList.add("border-highlight");
    }
  }
};

const radios = document.querySelectorAll(".form-radio");
radios.forEach((radio) => {
  radio.addEventListener("change", updateFormBorder);
});

updateFormBorder();

const removeFormBorder = function () {
  document.querySelectorAll(".form").forEach((form) => {
    form.classList.remove("border-highlight");
  });

  let checkedRadio = document.querySelector(".form-radio:checked");
  if (checkedRadio) {
    checkedRadio.checked = false;
  }
};

const showCache = function (targetId) {
  const cacheElements = document.querySelectorAll(".cache-visible");
  cacheElements.forEach((element) => {
    element.classList.add("cache");
    element.classList.remove("cache-visible");
  });

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.classList.remove("cache");
    targetElement.classList.add("cache-visible");
  }
};

const hideCache = function () {
  const cacheElements = document.querySelectorAll(".cache-visible");
  cacheElements.forEach((element) => {
    element.classList.add("cache");
    element.classList.remove("cache-visible");
  });
};

const openBambooBtn = document.querySelector(".open-bamboo-btn");
const openBlackBtn = document.querySelector(".open-black-btn");
const noRewardLabel = document.getElementById("noRewardLabel");
const bambooLabel = document.getElementById("bambooLabel");
const blackLabel = document.getElementById("blackLabel");

noRewardLabel.addEventListener("click", () => {
  showCache(noRewardLabel.dataset.target);
});
bambooLabel.addEventListener("click", () => {
  showCache(bambooLabel.dataset.target);
});
blackLabel.addEventListener("click", () => {
  showCache(blackLabel.dataset.target);
});

const showBamboo = function () {
  const bambooStand = document.getElementById("bambooStand");
  openModal();
  showCache(bambooLabel.dataset.target);
  bambooStand.scrollIntoView({ behavior: "smooth" });
};

openBambooBtn.addEventListener("click", showBamboo);

const showBlack = function () {
  const blackStand = document.getElementById("blackStand");
  openModal();
  showCache(blackLabel.dataset.target);
  blackStand.scrollIntoView({ behavior: "smooth" });
};

openBlackBtn.addEventListener("click", showBlack);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const bookmarkBtn = document.querySelector(".bookmark-btn");
const btnText = bookmarkBtn.querySelector(".btn-text");
const svgCircle = bookmarkBtn.querySelector(".bookmark-svg circle");
const svgPath = bookmarkBtn.querySelector(".bookmark-svg path");

bookmarkBtn.addEventListener("click", function () {
  bookmarkBtn.classList.toggle("bookmarked-btn");

  if (bookmarkBtn.classList.contains("bookmarked-btn")) {
    btnText.textContent = "Bookmarked";
    svgCircle.style.fill = "var(--dark-cyan)";
    svgPath.style.fill = "var(--white)";
    btnText.style.color = "var(--dark-cyan)";
  } else {
    btnText.textContent = "Bookmark";
    svgCircle.style.fill = "#2F2F2F";
    svgPath.style.fill = "#B1B1B1";
    btnText.style.color = "var(--dark-gray)";
  }
});

const formBtns = document.querySelectorAll(".form-btn");
const successBtn = document.querySelector(".success-btn");
const successModal = document.querySelector(".success-modal");

const showSuccess = function () {
  successModal.style.display = "block";
  modal.classList.add("hide");
  overlay.classList.remove("hide");
  successModal.setAttribute("aria-hidden", "false");

  successModal.classList.add("animate__animated", "animate__zoomIn");
  successModal.style.setProperty("--animate-duration", "0.3s");

  successModal.addEventListener(
    "animationend",
    function () {
      successModal.classList.remove("animate__animated", "animate__zoomIn");
    },
    { once: true }
  );

  handlePledge();
};

const closeSuccess = function () {
  successModal.classList.add("animate__animated", "animate__zoomOut");
  successModal.setAttribute("aria-hidden", "true");

  successModal.addEventListener(
    "animationend",
    function () {
      successModal.classList.remove("animate__animated", "animate__zoomOut");
      successModal.style.display = "none";
      document.body.classList.remove("modal-open");
    },
    { once: true }
  );

  hideCache();
  removeFormBorder();
  overlay.classList.add("hide");
};

formBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showSuccess();
  });
});

successBtn.addEventListener("click", closeSuccess);
overlay.addEventListener("click", closeSuccess);

let totalPledge = 89914;
let totalBackers = 5007;

const handlePledge = function () {
  const amountElement = document.getElementById("amount");
  const backersElement = document.getElementById("backers");
  const progressBar = document.getElementById("progressBar");

  const selectedRadio = document.querySelector('input[name="pledge"]:checked');
  if (selectedRadio) {
    const pledgeInput = document.getElementById(selectedRadio.value);

    if (pledgeInput) {
      const pledgeAmount = parseFloat(pledgeInput.value);
      if (pledgeAmount > 0) {
        totalPledge += pledgeAmount;
        totalBackers++;
      }
    }
  }

  amountElement.textContent = totalPledge.toLocaleString();
  backersElement.textContent = totalBackers.toLocaleString();
  progressBar.value = totalPledge;
};

gsap.to("#days", {
  duration: 2,
  innerHTML: 56,
  ease: "power2.out",
  snap: { innerHTML: 1 },
});

function formatNumber(value) {
  return Number(value).toLocaleString();
}
gsap.to("#backers", {
  duration: 2,
  innerHTML: 5007,
  ease: "power2.out",
  snap: { innerHTML: 1 },
  onUpdate: function () {
    const formattedValue = formatNumber(this.targets()[0].innerHTML);
    this.targets()[0].innerHTML = formattedValue;
  },
});

function formatCurrency(value) {
  return "$" + Number(value).toLocaleString();
}

gsap.to("#amount", {
  duration: 2,
  innerHTML: 89914,
  ease: "power2.out",
  snap: { innerHTML: 1 },
  onUpdate: function () {
    const formattedValue = formatCurrency(this.targets()[0].innerHTML);
    this.targets()[0].innerHTML = formattedValue;
  },
});
