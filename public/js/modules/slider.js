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

        const waitMargin = new Promise((resolve, reject) => {
            console.log('ok')
            setTimeout(() => {
                this.getMargin()
                resolve()
            }, 300)
        })

        // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
        console.log('ok')
        waitMargin.then(() => {


            console.log('ok')
            this.getTranslateStepX(); // Узнаем шаг для X транслэйта

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
        })


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


    getMargin(a) {
        // Узнаем отутупы для правельного транслэйта
        /*  const result = */
        a++
        this.margin = +getComputedStyle(this.content[1]).marginLeft.split('px').join('');
        this.elemntsMargins = this.absToPercent((this.margin * this.content.length - 1), this.getTotalElementsWidth()) - this.stopperFactor;
        console.log(window.getComputedStyle(this.content[1]).marginLeft)
        console.log(this.content[1], getComputedStyle(this.content[1]).marginLeft, this.margin)
        return a

    }

    getTranslateStepX = () => {

        /*  setTimeout(() => { */
        this.translateStepX = ((this.content[1].clientWidth + this.margin) / this.main.clientWidth * 100).toFixed() // Узнаем шаг для X транслэйта
        /*         }, 500) */
        console.log(this.margin)
        /*  console.log(this.translateStepX) */

    }

    getTotalElementsWidth = () => (this.content[1].clientWidth + this.margin) * this.content.length // Узнаем общую ширину для всех эелементов слайдера

}


export default Slider


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