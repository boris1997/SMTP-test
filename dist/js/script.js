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



class Direction {

    constructor(directionsBody, directions, directionActive) {
        this.directionsBody = directionsBody;
        this.directions = directions;
        this.directionActive = directionActive;
        this.initEvents()
    }

    initEvents = () => {
        this.directionResizeObserver()
    }

    removeClass = (element, clas) => {
        element.classList.remove(clas)
    }
    addClass = (element, clas) => {
        this.directions.indexOf(element) % 3 !== 0 && element.classList.add(clas)
    }

    directionRzeObrCallback = (entries) => {
        /*  console.log(entries[0].target) */
        this.directions.map((direction, i) => {
            this.detectOverflow(direction)
        })
    }

    directionResizeObserver = (direction) => {
        this.resizerDirection = new ResizeObserver(this.directionRzeObrCallback);
        this.resizerDirection.observe(this.directionsBody)
    }


    detectOverflow = (direction) => {
        let childMarginTop = +window.getComputedStyle(direction).marginTop.split('px').join('');
        let childMarginRight = +window.getComputedStyle(direction).marginRight.split('px').join('');
        childMarginTop = +childMarginTop.toFixed();
        let parentTop = direction.parentNode.getBoundingClientRect().top;
        parentTop = +parentTop.toFixed();
        let childTop = direction.getBoundingClientRect().top;
        childTop = +childTop.toFixed()


        // let directionUlLength = direction.parentNode.children.length;
        let directionUl = [...direction.parentNode.children];
        if (window.innerWidth > 1190) {
            childMarginRight > 0 && (direction.style.marginRight = '0') // console.log 
        }
        if ((childTop - parentTop) > childMarginTop && direction.classList.contains(this.directionActive) && directionUl.indexOf(direction) !== 0) {
            this.removeClass(direction, this.directionActive)
            direction.previousElementSibling.style.marginRight = '34px'
        }

        if (childTop - parentTop === childMarginTop && !direction.classList.contains(this.directionActive) && directionUl.indexOf(direction) !== 0) {
            // console.log(direction.classList.contains(this.directionActive))
            /*       console.log(childTop, parentTop)
            console.log(childMarginTop) */
            /*    console.log(this.directions)
               console.log(this.directions.indexOf(direction))
               console.log(directionUlLength)
               console.log(direction) */
            direction.previousElementSibling.style.marginRight = '0'
            this.addClass(direction, this.directionActive)
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const directions = [...document.querySelectorAll(".direction__item")];
    const directionsBody = document.querySelector(".direction__body-wrapper");
    const directionActive = 'direction__item--margin';
    directions.length !== 0 && new Direction(directionsBody, directions, directionActive);




})



class CountTarif {

    constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

        this.switchRadio = switchRadio;
        this.switchLabel = switchLabel;
        this.togglersTariff = togglersTariff;
        this.totalPriceEl = totalPriceEl;
        this.discountPrice = 1600;
        this.primaryPriceIndex = 1;
        this.priceIndex = 1;
        this.limitier = 10;
        this.disountArr = [];
        this.totalPrice = this.strToNumbaer(this.totalPriceEl);
        this.primaryPrice = this.totalPrice;
        this.tariffIndicators = {
            'indicator': [],
            'discount': 1
        };
    }

    setDiscounts = () => {
        for (let i = 0; i <= this.limitier; i++) {
            i === 0 && this.disountArr.push(1)
            i === 1 && this.disountArr.push(0.9)
            i > 1 && this.disountArr.push(0.85)
        }
    }

    getindicators = () => this.togglersTariff.map(item => {
        this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
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

        if (this.priceIndex > 1) {
            this.priceIndex--;

            this.togglersTariff.map((item, z) => {
                let indicator = this.strToNumbaer(this.togglersTariff[z].children[1]) - this.tariffIndicators['indicator'][z];
                this.togglersTariff[z].children[1].textContent = this.addSpacesToNum(indicator);
            })
            this.countTotalPrice()
            this.showTotalPrice()
        }
    }

    incrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.priceIndex < this.limitier) {
            this.priceIndex++;
            this.togglersTariff.map((item, z) => {
                let indicator = this.strToNumbaer(this.togglersTariff[z].children[1]) + this.tariffIndicators['indicator'][z];

                this.togglersTariff[z].children[1].textContent = this.addSpacesToNum(indicator);
            }
            )
            this.countTotalPrice()
            this.showTotalPrice()
        }
    }






    countTotalPrice = () => {
        /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
             const discount = this.primaryPrice * this.tariffIndicators['discount'];
                console.log(discount)
                this.discountPrice += discount; */
        console.log(this.primaryPrice, this.disountArr[this.priceIndex])
        this.discountPrice = this.primaryPrice * this.disountArr[this.priceIndex - 1];
        console.log(this.discountPrice)
        this.totalPrice = this.discountPrice * this.priceIndex;
        console.log(this.priceIndex)
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

        console.log(this.discountPrice)
        this.countTotalPrice()
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
    if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
        const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
        countTarif.getindicators();
        countTarif.initSwitchTariffBtns();
        countTarif.initTogglers();
        countTarif.setDiscounts();
    }
})


















// class CountTarif {

//     constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

//         this.switchRadio = switchRadio;
//         this.switchLabel = switchLabel;
//         this.togglersTariff = togglersTariff;
//         this.totalPriceEl = totalPriceEl;
//         this.discountPrice = 1600;
//         this.primaryPriceIndex = 1;
//         this.priceIndex = 1;
//         this.limitier = 9;
//         this.disountArr = [];
//         this.totalPrice = this.strToNumbaer(this.totalPriceEl);
//         this.primaryPrice = this.totalPrice;
//         this.tariffIndicators = {
//             'indicator': [],
//             'countIndex': [],
//             'discount': 1
//         };
//     }

//     setDiscounts = () => {
//         for (let i = 0; i <= this.limitier; i++) {
//             i === 0 && this.disountArr.push(1)
//             i === 1 && this.disountArr.push(0.9)
//             i > 1 && this.disountArr.push(0.85)
//         }
//     }

//     getindicators = () => this.togglersTariff.map(item => {
//         this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
//         this.tariffIndicators['countIndex'].push(0);
//     })



//     initSwitchTariffBtns = () => {
//         this.switchRadio.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//         this.switchLabel.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//     }
//     initTogglers = () => {
//         this.togglersTariff.map((item, i) => item.addEventListener('click', (e) => this.toggleTariffIndicators(e, item, i)))
//     }

//     toggleTariffIndicators = (e, item, i) => {
//         console.log(e.target.classList)
//         e.target.classList.contains('incDec-btn__dec') && this.decrIndicator(i)
//         e.target.classList.contains('incDec-btn__inc') && this.incrIndicator(i)
//         /*   e.target.classList[0].includes('inc') && this.decrIndicator() */
//         console.log(e.target, item, i)
//     }

//     decrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] > 0) {
//             this.tariffIndicators['countIndex'][i]--;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) - this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex--;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }

//     countDiscount = (indicator, i) => {
//         indicator === 2 && (this.tariffIndicators['discount'] = 0.9);
//         indicator === 3 && (this.tariffIndicators['discount'] = 0.85);

//     }

//     incrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] < this.limitier) {

//             this.tariffIndicators['countIndex'][i]++;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) + this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex++;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }

//     countTotalPrice = (i) => {
//         this.totalPrice = this.discountPrice * this.priceIndex;
//         console.log(this.priceIndex, this.discountPrice)
//         /*    this.totalPrice = this.totalPrice * (this.tariffIndicators['countIndex'][2] + 1) */
//         console.log(this.totalPrice)
//     }

