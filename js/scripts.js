/*"use strict";
let pixScrolled = window.innerHeight * 0.30;
let activeBar = false;
window.onscroll = function () {
  if (document.body.scrollTop > pixScrolled || document.documentElement.scrollTop > pixScrolled) {
    document.getElementByClassName("navbar").classList.add("scrolledNav");
    activeBar = true;
  }
  else if (document.body.scrollTop < pixScrolled || document.documentElement.scrollTop < pixScrolled && activeBar == true) {
    document.getElementByClassName("navbar").classList.remove("scrolledNav");
  }
}*/
//const jquery = require('jquery');

$(document).ready(() => {

  $(window).scroll(() => {
    let pixScrolled = window.innerHeight * 0.3;
    let activeBar = false;

    if (document.body.scrollTop > pixScrolled || document.documentElement.scrollTop > pixScrolled) {
      $("nav").addClass("scrolledNav")
      activeBar = true;
    }
    else if (document.body.scrollTop < pixScrolled || document.documentElement.scrollTop < pixScrolled && activeBar == true) {
      $("nav").removeClass("scrolledNav");
    }
  })

  $(".skill-icons__buttons button").click((event) => {
    console.log(event.target.id);
    if (event.target.id === "web") {
      $(".skill-icons__display")
        .html(`
          <img class="tech-section__icon" src="./images/htmlicon.svg">
          <img class="tech-section__icon" src="./images/css3icon.svg">
          <img class="tech-section__icon" src="./images/reacticon.svg">
          <img class="tech-section__icon" src="./images/jqueryicon.svg">
          <img class="tech-section__icon" src="./images/bootstrapicon.svg">
          <img class="tech-section__icon" src="./images/sassicon.svg">
        `).animate({
          height: "toggle",
          opacity: 1
        }, 1000);
    }
  })
})