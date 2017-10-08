try {
    (function(){
        const portfolioEl = document.querySelector('.portfolio__wrapper');
        const portfolioToggleBtn = document.querySelector('.portfolio__collapse-btn');
        const mobileMenu = document.querySelector('#mobileMenu');
        const mobileMenuToggle = document.querySelectorAll('.mobileMenuToggle');
        const navbar = document.querySelector('#nav');

        portfolioToggleBtn.addEventListener('click', () => {
            portfolioEl.classList.toggle('portfolio__wrapper--active');
            portfolioToggleBtn.classList.toggle('portfolio__collapse-btn--active');
        });

        mobileMenuToggle.forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        });

        window.onscroll = () => {
            if(window.scrollY > 100 && Array.from(navbar.classList).indexOf('fixed') == -1) {
                navbar.classList.add('fixed');
            } else if(window.scrollY < 100 && Array.from(navbar.classList).indexOf('fixed') != -1) {
                navbar.classList.remove('fixed');
            }
        }

    })();
} catch (e) {
    console.error(e);
}
