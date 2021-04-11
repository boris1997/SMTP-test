class CountTarif {

    constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

        this.switchRadio = switchRadio;
        this.switchLabel = switchLabel;
        this.togglersTariff = togglersTariff;
        this.totalPriceEl = totalPriceEl;
        this.priceIndex = 1;
        this.limitier = 9;
        this.totalPrice = this.strToNumbaer(this.totalPriceEl);
        this.primaryPrice = this.totalPrice;
        this.tariffIndicators = {
            'indicator': [],
            'countIndex': []
        };
    }

    getindicators = () => this.togglersTariff.map(item => {
        this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
        this.tariffIndicators['countIndex'].push(0);
        this.tariffIndicators['discount'] = 1;
    })



    initSwitchTariffBtns = () => {
        this.switchRadio.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
        this.switchLabel.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
    }
    initTogglers = () => {
        this.togglersTariff.map((item, i) => item.addEventListener('click', (e) => this.toggleTariffIndicators(e, item, i)))
    }

    toggleTariffIndicators = (e, item, i) => {
        console.log(e.target.classList)
        e.target.classList.contains('incDec-btn__dec') && this.decrIndicator(i)
        e.target.classList.contains('incDec-btn__inc') && this.incrIndicator(i)
        /*   e.target.classList[0].includes('inc') && this.decrIndicator() */
        console.log(e.target, item, i)
    }

    decrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.tariffIndicators['countIndex'][i] > 0) {
            this.priceIndex--;
            this.tariffIndicators['countIndex'][i]--;
            let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) - this.tariffIndicators['indicator'][i];
            console.log(indicator)
            i === 2 && this.countDiscount(indicator, i);
            this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
            i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
            this.showTotalPrice()
        }
    }

    countDiscount = (indicator, i) => {
        indicator === 2 && (this.tariffIndicators['discount'] = 0.9);
        indicator === 3 && (this.tariffIndicators['discount'] = 0.85);

    }

    incrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.tariffIndicators['countIndex'][i] < this.limitier) {
            this.priceIndex++;
            this.tariffIndicators['countIndex'][i]++;
            let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) + this.tariffIndicators['indicator'][i];
            console.log(indicator)
            i === 2 && this.countDiscount(indicator, i);
            this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
            i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
            this.showTotalPrice()
        }
    }

    countTotalPrice = () => {
        this.totalPrice = this.primaryPrice * this.priceIndex * this.tariffIndicators['discount'];
    }

    countPrimaryPrice = (i) => {
        console.log(this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'])
        this.primaryPrice = this.primaryPrice * (this.tariffIndicators['countIndex'][i] + 1) * this.tariffIndicators['discount'];
        this.totalPrice = this.primaryPrice;
    }

    addSpacesToNum = (element) => {
        element = element.toString().split('')
        for (let i = 3; i <= element.length; i += 4) {
            element.reverse().splice(i, 0, ' ');
            element = element.reverse()
        }
        return element.join('')
    }

    changeTariff = (i) => {
        console.log(this.totalPrice)
        i === 0 ? this.primaryPrice = 1600 : this.primaryPrice = 1800;
        this.countPrimaryPrice(2)
        this.showTotalPrice()
    }

    showTotalPrice = () => {
        const totalSum = this.totalPrice;
        this.totalPriceEl.textContent = this.addSpacesToNum(totalSum)
    }

    strToNumbaer = (element) => +element.textContent.replace(/\s+/g, '')
}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const switchRadio = [...document.querySelectorAll(".switch-radio__input")];
    const switchLabel = [...document.querySelectorAll(".switch-radio__label")];
    const togglersTariff = [...document.querySelectorAll(".togglers-tariff__btn")];
    const totalPrice = document.querySelector(".total-price__amount");

    const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);

    countTarif.getindicators();
    countTarif.initSwitchTariffBtns();
    countTarif.initTogglers();

})



// class Slider {

//     constructor(slider) {

//         /*  settings.switchers. */
//         /*      console.log(slider.type) */
//         ({ type: this.type, settings: this.settings, customSetting: this.customSetting, mainDomElements: this.mainDomElements, customDomELements: this.customDomELements } = slider);
//         this.content = this.mainDomElements.content;
//         this.CustomDomElements = this.getCustomDomElements();
//         [this.contentSizeDirectionParam, this.mainSizeDirectionParam, this.marginDirectionParam] = this.getDirectionParam();
//         /*     this.main = main,
//             this.arrow = arrow,
//             this.slideResizeOberverObj = slideResizeOberverObj,
//             this.toggleResizeOberverObj = toggleResizeOberverObj,
//             this.toggleBtn = toggleBtn,
//             this.toggleMoveGif = toggleMoveGif,
//             this.slideNumber = slideNumber,
//             this.isDragging = false,
//             this.currentIndex = 0,
//             this.startPos = 0,
//             this.translateStepX = 0,
//             this.currentTranslationX = 0,
//             this.currentTranslationMove,
//             this.margin = 0,
//             this.elemntsMargins = 0,
//             this.prevTranslation = 0,
//             this.animationID = 0,
//             this.stopperFactor = stopperFactor,
//             this.oserver = null; */
//         this.initEvents()
//     }


//     getCustomDomElements = () => {
//         console.log(this.settings)
//     }


//     initEvents = () => {
//         console.log(this.contentSizeDirectionParam, this.mainSizeDirectionParam, this.marginDirectionParam)
//         switch (this.settings.switchers) {

//         }
//         this.settings.switchers.arrows && this.initArrowsBtns()
//         this.settings.switchers.dots && this.initDotsBtns()
//     }


//     getDirectionParam = () => {
//         /*  customSetting?.sliderDirection === "horizontal" ? this.content[0].clientWidth : this.content[0].clientHeight, */
//         switch (this.customSetting?.sliderDirection) {
//             case "horizontal": return [this.content[0].clientWidth, this.main.clientWidth, this.getMarginLeftRight()]
//             case "vertical": return [this.content[0].clientHeight, this.main.clientHeight, this.getMarginTopBottom()]
//             default: null
//         }
//     }


//     getSliderStyle = () => {

//     }

