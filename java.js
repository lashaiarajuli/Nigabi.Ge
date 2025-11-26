const button = document.querySelector('.menu');
const menuNav = document.querySelector('.nav-bar');

button.addEventListener('click', () => {
    menuNav.classList.toggle('active');
});

