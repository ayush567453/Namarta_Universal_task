document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });

    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");

    const sliderNav = function(menuaL) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        contents.forEach((content) => {
            content.classList.remove("active");
        });

        btns[menuaL].classList.add("active");
        slides[menuaL].classList.add("active");
        contents[menuaL].classList.add("active");
    };

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });
});