//     getMarginLeftRight = () => +getComputedStyle(this.content[0]).marginLeft.split('px').join('') + +getComputedStyle(this.content[0]).marginRight.split('px').join('');
//     getMarginTopBottom = () => +getComputedStyle(this.content[0]).marginTop.split('px').join('') + +getComputedStyle(this.content[0]).marginBottom.split('px').join('');

//     // getMarginLeftRight = () => this.absToPercent(this.content.reduce((prev, cur) => (prev ? +getComputedStyle(prev).marginLeft.split('px').join('') : 0) + +getComputedStyle(cur).marginLeft.split('px').join('')))
//     // getMarginTopBottom = () => this.absToPercent(this.content.reduce((prev, cur) => (prev ? +getComputedStyle(prev).marginTop.split('px').join('') : 0) + +getComputedStyle(cur).marginBottom.split('px').join('')))


//     /*                                                ТАЧ СОБЫТИЕ                                             */

//     initDrag = () => {
//         this.content.map((dragableItem, i) => {

//             dragableItem.addEventListener('dragstart', (e) => e.preventDefault())

//             //touch event
//             dragableItem.addEventListener('touchstart', this.touchStart(i), { passive: true })
//             dragableItem.addEventListener('touchend', (e) => this.touchEnd(e))
//             dragableItem.addEventListener('touchmove', this.touchMove, { passive: true })


//             //mouse event
//             dragableItem.addEventListener('mousedown', this.touchStart(i), { passive: true })
//             dragableItem.addEventListener('mouseup', (e) => this.touchEnd(e))
//             dragableItem.addEventListener('mousemove', this.touchMove, { passive: true })
//             dragableItem.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))

//         })
//     }


//     contextMenu = () => {
//         window.oncontextmenu = (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             return false
//         }
//     }


//     animation = () => {
//         // анимация если драг активен
//         this.setSliderPositionX(this.main, this.currentTranslationX);
//         if (this.isDragging) requestAnimationFrame(this.animation)
//     }


//     touchStart = (i) => {

//         // Начало тач события 
//         return (event) => {

//             this.main.classList.remove('carousel__content--smooth'); // удаляем плавность при движении, чтобы не было задержек
//             this.startPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
//             this.isDragging = true;                                  // инициализируем перетаскивание
//             this.animationID = requestAnimationFrame(this.animation) // запускаем анимацию
//         }
//     }


//     touchMove = (e) => {

//         // тач событие

//         if (this.isDragging) { // если драг активен

//             let currentPosition = this.getPositionX(e); // узнаем  позицию мыши
//             // останавливаем транслэйт при выходе из контейнера 

//             console.log(((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed());
//             console.log((Math.abs(this.currentTranslationX) + 100).toFixed());
//             if ((Math.abs(this.currentTranslationX) + 100).toFixed() <= ((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed() && this.currentTranslationX < 2) {
//                 this.currentTranslationX = this.absToPercent(((this.prevTranslation * this.slideDirectionParams[1] / 100) + currentPosition - this.startPos), this.slideDirectionParams[1]);
//             }
//         }
//     }


//     touchEnd = (e) => {
//         // Остановка тач события


//         cancelAnimationFrame(this.animationID)                          // отмена анимацию
//         this.isDragging = false;                                        // отсановка перетаскивания
//         this.main.classList.add('carousel__content--smooth');           // возвращаем плавность для событий на клик стрелки 

//         // Изменям индекс в зависимости от текущей трансформации
//         if (this.currentIndex < this.content.length) {
//             Math.abs(this.currentTranslationX) > ((Math.abs(this.prevTranslation) + this.translateStepX / 3)) && (this.currentIndex++);
//         }
//         if (this.currentIndex >= 0) {
//             Math.abs(this.currentTranslationX) < ((Math.abs(this.prevTranslation) - this.translateStepX / 3)) && (this.currentIndex--);
//         }


//         this.setPrevTranslation();                                      // Устанавливаем предыдущий транслэйте
//         this.setCurrentXTranslation();                                  // Устанавливаем текущий транслэйте
//         this.changeArrowActivity();                                     // Изменяем активность кнопопк
//         this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//         this.getUnactiveElts();                                         // меняем опасити элементов 
//     }




//     /*                                                СОБЫТИЕ НА КЛИК СТРЕЛОК                                             */

//     initArrowsBtns = () => {
//         console.log('ok')
//         this.arrow[0].addEventListener("click", () => this.left()); // левая стрелка

//         this.arrow[1].addEventListener("click", () => this.rigth()); // праввая стрелка
//     }

//     rigth = () => {
//         if (this.currentIndex < this.getMainToContentIndex()) {
//             this.currentIndex++;
//             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
//             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
//             this.changeArrowActivity();           // Изменяем активность кнопопк
//             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//             this.getUnactiveElts();               // меняем опасити элементов 
//         }

//     }


//     left = () => {
//         if (Math.abs(this.currentTranslationX) > 0) {
//             this.currentIndex--
//             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
//             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
//             this.changeArrowActivity();           // Изменяем активность кнопопк
//             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//             this.getUnactiveElts();               // меняем опасити элементов 
//         }
//     }




//     /*                                                СОБЫТИЕ НА КЛИК КНОПОК                                         */

//     initToggleBtns = () => {
//         this.toggleBtn.map((item, i) => item.addEventListener("click", () => {
//             !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
//             this.currentIndex = i;
//             this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
//             this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
//             this.setSlideNumber(this.slideNumber)
//             if (this.direction() === 'column') {
//                 this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
//             } else {
//                 this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
//             }
//         }))
//     }




//     direction = () => window.getComputedStyle(this.toggleBtn[0].parentElement).flexDirection;



//     /*                                                ОБЩИЕ МЕТОДЫ                                         */


//     /*                                                СМЕНА АКТИВНОСТИ СТРЕЛОК                                        */

//     changeArrowActivity = () => {

//         // меняем активность стрелок

//         console.log(this)
//         // Левая стрелка
//         if (Math.abs(this.currentTranslationX) > 0) {
//             this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.remove('carousel__toggle-btn--unactive')
//         } else {
//             !this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.add('carousel__toggle-btn--unactive');
//         }


