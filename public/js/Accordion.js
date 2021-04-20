class Accordion {

    constructor(btn, text, activeBtn, activeText, textToggle, textToggleBtn, transitionTime, heightVar) {
        this.btn = btn;
        this.text = text;
        this.activeBtn = activeBtn;
        this.activeText = activeText;
        this.textToggle = textToggle;
        this.textToggleBtn = textToggleBtn;
        this.transitionTime = transitionTime;
        this.heightVar = heightVar;
        this.initEvents()
    }

    initEvents = () => {
        this.btn.length !== undefined ? this.initArrayBtn() : this.initBtn();
    }


    initArrayBtn = () => {
        this.btn.map((item, i) => {
            console.log(this.textToggle, this.btn)
            item.addEventListener('click', () => {
                this.textToggle && this.changeBtnText(item, this.textToggleBtn)
                this.changeTextVisibility(this.text[i], item);
            })
        }
        )
    }

    initBtn = () => {
        this.btn.addEventListener('click', () => {
            this.textToggle && this.changeBtnText(this.btn, this.textToggleBtn)
            this.changeTextVisibility(this.text, this.btn)
        })
    }

    changeTextVisibility = (text, btn) => {
        this.setMaxHeight(text, btn);

        btn.classList.toggle(this.activeBtn);
        this.activeText && this.text.classList.toggle(this.activeText)
    }

    setMaxHeight = (element, btn) => {
        this.setHeightValue(element).then((res) => {
            console.log(btn.classList.contains(this.activeBtn))
            if (btn.classList.contains(this.activeBtn)) {
                setTimeout(() => {
                    console.log(element.clientHeight)
                    element.style.setProperty(this.heightVar, `initial`)
                }, this.transitionTime
                )
            }
        })
    }

    async setHeightValue(element) {
        console.log(element.clientHeight)
        if (element.clientHeight === 0) {

            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
        } else {


            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
            console.log(element.clientHeight)
            element.style.setProperty(this.heightVar, '0px')
        }
    }

    changeBtnText = (btn) => {
        console.log(this.textToggleBtn, this);
        btn.classList.contains(this.activeBtn) ? this.textToggleBtn.textContent = this.textToggle[0] : this.textToggleBtn.textContent = this.textToggle[1]
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // faq
    const faqBtn = [...document.querySelectorAll(".faq-btn")];
    const faqBtnText = [...document.querySelectorAll(".item-faq__text")];
    const faqBtnActive = 'incDec-btn--minus';
    const faqTransitionTime = 500;
    const heightFaqVar = '--max-heightFaq'
    console.log(faqBtn)

    faqBtn.length !== 0 && new Accordion(faqBtn, faqBtnText, faqBtnActive, null, null, null, faqTransitionTime, heightFaqVar);


    // Cities
    const citiesBtn = document.querySelector(".cities__accordion-body");
    const citiesList = document.querySelector(".cities__list-hidden");

    const citiesBtnActive = 'cities__accordion-body--hide';

    const citiesTextToggleBtn = document.querySelector(".cities__link");
    console.log(citiesTextToggleBtn)
    const citiesTextToggle = ['Все города', 'Свернуть'];
    const citiesTransitionTime = 300;
    const heightCitiesVar = '--max-heightCities'
    console.log(citiesList)
    citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, null, citiesTextToggle, citiesTextToggleBtn, citiesTransitionTime, heightCitiesVar);



    // Direction
    const directionBtn = document.querySelector(".direction__accordion-body");
    const directionList = document.querySelector(".direction__content-overflow");


    const directionBtnActive = 'direction__accordion-body--hide';
    const directionListActive = 'direction__content-overflow--visible';

    const directionTextToggleBtn = document.querySelector(".direction__link");
    const directionTextToggle = ['Все направления', 'Свернуть'];
    const directionTransitionTime = 300;
    const heightDirectionVar = '--max-heightDirection'

    console.log(directionList)
    directionList !== null && new Accordion(directionBtn, directionList, directionBtnActive, directionListActive, directionTextToggle, directionTextToggleBtn, directionTransitionTime, heightDirectionVar);


})


