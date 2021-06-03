
import ClassToggle from './modules/classToggle'
import Styles from './modules/styles'
import Togglers from './modules/#toggler'
import Accordion from './modules/accordion'
import Slider from './modules/slider'


document.addEventListener('DOMContentLoaded', () => {

    // TOGGLERS INIT
    const togglersBtn = [...document.querySelectorAll(".togglers__button")];
    if (togglersBtn.length !== 0) {

        const tariffItem = [...document.querySelectorAll(".tariff__switch")];
        const togglersActiveClass = 'togglers__button--active';
        const itemActiveClass = 'tariff__switch--active';

        new Togglers(togglersBtn, tariffItem, togglersActiveClass, itemActiveClass);
    }




    // ACCORDION INIT

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
    const citiesList = [...document.querySelectorAll(".cities__content-hidden")];
    console.log(citiesList)
    if (citiesList.length !== 0) {
        const citiesBtn = [...document.querySelectorAll(".cities__accordion-body")];
        const citiesBtnActive = 'cities__accordion-body--hide';
        const citiesTextToggleBtn = document.querySelector(".cities__link");
        const citiesTextToggle = ['Все города', 'Свернуть'];
        const citiesTransitionTime = 500;
        const heightCitiesVar = '--max-heightCities'
        new Accordion(citiesBtn, citiesList, citiesBtnActive, null, null, citiesTextToggle, citiesTextToggleBtn, citiesTransitionTime, heightCitiesVar);
    }



    // Direction
    const directionList = [...document.querySelectorAll(".direction__content-overflow")];
    console.log(directionList)
    if (directionList.length !== 0) {
        const directionBody = document.querySelector(".direction__body ");
        const directionBtn = [...document.querySelectorAll(".direction__accordion-body")];
        const directionBtnActive = 'direction__accordion-body--hide';
        const directionListActive = 'direction__content-overflow--visible';
        const directionBackgroundRect = document.querySelector(".direction__background-img");
        const directionTextToggleBtn = document.querySelector(".direction__link");
        const directionTextToggle = ['Все направления', 'Свернуть'];
        const directionTransitionTime = 300;
        const heightDirectionVar = '--max-heightDirection';

        new Accordion(directionBtn, directionList, directionBtnActive, null, directionListActive, directionTextToggle, directionTextToggleBtn, directionTransitionTime, heightDirectionVar, directionBackgroundRect, directionBody);
    }



    // SLIDER INIT

    const contentAdvantages = [...document.querySelectorAll(".advantages__carousel-item")];
    if (contentAdvantages.length !== 0) {

        const wrapperAdvantages = document.querySelector(".advantages__body");
        const mainAdvantages = document.querySelector(".advantages__slider");
        const resizeOberverAdvantages = document.querySelector(".advantages__resizer");
        const circeTogglersCard = [...document.querySelectorAll(".circe-togglers__advantages")];
        console.log(circeTogglersCard)
        const circleActiveClass = 'circe-togglers__item--active'
        const sliderBreakpointAdvantages = 480;
        const sliderAdvantages = new Slider(contentAdvantages, mainAdvantages, wrapperAdvantages, sliderBreakpointAdvantages, null, circeTogglersCard, circleActiveClass, resizeOberverAdvantages, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */


        sliderAdvantages.getMargin()
        sliderAdvantages.getTranslateStepX();
        sliderAdvantages.initDrag();
        sliderAdvantages.initCirceTogglers()
        sliderAdvantages.slideResizeObserver();

    }


    const contentEffect = [...document.querySelectorAll(".effect__item")];
    if (contentEffect.length !== 0) {

        const wrapperEffect = document.querySelector(".effect__body");
        const mainEffect = document.querySelector(".effect__slider");
        const resizeOberverEffect = document.querySelector(".effect__resizer");
        const sliderBreakpointEffect = 768;
        const sliderEffect = new Slider(contentEffect, mainEffect, wrapperEffect, sliderBreakpointEffect, null, null, null, resizeOberverEffect, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        sliderEffect.getMargin();
        sliderEffect.getTranslateStepX();
        sliderEffect.initDrag();
        sliderEffect.slideResizeObserver();
    }


    // Advantages Slider

    const contentProgramm = [...document.querySelectorAll(".programm__item ")];

    if (contentProgramm.length !== 0) {
        const wrapperProgramm = document.querySelector(".programm__body");
        const mainProgramm = document.querySelector(".programm__slider ");
        const resizeOberverProgramm = document.querySelector(".programm__resizer");
        const sliderBreakpointProgramm = 1225;
        const sliderProgramm = new Slider(contentProgramm, mainProgramm, wrapperProgramm, sliderBreakpointProgramm, null, null, null, resizeOberverProgramm, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        sliderProgramm.getMargin();
        sliderProgramm.getTranslateStepX();
        sliderProgramm.initDrag();
        sliderProgramm.slideResizeObserver();

    }

    const contentCard = [...document.querySelectorAll(".tariffsec__card")];

    if (contentCard.length !== 0) {
        const mainCard = document.querySelector(".tariffsec__slider");
        const wrapperCard = document.querySelector(".tariffsec__body");
        const resizeOberverCard = document.querySelector(".tariffsec__resizer");
        const circeTogglersCard = [...document.querySelectorAll(".circe-togglers__item")];
        const circleActiveClass = 'circe-togglers__item--active'
        const sliderBreakpointCard = 480;
        const sliderProgramm = new Slider(contentCard, mainCard, wrapperCard, sliderBreakpointCard, null, circeTogglersCard, circleActiveClass, resizeOberverCard, null, null, 0, null, null);
        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        const waitMargin = new Promise((resolve, reject) => {
            console.log('ok')
            setTimeout(() => {
                sliderProgramm.getMargin()
                resolve()
            }, 100)
        })
        console.log('ok')
        waitMargin.then(() => {
            sliderProgramm.getTranslateStepX();
            sliderProgramm.initDrag();
            sliderProgramm.initCirceTogglers()
            sliderProgramm.slideResizeObserver();
        })
    }



    const contentService = [...document.querySelectorAll(".interest-service__slider-item")];
    if (contentService.length !== 0) {
        const mainService = document.querySelector(".interest-service__slider");
        const wrapperService = document.querySelector(".interest-service__body");
        const resizeOberverService = document.querySelector(".interest-service__resizer");
        const sliderBreakpointService = 1225;
        const sliderProgramm = new Slider(contentService, mainService, wrapperService, sliderBreakpointService, null, null, null, resizeOberverService, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        sliderProgramm.getMargin();
        sliderProgramm.getTranslateStepX();
        sliderProgramm.initDrag();
        sliderProgramm.slideResizeObserver();

    }


    const contentArticles = [...document.querySelectorAll(".articles-content__slide")];
    if (contentService.length !== 0) {
        const mainArticles = document.querySelector(".usefull-articles__slider");
        const wrapperArticles = document.querySelector(".usefull-articles__body");
        const resizeOberverArticles = document.querySelector(".articles-content__resizer");
        const sliderBreakpointArticles = 1225;
        const sliderProgramm = new Slider(contentArticles, mainArticles, wrapperArticles, sliderBreakpointArticles, null, null, null, resizeOberverArticles, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        sliderProgramm.getMargin();
        sliderProgramm.getTranslateStepX();
        sliderProgramm.initDrag();
        sliderProgramm.slideResizeObserver();

    }





})