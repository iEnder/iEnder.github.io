const menuButton = document.querySelector(".navigation__toggle");
menuButton.addEventListener('click', (e) => {
    document.querySelector("#navigationList").classList.toggle("menu-active");
});