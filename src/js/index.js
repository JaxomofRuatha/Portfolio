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

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      document.querySelectorAll('.project-view__tile').forEach(tile => {
        tile.classList.remove('project-active');
      });

      targetTile.classList.add('project-active');
    });
  });
});
