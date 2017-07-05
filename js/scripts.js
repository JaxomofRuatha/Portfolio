"use strict";

window.onscroll = function () {
  if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
    document.getElementById("navbar").style.backgroundColor = "black";
  }
}