//     countPrimaryPrice = (i) => {
//         /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
//              const discount = this.primaryPrice * this.tariffIndicators['discount'];
//                 console.log(discount)
//                 this.discountPrice += discount; */
//         console.log(this.tariffIndicators['countIndex'][i] + 1)
//         this.discountPrice = 0;
//         console.log(this.priceIndex)
//         for (let z = 0; z < this.tariffIndicators['countIndex'][i] + 1; z++) {
//             this.discountPrice += this.primaryPrice * this.disountArr[z]/*  * this.priceIndex */;
//             /*    console.log(this.disountArr[z], this.primaryPrice)
//                console.log(price.toFixed()) */
//         }
//         this.totalPrice = this.discountPrice * this.priceIndex;
//     }

//     addSpacesToNum = (element) => {
//         element = element.toString().split('')
//         for (let i = 3; i <= element.length; i += 4) {
//             element.reverse().splice(i, 0, ' ');
//             element = element.reverse()
//         }
//         return element.join('')
//     }

//     changeTariff = (i) => {
//         console.log(this.totalPrice)
//         i === 0 ? this.primaryPrice = 1600 : this.primaryPrice = 1800;
//         this.discountPrice = this.primaryPrice;
//         console.log(this.discountPrice)
//         this.countPrimaryPrice(2)
//         this.showTotalPrice()
//     }

//     showTotalPrice = () => {
//         const totalSum = this.totalPrice;
//         this.totalPriceEl.textContent = this.addSpacesToNum(totalSum)
//     }

//     strToNumbaer = (element) => +element.textContent.replace(/\s+/g, '')
// }


// document.addEventListener('DOMContentLoaded', () => {

//     // Coffee Slider
//     const switchRadio = [...document.querySelectorAll(".switch-radio__input")];
//     const switchLabel = [...document.querySelectorAll(".switch-radio__label")];
//     const togglersTariff = [...document.querySelectorAll(".togglers-tariff__btn")];
//     const totalPrice = document.querySelector(".total-price__amount");
//     console.log(switchRadio)
//     if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
//         const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
//         countTarif.getindicators();
//         countTarif.initSwitchTariffBtns();
//         countTarif.initTogglers();
//         countTarif.setDiscounts();
//     }
// })



class Filter {

    constructor(productWrapper, product, productPrice, productTitle, filterMinMaxAmount, filterRailWrapper, filterRailShifts, filterTransformVAr, filterRailLine, filterCheckboxLabel, filterCheckboxAmount, filterSearcher) {

        this.productWrapper = productWrapper;
        this.product = product;
        this.productPrice = productPrice;
        this.productTitle = productTitle;
        this.filterMinMaxAmount = filterMinMaxAmount;
        this.filterRailWrapper = filterRailWrapper;
        this.filterRailShifts = filterRailShifts;
        this.filterTransformVAr = filterTransformVAr;
        this.filterRailLine = filterRailLine;
        this.filterCheckboxLabel = filterCheckboxLabel;
        this.filterCheckboxAmount = filterCheckboxAmount;
        this.filterSearcher = filterSearcher;
        this.currentIndex = 0;
        this.startPos = 0;
        this.translateStepX = 0;
        this.currentTranslationX = 0;
        this.currentTranslationMove;
        this.margin = 0;
        this.wrapperRight = this.getElementRight(this.filterRailWrapper);
        this.ElementRight = this.getElementRight(this.filterRailShifts[this.filterRailShifts.length - 1]);
        this.min = 0;
        this.max = 0;
        this.elemntsMargins = 0;
        this.prevTranslation = 0;
        this.animationID = 0;
        this.oserver = null;
    }




    getMinMax = () => {
        let prices = []
        this.productPrice.map(item => /* console.log(typeof (+item.textContent)), */ prices.push(+item.textContent));
        prices = prices.sort((a, b) => a - b);
        console.log(prices)
        this.min = prices[0]
        this.minOneMore = prices[1]
        this.max = prices[prices.length - 1]
        this.maxOneLess = prices[prices.length - 2]
        console.log(prices, this.min, this.minOneMore, this.max)
    }

    displayMinMax = (min, max) => {
        console.log(this.min, max)
        min.value = this.min;
        max.value = this.max;
        /*  this.displayMinMax(this.filterMinMaxAmount[0].value) */
    }

    changePriceInput = () => {
        this.filterMinMaxAmount[0].addEventListener('keyup', (e) => {
            this.filterProducts()
        })
    }


    filterProducts = () => {
        console.log(+this.productPrice[4].textContent);
        this.product = this.product.filter((item, i) => +this.productPrice[i].textContent > this.min && +this.productPrice[i].textContent < this.max);
        console.log(this.product);
        this.showFilteredProducts()
    }

    showFilteredProducts = () => {
        let result = `${this.product}`;
        console.log(this.product.outerHTML)
        console.log(result)
        this.product.map(item => {
            console.log(item)
            result += `
               <div class="content-products__item product">
                                <div class="product__header">
                                    <img src="./assets/img/COMBO/image-1.png" alt="" srcset="">
                                </div>
                                <div class="product__body">
                                    <div class="product__body-wrapper">
                                        <h3 class="product__title">${item}</h3>
                                        <b class="product__price">344</b>
                                        <div class="product__call-to-action"></div>
                                    </div>
                                </div>
                            </div>`
        })
    }

    /*                                                ТАЧ СОБЫТИЕ                                             */

    initRailsShifts = () => {
        console.log(this.filterRailShifts)
        this.filterRailShifts.map(item => this.initDrag(item))

    }



    initDrag = (element) => {
        console.log(element)
        element.addEventListener('dragstart', (e) => e.preventDefault())

        //touch event
        element.addEventListener('touchstart', this.touchStart(element), { passive: true })
        element.addEventListener('touchend', () => { this.touchEnd(element) })
        element.addEventListener('touchmove', this.touchMove(element), { passive: true })


        //mouse event
        element.addEventListener('mousedown', this.touchStart(element), { passive: true })
        element.addEventListener('mouseup', () => { this.touchEnd(element) })
        element.addEventListener('mousemove', this.touchMove(element), { passive: true })
        element.addEventListener('mouseleave', () => this.isDragging && this.touchEnd(element))


    }

    getElementRight = (element) => window.innerWidth - (element.getBoundingClientRect().left + element.clientWidth)



