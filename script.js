"use strict";

document.addEventListener("DOMContentLoaded", function () {
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

  const modal = document.querySelector(".selection-modal");
  const overlay = document.querySelector(".overlay");
  const projectBtn = document.querySelector(".project-btn");
  const closeModalBtn = document.querySelector(".close-modal-btn");
  const menu = document.querySelector(".mobile-menu");
  const hamburgerBtn = document.querySelector(".ham-btn");
  const openIcon = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>`;
  const closeIcon = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;

  hamburgerBtn.innerHTML = openIcon;

  const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hide");
    overlay.classList.remove("hide");
  };

  const closeModal = function () {
    modal.classList.add("hide");
    overlay.classList.add("hide");
  };

  function navToggle() {
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
      hamburgerBtn.innerHTML = openIcon;
      overlay.classList.add("hide");
    } else {
      hamburgerBtn.innerHTML = closeIcon;
      overlay.classList.remove("hide");
    }
  }

  hamburgerBtn.addEventListener("click", navToggle);
  projectBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});

gsap.to("#days", {
  duration: 2,
  innerHTML: 56,
  ease: "power2.out",
  snap: { innerHTML: 1 },
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
