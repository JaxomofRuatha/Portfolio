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
const jquery = require('jquery');