//         // Правая стрелка
//         if (this.currentIndex === this.getMainToContentIndex()) {
//             this.arrow[1].classList.add('carousel__toggle-btn--unactive');
//         } else {
//             this.arrow[1].classList.remove('carousel__toggle-btn--unactive');
//         }
//     }




//     /*                                                МЕНЯЕМ ПРОЗРАЧНОСТЬ ВЫПАДАЮЩИХ ЭЛЕМЕНТОВ                                      */

//     getUnactiveElts = () => this.content.map((item, i) => {
//         // меняем опасити элементов 
//         const translationtoAbs = this.percentToAbsolute(Math.abs(this.currentTranslationX), this.slideDirectionParams[1]).toFixed();
//         if (this.slideDirectionParams[1] <= ((item.offsetLeft + this.margin + i) - translationtoAbs) || item.offsetLeft + i - translationtoAbs < 0) {
//             item.classList.add('carousel__item--unActive')
//         } else {
//             (item.classList.contains('carousel__item--unActive') && item.classList.remove('carousel__item--unActive'))
//         }

//     })




//     /*                                                resizeObserver API                                     */


//     slideRzeObrCallback = (entries) => {

//         // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
//         this.getTranslateStepX(); // Узнаем шаг для X транслэйта

//         // Уменьшаем индекс при переполнении
//         if (this.currentIndex > this.getMainToContentIndex()) {
//             const decresseIndex = this.currentIndex - this.getMainToContentIndex();
//             this.currentIndex -= decresseIndex;
//         }
//         console.log(this.currentIndex)
//         this.setPrevTranslation();           // Устанавливаем предыдущий транслэйт
//         this.getMainToContentIndex()         // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере
//         this.setCurrentXTranslation();       // Устанавливаем текущий транслэйт
//         this.changeArrowActivity();          // Изменяем активность кнопопок
//         this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
//         this.getUnactiveElts();              // меняем опасити элементов 

//     }

//     slideResizeObserver = () => {

//         // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
//         this.resizerSlide = new ResizeObserver(this.slideRzeObrCallback);
//         this.resizerSlide.observe(this.slideResizeOberverObj)
//     }

//     toggleContainerRzeObrCallback = () => {
//         this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
//         if (this.direction() === 'column') {
//             this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
//         } else {
//             this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
//         }

//     }




//     toggleContainerResizeObserver = () => {
//         this.resizerToggler = new ResizeObserver(this.toggleContainerRzeObrCallback);
//         console.log(this.toggleResizeOberverObj)
//         this.resizerToggler.observe(this.toggleResizeOberverObj)
//     }



//     /*                                               ТЕХНИЧЕСКИЕ МЕТОДЫ                                  */

//     toggleClasses = (element, classList) => element.classList.toggle(classList)




//     /*                                               СМЕНА КЛАССОВ                                 */




//     getMainToContentIndex = () => this.content.length - ((this.absToPercent(this.slideDirectionParams[1], this.getTotalElementsWidth()).toFixed() / 100) * this.content.length).toFixed()  // индекс отношения контэйнера слайдера к его контентой части


//     setSliderPositionX = (element, translation) => element.style.transform = `translateX(${translation}%)`  // Устанавливаем транслэйт для элемента по x координате

//     setSliderPositionY = (element, translation) => element.style.transform = `translateY(${translation}%)` // Устанавливаем транслэйт для элемента по y координате


//     getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; // Позиция мыши/пальца


//     // Переводы чисел

//     absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты

//     percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение


//     setSlideNumber = (elem) => elem.textContent = this.currentIndex + 1  // Устанавливаем номер слайда


//     setPrevTranslation = () => this.prevTranslation = this.currentIndex * - this.absToPercent(this.slideDirectionParams[0] + this.margin, this.slideDirectionParams[1]);// Устанавливаем предыдущий трансл


//     setCurrentXTranslation = () => this.currentTranslationX = (this.currentIndex) * -this.translateStepX; //Меняем текущий X транслэйт

//     setCurrentFullBodyTranslation = (translate) => (this.currentIndex) * translate; //Меняем текущий Y транслэйт


//     getMargin = () => {
//         // Узнаем отутупы для правельного транслэйта
//         this.margin = +getComputedStyle(this.content[0]).marginLeft.split('px').join('');
//         this.elemntsMargins = this.absToPercent((this.margin * this.content.length), this.getTotalElementsWidth()) - this.stopperFactor;

//     }

//     getTranslateStepX = () => this.translateStepX = (this.slideDirectionParams[0] + this.margin) / this.slideDirectionParams[1] * 100  // Узнаем шаг для X транслэйта


//     getTotalElementsWidth = () => (this.slideDirectionParams[0] + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

// }



// document.addEventListener('DOMContentLoaded', () => {



//     const coffeeSliderSetting = {
//         type: "carousel",
//         settings: {

//             switchers: {
//                 dots: false,
//                 arrows: true,
//                 slickTrack: false,
//                 slickFullBody: true
//             }
//         },
//         customSetting: {
//             touch: true,
//             resize: {
//                 resizeActive: true,
//                 /*    resizeSettings: resizeActive && {

//                    } */
//             },
//             sliderDirection: 'horizontal'
//         },
//         mainDomElements: {
//             content: [...document.querySelectorAll(".coffee__item")],
//         },
//         customDomELements: {
//             arrow: [...document.querySelectorAll(".coffee__toggle-btn")],
//             resizeOberver: document.querySelector(".coffee__resizeOberver"),
//             main: document.querySelector(".coffee__body-wrapper"),


//         }
//     }

//     const sliderCoffee = new Slider(coffeeSliderSetting);


//     // // Coffee Slider
//     // const arrowCof = [...document.querySelectorAll(".coffee__toggle-btn")];
//     // const contentCof = [...document.querySelectorAll(".coffee__item")];
//     // const mainCof = document.querySelector(".coffee__body-wrapper");
//     // const resizeOberverCof = document.querySelector(".coffee__resizeOberver");

//     // const sliderCoffee = new Slider(contentCof, mainCof, arrowCof, resizeOberverCof, null, null, 0, null, null);

