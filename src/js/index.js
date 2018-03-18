function tabsSelect(parent, tab, content) {
  document.querySelector(`.${parent}`).addEventListener('click', e => {
    const targetContent = document.querySelector(e.target.dataset.target);
    const priorActive = document.querySelector(`.${tab}--active`).dataset
      .target;
    console.log('event', e);

    document.querySelectorAll(`.${tab}`).forEach(a => {
      a.classList.remove(`${tab}--active`);
      console.log('tab', a);
    });

    e.target.classList.add(`${tab}--active`);

    if (
      e.target.tagName === 'A' &&
      document.querySelector(priorActive) !== targetContent
    ) {
      document
        .querySelector(priorActive)
        .classList.remove(`${content}--visible`);
      setTimeout(() => {
        targetContent.classList.add(`${content}--visible`);
      }, 500);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  tabsSelect('skills__menu', 'skills__tab', 'skills__group');

  tabsSelect(
    'profile-info__menu',
    'profile-info__tab',
    'profile-info__content'
  );

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
