class ShowHiddenText {

    constructor(faqBtn, faqBtnText, active) {
        this.faqBtn = faqBtn;
        this.faqBtnText = faqBtnText;
        this.active = active;

    }
    initFaqBtn = () => {
        this.faqBtn.map((item, i) => item.addEventListener('click', () => this.changeTextVisibility(i)))
    }

    changeTextVisibility = (i) => {
        this.faqBtnText[i].classList.toggle('full_height_show')
        this.faqBtn[i].classList.toggle(this.active);
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const faqBtn = [...document.querySelectorAll(".faq-btn")];
    const faqBtnText = [...document.querySelectorAll(".item-faq__text")];
    const active = 'incDec-btn--minus'

    const showFaqText = new ShowHiddenText(faqBtn, faqBtnText, active);

    showFaqText.initFaqBtn();


})


