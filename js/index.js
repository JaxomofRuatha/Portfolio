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
                .classList.remove('visible-tile');
            setTimeout(() => {
                targetIcons.classList.add('visible-tile');
            }, 500);
        }
    });
});