//const Scrollbar = require("smooth-scrollbar");

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.skill-tabs').addEventListener('click', e => {
    const targetIcons = document.querySelector(e.target.dataset.target);
    const priorActive = document.querySelector('.tab-active').dataset.target;

    document.querySelectorAll('.skill-tabs a').forEach(a => {
      a.classList.remove('tab-active');
    });

    e.target.classList.add('tab-active');

    if (
      e.target.tagName === 'A' &&
      document.querySelector(`${priorActive}`) !== targetIcons
    ) {
      document.querySelector(`${priorActive}`).classList.remove('visible-tile');
      setTimeout(() => {
        targetIcons.classList.add('visible-tile');
      }, 500);
    }
  });

  document.querySelectorAll('.tab-expand').forEach(tabs => {
    tabs.addEventListener('click', e => {
      const targetTile = document.querySelector(e.target.dataset.target);

      document.querySelectorAll('.project-tile').forEach(tile => {
        tile.setAttribute('style', 'opacity: 0');
        tile.classList.remove('project-active');
      });

      targetTile.setAttribute('style', 'opacity: 1');
      targetTile.classList.add('project-active');
    });
  });
  document.querySelector('.nav-menu-toggle').addEventListener('click', () => {
    document.querySelector('#nav-links').classList.toggle('row-expanded');
    document.querySelector('.social-icons').classList.toggle('col-expanded');
  });
});
