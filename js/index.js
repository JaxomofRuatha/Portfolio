//const Scrollbar = require("smooth-scrollbar");

document.addEventListener("DOMContentLoaded", () => {
    //Attach scroll event listener to container, array for data-value and scroll rotates between
    
    //Scrollbar.init(document.querySelector('#my-scrollbar'));

    const scrollOrder = ["home", "profile", "projects", "contact"];
    let currentFrame = 0;

    document.querySelector(".view-container").addEventListener("scroll", (e) => {
        if (currentFrame >= 0) {
            //Detect whether scrolling up or down?
            document.querySelector(`.frame-home`).classList.add('scrolled-past-frame');
            document.querySelectorAll('.frame-profile').forEach((element) => {
                console.log(element);
                element.classList.remove('.pending-frame');
            });
        }
    })
})