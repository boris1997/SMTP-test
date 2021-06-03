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
