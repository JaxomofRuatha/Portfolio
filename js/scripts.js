/*
*  Project display
*/

document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.display-tabs'));
  const tiles = Array.from(document.querySelectorAll('.display-tile'));
  
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const targetTile = document.querySelector(e.target.dataset.target);

        Array.from(tiles).forEach((tile) => {
          if (tile === targetTile) {
            tile.classList.add('tile-active');
          } else {
            tile.classList.remove('tile-active');
          }
        });
      }
    });
  })
});