    contextMenu = () => {
        window.oncontextmenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false
        }
    }


    animation = (element) => {
        /*       console.log(element) */
        // анимация если драг активен
        this.setSliderPositionX(element, this.currentTranslationX);
        if (this.isDragging) requestAnimationFrame(this.animation.bind(this, element))
    }


    touchStart = (element) => {

        // Начало тач события 
        return (event) => {
            /*     console.log(this.animationID)
                console.log(element) */
            this.startPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
            this.isDragging = true;                                  // инициализируем перетаскивание
            this.animationID = requestAnimationFrame(this.animation.bind(this, element)) // запускаем анимацию
        }
    }


    touchMove = (element) => {
        /*    console.log(element) */
        // тач событие
        return (e) => {

            if (this.isDragging) { // если драг активен
                /*    console.log(element) */
                let currentPosition = this.getPositionX(e); // узнаем  позицию мыши
                /* console.log(this.startPos, currentPosition) */
                // останавливаем транслэйт при выходе из контейнера 
                /* console.log(currentPosition) */
                /*   console.log(((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed());
                console.log((Math.abs(this.currentTranslationX) + 100).toFixed()); */
                /* console.log(this.filterRailWrapper) */
                /* console.log(this.wrapperRight, lastElementRight) */
                /* this.filterRailWrapper */
                console.log(this.currentTranslationX, this.ElementRight, this.filterRailWrapper, this.filterRailShifts)
                if ((this.ElementRight < this.wrapperRight || this.startPos < currentPosition) && (this.currentTranslationX < 0 || this.startPos > currentPosition)) {
                    console.log('ok')
                    this.ElementRight = this.getElementRight(element);
                    this.currentTranslationX = currentPosition - this.startPos + this.prevTranslation
                }
                /* console.log(this.ElementRight < this.wrapperRight, this.startPos < currentPosition)
                console.log(this.currentTranslationX > 0, this.startPos > currentPosition)
 */
                if (!(this.ElementRight < this.wrapperRight || this.startPos < currentPosition) && (this.currentTranslationX < 0 || this.startPos > currentPosition)) {
                    // console.log(element.clientWidth - this.filterRailWrapper.clientWidth, this.prevTranslation)
                    this.ElementRight = this.wrapperRight;
                    this.currentTranslationX = this.filterRailWrapper.clientWidth - element.clientWidth

                }
                /*  console.log(this.currentTranslationX) */

                if ((this.ElementRight < this.wrapperRight || this.startPos < currentPosition) && !(this.currentTranslationX < 0 || this.startPos > currentPosition)) {
                    // console.log(element.clientWidth - this.filterRailWrapper.clientWidth, this.prevTranslation)
                    this.ElementRight = this.filterRailWrapper.clientWidth - element.clientWidth;
                    this.currentTranslationX = 0

                }


                /*     if (this.currentTranslationX > 0 || this.startPos > currentPosition) {
                        this.ElementRight = this.getElementRight(element);
                        this.currentTranslationX = currentPosition - this.startPos + this.prevTranslation
                    } else {
                        this.currentTranslationX = 0
                    } */

                /* this.absToPercent(((this.prevTranslation * this.main.clientWidth / 100) + currentPosition - this.startPos), this.main.clientWidth); */
                /* if ((Math.abs(this.currentTranslationX) + 100).toFixed() <= ((this.translateStepX * this.content.length) + this.elemntsMargins).toFixed() && this.currentTranslationX < 2) {
                } */
            }
        }
    }


    touchEnd = (element) => {
        // Остановка тач события
        console.log(this.animationID)
        cancelAnimationFrame(this.animationID)                          // отмена анимацию
        this.isDragging = false;                                        // отсановка перетаскивания
        console.log(this.isDragging)
        this.prevTranslation = this.currentTranslationX;
        /* this.prevPosition = this.getPositionX(e) */
        // Изменям индекс в зависимости от текущей трансформации
        // if (this.currentIndex < this.content.length) {
        //     Math.abs(this.currentTranslationX) > ((Math.abs(this.prevTranslation) + this.translateStepX / 3)) && (this.currentIndex++);
        // }
        // if (this.currentIndex >= 0) {
        //     Math.abs(this.currentTranslationX) < ((Math.abs(this.prevTranslation) - this.translateStepX / 3)) && (this.currentIndex--);
        // }

        console.log(this.currentTranslationX)
        /* this.setPrevTranslation();     */                                  // Устанавливаем предыдущий транслэйте
        /* this.setCurrentXTranslation(); */                                  // Устанавливаем текущий транслэйте
        /* this.changeArrowActivity();    */                                  // Изменяем активность кнопопк
        this.setSliderPositionX(element, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
        /* this.getUnactiveElts();  */                                        // меняем опасити элементов 
    }




    /*                                                СОБЫТИЕ НА КЛИК СТРЕЛОК                                             */

    initArrowsBtns = () => {
        this.arrow[0].addEventListener("click", () => this.left()); // левая стрелка

        this.arrow[1].addEventListener("click", () => this.rigth()); // праввая стрелка
    }

    rigth = () => {
        if (this.currentIndex < this.getMainToContentIndex()) {
            this.currentIndex++;
            this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
            this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
            this.changeArrowActivity();           // Изменяем активность кнопопк
            this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();               // меняем опасити элементов 
        }

    }


    left = () => {
        if (Math.abs(this.currentTranslationX) > 0) {
            this.currentIndex--
            this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
            this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
            this.changeArrowActivity();           // Изменяем активность кнопопк
            this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();               // меняем опасити элементов 
        }
    }




    /*                                                СОБЫТИЕ НА КЛИК КНОПОК                                         */

    initToggleBtns = () => {
        this.toggleBtn.map((item, i) => item.addEventListener("click", () => {
            !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
            this.currentIndex = i;
            this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
            this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
            this.setSlideNumber(this.slideNumber)
            if (this.column()) {
                this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
            } else {
                this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
            }
        }))
    }




    column = () => this.toggleBtn[0].parentElement.clientHeight > this.toggleBtn[0].parentElement.clientWidth



    /*                                                ОБЩИЕ МЕТОДЫ                                         */


    /*                                                СМЕНА АКТИВНОСТИ СТРЕЛОК                                        */

    changeArrowActivity = () => {

        // меняем активность стрелок

        console.log(this)
        // Левая стрелка
        if (Math.abs(this.currentTranslationX) > 0) {
            this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.remove('carousel__toggle-btn--unactive')
        } else {
            !this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.add('carousel__toggle-btn--unactive');
        }


        // Правая стрелка
        if (this.currentIndex === this.getMainToContentIndex()) {
            this.arrow[1].classList.add('carousel__toggle-btn--unactive');
        } else {
            this.arrow[1].classList.remove('carousel__toggle-btn--unactive');
        }
    }




    /*                                                МЕНЯЕМ ПРОЗРАЧНОСТЬ ВЫПАДАЮЩИХ ЭЛЕМЕНТОВ                                      */

    getUnactiveElts = () => this.content.map((item, i) => {
        // меняем опасити элементов 
        const translationtoAbs = this.percentToAbsolute(Math.abs(this.currentTranslationX), this.main.clientWidth).toFixed();
        if (this.main.clientWidth <= ((item.offsetLeft + this.margin + i) - translationtoAbs) || item.offsetLeft + i - translationtoAbs < 0) {
            item.classList.add('carousel__item--unActive')
        } else {
            (item.classList.contains('carousel__item--unActive') && item.classList.remove('carousel__item--unActive'))
        }

    })




    /*                                                resizeObserver API                                     */


    slideRzeObrCallback = (entries) => {

        // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
        this.getTranslateStepX(); // Узнаем шаг для X транслэйта

        // Уменьшаем индекс при переполнении
        if (this.currentIndex > this.getMainToContentIndex()) {
            const decresseIndex = this.currentIndex - this.getMainToContentIndex();
            this.currentIndex -= decresseIndex;
        }
        console.log(this.currentIndex)
        this.setPrevTranslation();           // Устанавливаем предыдущий транслэйт
        this.getMainToContentIndex()         // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере
        this.setCurrentXTranslation();       // Устанавливаем текущий транслэйт
        this.changeArrowActivity();          // Изменяем активность кнопопок
        this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
        this.getUnactiveElts();              // меняем опасити элементов 

    }

    slideResizeObserver = () => {

        // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
        this.resizerSlide = new ResizeObserver(this.slideRzeObrCallback);
        this.resizerSlide.observe(this.slideResizeOberverObj)
    }

    toggleContainerRzeObrCallback = () => {
        this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
        if (this.column()) {
            this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
        } else {
            this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
        }

    }




    toggleContainerResizeObserver = () => {
        this.resizerToggler = new ResizeObserver(this.toggleContainerRzeObrCallback);
        console.log(this.toggleResizeOberverObj)
        this.resizerToggler.observe(this.toggleResizeOberverObj)
    }



    /*                                               ТЕХНИЧЕСКИЕ МЕТОДЫ                                  */

    toggleClasses = (element, classList) => element.classList.toggle(classList)




    /*                                               СМЕНА КЛАССОВ                                 */




    getMainToContentIndex = () => this.content.length - ((this.absToPercent(this.main.clientWidth, this.getTotalElementsWidth()).toFixed() / 100) * this.content.length).toFixed()  // индекс отношения контэйнера слайдера к его контентой части


    setSliderPositionX = (element, translation) => {
        console.log(element, translation)
        element.style.setProperty(this.filterTransformVAr, `${translation}px`)
    }// Устанавливаем транслэйт для элемента по x координате

    setSliderPositionY = (element, translation) => element.style.transform = `translateY(${translation}%)` // Устанавливаем транслэйт для элемента по y координате


    getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; // Позиция мыши/пальца


    // Переводы чисел

    absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты

    percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение


    setSlideNumber = (elem) => elem.textContent = this.currentIndex + 1  // Устанавливаем номер слайда


    setPrevTranslation = () => this.prevTranslation = this.currentIndex * - this.absToPercent(this.content[0].clientWidth + this.margin, this.main.clientWidth);// Устанавливаем предыдущий трансл


    setCurrentXTranslation = () => this.currentTranslationX = (this.currentIndex) * -this.translateStepX; //Меняем текущий X транслэйт

    setCurrentFullBodyTranslation = (translate) => (this.currentIndex) * translate; //Меняем текущий Y транслэйт


    getMargin = () => {
        // Узнаем отутупы для правельного транслэйта
        this.margin = +getComputedStyle(this.content[0]).marginLeft.split('px').join('');
        this.elemntsMargins = this.absToPercent((this.margin * this.content.length), this.getTotalElementsWidth()) - this.stopperFactor;

    }

    getTranslateStepX = () => this.translateStepX = (this.content[0].clientWidth + this.margin) / this.main.clientWidth * 100  // Узнаем шаг для X транслэйта



    getTotalElementsWidth = () => (this.content[0].clientWidth + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

}



document.addEventListener('DOMContentLoaded', () => {



    // price filter

    const filterRailWrapper = document.querySelector(".filter");
    if (filterRailWrapper) {
        console.log('ok')
        const filterRailShifts = [...document.querySelectorAll(".filter__body")];
        const filterRailLine = document.querySelector(".filter-rail__line");
        const filterTransformVAr = '--body-transform';
        const productFilter = new Filter(null, null, null, null, null, filterRailWrapper, filterRailShifts, filterTransformVAr, filterRailLine, null, null, null);

        productFilter.initRailsShifts();
    }
})

class LazyLoading {

    constructor(dataLazy, activeClass) {
        this.dataLazy = dataLazy;
        this.activeClass = activeClass;
        this.initEvents()
    }

    initEvents = () => {
        this.scrollObserver()
    }
    scrollObserverCallback = (entries, observer) => entries.map(entry => entry.isIntersecting && this.loadContent(entry.target));

    loadContent = (entry) => {
        console.log(entry.dataset)
        entry.dataset.src && this.loadImg(entry, entry.dataset.src)
        entry.dataset.backgroungImg && this.loadBackground(entry, entry.dataset.backgroungImg)
        /*     if (entry) */
    }

    loadBackground = (element, backgroungUrl) => {
        element.style.backgroundImage = `url(${backgroungUrl})`
        this.addClass(element, this.activeClass)
        this.observer.unobserve(element)
    }
    loadImg = (element, src) => {
        element.src = src;
        this.observer.unobserve(element)
    }

    addClass = (element, clas) => element.classList.add(this.activeClass);




    scrollObserver = () => {

        const options = {
            root: document.body,
            threshold: 0,
            rootMargin: '0px 0px 500px 0px'
        }

        this.observer = new IntersectionObserver(this.scrollObserverCallback, options);
        this.dataLazy.map(data => {

            this.observer.observe(data)
        })

    }


}


document.addEventListener('DOMContentLoaded', () => {

    // faq
    const dataLazy = [...document.querySelectorAll(".data-lazy")];
    const activeClass = 'section--active'

    new LazyLoading(dataLazy, activeClass);

})



class Modal {

    constructor(body, popup, popupModal, popupModalWrapper, wrapperMargin, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm) {
        this.body = body;
        this.popup = popup;
        this.popupModal = popupModal;
        this.popupModalWrapper = popupModalWrapper;
        this.wrapperMargin = wrapperMargin;
        this.btnPopup = btnPopup;
        this.closeBtn = closeBtn;
        this.formInputs = formInputs;
        this.popupModalActive = popupModalActive;
        this.popupHidden = popupHidden;
        this.bodyNoScroll = bodyNoScroll;
        this.staticForm = staticForm;
/*         this.textBtn = textBtn;
 */        this.initEvents()
    }

    initEvents = () => {
        console.log(this.btnPopup)
        this.initArrayBtnPopup();
        this.initCloseBtn();
    }


    initCloseBtn = () => {
        this.popup.addEventListener('click', (e) => {
            console.log(e.target.dataset)

            if (e.target.classList.contains('popup__modal--active') || e.target.classList.contains('popup__modal-close') || e.target.dataset.modal === 'close') {
                e.stopPropagation()
                console.log(e.target.classList)

                this.popupModal.map((popupModal, i) => {
                    if (popupModal.classList.contains(this.popupModalActive)) {
                        this.removeClass(this.body, this.bodyNoScroll);
                        this.removeNoScrollStyles(this.body);
                        /*  !popupModal.classList.contains(this.staticForm) && this.removeNoScrollStyles(popupModal); */
                        !popupModal.classList.contains(this.staticForm) && this.removeClass(popupModal, this.popupModalActive);
                        this.addClass(this.popup, this.popupHidden)
                    }
                })

            }
        })
    }

    initArrayBtnPopup = () => {
        this.btnPopup.map((btnPopup, i) => {
            console.log(btnPopup, btnPopup.type)
            if (btnPopup.type === 'submit') {
                /* console.log(this.btnPopup[i], this.popupModal[i]) */
                this.popupModal.map((popupModal, i) => {
                    popupModal.dataset.modal === 'form' && this.submitForm(popupModal)
                })
            } else {
                btnPopup.addEventListener('click', () => {
                    this.popupModal.map((popupModal, i) => {
                        console.log(popupModal.dataset.modal, btnPopup.dataset.modal)
                        if (btnPopup.dataset.modal === popupModal.dataset.modal) {
                            popupModal.dataset.modal === 'form' && this.submitForm(popupModal)
                            /* this.addNoScrollStyles(popupModal) */
                            window.innerWidth - this.body.offsetWidth > 0 && this.addMarginToBlock(this.popupModalWrapper[i])
                            !this.body.classList.contains(this.bodyNoScroll) && (this.addNoScrollStyles(this.body), this.addClass(this.body, this.bodyNoScroll))
                            this.addClass(popupModal, this.popupModalActive);
                            this.popup.classList.contains(this.popupHidden) && this.removeClass(this.popup, this.popupHidden)

                        }
                    })
                    /*      this.changeTextVisibility(this.text[i], item);
                         this.textBtn && this.changeBtnText(item) */
                })
            }
        }
        )
    }

    addNoScrollStyles = (element) => {
        console.log('pk')
        element.style.paddingRight = window.innerWidth - this.body.offsetWidth + /* 12 +  */'px';
        element.style.width = '100vw'; // ? 
    }

    addMarginToBlock = (element) => {
        this.addClass(element, this.wrapperMargin)
    }

    removeNoScrollStyles = (element) => {
        element.style.paddingRight = 0 + 'px';
        element.style.width = '100%';
    }

    addClass = (element, clas) => {
        element.classList.add(clas)
    }


    removeClass = (element, clas) => {
        element.classList.remove(clas)
    }

    submitForm = (popupModalForm) => {
        console.log(popupModalForm)
        popupModalForm.addEventListener('submit', (e) => {
            console.log('ok')
            e.preventDefault()
            !popupModalForm.classList.contains(this.staticForm) && this.removeClass(popupModalForm, this.popupModalActive)
            this.popup.classList.contains(this.popupHidden) && this.removeClass(this.popup, this.popupHidden)
            this.clearFields(this.formInputs)
            this.popupModal.map((popupModal, i) => {
                if (popupModal.dataset.modal === 'success') {
                    console.log(this.staticForm)
                    this.addClass(popupModal, this.popupModalActive);
                }
                console.log(e.target, popupModal)
            })
        })
    }

    clearFields = (fields) => {
        console.log(fields)
        fields.map((field, i) => field.value = '')
    }

}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const popupMain = document.getElementById("popup-main");
    if (popupMain !== null) {
        let body = document.querySelector(".body");
        let popup = document.querySelector(".popup");
        let popupModal = [...document.querySelectorAll(".popup__modal")];
        let popupModalWrapper = [...document.querySelectorAll(".popup__modal-wrapper")];
        let btnPopup = [...document.querySelectorAll(".btn__popup")];
        let closeBtn = [...document.querySelectorAll(".popup__modal-close")];
        let formInputs = [...document.querySelectorAll(".contact-form__input")];
        let popupModalActive = 'popup__modal--active';
        let popupHidden = 'popup--hidden';
        let bodyNoScroll = 'body--noscroll';
        let wrapperMargin = 'popup__modal-wrapper--margin'
        console.log(closeBtn)
        new Modal(body, popup, popupModal, popupModalWrapper, wrapperMargin, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll);
    }


    const popupContact = document.getElementById("popup-contact");
    if (popupContact !== null) {
        let body = document.querySelector(".body");
        let popup = document.querySelector(".popup");
        let popupModal = [...document.querySelectorAll(".popup__modal")];
        let popupModalWrapper = [...document.querySelectorAll(".popup__modal-wrapper")];
        let btnPopup = [...document.querySelectorAll(".btn__popup")];
        let closeBtn = [...document.querySelectorAll(".popup__modal-close")];
        let formInputs = [...document.querySelectorAll(".contact-form__input")];
        let popupModalActive = 'popup__modal--active';
        let popupHidden = 'popup--hidden';
        let bodyNoScroll = 'body--noscroll';
        let staticForm = 'contact__form';
        let wrapperMargin = 'popup__modal-wrapper--margin'
        new Modal(body, popup, popupModal, popupModalWrapper, wrapperMargin, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm);
    }
    // const citiesList = document.querySelector(".cities__list-hidden");
    // const citiesBtn = document.querySelector(".cities__link");
    // const citiesBtnActive = 'cities__link--hide';
    // const textToggleBtn = ['Все города', 'Свернуть']
    // console.log(citiesList)
    // citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);


})

