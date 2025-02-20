window.onscroll = function() {
    let backToTop = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Show/hide menu
    });
});