//     // sliderCoffee.getMargin();
//     // sliderCoffee.getUnactiveElts();
//     // sliderCoffee.getTranslateStepX();
//     // sliderCoffee.initArrowsBtns();
//     // sliderCoffee.initDrag();
//     // sliderCoffee.contextMenu();
//     // sliderCoffee.slideResizeObserver();



//     // // Combo Slider

//     // const arrowCom = [...document.querySelectorAll(".combo__toggle-btn")];
//     // const contentCom = [...document.querySelectorAll(".combo__item")];
//     // const mainCom = document.querySelector(".combo__body-wrapper");
//     // const resizeOberverCom = document.querySelector(".combo__resizeOberver");

//     // const sliderCombo = new Slider(contentCom, mainCom, arrowCom, resizeOberverCom, null, null, 0, null, null);

//     // sliderCombo.getMargin();
//     // sliderCombo.getUnactiveElts();
//     // sliderCombo.getTranslateStepX();
//     // sliderCombo.initArrowsBtns();
//     // sliderCombo.initDrag();
//     // sliderCombo.contextMenu();
//     // sliderCombo.slideResizeObserver();



//     // // Giftset Slider

//     // const contentGif = [...document.querySelectorAll(".giftset__body-wrapper")];
//     // const mainGif = document.querySelector(".giftset__body");
//     // const toggleBtnGif = [...document.querySelectorAll(".togglers__item")];
//     // const toggleMoveGif = document.querySelector(".togglers__item-move");
//     // const slideNumber = document.querySelector(".togglers__slide-number");
//     // const toggleResizeOberverGif = document.querySelector(".togglers__resize-observer");
//     // const sliderGiftset = new Slider(contentGif, mainGif, null, null, toggleBtnGif, toggleMoveGif, null, slideNumber, toggleResizeOberverGif);

//     // sliderGiftset.getMargin();
//     // sliderGiftset.getTranslateStepX();
//     // sliderGiftset.initToggleBtns();
//     // sliderGiftset.toggleContainerResizeObserver();

// })




// /* const slider3d = {
//     type: "3dslider",
//     settings: {
//         customSetting: {
//             effects: "rota",
//         },
//         switchers: {
//             dots:  "true/false",
//             arrows: "true/false",
//             togglers: "true/false",
//         }
//     }
// }

// const sliderGif = new Slider (

// ) */
// // class Slider {

// //     constructor(content, main, arrow, slideResizeOberverObj, toggleBtn, toggleMoveGif, stopperFactor, slideNumber, toggleResizeOberverObj) {

// //         this.content = content,
// //             this.main = main,
// //             this.arrow = arrow,
// //             this.slideResizeOberverObj = slideResizeOberverObj,
// //             this.toggleResizeOberverObj = toggleResizeOberverObj,
// //             this.toggleBtn = toggleBtn,
// //             this.toggleMoveGif = toggleMoveGif,
// //             this.slideNumber = slideNumber,
// //             this.isDragging = false,
// //             this.currentIndex = 0,
// //             this.startPos = 0,
// //             this.translateStepX = 0,
// //             this.currentTranslationX = 0,
// //             this.currentTranslationMove,
// //             this.margin = 0,
// //             this.elemntsMargins = 0,
// //             this.prevTranslation = 0,
// //             this.animationID = 0,
// //             this.stopperFactor = stopperFactor,
// //             this.oserver = null;
// //     }




// //     /*                                                ТАЧ СОБЫТИЕ                                             */

// //     initDrag = () => {
// //         this.content.map((dragableItem, i) => {

// //             dragableItem.addEventListener('dragstart', (e) => e.preventDefault())

// //             //touch event
// //             dragableItem.addEventListener('touchstart', this.touchStart(i), { passive: true })
// //             dragableItem.addEventListener('touchend', (e) => this.touchEnd(e))
// //             dragableItem.addEventListener('touchmove', this.touchMove, { passive: true })


// //             //mouse event
// //             dragableItem.addEventListener('mousedown', this.touchStart(i), { passive: true })
// //             dragableItem.addEventListener('mouseup', (e) => this.touchEnd(e))
// //             dragableItem.addEventListener('mousemove', this.touchMove, { passive: true })
// //             dragableItem.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))

// //         })
// //     }


// //     contextMenu = () => {
// //         window.oncontextmenu = (e) => {
// //             e.preventDefault();
// //             e.stopPropagation();
// //             return false
// //         }
// //     }


// //     animation = () => {
// //         // анимация если драг активен
// //         this.setSliderPositionX(this.main, this.currentTranslationX);
// //         if (this.isDragging) requestAnimationFrame(this.animation)
// //     }


// //     touchStart = (i) => {

// //         // Начало тач события 
// //         return (event) => {

// //             this.main.classList.remove('carousel__content--smooth'); // удаляем плавность при движении, чтобы не было задержек
// //             this.startPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
// //             this.isDragging = true;                                  // инициализируем перетаскивание
// //             this.animationID = requestAnimationFrame(this.animation) // запускаем анимацию
// //         }
// //     }


// //     touchMove = (e) => {

// //         // тач событие

// //         if (this.isDragging) { // если драг активен

// //             let currentPosition = this.getPositionX(e); // узнаем  позицию мыши
// //             // останавливаем транслэйт при выходе из контейнера 

// //             console.log(((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed());
// //             console.log((Math.abs(this.currentTranslationX) + 100).toFixed());
// //             if ((Math.abs(this.currentTranslationX) + 100).toFixed() <= ((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed() && this.currentTranslationX < 2) {
// //                 this.currentTranslationX = this.absToPercent(((this.prevTranslation * this.main.clientWidth / 100) + currentPosition - this.startPos), this.main.clientWidth);
// //             }
// //         }
// //     }


// //     touchEnd = (e) => {
// //         // Остановка тач события


// //         cancelAnimationFrame(this.animationID)                          // отмена анимацию
// //         this.isDragging = false;                                        // отсановка перетаскивания
// //         this.main.classList.add('carousel__content--smooth');           // возвращаем плавность для событий на клик стрелки 