// // import init from './lib.js';


// var rippleTypeAttr = 'data-event';

// /**
//  * @param {!Event|!Touch} event
//  * @return {Node}
//  */
// function getHolderWithRippleJsClass(event) {
//   var holder = /** @type {!Node} */ (event.target);
//   var childNodesLength = holder.childNodes.length;

//   if (holder.localName !== 'button' || !childNodesLength) {
//     return holder.classList.contains('rippleJS') ? holder : null;
//   }

//   // fix firefox event target issue https://bugzilla.mozilla.org/show_bug.cgi?id=1089326
//   for (var i = 0; i < childNodesLength; ++i) {
//     var child = holder.childNodes[i];
//     var cl = child.classList;
//     if (cl && cl.contains('rippleJS')) {
//       return child;  // return valid holder
//     }
//   }

//   return null;
// }

// /**
//  * @param {string} type
//  * @param {!Event|!Touch} at
//  */
// function startRipple(type, at) {
//   var holder = getHolderWithRippleJsClass(at);
//   if (!holder) {
//     return false;  // ignore
//   }
//   var cl = holder.classList;

//   // Store the event use to generate this ripple on the holder: don't allow
//   // further events of different types until we're done. Prevents double-
//   // ripples from mousedown/touchstart.
//   var prev = holder.getAttribute(rippleTypeAttr);
//   if (prev && prev !== type) {
//     return false;
//   }
//   holder.setAttribute(rippleTypeAttr, type);

