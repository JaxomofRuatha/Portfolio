document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.skills__menu').addEventListener('click', e => {
    const targetIcons = document.querySelector(e.target.dataset.target);
    const priorActive = document.querySelector('.skills__tab--active').dataset
      .target;

    document.querySelectorAll('.skills__tab').forEach(a => {
      a.classList.remove('skills__tab--active');
    });

    e.target.classList.add('skills__tab--active');

    if (
      e.target.tagName === 'A' &&
      document.querySelector(`${priorActive}`) !== targetIcons
    ) {
      document
        .querySelector(`${priorActive}`)
        .classList.remove('skills__section--visible');
      setTimeout(() => {
        targetIcons.classList.add('skills__section--visible');
      }, 500);
    }
  });

  document.querySelectorAll('project-tabs__menu').forEach(tabs => {
    tabs.addEventListener('click', e => {
      const targetTile = document.querySelector(e.target.dataset.target);

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      document.querySelectorAll('.project-view__tile').forEach(tile => {
        tile.classList.remove('project-view__tile--active');
      });

      targetTile.classList.add('project-view__tile--active');
    });
  });
});
