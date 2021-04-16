class Accordion {

    constructor(btn, text, activeBtn, textBtn) {
        this.btn = btn;
        this.text = text;
        this.activeBtn = activeBtn;
        this.textBtn = textBtn;
        this.initEvents()
    }

    initEvents = () => {
        this.btn.length !== undefined ? this.initArrayBtn() : this.initBtn();
    }


    initArrayBtn = () => {
        this.btn.map((item, i) => {
            item.addEventListener('click', () => {
                this.changeTextVisibility(this.text[i], item);
                this.textBtn && this.changeBtnText(item)
            })
        }
        )
    }

    initBtn = () => {
        this.btn.addEventListener('click', () => {
            this.changeTextVisibility(this.text, this.btn)
            this.textBtn && this.changeBtnText(this.btn)
        })
    }

    changeTextVisibility = (text, btn) => {
        text.clientHeight === 0 ? text.style.maxHeight = text.scrollHeight + 'px' : text.style.maxHeight = 0;
        btn.classList.toggle(this.activeBtn);
    }

    changeBtnText = (btn) => {
        btn.classList.contains(this.activeBtn) ? btn.textContent = this.textBtn[0] : btn.textContent = this.textBtn[1]
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const faqBtn = [...document.querySelectorAll(".faq-btn")];
    const faqBtnText = [...document.querySelectorAll(".item-faq__text")];
    const faqBtnActive = 'incDec-btn--minus';
    console.log(faqBtn)

    faqBtn.length !== 0 && new Accordion(faqBtn, faqBtnText, faqBtnActive);

    const citiesList = document.querySelector(".cities__list-hidden");
    const citiesBtn = document.querySelector(".cities__link");
    const citiesBtnActive = 'cities__link--hide';
    const textToggleBtn = ['Все города', 'Свернуть']
    console.log(citiesList)
    citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);


})


