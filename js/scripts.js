"use strict";
let pixScrolled = window.innerHeight * 0.30;
let activeBar = false;
window.onscroll = function () {
  if (document.body.scrollTop > pixScrolled || document.documentElement.scrollTop > pixScrolled) {
    document.getElementById("navbar").classList.add("scrolledNav");
    activeBar = true;
  }
  else if (document.body.scrollTop < pixScrolled || document.documentElement.scrollTop < pixScrolled && activeBar == true) {
    document.getElementById("navbar").classList.remove("scrolledNav");
  }
}
