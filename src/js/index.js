document.addEventListener('DOMContentLoaded', () => {
  const projectIndex = {
    'live-1': 'Portfolio',
    'live-2': 'React Quote Machine',
    'live-3': 'React Forecast',
    'live-4': 'Express Microservices',
    'live-5': 'React .md Previewer',
    'live-6': 'Redux Wikipedia Viewer',
    'live-7': 'Speller',
    'wip-1': 'Bmore Around Town',
    'wip-2': 'Twitch Dashboard',
    'wip-3': 'Bikeshare Mapper',
    'wip-4': 'React Recipe Box',
    'wip-5': 'JavaScript Calculator',
    'wip-6': 'Freeform Vote'
  };

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
      // Test this using whatever the link text is

      document.querySelector('.project-view__title').innerHTML =
        projectIndex[targetGroup];

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

      document
        .querySelectorAll(`[data-group=${targetGroup}]`)
        .forEach(piece => {
          switch (piece.tagName) {
            case 'SECTION':
              piece.classList.add('project-view__tile--active');
              break;
            case 'NAV':
              piece.classList.add('project-view__links--active');
              break;
            case 'FOOTER':
              piece.classList.add('project-view__tech--active');
              break;
          }
        });

      /*

      1. Remove the checked status from the menu (aka close)
      2. Change the innerHtml for .project-view__title
      3. Add active attributes to each project-view__tile, project-view__links, and project-view__tech (and remove them from the prior one)

      */
      // const targetTile = document.querySelector(e.target.dataset.target);
      // document.getElementById('live-menu').checked = false;
      // document.getElementById('wip-menu').checked = false;
      // document.querySelectorAll('.project-view__tile').forEach(tile => {
      //   tile.classList.remove('project-view__tile--active');
      // });
      // targetTile.classList.add('project-view__tile--active');
    });
  });
});
