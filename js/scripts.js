//const jquery = require('jquery');

/*
$(document).ready(() => {

  //TODO: make black if starting lower than the pixScrolled
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

  //TODO: Toggle selected style
  //TODO: Make disappear without making shrink?
  $(".skill-icons__buttons button").click((e) => {
    
    const targetClass = $(event.target).attr("class");

    $(".skill-icons__display").find(`div.${targetClass} *`).slideToggle(500);
    e.stopPropagation();
  })
})*/

[].forEach.call(document.querySelectorAll('.skill-icons__buttons button'), (el) => {
  el.addEventListener('click', () => {
    this.
  })
})

/*
*  Project display
*/

//TODO: Default selection is Portfolio project summary, no actual button.