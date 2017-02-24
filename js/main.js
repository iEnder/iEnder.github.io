const menuButton = document.querySelector(".navigation__toggle");
const collapsePortfolio = document.querySelector(".portfolio__collapse-btn");


menuButton.addEventListener('click', (e) => {
    document.querySelector(".pre-nav").classList.toggle("pre-nav--active");
});

collapsePortfolio.addEventListener('click', () => {
    document.querySelector(".portfolio__content").classList.toggle("portfolio__content--active");
    collapsePortfolio.classList.toggle("portfolio__collapse-btn--active");
});

function validateForm(form) {
    let types = ["INPUT", "TEXTAREA", "SELECT"];
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneReg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    let passed = true;
    let inputs = Array.from(form.querySelectorAll("*")).reduce((a, b) => {
        if (types.indexOf(b.nodeName) != -1) {
            a.push(b);
        }
        return a;
    }, []);
    inputs.forEach((el) => {
        if (el.dataset.required == "true" && el.value == "") {
            el.classList.add = "invalid"
            passed = false;
        }

        if (el.id == "form-email") {
            if (!emailReg.test(el.value)) {
                el.classList.add = "invalid"
                passed = false;
            }
        }
    });
    if (passed) console.log("ALL INPUTS PASSED")
    return passed;
}