//   // Create and position the ripple.
//   var rect = holder.getBoundingClientRect();
//   var x = at.offsetX;
//   var y;
//   if (x !== undefined) {
//     y = at.offsetY;
//   } else {
//     x = at.clientX - rect.left;
//     y = at.clientY - rect.top;
//   }
//   var ripple = document.createElement('div');
//   var max;
//   if (rect.width === rect.height) {
//     max = rect.width * 1.412;
//   } else {
//     max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
//   }
//   var dim = max * 2 + 'px';
//   ripple.style.width = dim;
//   ripple.style.height = dim;
//   ripple.style.marginLeft = -max + x + 'px';
//   ripple.style.marginTop = -max + y + 'px';

//   // Activate/add the element.
//   ripple.className = 'ripple';
//   holder.appendChild(ripple);
//   window.setTimeout(function () {
//     ripple.classList.add('held');
//   }, 0);

//   var releaseEvent = (type === 'mousedown' ? 'mouseup' : 'touchend');
//   var release = function (ev) {
//     // TODO: We don't check for _our_ touch here. Releasing one finger
//     // releases all ripples.
//     document.removeEventListener(releaseEvent, release);
//     ripple.classList.add('done');

//     // larger than animation: duration in css
//     window.setTimeout(function () {
//       holder.removeChild(ripple);
//       if (!holder.children.length) {
//         cl.remove('active');
//         holder.removeAttribute(rippleTypeAttr);
//       }
//     }, 650);
//   };
//   document.addEventListener(releaseEvent, release);
// }

// /**
//  * Installs mousedown/touchstart handlers on the target for ripples.
//  *
//  * @param {!Node=} target to install on, default document 
//  */
// function init(target) {
//   target = target || document;
//   target.addEventListener('mousedown', function (ev) {
//     if (ev.button === 0) {
//       // trigger on left click only
//       startRipple(ev.type, ev);
//     }
//   }, { passive: true });
//   target.addEventListener('touchstart', function (ev) {
//     for (var i = 0; i < ev.changedTouches.length; ++i) {
//       startRipple(ev.type, ev.changedTouches[i]);
//     }
//   }, { passive: true });
// }






// (function () {
//   var css = /** @noinline */ ('/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}');

//   /**
//    * @return {boolean}
//    */
//   function hasCSS() {
//     var test = document.createElement('div');
//     test.className = 'rippleJS';
//     document.body.appendChild(test);
//     var s = window.getComputedStyle(test);
//     var result = (s.position === 'absolute');
//     document.body.removeChild(test);
//     return result;
//   }

