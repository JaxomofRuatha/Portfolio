const raf = require('raf').polyfill;

raf();

function tabsSelect(parent, tab, content) {
  // Attach an event listener to the containing nav element
  document.querySelector(`.${parent}`).addEventListener('click', e => {
    // The content element to be displayed
    const targetContent = document.querySelector(`#${e.target.dataset.target}`);

    // The currently active content group
    const priorActive = document.querySelector(`.${tab}--active`).dataset
      .target;

    // Remove the active modifier from any active tab element
    document.querySelectorAll(`.${tab}`).forEach(a => {
      a.classList.remove(`${tab}--active`);
    });

    // Add the active modifier to the target of click event
    e.target.classList.add(`${tab}--active`);

    if (
      e.target.tagName === 'A' &&
      document.querySelector(`#${priorActive}`) !== targetContent
    ) {
      document
        .querySelector(`#${priorActive}`)
        .classList.remove(`${content}--visible`);
      setTimeout(() => {
        targetContent.classList.add(`${content}--visible`);
      }, 500);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  /* Tab selector for skills section */

  tabsSelect('skills__menu', 'skills__tab', 'skills__group');

  /* Tab selector for profile section */

  tabsSelect(
    'profile-info__menu',
    'profile-info__tab',
    'profile-info__content'
  );

  /* Tab selector for projects section */

  document.querySelectorAll('.projects__menu').forEach(tabs => {
    tabs.addEventListener('click', e => {
      const targetGroup = e.target.dataset.target;
      const newActive = document.querySelectorAll(
        `[data-group="${targetGroup}"]`
      );

      document.getElementById('live-menu').checked = false;
      document.getElementById('wip-menu').checked = false;

      // Change the title of the viewer

      document.querySelector('.projects__title').innerHTML = e.target.innerHTML;

      // Hide previously visible group content

      const priorTile = document.querySelector('.projects__tile--active');
      if (priorTile) {
        priorTile.classList.remove('projects__tile--active');
      }
      const priorLinks = document.querySelector('.projects__links--active');
      if (priorLinks) {
        priorLinks.classList.remove('projects__links--active');
      }
      const priorTech = document.querySelector('.projects__tech--active');
      if (priorTech) {
        priorTech.classList.remove('projects__tech--active');
      }

      // Unhide selected group content

      newActive.forEach(piece => {
        piece.classList.add(`${piece.classList[0]}--active`);
      });
    });
  });

  /* Hover/active display for socialbot navigation */

  const sbDesc = document.querySelector('.socialbot__desc');

  document.querySelectorAll('.socialbot__link').forEach(link => {
    link.addEventListener('mouseover', e => {
      link.style.backgroundColor = e.target.dataset.color;
      sbDesc.textContent = e.target.dataset.name;
      sbDesc.style.backgroundColor = e.target.dataset.color;
      sbDesc.classList.add(`socialbot__desc--visible`);
    });

    link.addEventListener('mouseout', e => {
      link.style.removeProperty('background-color');
      sbDesc.classList.remove('socialbot__desc--visible');
    });
  });
});
