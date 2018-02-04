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
        .classList.remove('skills__group--visible');
      setTimeout(() => {
        targetIcons.classList.add('skills__group--visible');
      }, 500);
    }
  });

  document.querySelectorAll('.project-view__menu').forEach(tabs => {
    tabs.addEventListener('click', e => {
      const targetGroup = e.target.dataset.target;
      const newActive = document.querySelectorAll(
        `[data-group="${targetGroup}"]`
      );

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      // Change the title of the viewer

      document.querySelector('.project-view__title').innerHTML =
        e.target.innerHTML;

      // Hide previously visible group content

      const priorTile = document.querySelector('.project-view__tile--active');
      if (priorTile) {
        priorTile.classList.remove('project-view__tile--active');
      }
      const priorLinks = document.querySelector('.project-view__links--active');
      if (priorLinks) {
        priorLinks.classList.remove('project-view__links--active');
      }
      const priorTech = document.querySelector('.project-view__tech--active');
      if (priorTech) {
        priorTech.classList.remove('project-view__tech--active');
      }

      // Unhide selected group content

      newActive.forEach(piece => {
        piece.classList.add(`${piece.classList[0]}--active`);
      });
    });
  });
});
