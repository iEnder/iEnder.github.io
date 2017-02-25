const menuButton = document.querySelector(".navigation__toggle");
const collapsePortfolio = document.querySelector(".portfolio__collapse-btn");
const formInputs = ["#form-name", "#form-email", "#form-phone", "#form-desc"].map(e => document.querySelector(e));
const portfolioItems = document.querySelectorAll(".portfolio__item");
menuButton.addEventListener('click', (e) => {
    document.querySelector(".pre-nav").classList.toggle("pre-nav--active");
});

collapsePortfolio.addEventListener('click', () => {
    document.querySelector(".portfolio__content").classList.toggle("portfolio__content--active");
    collapsePortfolio.classList.toggle("portfolio__collapse-btn--active");
});

window.addEventListener('scroll', () => {
    if (this.scrollY > 750) {
        portfolioItems.forEach((el, index) => {
            setTimeout(() => el.classList.add(...["animated", "fadeInUp"]), 50 * index)
        })
        window.removeEventListener('scroll', false);
    }
});

function validateForm(form) {

    const types = ["INPUT", "TEXTAREA", "SELECT"];
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneReg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    let passed = true; // bool for form check

    formInputs.forEach((el) => {

        let elIsInvalid = false; // bool for this elements (el)'s correctness 
        if (el.dataset.required == "true" && el.value == "") { //if the input is required and and value is empty set to invalid
            elIsInvalid = true;
        }

        if (el.id == "form-email") {
            if (el.value == "" || !emailReg.test(el.value)) { // if email field is empty or doesnt match up to RegExp set to invalid
                elIsInvalid = true;
            }
        }

        if (el.id == "form-phone" && el.value != "") { // if user decided to input phone value
            if (!phoneReg.test(el.value)) { // if phone value is invalid
                elIsInvalid = true;
            }
        }

        if (elIsInvalid) el.classList.add(...["invalid", "animated", "shake"]); // if element was marked invalid alert user
        if (passed !== false) passed = !elIsInvalid; // if passed isnt already false set it used to prevent overwrite to true

    });
    return passed; // finally return wheather form passed validation
}