//   function setup() {
//     // minified CSS from ripple.css
//     if (!hasCSS()) {
//       var style = document.createElement('style');
//       style.textContent = css;
//       document.head.insertBefore(style, document.head.firstChild);
//     }
//     init();
//   };

//   if (document.readyState === 'complete') {
//     setup();
//   } else {
//     window.addEventListener('load', setup);
//   }
// }());



// (function () {
//   function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
//   function n(c, a) {
//     var b = h(a); if (b) {
//       var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
//         b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function () { f.classList.add("held") },
//           0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function () { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function () { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
//       }
//     }
//   }
//   function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function () {
//     function c() {
//       var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
//         document.head.insertBefore(a, document.head.firstChild)); p()
//     } "complete" === document.readyState ? c() : window.addEventListener("load", c)
//   })();
// }())


// (function () {
//   function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
//   function n(c, a) {
//     var b = h(a); if (b) {
//       var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
//         b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function () { f.classList.add("held") },
//           0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function () { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function () { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
//       }
//     }
//   }
//   function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function () {
//     function c() {
//       var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
//         document.head.insertBefore(a, document.head.firstChild)); p()
//     } "complete" === document.readyState ? c() : window.addEventListener("load", c)
//   })();
// }())



window.addEventListener('load', function () {
  function applyStyle(css) {
    console.log('ok')
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.body.appendChild(style);
  }
  function hasCSS() {
    var test = document.createElement('div');
    test.className = 'rippleJS';
    document.body.appendChild(test);
    var s = window.getComputedStyle(test);
    var result = s.position == 'absolute';
    document.body.removeChild(test);
    console.log(result)
    return result;
  }
  if (!hasCSS()) {
    var css = '/*rippleJS*/.rippleJS{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0;content:""}.rippleJS.fill.active{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.5;transition:all .4s ease-out;width:0;height:0;pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:1}.rippleJS .ripple.done{opacity:0}';
    applyStyle(css);
  }

  function startRipple(type, at) {
    console.log('ok')
    var holder = at.target;
    var cl = holder.classList;
    if (!cl.contains('rippleJS')) {
      return false;  // ignore
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    var prev = holder.getAttribute('data-event');
    if (prev && prev != type) {
      return false;
    }
    holder.setAttribute('data-event', type);

    // Create and position the ripple.
    var rect = holder.getBoundingClientRect();
    var x = at.offsetX;
    var y;
    if (x !== undefined) {
      y = at.offsetY;
    } else {
      x = at.clientX - rect.left;
      y = at.clientY - rect.top;
    }
    var ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    ripple.style.webkitTransform = ripple.style.transform;

    // Activate/add the element, forcing an animation (setTimeout).
    cl.add('active');
    holder.appendChild(ripple);
    window.setTimeout(function () {
      var max;
      if (rect.width == rect.height) {
        max = rect.width * 1.412;
      } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
      }

      var dim = max * 2 + 'px';
      var margin = -max + 'px';
      ripple.style.width = dim;
      ripple.style.height = dim;
      ripple.style.marginLeft = margin;
      ripple.style.marginTop = margin;
      ripple.classList.add('held');
    }, 20);

    var releaseEvent = (type == 'mousedown' ? 'mouseup' : 'touchend');
    var release = function (ev) {
      // TODO: We don't check for _our_ touch here. Releasing one finger
      // releases all ripples.
      document.removeEventListener(releaseEvent, release);
      ripple.classList.add('done');

      // larger than animation: duration in css
      window.setTimeout(function () {
        holder.removeChild(ripple);
        if (!holder.children.length) {
          cl.remove('active');
          holder.removeAttribute('data-event');
        }
      }, 650);
    };
    document.addEventListener(releaseEvent, release);
  }

  document.addEventListener('mousedown', function (ev) {
    if (ev.button == 0) {
      // trigger on left click only
      startRipple(ev.type, ev);
    }
  });
  document.addEventListener('touchstart', function (ev) {
    for (var i = 0; i < ev.changedTouches.length; ++i) {
      startRipple(ev.type, ev.changedTouches[i]);
    }
  });
});
class Scroll {
    constructor(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay) {
        this.page = page,
            this.sections = sections,
            this.menuItems = menuItems,
            this.mobileMenuItems = mobileMenuItems,
            this.index = 0,
            this.sidebar = sidebar,
            this.hamburgerMenu = hamburgerMenu,
            this.sidebarBody = sidebarBody,
            this.sidebarOverlay = sidebarOverlay
    }
    sidebarManipulation = () => {

        console.log('ok')
        window.onresize = () => {
            if (window.innerWidth > 1224 && this.sidebar.classList.contains('page__sidebar--active')) {
                this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.toggle('page_screen_full')
                this.removeSidebar()
            }

        }
        this.sidebarOverlay.onclick = () => this.removeSidebar();
        this.hamburgerMenu.onclick = (e) => this.toggleSidebar();
        this.mobileMenuItems.map(item => item.onclick = () => this.removeSidebar())
    }



    toggleSidebar = () => {
        console.log('ok')
        this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.toggle('page_screen_full')
        this.sidebar.classList.toggle('page__sidebar--active');
        this.page.classList.toggle('page--noScroll');
        this.sidebarBody.classList.toggle('sidebar__body--active');
        this.sidebarOverlay.classList.toggle('overlay--show');
        this.hamburgerMenu.classList.toggle('hamburger-menu__content--active');
        /*      window.scrollTo({
                 top: 0,
                 behavior: "smooth"
             }) */
    }

    removeSidebar = () => {
        this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.remove('page_screen_full')

        this.sidebar.classList.remove('page__sidebar--active');
        this.page.classList.remove('page--noScroll');
        this.sidebarBody.classList.remove('sidebar__body--active');
        this.sidebarOverlay.classList.remove('overlay--show');
        this.hamburgerMenu.classList.remove('hamburger-menu__content--active');
    }

    menuItemsInit = () => {
        this.menuItems.map((menuItem, i) => menuItem.onclick = () => { this.changeItemStyle(i) })
        /*   this.menuItems.map((menuItem, i) => menuItem.onmouseover = () => { this.hoverItemStyleOver(menuItem) })
          this.menuItems.map((menuItem, i) => menuItem.onmouseout = () => { this.hoverItemStyleOut(menuItem) }) */
    }

    changeItemStyle = (i) => {
        console.log('object')
        const activeMenuItem = document.querySelector('.menu__items--active');
        activeMenuItem.classList.remove('menu__items--active');
        this.menuItems[i].classList.add('menu__items--active');
        /* this.menuItems.map((menuItem, z) => i !== z && (console.log(z))) */
    }


}


document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const sections = [...document.querySelectorAll('.section')];
    const menuItems = [...document.querySelectorAll('.menu__items')];
    const mobileMenuItems = [...document.querySelectorAll('.mobile-menu__item')];
    const sidebar = document.querySelector('.page__sidebar');
    const sidebarBody = document.querySelector('.sidebar__content');
    const sidebarOverlay = document.querySelector('.overlay');
    const hamburgerMenu = document.querySelector('.hamburger-menu__content');
    const scroll = new Scroll(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay);

    scroll.menuItemsInit();
    scroll.sidebarManipulation()

})

class Slider {

