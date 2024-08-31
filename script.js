// script.js
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { // Adjusted to 50px
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});
