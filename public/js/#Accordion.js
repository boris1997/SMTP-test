class Accordion {

    constructor(btn, text, activeBtn, activeClasses, activeText, textToggle, textToggleBtn, transitionTime, heightVar, additionalElement) {
        this.btn = btn;
        this.text = text;
        this.activeBtn = activeBtn;
        this.activeClasses = activeClasses;
        this.activeText = activeText;
        this.textToggle = textToggle;
        this.textToggleBtn = textToggleBtn;
        this.transitionTime = transitionTime;
        this.heightVar = heightVar;
        this.additionalElement = additionalElement;
        this.initEvents()
    }


    initEvents = () => {
        this.initArrayBtn()
    }

    fullHeight = (element) => { console.log(element); element.style.height = '100%'; }


    initArrayBtn = () => {
        console.log(this.btn)
        this.btn.map((item, i) => {
            item.addEventListener('click', (e) => {
                this.additionalElement && this.fullHeight(this.additionalElement)
                if (!e.target.dataset.element) {
                    this.textToggle && this.changeBtnText(item, this.textToggleBtn)
                    this.changeTextVisibility(this.text[i], item);
                }
            })
        }
        )
    }

    initBtn = () => {
        this.btn.addEventListener('click', (e) => {
            this.textToggle && this.changeBtnText(this.btn, this.textToggleBtn)
            this.changeTextVisibility(this.text, this.btn)
            console.log('ok')
        })
    }

    changeTextVisibility = (text, btn) => {
        console.log(text, btn)
        this.setMaxHeight(text, btn);

        btn.classList.toggle(this.activeBtn);
        this.activeText && text.classList.toggle(this.activeText)
    }

    setMaxHeight = (element, btn) => {
        console.log(this.activeBtn)
        this.setHeightValue(element).then((res) => {
            if (btn.classList.contains(this.activeBtn)) {
                console.log(btn)
                setTimeout(() => {
                    element.style.setProperty(this.heightVar, `initial`)
                }, this.transitionTime
                )
            }
        })
    }

    async setHeightValue(element) {
        console.log(element.scrollHeight)
        if (element.clientHeight === 0) {
            console.log(element.scrollHeight)
            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
        } else {
            console.log('ok', element.scrollHeight, this.heightVar)
            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
            setTimeout(() => {
                element.style.setProperty(this.heightVar, '0px')
            })
        }
    }

    changeBtnText = (btn) => {
        console.log(this.textToggleBtn, this);
        btn.classList.contains(this.activeBtn) ? this.textToggleBtn.textContent = this.textToggle[0] : this.textToggleBtn.textContent = this.textToggle[1]
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // faq
    const faqBtn = [...document.querySelectorAll(".item-faq")];
    if (faqBtn.length !== 0) {
        const faqBtnText = [...document.querySelectorAll(".item-faq__text")];
        const faqBtnActive = 'incDec-btn--minus';
        const activeClasses = ['item-faq__body', 'item-faq__text']
        const faqTransitionTime = 500;
        const heightFaqVar = '--max-heightFaq'
        new Accordion(faqBtn, faqBtnText, faqBtnActive, activeClasses, null, null, null, faqTransitionTime, heightFaqVar);
    }


    // Cities
    const citiesList = [...document.querySelectorAll(".cities__list-hidden")];
    console.log(citiesList)
    if (citiesList.length !== 0) {
        const citiesBtn = [...document.querySelectorAll(".cities__accordion-body")];
        const citiesBtnActive = 'cities__accordion-body--hide';
        const citiesTextToggleBtn = document.querySelector(".cities__link");
        const citiesTextToggle = ['Все города', 'Свернуть'];
        const citiesTransitionTime = 300;
        const heightCitiesVar = '--max-heightCities'
        new Accordion(citiesBtn, citiesList, citiesBtnActive, null, null, citiesTextToggle, citiesTextToggleBtn, citiesTransitionTime, heightCitiesVar);
    }



    // Direction
    const directionList = [...document.querySelectorAll(".direction__content-overflow")];
    console.log(directionList)
    if (directionList.length !== 0) {
        const directionBtn = [...document.querySelectorAll(".direction__accordion-body")];
        const directionBtnActive = 'direction__accordion-body--hide';
        const directionListActive = 'direction__content-overflow--visible';
        const directionBackgroundRect = document.querySelector(".direction__background-img");
        const directionTextToggleBtn = document.querySelector(".direction__link");
        const directionTextToggle = ['Все направления', 'Свернуть'];
        const directionTransitionTime = 300;
        const heightDirectionVar = '--max-heightDirection';

        new Accordion(directionBtn, directionList, directionBtnActive, null, directionListActive, directionTextToggle, directionTextToggleBtn, directionTransitionTime, heightDirectionVar, directionBackgroundRect);
    }


})


