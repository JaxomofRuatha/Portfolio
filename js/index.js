//const Scrollbar = require("smooth-scrollbar");

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.skill-tabs').addEventListener('click', e => {
        const targetIcons = document.querySelector(e.target.dataset.target);
        const priorActive = document.querySelector('.tab-active').dataset.target;

        console.log(targetIcons, priorActive);

        document
            .querySelectorAll('.skill-tabs a')
            .forEach(a => {
            a.classList.remove('tab-active');
            });

        e.target.classList.add('tab-active');

        if (e.target.tagName === 'A' && document.querySelector(`${priorActive}`) !== targetIcons) {
          document
            .querySelector(`${priorActive}`)
              .classList.add('hidden-tile');
          setTimeout(() => {
              targetIcons.classList.remove('hidden-tile');  
          }, 500);
        }
        /*
        if (targetIcons.classList.contains('hidden-tile')) {
            setTimeout(() => {
            targetIcons.classList.remove('hidden-tile');
            }, 500);
        } else {
            targetIcons.classList.add('hidden-tile');
        }*/
    });
/*
    document.querySelector('.skill-tabs').addEventListener('click', e => {
        const targetIcons = document.querySelector(
            e.target.dataset.target
        );
        const priorActive = document.querySelector('.tab-active').dataset.target;

        document.querySelectorAll('.skill-tabs a').forEach(a => {
            a.classList.remove('tab-active');
        });

        e.target.classList.add('tab-active');

        document
          .querySelectorAll(`${priorActive} img`)
          .forEach(icon => {
              icon.classList.add('hidden-tile');
          });

        if (e.target.tagName === 'A') {
            targetIcons.childNodes.forEach(icon => {
              icon.classList.remove('hidden-tile');
            });
        }
    });
    */
})