// //         // Изменям индекс в зависимости от текущей трансформации
// //         if (this.currentIndex < this.content.length) {
// //             Math.abs(this.currentTranslationX) > ((Math.abs(this.prevTranslation) + this.translateStepX / 3)) && (this.currentIndex++);
// //         }
// //         if (this.currentIndex >= 0) {
// //             Math.abs(this.currentTranslationX) < ((Math.abs(this.prevTranslation) - this.translateStepX / 3)) && (this.currentIndex--);
// //         }


// //         this.setPrevTranslation();                                      // Устанавливаем предыдущий транслэйте
// //         this.setCurrentXTranslation();                                  // Устанавливаем текущий транслэйте
// //         this.changeArrowActivity();                                     // Изменяем активность кнопопк
// //         this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
// //         this.getUnactiveElts();                                         // меняем опасити элементов 
// //     }




// //     /*                                                СОБЫТИЕ НА КЛИК СТРЕЛОК                                             */

// //     initArrowsBtns = () => {
// //         this.arrow[0].addEventListener("click", () => this.left()); // левая стрелка

// //         this.arrow[1].addEventListener("click", () => this.rigth()); // праввая стрелка
// //     }

// //     rigth = () => {
// //         if (this.currentIndex < this.getMainToContentIndex()) {
// //             this.currentIndex++;
// //             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
// //             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
// //             this.changeArrowActivity();           // Изменяем активность кнопопк
// //             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
// //             this.getUnactiveElts();               // меняем опасити элементов 
// //         }

// //     }


// //     left = () => {
// //         if (Math.abs(this.currentTranslationX) > 0) {
// //             this.currentIndex--
// //             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
// //             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
// //             this.changeArrowActivity();           // Изменяем активность кнопопк
// //             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
// //             this.getUnactiveElts();               // меняем опасити элементов 
// //         }
// //     }




// //     /*                                                СОБЫТИЕ НА КЛИК КНОПОК                                         */

// //     initToggleBtns = () => {
// //         this.toggleBtn.map((item, i) => item.addEventListener("click", () => {
// //             !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
// //             this.currentIndex = i;
// //             this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
// //             this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
// //             this.setSlideNumber(this.slideNumber)
// //             if (this.column()) {
// //                 this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
// //             } else {
// //                 this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
// //             }
// //         }))
// //     }




// //     column = () => this.toggleBtn[0].parentElement.clientHeight > this.toggleBtn[0].parentElement.clientWidth



// //     /*                                                ОБЩИЕ МЕТОДЫ                                         */


// //     /*                                                СМЕНА АКТИВНОСТИ СТРЕЛОК                                        */

// //     changeArrowActivity = () => {

// //         // меняем активность стрелок

// //         console.log(this)
// //         // Левая стрелка
// //         if (Math.abs(this.currentTranslationX) > 0) {
// //             this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.remove('carousel__toggle-btn--unactive')
// //         } else {
// //             !this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.add('carousel__toggle-btn--unactive');
// //         }


// //         // Правая стрелка
// //         if (this.currentIndex === this.getMainToContentIndex()) {
// //             this.arrow[1].classList.add('carousel__toggle-btn--unactive');
// //         } else {
// //             this.arrow[1].classList.remove('carousel__toggle-btn--unactive');
// //         }
// //     }




// //     /*                                                МЕНЯЕМ ПРОЗРАЧНОСТЬ ВЫПАДАЮЩИХ ЭЛЕМЕНТОВ                                      */

// //     getUnactiveElts = () => this.content.map((item, i) => {
// //         // меняем опасити элементов 
// //         const translationtoAbs = this.percentToAbsolute(Math.abs(this.currentTranslationX), this.main.clientWidth).toFixed();
// //         if (this.main.clientWidth <= ((item.offsetLeft + this.margin + i) - translationtoAbs) || item.offsetLeft + i - translationtoAbs < 0) {
// //             item.classList.add('carousel__item--unActive')
// //         } else {
// //             (item.classList.contains('carousel__item--unActive') && item.classList.remove('carousel__item--unActive'))
// //         }

// //     })




// //     /*                                                resizeObserver API                                     */


// //     slideRzeObrCallback = (entries) => {

// //         // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
// //         this.getTranslateStepX(); // Узнаем шаг для X транслэйта

// //         // Уменьшаем индекс при переполнении
// //         if (this.currentIndex > this.getMainToContentIndex()) {
// //             const decresseIndex = this.currentIndex - this.getMainToContentIndex();
// //             this.currentIndex -= decresseIndex;
// //         }
// //         console.log(this.currentIndex)
// //         this.setPrevTranslation();           // Устанавливаем предыдущий транслэйт
// //         this.getMainToContentIndex()         // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере
// //         this.setCurrentXTranslation();       // Устанавливаем текущий транслэйт
// //         this.changeArrowActivity();          // Изменяем активность кнопопок
// //         this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
// //         this.getUnactiveElts();              // меняем опасити элементов 

// //     }

// //     slideResizeObserver = () => {

// //         // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
// //         this.resizerSlide = new ResizeObserver(this.slideRzeObrCallback);
// //         this.resizerSlide.observe(this.slideResizeOberverObj)
// //     }

// //     toggleContainerRzeObrCallback = () => {
// //         this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
// //         if (this.column()) {
// //             this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
// //         } else {
// //             this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
// //         }

// //     }




// //     toggleContainerResizeObserver = () => {
// //         this.resizerToggler = new ResizeObserver(this.toggleContainerRzeObrCallback);
// //         console.log(this.toggleResizeOberverObj)
// //         this.resizerToggler.observe(this.toggleResizeOberverObj)
// //     }



// //     /*                                               ТЕХНИЧЕСКИЕ МЕТОДЫ                                  */

// //     toggleClasses = (element, classList) => element.classList.toggle(classList)




// //     /*                                               СМЕНА КЛАССОВ                                 */




// //     getMainToContentIndex = () => this.content.length - ((this.absToPercent(this.main.clientWidth, this.getTotalElementsWidth()).toFixed() / 100) * this.content.length).toFixed()  // индекс отношения контэйнера слайдера к его контентой части


// //     setSliderPositionX = (element, translation) => element.style.transform = `translateX(${translation}%)`  // Устанавливаем транслэйт для элемента по x координате

// //     setSliderPositionY = (element, translation) => element.style.transform = `translateY(${translation}%)` // Устанавливаем транслэйт для элемента по y координате


