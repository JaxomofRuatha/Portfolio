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

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      // Change the title of the viewer

      document.querySelector('.project-view__title').innerHTML =
        e.target.innerHTML;

      // Hide previously visible group content

      document
        .querySelector('.project-view__tile--active')
        .classList.remove('project-view__tile--active');
      document
        .querySelector('.project-view__links--active')
        .classList.remove('project-view__links--active');
      document
        .querySelector('.project-view__tech--active')
        .classList.remove('project-view__tech--active');

      // Unhide selected group content
      console.log(targetGroup);
      document
        .querySelectorAll(`[data-group=${targetGroup}]`)
        .forEach(piece => {
          piece.classList.add(`${piece.className}--active`);
        });
    });
  });
});
