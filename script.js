let arrows = document.querySelectorAll(".menu-arrows"),
    Menu = document.querySelector(".menu");

arrows.forEach(element => {
    element.addEventListener("click", () => {
        Menu.classList.toggle = "close";
    })
});