    constructor(content, main, wrapper, sliderBreakpoint, arrow, circeTogglers, circleActiveClass, slideResizeOberverObj, toggleBtn, toggleMoveGif, stopperFactor, slideNumber, toggleResizeOberverObj) {

        this.content = content,
            this.main = main,
            this.wrapper = wrapper,
            this.sliderBreakpoint = sliderBreakpoint,
            this.arrow = arrow,
            this.circeTogglers = circeTogglers,
            this.circleActiveClass = circleActiveClass,
            this.slideResizeOberverObj = slideResizeOberverObj,
            this.toggleResizeOberverObj = toggleResizeOberverObj,
            this.toggleBtn = toggleBtn,
            this.toggleMoveGif = toggleMoveGif,
            this.slideNumber = slideNumber,
            this.isDragging = false,
            this.currentIndex = 0,
            this.startPos = 0,
            this.translateStepX = 0,
            this.currentTranslationX = 0,
            this.currentTranslationMove,
            this.margin = 0,
            this.sliderLimit = 0,
            this.elemntsMargins = 0,
            this.prevTranslation = 0,
            this.animationID = 0,
            this.stopperFactor = stopperFactor,
            this.oserver = null;
    }




    /*                                                ТАЧ СОБЫТИЕ                                             */

    initDrag = () => {
        this.content.map((dragableItem, i) => {
            /* if (innerWidth < this.sliderBreakpoint) { */
            dragableItem.addEventListener('dragstart', (e) => e.preventDefault())
            //touch event
            dragableItem.addEventListener('touchstart', this.touchStart(i), { passive: true })
            dragableItem.addEventListener('touchend', (e) => this.touchEnd(e))
            dragableItem.addEventListener('touchmove', this.touchMove, { passive: true })


            //mouse event
            dragableItem.addEventListener('mousedown', this.touchStart(i), { passive: true })
            dragableItem.addEventListener('mouseup', (e) => this.touchEnd(e))
            dragableItem.addEventListener('mousemove', this.touchMove, { passive: true })
            dragableItem.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))
            /* } */

        })
    }


    contextMenu = () => {
        window.oncontextmenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false
        }
    }


    animation = () => {
        // анимация если драг активен
        console.log('ok')
        this.setSliderPositionX(this.main, this.currentTranslationX);
        if (this.isDragging) requestAnimationFrame(this.animation)
    }


    touchStart = (i) => {

        // Начало тач события 
        return (event) => {
            console.log(this.sliderBreakpoint, innerWidth)
            if (this.sliderBreakpoint > innerWidth) {
                console.log('ok')
                this.main.classList.remove('slider--smooth'); // удаляем плавность при движении, чтобы не было задержек
                this.startPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
                this.isDragging = true;                                  // инициализируем перетаскивание
                this.animationID = requestAnimationFrame(this.animation) // запускаем анимацию
            }

        }
    }


    touchMove = (e) => {

        // тач событие

        if (this.isDragging && this.sliderBreakpoint > innerWidth) { // если драг активен

            let currentPosition = this.getPositionX(e); // узнаем  позицию мыши

            const wrapperRight = window.innerWidth - (this.wrapper.getBoundingClientRect().left + this.wrapper.clientWidth);
            const lastElementRight = window.innerWidth - (this.content[this.content.length - 1].getBoundingClientRect().left + this.content[this.content.length - 1].clientWidth);

            if ((lastElementRight <= this.sliderLimit && +Math.abs(this.currentTranslationX).toFixed() <= ((this.translateStepX * (this.content.length - 1)) + this.elemntsMargins).toFixed() && this.currentTranslationX < 2) || (this.currentTranslationX >= this.prevTranslation && this.currentTranslationX < 2)) {
                this.currentTranslationX = this.absToPercent(((this.prevTranslation * this.main.clientWidth / 100) + currentPosition - this.startPos), this.main.clientWidth);
            }
        }
    }


    touchEnd = (e) => {
        // Остановка тач события
        if (this.sliderBreakpoint > innerWidth) {
            this.main.classList.add('slider--smooth');           // возвращаем плавность для событий на клик стрелки
            cancelAnimationFrame(this.animationID)                          // отмена анимацию
            this.isDragging = false;                                        // отсановка перетаскивания


            // Изменям индекс в зависимости от текущей трансформации
            if (this.currentIndex < this.content.length - 1) {
                Math.abs(this.currentTranslationX) > ((Math.abs(this.prevTranslation) + this.translateStepX / 3.5)) && (this.currentIndex++);
            }
            if (this.currentIndex >= 0) {
                Math.abs(this.currentTranslationX) < ((Math.abs(this.prevTranslation) - this.translateStepX / 3.5)) && (this.currentIndex--);
            }


            this.setPrevTranslation();                                      // Устанавливаем предыдущий транслэйте
            this.setCurrentXTranslation();                                  // Устанавливаем текущий транслэйте
            this.changeArrowActivity();                                     // Изменяем активность кнопопк
            this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();                                        // меняем опасити элементов 

            if (this.circeTogglers) {
                this.setCircleActivity(this.circeTogglers[this.currentIndex])
            }


            setTimeout(() => {
                const wrapperRight = window.innerWidth - (this.wrapper.getBoundingClientRect().left + this.wrapper.clientWidth);
                console.log(wrapperRight)
                const lastElementRight = window.innerWidth - (this.content[this.content.length - 1].getBoundingClientRect().left + this.content[this.content.length - 1].clientWidth);
                console.log(lastElementRight)
                lastElementRight > 0 ? this.sliderLimit = wrapperRight + lastElementRight : this.sliderLimit = 0
                console.log(this.sliderLimit)
            }, 500)
        }
    }




    /*                                                СОБЫТИЕ НА КЛИК СТРЕЛОК                                             */

    initArrowsBtns = () => {
        this.arrow[0].addEventListener("click", () => this.left()); // левая стрелка

        this.arrow[1].addEventListener("click", () => this.rigth()); // праввая стрелка
    }

    rigth = () => {
        if (this.currentIndex < this.getMainToContentIndex()) {
            this.currentIndex++;
            this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
            this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
            this.changeArrowActivity();           // Изменяем активность кнопопк
            this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();               // меняем опасити элементов 
        }

    }


    left = () => {
        if (Math.abs(this.currentTranslationX) > 0) {
            this.currentIndex--
            this.setPrevTranslation();            // Устанавливаем предыдущий транслэйт
            this.setCurrentXTranslation();        // Устанавливаем текущий транслэйт
            this.changeArrowActivity();           // Изменяем активность кнопопк
            this.setSliderPositionX(this.main, this.currentTranslationX);   // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();               // меняем опасити элементов 
        }
    }




    /*                                                СОБЫТИЕ НА КЛИК КНОПОК                                         */

    initToggleBtns = () => {
        this.toggleBtn.map((item, i) => item.addEventListener("click", () => {
            !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
            this.currentIndex = i;
            this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
            this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
            this.setSlideNumber(this.slideNumber)
            if (this.direction() === 'column') {
                this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
            } else {
                this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
            }
        }))
    }




    direction = () => window.getComputedStyle(this.toggleBtn[0].parentElement).flexDirection;


    /*                                                СОБЫТИЕ НА КЛИК КРУЖКОВ                                         */


    initCirceTogglers = () => {
        this.circeTogglers.map((item, i) => item.addEventListener("click", () => {
            /*  !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth') */

            this.setCircleActivity(item)

            this.currentIndex = i;
            this.setPrevTranslation();
            this.setCurrentXTranslation();                                  // Меняем текущий транслэйт слайдер 
            this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
        }))
    }



    getActiveElement = (activeClass) => document.querySelector(`.${activeClass}`)

    setCircleActivity = (item) => {
        this.toggleClasses(this.getActiveElement(this.circleActiveClass), this.circleActiveClass)
        this.toggleClasses(item, this.circleActiveClass)
    }

    /*                                                ОБЩИЕ МЕТОДЫ                                         */


    /*                                                СМЕНА АКТИВНОСТИ СТРЕЛОК                                        */

    changeArrowActivity = () => {

        // меняем активность стрелок


        if (this.arrow) {
            // Левая стрелка
            if (Math.abs(this.currentTranslationX) > 0) {
                this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.remove('carousel__toggle-btn--unactive')
            } else {
                !this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && this.arrow[0].classList.add('carousel__toggle-btn--unactive');
            }


            // Правая стрелка
            if (this.currentIndex === this.getMainToContentIndex()) {
                this.arrow[1].classList.add('carousel__toggle-btn--unactive');
            } else {
                this.arrow[1].classList.remove('carousel__toggle-btn--unactive');
            }
        }
    }




    /*                                                МЕНЯЕМ ПРОЗРАЧНОСТЬ ВЫПАДАЮЩИХ ЭЛЕМЕНТОВ                                      */

    getUnactiveElts = () => this.content.map((item, i) => {
        // меняем опасити элементов 
        const translationtoAbs = this.percentToAbsolute(Math.abs(this.currentTranslationX), this.main.clientWidth).toFixed();
        if (this.main.clientWidth <= ((item.offsetLeft + this.margin + i) - translationtoAbs) || item.offsetLeft + i - translationtoAbs < 0) {
            item.classList.add('carousel__item--unActive')
        } else {
            (item.classList.contains('carousel__item--unActive') && item.classList.remove('carousel__item--unActive'))
        }

    })




    /*                                                resizeObserver API                                     */


    slideRzeObrCallback = (entries) => {
        setTimeout(() => {


            // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
            this.getTranslateStepX(); // Узнаем шаг для X транслэйта
            this.getMargin();

            // Уменьшаем индекс при переполнении
            if (this.currentIndex > this.getMainToContentIndex()) {
                const decresseIndex = this.currentIndex - this.getMainToContentIndex();
                this.currentIndex -= decresseIndex;
            }

            if (this.sliderBreakpoint < innerWidth) {
                this.currentIndex = 0;
            }

            if (this.circeTogglers) {
                this.setCircleActivity(this.circeTogglers[this.currentIndex])
            }
            /*     console.log(this.getMainToContentIndex())
            console.log(this.currentIndex) */
            this.setPrevTranslation();           // Устанавливаем предыдущий транслэйт
            this.getMainToContentIndex()         // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере
            this.setCurrentXTranslation();       // Устанавливаем текущий транслэйт
            this.changeArrowActivity();          // Изменяем активность кнопопок
            this.setSliderPositionX(this.main, this.currentTranslationX);  // Устанавливаем транслэйт для слайдера
            this.getUnactiveElts();              // меняем опасити элементов 

        }, 500)
    }

    slideResizeObserver = () => {

        // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
        this.resizerSlide = new ResizeObserver(this.slideRzeObrCallback);
        this.resizerSlide.observe(this.slideResizeOberverObj)
    }

    toggleContainerRzeObrCallback = () => {
        this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && this.toggleClasses(this.toggleMoveGif, 'togglers__item-move--smooth')
        if (this.direction() === 'column') {
            this.setSliderPositionY(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))   // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента
        } else {
            this.setSliderPositionX(this.toggleMoveGif, this.setCurrentFullBodyTranslation(100))
        }

    }




    toggleContainerResizeObserver = () => {
        this.resizerToggler = new ResizeObserver(this.toggleContainerRzeObrCallback);

        this.resizerToggler.observe(this.toggleResizeOberverObj)
    }



    /*                                               ТЕХНИЧЕСКИЕ МЕТОДЫ                                  */

    toggleClasses = (element, classList) => element.classList.toggle(classList)




    /*                                               СМЕНА КЛАССОВ                                 */




    getMainToContentIndex = () => this.content.length - ((this.absToPercent(this.main.clientWidth, this.getTotalElementsWidth()).toFixed() / 100) * this.content.length).toFixed()  // индекс отношения контэйнера слайдера к его контентой части


    setSliderPositionX = (element, translation) => element.style.transform = `translateX(${translation}%)`  // Устанавливаем транслэйт для элемента по x координате

    setSliderPositionY = (element, translation) => element.style.transform = `translateY(${translation}%)` // Устанавливаем транслэйт для элемента по y координате


    getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; // Позиция мыши/пальца


    // Переводы чисел

    absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты

    percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение


    setSlideNumber = (elem) => elem.textContent = this.currentIndex + 1  // Устанавливаем номер слайда


    setPrevTranslation = () => this.prevTranslation = this.currentIndex * - this.absToPercent(this.content[0].clientWidth + this.margin, this.main.clientWidth).toFixed();// Устанавливаем предыдущий трансл

    setCurrentXTranslation = () => this.currentTranslationX = (this.currentIndex) * -this.translateStepX; //Меняем текущий X транслэйт

    setCurrentFullBodyTranslation = (translate) => (this.currentIndex) * translate; //Меняем текущий Y транслэйт


    getMargin = () => {
        // Узнаем отутупы для правельного транслэйта
        this.margin = +getComputedStyle(this.content[1]).marginLeft.split('px').join('');
        this.elemntsMargins = this.absToPercent((this.margin * this.content.length - 1), this.getTotalElementsWidth()) - this.stopperFactor;

    }

    getTranslateStepX = () => {

        /*  setTimeout(() => { */
        this.translateStepX = ((this.content[1].clientWidth + this.margin) / this.main.clientWidth * 100).toFixed() // Узнаем шаг для X транслэйта
        /*         }, 500) */

    }

    getTotalElementsWidth = () => (this.content[1].clientWidth + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

}