// //     getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; // Позиция мыши/пальца


// //     // Переводы чисел

// //     absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты

// //     percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение


// //     setSlideNumber = (elem) => elem.textContent = this.currentIndex + 1  // Устанавливаем номер слайда


// //     setPrevTranslation = () => this.prevTranslation = this.currentIndex * - this.absToPercent(this.content[0].clientWidth + this.margin, this.main.clientWidth);// Устанавливаем предыдущий трансл


// //     setCurrentXTranslation = () => this.currentTranslationX = (this.currentIndex) * -this.translateStepX; //Меняем текущий X транслэйт

// //     setCurrentFullBodyTranslation = (translate) => (this.currentIndex) * translate; //Меняем текущий Y транслэйт


// //     getMargin = () => {
// //         // Узнаем отутупы для правельного транслэйта
// //         this.margin = +getComputedStyle(this.content[0]).marginLeft.split('px').join('');
// //         this.elemntsMargins = this.absToPercent((this.margin * this.content.length), this.getTotalElementsWidth()) - this.stopperFactor;

// //     }

// //     getTranslateStepX = () => this.translateStepX = (this.content[0].clientWidth + this.margin) / this.main.clientWidth * 100  // Узнаем шаг для X транслэйта



// //     getTotalElementsWidth = () => (this.content[0].clientWidth + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

// // }



// // document.addEventListener('DOMContentLoaded', () => {

// //     // Coffee Slider
// //     const arrowCof = [...document.querySelectorAll(".coffee__toggle-btn")];
// //     const contentCof = [...document.querySelectorAll(".coffee__item")];
// //     const mainCof = document.querySelector(".coffee__body-wrapper");
// //     const resizeOberverCof = document.querySelector(".coffee__resizeOberver");

// //     const sliderCoffee = new Slider(contentCof, mainCof, arrowCof, resizeOberverCof, null, null, 0, null, null);

// //     sliderCoffee.getMargin();
// //     sliderCoffee.getUnactiveElts();
// //     sliderCoffee.getTranslateStepX();
// //     sliderCoffee.initArrowsBtns();
// //     sliderCoffee.initDrag();
// //     sliderCoffee.contextMenu();
// //     sliderCoffee.slideResizeObserver();



// //     // Combo Slider

// //     const arrowCom = [...document.querySelectorAll(".combo__toggle-btn")];
// //     const contentCom = [...document.querySelectorAll(".combo__item")];
// //     const mainCom = document.querySelector(".combo__body-wrapper");
// //     const resizeOberverCom = document.querySelector(".combo__resizeOberver");

// //     const sliderCombo = new Slider(contentCom, mainCom, arrowCom, resizeOberverCom, null, null, 0, null, null);

// //     sliderCombo.getMargin();
// //     sliderCombo.getUnactiveElts();
// //     sliderCombo.getTranslateStepX();
// //     sliderCombo.initArrowsBtns();
// //     sliderCombo.initDrag();
// //     sliderCombo.contextMenu();
// //     sliderCombo.slideResizeObserver();



// //     // Giftset Slider

// //     const contentGif = [...document.querySelectorAll(".giftset__body-wrapper")];
// //     const mainGif = document.querySelector(".giftset__body");
// //     const toggleBtnGif = [...document.querySelectorAll(".togglers__item")];
// //     const toggleMoveGif = document.querySelector(".togglers__item-move");
// //     const slideNumber = document.querySelector(".togglers__slide-number");
// //     const toggleResizeOberverGif = document.querySelector(".togglers__resize-observer");
// //     const sliderGiftset = new Slider(contentGif, mainGif, null, null, toggleBtnGif, toggleMoveGif, null, slideNumber, toggleResizeOberverGif);

// //     sliderGiftset.getMargin();
// //     sliderGiftset.getTranslateStepX();
// //     sliderGiftset.initToggleBtns();
// //     sliderGiftset.toggleContainerResizeObserver();

// // })


// // /* const carousel = {
// //     type: "carousel",
// //     settings: {
// //         customSetting: {
// //             effects: "",
// //             touch: "true/false",
// //         },
// //         switchers: {
// //             dots: "true/false",
// //             arrows: "true/false",
// //         }
// //     }
// // }
// // const slider3d = {
// //     type: "3dslider",
// //     settings: {
// //         customSetting: {
// //             effects: "rota",
// //         },
// //         switchers: {
// //             dots:  "true/false",
// //             arrows: "true/false",
// //             togglers: "true/false",
// //         }
// //     }
// // }
// // const sliderGif = new Slider (
// // ) */
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



// class Slider {

//     constructor(content, main, arrow, slideResizeOberverObj, toggleBtn, toggleMoveGif, stopperFactor, slideNumber, toggleResizeOberverObj) {

//         this.content = content,
//             this.main = main,
//             this.arrow = arrow,
//             this.slideResizeOberverObj = slideResizeOberverObj,
//             this.toggleResizeOberverObj = toggleResizeOberverObj,
//             this.toggleBtn = toggleBtn,
//             this.toggleMoveGif = toggleMoveGif,
//             this.slideNumber = slideNumber,
//             this.isDragging = false,
//             this.currentIndex = 0,
//             this.startPos = 0,
//             this.translateStepX = 0,
//             this.currentTranslationX = 0,
//             this.currentTranslationMove,
//             this.margin = 0,
//             this.elemntsMargins = 0,
//             this.prevTranslation = 0,
//             this.animationID = 0,
//             this.stopperFactor = stopperFactor,
//             this.oserver = null;
//     }




//     /*                                                ТАЧ СОБЫТИЕ                                             */

//     initDrag = () => {
//         this.content.map((dragableItem, i) => {

//             dragableItem.addEventListener('dragstart', (e) => e.preventDefault())

//             //touch event
//             dragableItem.addEventListener('touchstart', this.touchStart(i), { passive: true })
//             dragableItem.addEventListener('touchend', (e) => this.touchEnd(e))
//             dragableItem.addEventListener('touchmove', this.touchMove, { passive: true })


