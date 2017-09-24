/*
*  Project display
*/

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', () => {
    if (window.scrollY < 120) {
      document.querySelector('.navbar').setAttribute('style', 'background-color: transparent;');
    } else {
      document.querySelector('.navbar').setAttribute('style', 'background-color: black;');
    }
  })

  document.querySelector(".skill-tabs").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.target.parentElement.classList.add("flex-cont-centered");
    }
  });
/*
  const tabs = Array.from(document.querySelectorAll('.display-tabs span'));
  const tiles = Array.from(document.querySelectorAll('.display-tile'));
  
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      console.log(e.target.tagName, e.target.dataset.target);
        const targetTile = document.querySelector(e.target.dataset.target);

        Array.from(tiles).forEach((tile) => {
          if (tile === targetTile) {
            tile.classList.add('tile-active');
          } else {
            tile.classList.remove('tile-active');
          }
        });
    });
  })*/
});

//Clicking "skill-icons button" should select related "skill-icons img" 