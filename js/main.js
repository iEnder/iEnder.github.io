const menuButton = document.querySelector(".navigation__toggle");
const collapsePortfolio = document.querySelector(".portfolio__collapse-btn");


menuButton.addEventListener('click', (e) => {
    document.querySelector(".pre-nav").classList.toggle("pre-nav--active");
});

collapsePortfolio.addEventListener('click', () => {
    document.querySelector(".portfolio__content").classList.toggle("portfolio__content--active");
    collapsePortfolio.classList.toggle("portfolio__collapse-btn--active");
});