//             //mouse event
//             dragableItem.addEventListener('mousedown', this.touchStart(i), { passive: true })
//             dragableItem.addEventListener('mouseup', (e) => this.touchEnd(e))
//             dragableItem.addEventListener('mousemove', this.touchMove, { passive: true })
//             dragableItem.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))

//         })
//     }


//     contextMenu = () => {
//         window.oncontextmenu = (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             return false
//         }
//     }


//     animation = () => {
//         // анимация если драг активен
//         this.setSliderPositionX(this.main, this.currentTranslationX);
//         if (this.isDragging) requestAnimationFrame(this.animation)
//     }


//     touchStart = (i) => {

//         // Начало тач события 
//         return (event) => {

//             this.main.classList.remove('carousel__content--smooth'); // удаляем плавность при движении, чтобы не было задержек
//             this.startPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
//             this.isDragging = true;                                  // инициализируем перетаскивание
//             this.animationID = requestAnimationFrame(this.animation) // запускаем анимацию
//         }
//     }


//     touchMove = (e) => {

//         // тач событие

//         if (this.isDragging) { // если драг активен

//             let currentPosition = this.getPositionX(e); // узнаем  позицию мыши
//             // останавливаем транслэйт при выходе из контейнера 

//             console.log(((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed());
//             console.log((Math.abs(this.currentTranslationX) + 100).toFixed());
//             if ((Math.abs(this.currentTranslationX) + 100).toFixed() <= ((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed() && this.currentTranslationX < 2) {
//                 this.currentTranslationX = this.absToPercent(((this.prevTranslation * this.main.clientWidth / 100) + currentPosition - this.startPos), this.main.clientWidth);
//             }
//         }
//     }


//     touchEnd = (e) => {
//         // Остановка тач события


//         cancelAnimationFrame(this.animationID)                          // отмена анимацию
//         this.isDragging = false;                                        // отсановка перетаскивания
//         this.main.classList.add('carousel__content--smooth');           // возвращаем плавность для событий на клик стрелки 

//         // Изменям индекс в зависимости от текущей трансформации
//         if (this.currentIndex < this.content.length) {
//             Math.abs(this.currentTranslationX) > ((Math.abs(this.prevTranslation) + this.translateStepX / 3)) && (this.currentIndex++);
//         }
//         if (this.currentIndex >= 0) {
//             Math.abs(this.currentTranslationX) < ((Math.abs(this.prevTranslation) - this.translateStepX / 3)) && (this.currentIndex--);
//         }


//         this.setPrevTranslation();                                      // Устанавливаем предыдущий транслэйте
//         this.setCurrentXTranslation();                                  // Устанавливаем текущий транслэйте
//         this.changeArrowActivity();                                     // Изменяем активность кнопопк
//         this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//         this.getUnactiveElts();                                         // меняем опасити элементов 
//     }




//     /*                                                СОБЫТИЕ НА КЛИК СТРЕЛОК                                             */

//     initArrowsBtns = () => {
//         this.arrow[0].addEventListener("click", () => this.left()); // левая стрелка

//         this.arrow[1].addEventListener("click", () => this.rigth()); // праввая стрелка
//     }

//     rigth = () => {
//         if (this.currentIndex < this.getMainToContentIndex()) {
//             this.currentIndex++;
//             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
//             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
//             this.changeArrowActivity();           // Изменяем активность кнопопк
//             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//             this.getUnactiveElts();               // меняем опасити элементов 
//         }

//     }


//     left = () => {
//         if (Math.abs(this.currentTranslationX) > 0) {
//             this.currentIndex--
//             this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
//             this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
//             this.changeArrowActivity();           // Изменяем активность кнопопк
//             this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
//             this.getUnactiveElts();               // меняем опасити элементов 
//         }
//     }




//     /*                                                СОБЫТИЕ НА КЛИК КНОПОК                                         */

//     initToggleBtns = () => {
//         this.toggleBtn.map((item, i) => item.addEventListener("click", () => {
//             !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
//             this.currentIndex = i;
//             this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
//             this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
//             this.setSlideNumber(this.slideNumber)
//             if (this.direction() === 'column') {
//                 this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
//             } else {
//                 this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
//             }
//         }))
//     }




//     direction = () => window.getComputedStyle(this.toggleBtn[0].parentElement).flexDirection;



//     /*                                                ОБЩИЕ МЕТОДЫ                                         */


//     /*                                                СМЕНА АКТИВНОСТИ СТРЕЛОК                                        */

//     changeArrowActivity = () => {

//         // меняем активность стрелок

//         console.log(this)
//         // Левая стрелка
//         if (Math.abs(this.currentTranslationX) > 0) {
//             this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.remove('carousel__toggle-btn--unactive')
//         } else {
//             !this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.add('carousel__toggle-btn--unactive');
//         }


//         // Правая стрелка
//         if (this.currentIndex === this.getMainToContentIndex()) {
//             this.arrow[1].classList.add('carousel__toggle-btn--unactive');
//         } else {
//             this.arrow[1].classList.remove('carousel__toggle-btn--unactive');
//         }
//     }




//     /*                                                МЕНЯЕМ ПРОЗРАЧНОСТЬ ВЫПАДАЮЩИХ ЭЛЕМЕНТОВ                                      */

//     getUnactiveElts = () => this.content.map((item, i) => {
//         // меняем опасити элементов 
//         const translationtoAbs = this.percentToAbsolute(Math.abs(this.currentTranslationX), this.main.clientWidth).toFixed();
//         if (this.main.clientWidth <= ((item.offsetLeft + this.margin + i) - translationtoAbs) || item.offsetLeft + i - translationtoAbs < 0) {
//             item.classList.add('carousel__item--unActive')
//         } else {
//             (item.classList.contains('carousel__item--unActive') && item.classList.remove('carousel__item--unActive'))
//         }

//     })




//     /*                                                resizeObserver API                                     */


//     slideRzeObrCallback = (entries) => {

//         // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
//         this.getTranslateStepX(); // Узнаем шаг для X транслэйта

