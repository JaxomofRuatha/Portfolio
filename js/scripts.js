/*
*  Project display
*/

document.addEventListener('DOMContentLoaded', () => {

  //Setting opaque navbar on scroll

  window.addEventListener('scroll', () => {
    if (window.scrollY < 120) {
      document.querySelector('.navbar').setAttribute('style', 'background-color: transparent;');
    } else {
      document.querySelector('.navbar').setAttribute('style', 'background-color: black;');
    }
  })

  //Tabs for skill icons

  document.querySelector(".skill-tabs").addEventListener("click", (e) => {
    const targetIcons = document.querySelector(e.target.dataset.target);

    document.querySelectorAll(".tech-section").forEach((icons) => {
      icons.classList.remove("flex-cont-centered");
    });

    if (e.target.tagName === "A") {
      targetIcons.classList.add("flex-cont-centered");
    }
  });

  document.querySelectorAll(".project-tabs").forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
      const targetTile = document.querySelector(e.target.dataset.target);

      document.querySelectorAll(".project-tabs a").forEach((a) => {
        a.classList.remove("tab-active");
      });

      e.target.classList.add("tab-active");

      document.querySelectorAll(".display-tile").forEach((tile) => {
        tile.classList.remove("tile-active");
      });

      targetTile.classList.add("tile-active");
    })
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