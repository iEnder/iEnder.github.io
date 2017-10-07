try {
    (function(){
        const portfolioEl = document.querySelector('.portfolio__wrapper');
        const portfolioToggleBtn = document.querySelector('.portfolio__collapse-btn');
        const mobileMenu = document.querySelector('#mobileMenu');
        const mobileMenuToggle = document.querySelectorAll('#mobileMenuToggle');

        portfolioToggleBtn.addEventListener('click', () => {
            portfolioEl.classList.toggle('portfolio__wrapper--active');
            portfolioToggleBtn.classList.toggle('portfolio__collapse-btn--active');
        });

        mobileMenuToggle.forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        });

    })();
} catch (e) {
    console.error(e);
}
