document.addEventListener("DOMContentLoaded", function () {
    const menuA = document.getElementById("menuA"); // bars
    const menuB = document.getElementById("menuB"); // close
    const navList = document.getElementById("navList");
    const nav = document.querySelector("nav");

    // მენიუს გახსნა
    menuA.addEventListener("click", () => {
        navList.classList.add("open");
        menuA.style.display = "none";
        menuB.style.display = "flex";
    });

    // მენიუს დახურვა (#menuB)
    menuB.addEventListener("click", () => {
        closeMenu();
    });

    // ნავიგაციაზე (ul, li, a) დაჭერით დამალვა
    navList.addEventListener("click", () => {
        closeMenu();
    });

    // ფუნქცია: მენიუს დახურვა
    function closeMenu() {
        navList.classList.remove("open");
        menuA.style.display = "flex";
        menuB.style.display = "none";
    }
});