document.addEventListener('DOMContentLoaded', () => {

    // Advantages Slider

    const contentAdvantages = [...document.querySelectorAll(".advantages__carousel-item")];
    if (contentAdvantages.length !== 0) {

        const wrapperAdvantages = document.querySelector(".advantages__body");
        const mainAdvantages = document.querySelector(".advantages__slider");
        const resizeOberverAdvantages = document.querySelector(".advantages__resizer");
        const sliderBreakpointAdvantages = 1225;
        const sliderAdvantages = new Slider(contentAdvantages, mainAdvantages, wrapperAdvantages, sliderBreakpointAdvantages, null, null, null, resizeOberverAdvantages, null, null, 0, null, null);

        /*  sliderCoffee.getUnactiveElts(); */
        /* sliderCoffee.initArrowsBtns(); */
        sliderAdvantages.getMargin();
        sliderAdvantages.getTranslateStepX();
        sliderAdvantages.initDrag();
        sliderAdvantages.contextMenu();
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
        sliderEffect.contextMenu();
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
        sliderProgramm.contextMenu();
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
        sliderProgramm.getMargin();
        sliderProgramm.getTranslateStepX();
        sliderProgramm.initDrag();
        sliderProgramm.initCirceTogglers()
        sliderProgramm.contextMenu();
        sliderProgramm.slideResizeObserver();

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
        sliderProgramm.contextMenu();
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
        sliderProgramm.contextMenu();
        sliderProgramm.slideResizeObserver();

    }




})


/* const carousel = {
    type: "carousel",
    settings: {
        customSetting: {
            effects: "",
            touch: "true/false",
        },
        switchers: {
            dots: "true/false",
            arrows: "true/false",
        }
    }
}

const slider3d = {
    type: "3dslider",
    settings: {
        customSetting: {
            effects: "rota",
        },
        switchers: {
            dots:  "true/false",
            arrows: "true/false",
            togglers: "true/false",
        }
    }
}

const sliderGif = new Slider (

) */