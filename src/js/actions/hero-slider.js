let currentIndex = 0;

let slider = document.getElementById("contact-info");

let sliderItems = document.querySelectorAll(".contact-group");

let heroRightArrow = document.getElementById("hero-arrow-right");
let heroLeftArrow = document.getElementById("hero-arrow-left");

window.onload = function () {
  if (window.innerWidth < 931) {
    heroRightArrow.classList.remove("none", "hide");
    heroLeftArrow.classList.remove("none", "hide");
    slider.classList.replace("hero-contact-info", "mobile-contact-slider");
    sliderItems[0].classList.add("out-of-screen");
    sliderItems[1].classList.add("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[2].classList.add("out-of-screen", "hide", "out-of-screen-translate");
  } else {
    slider.classList.replace("mobile-contact-slider", "hero-contact-info");
    heroRightArrow.classList.add("none", "hide");
    heroLeftArrow.classList.add("none", "hide");
    sliderItems[0].classList.remove("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[1].classList.remove("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[2].classList.remove("out-of-screen", "hide", "out-of-screen-translate");
  }
};

window.addEventListener("resize", () => {

  let isHideApplied = false
 
  if (window.innerWidth < 931 && !isHideApplied) {
    heroRightArrow.classList.remove("none", "hide");
    heroLeftArrow.classList.remove("none", "hide");

    slider.classList.replace("hero-contact-info", "mobile-contact-slider");

    sliderItems[0].classList.add("out-of-screen");
    sliderItems[1].classList.add("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[2].classList.add("out-of-screen", "hide", "out-of-screen-translate");
    isHideApplied = true;
  } else if (window.innerWidth >= 931) {

    sliderItems.forEach(item => {
      item.style.transform = '';
    });

    slider.classList.replace("mobile-contact-slider", "hero-contact-info");
    heroRightArrow.classList.add("none", "hide");
    heroLeftArrow.classList.add("none", "hide");
    sliderItems[0].classList.remove("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[1].classList.remove("out-of-screen", "hide", "out-of-screen-translate");
    sliderItems[2].classList.remove("out-of-screen", "hide", "out-of-screen-translate");

    isHideApplied = false;
  } 
})

heroRightArrow.addEventListener("click", function moveRight() {
  currentIndex++;

  setTimeout(function () {
    sliderItems[1].classList.remove("hide");
    sliderItems[2].classList.remove("hide");
  }, 200);

  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  sliderPosition();
});

heroLeftArrow.addEventListener("click", function moveLeft() {
  currentIndex--;

  setTimeout(function () {
    sliderItems[1].classList.remove("hide");
    sliderItems[2].classList.remove("hide");
  }, 200);
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  sliderPosition();
});

function sliderPosition() {
  for (i = 0; i < sliderItems.length; i++) {
    const newPosition = (i - currentIndex) * 300;
    sliderItems[i].style.transform = `translateX(${newPosition}%)`;
  }
}
