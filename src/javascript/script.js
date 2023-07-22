////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*Profile dropdown function start */
////////////////////////////////////////////////////
const profile_dropdown = function () {
  /*variable declartion*/
  const profile_menu = document.querySelector(".dropdown-menu");
  const menu_drop = document.querySelector(".dropdown-menu-content");
  ///////////////////////////////////////////////
  /* add and remove active class function */
  profile_menu.addEventListener("click", () => {
    menu_drop.classList.toggle("active-menu");
  });
  /*remove the active class on clicking anywhere on window*/
  window.addEventListener("click", (event) => {
    if (!profile_menu.contains(event.target)) {
      menu_drop.classList.remove("active-menu");
    }
  });
};
profile_dropdown();
/////////////////////////////////////////////////////
/*Profile dropdown function end */
////////////////////////////////////////////////////
////////////////////////////////////////////////////
/*Slides function start */
////////////////////////////////////////////////////
const banner = function () {
  /*slider variable declartion*/
  const slides = document.querySelectorAll(".slide-item");
  const prevBtn = document.querySelector("#back-btn");
  const nextBtn = document.querySelector("#next-btn");
  let curslide = 0;
  let intervalID;
  const maxslide = slides.length;
  /////////////////////////////////////////////////////////
  const updateSlides = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  /*automatic update slide function*/
  const slideinterval = function () {
    intervalID = setInterval(() => {
      nextslide();
    }, 3000);
  };
  /*next slide function*/
  function nextslide() {
    clearInterval(intervalID);
    curslide === maxslide - 1 ? (curslide = 0) : curslide++;
    slideinterval();
    updateSlides(curslide);
  }
  /*prev slide function*/
  function prevslide() {
    clearInterval(intervalID);
    curslide === 0 ? (curslide = maxslide - 1) : curslide--;
    slideinterval();
    updateSlides(curslide);
  }
  /*calling sliders function*/
  nextBtn.addEventListener("click", nextslide);
  prevBtn.addEventListener("click", prevslide);
  updateSlides(curslide);
  slideinterval();
};
banner();
/////////////////////////////////////////////////////
/*Slides function end */
////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*product header active function start */
////////////////////////////////////////////////////
const item_active = function () {
  let items_active = document.querySelectorAll(".product-header-item");
  items_active.forEach((s, i) => {
    s.addEventListener("click", () => {
      items_active.forEach((item) => {
        item.classList.remove("active");
      });
      s.classList.add("active");
    });
  });
};
item_active();
/////////////////////////////////////////////////////
/*product header active function end */
////////////////////////////////////////////////////
