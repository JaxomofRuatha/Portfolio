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

    document.querySelectorAll(".skill-tabs a").forEach((a) => {
      a.classList.remove("tab-active");
    });

    e.target.classList.add("tab-active");
    
    document.querySelectorAll(".tech-section").forEach((icons) => {
      icons.classList.add("hidden-tile");
    });

    if (e.target.tagName === "A") {
      targetIcons.classList.remove("hidden-tile");
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
        tile.classList.add("hidden-tile");
      });

      targetTile.classList.remove("hidden-tile");
    })
  });
});