//         // Уменьшаем индекс при переполнении
//         if (this.currentIndex > this.getMainToContentIndex()) {
//             const decresseIndex = this.currentIndex - this.getMainToContentIndex();
//             this.currentIndex -= decresseIndex;
//         }
//         console.log(this.currentIndex)
//         this.setPrevTranslation();           // Устанавливаем предыдущий транслэйт
//         this.getMainToContentIndex()         // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере
//         this.setCurrentXTranslation();       // Устанавливаем текущий транслэйт
//         this.changeArrowActivity();          // Изменяем активность кнопопок
//         this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
//         this.getUnactiveElts();              // меняем опасити элементов 

//     }

//     slideResizeObserver = () => {

//         // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
//         this.resizerSlide = new ResizeObserver(this.slideRzeObrCallback);
//         this.resizerSlide.observe(this.slideResizeOberverObj)
//     }

//     toggleContainerRzeObrCallback = () => {
//         this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
//         if (this.direction() === 'column') {
//             this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
//         } else {
//             this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
//         }

//     }




//     toggleContainerResizeObserver = () => {
//         this.resizerToggler = new ResizeObserver(this.toggleContainerRzeObrCallback);
//         console.log(this.toggleResizeOberverObj)
//         this.resizerToggler.observe(this.toggleResizeOberverObj)
//     }



//     /*                                               ТЕХНИЧЕСКИЕ МЕТОДЫ                                  */

//     toggleClasses = (element, classList) => element.classList.toggle(classList)




//     /*                                               СМЕНА КЛАССОВ                                 */




//     getMainToContentIndex = () => this.content.length - ((this.absToPercent(this.main.clientWidth, this.getTotalElementsWidth()).toFixed() / 100) * this.content.length).toFixed()  // индекс отношения контэйнера слайдера к его контентой части


//     setSliderPositionX = (element, translation) => element.style.transform = `translateX(${translation}%)`  // Устанавливаем транслэйт для элемента по x координате

//     setSliderPositionY = (element, translation) => element.style.transform = `translateY(${translation}%)` // Устанавливаем транслэйт для элемента по y координате


//     getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; // Позиция мыши/пальца


//     // Переводы чисел

//     absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты

//     percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение


//     setSlideNumber = (elem) => elem.textContent = this.currentIndex + 1  // Устанавливаем номер слайда


//     setPrevTranslation = () => this.prevTranslation = this.currentIndex * - this.absToPercent(this.content[0].clientWidth + this.margin, this.main.clientWidth);// Устанавливаем предыдущий трансл


//     setCurrentXTranslation = () => this.currentTranslationX = (this.currentIndex) * -this.translateStepX; //Меняем текущий X транслэйт

//     setCurrentFullBodyTranslation = (translate) => (this.currentIndex) * translate; //Меняем текущий Y транслэйт


//     getMargin = () => {
//         // Узнаем отутупы для правельного транслэйта
//         this.margin = +getComputedStyle(this.content[0]).marginLeft.split('px').join('');
//         this.elemntsMargins = this.absToPercent((this.margin * this.content.length), this.getTotalElementsWidth()) - this.stopperFactor;

//     }

//     getTranslateStepX = () => this.translateStepX = (this.content[0].clientWidth + this.margin) / this.main.clientWidth * 100  // Узнаем шаг для X транслэйта



//     getTotalElementsWidth = () => (this.content[0].clientWidth + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

// }



// document.addEventListener('DOMContentLoaded', () => {

//     // Coffee Slider
//     const arrowCof = [...document.querySelectorAll(".coffee__toggle-btn")];
//     const contentCof = [...document.querySelectorAll(".coffee__item")];
//     const mainCof = document.querySelector(".coffee__body-wrapper");
//     const resizeOberverCof = document.querySelector(".coffee__resizeOberver");

//     const sliderCoffee = new Slider(contentCof, mainCof, arrowCof, resizeOberverCof, null, null, 0, null, null);

//     sliderCoffee.getMargin();
//     sliderCoffee.getUnactiveElts();
//     sliderCoffee.getTranslateStepX();
//     sliderCoffee.initArrowsBtns();
//     sliderCoffee.initDrag();
//     sliderCoffee.contextMenu();
//     sliderCoffee.slideResizeObserver();



//     // Combo Slider

//     const arrowCom = [...document.querySelectorAll(".combo__toggle-btn")];
//     const contentCom = [...document.querySelectorAll(".combo__item")];
//     const mainCom = document.querySelector(".combo__body-wrapper");
//     const resizeOberverCom = document.querySelector(".combo__resizeOberver");

//     const sliderCombo = new Slider(contentCom, mainCom, arrowCom, resizeOberverCom, null, null, 0, null, null);

//     sliderCombo.getMargin();
//     sliderCombo.getUnactiveElts();
//     sliderCombo.getTranslateStepX();
//     sliderCombo.initArrowsBtns();
//     sliderCombo.initDrag();
//     sliderCombo.contextMenu();
//     sliderCombo.slideResizeObserver();



//     // Giftset Slider

//     const contentGif = [...document.querySelectorAll(".giftset__body-wrapper")];
//     const mainGif = document.querySelector(".giftset__body");
//     const toggleBtnGif = [...document.querySelectorAll(".togglers__item")];
//     const toggleMoveGif = document.querySelector(".togglers__item-move");
//     const slideNumber = document.querySelector(".togglers__slide-number");
//     const toggleResizeOberverGif = document.querySelector(".togglers__resize-observer");
//     const sliderGiftset = new Slider(contentGif, mainGif, null, null, toggleBtnGif, toggleMoveGif, null, slideNumber, toggleResizeOberverGif);

//     sliderGiftset.getMargin();
//     sliderGiftset.getTranslateStepX();
//     sliderGiftset.initToggleBtns();
//     sliderGiftset.toggleContainerResizeObserver();

// })


// /* const carousel = {
//     type: "carousel",
//     settings: {
//         customSetting: {
//             effects: "",
//             touch: "true/false",
//         },
//         switchers: {
//             dots: "true/false",
//             arrows: "true/false",
//         }
//     }
// }

// const slider3d = {
//     type: "3dslider",
//     settings: {
//         customSetting: {
//             effects: "rota",
//         },
//         switchers: {
//             dots:  "true/false",
//             arrows: "true/false",
//             togglers: "true/false",
//         }
//     }
// }

// const sliderGif = new Slider (

// ) */