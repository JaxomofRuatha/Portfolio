"use strict";
var pixScrolled = window.innerHeight * 0.4;
var activeBar = false;
window.onscroll = function () {
  if (document.body.scrollTop > pixScrolled || document.documentElement.scrollTop > pixScrolled) {
    document.getElementById("navbar").classList.add("scrolledNav");
    activeBar = true;
  }
  else if (document.body.scrollTop < pixScrolled || document.documentElement.scrollTop < pixScrolled && activeBar == true) {
    document.getElementById("navbar").classList.remove("scrolledNav");
  }
}
