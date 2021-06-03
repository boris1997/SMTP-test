// class Wave {

//     constructor(btn, wave, initialWidth, initialHeight, wrapperMargin, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm) {
//         this.btn = btn;

//         this.wave = wave;
//         this.initialWidth = initialWidth;
//         this.currentWidth = this.initialWidth

// /*         this.textBtn = textBtn;
//  */        this.initEvents()
//     }

//     initEvents = () => {


//         this.initWave();
//     }

//     setSizes = (width) => {

//         this.wave[this.index].style.width = width + '%';
//         this.wave[this.index].style.height = this.wave[this.index].clientWidth + 'px';

//     }

//     initWave = () => {
//         this.btn.map((btn, i) => {
//             /* if (innerWidth < this.sliderBreakpoint) { */
//             //touch event

//             btn.addEventListener('touchstart', this.touchStart(i), { passive: true })
//             btn.addEventListener('touchend', (e) => this.touchEnd(e))


//             //mouse event
//             btn.addEventListener('mousedown', this.touchStart(i), { passive: true })
//             btn.addEventListener('mouseup', (e) => this.touchEnd(e))
//             btn.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))
//             /* } */

//         })
//     }


//     touchStart = (i) => {

//         // Начало тач события 
//         this.index = i;
//         return (event) => {
//             this.wave[this.index].style.visibility = 'visible'
//             console.log(this.sliderBreakpoint, innerWidth, event)
//             this.setSizes(this.initialWidth);
//             this.btnTop = this.btn[i].getBoundingClientRect().top
//             this.btnLeft = this.btn[i].getBoundingClientRect().left

//             this.startXPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
//             this.startYPos = this.getPositionY(event);                // узнаем стартовую позицию мыши
//             // console.log(this.btnTop, this.startYPos)
//             this.eventWaveLeft = this.startXPos - this.btnLeft;
//             this.eventWaveTop = this.startYPos - this.btnTop;

//             this.wave[i].classList.add('wave_active')
//             this.getWavePosition()
//             // console.log(this.eventWaveLeft, this.eventWaveTop)

//             this.isDragging = true;                                  // инициализируем перетаскивание
//             this.animationID = requestAnimationFrame(this.animation) // запускаем анимацию
//             // console.log(this.startPos, this.wave[i])
//         }
//     }

//     getWavePosition = () => {
//         this.wave[this.index].style.top = this.eventWaveTop - this.wave[this.index].clientHeight / 2 + 'px';;
//         this.wave[this.index].style.left = this.eventWaveLeft - this.wave[this.index].clientWidth / 2 + 'px';
//         /*    console.log(this.wave[i].clientHeight, this.eventWaveTop)
//            console.log(this.wave[i], this.eventWaveTop - this.wave[i].clientHeight / 2) */
//     }


//     touchEnd = (e) => {
//         // Остановка тач события

//         cancelAnimationFrame(this.animationID)                          // отмена анимацию
//         this.isDragging = false;                                        // отсановка перетаскивания



//     }

//     animation = () => {
//         // анимация если драг активен
//         // console.log(this.currentWidth)

//         this.currentWidth += 15;
//         this.setSizes(this.currentWidth)
//         this.getWavePosition()

//         if (this.currentWidth < 230) {
//             requestAnimationFrame(this.animation)
//         } else {
//             cancelAnimationFrame(this.animationID);
//             this.wave[this.index].style.visibility = 'hidden'
//             this.wave[this.index].classList.remove('wave_active')
//             this.currentWidth = this.initialWidth;
//         }/* this.currentWidth = this.initialWidth; *///* , this.wave[this.index].style.visibility = 'hidden'  vis/* , this.currentWidth = this.initialWidth; *//* , this.wave[this.index].style.visibility = 'hidden' */  /* this.initialWidth = 0, this.setSizes() */
//         // if (this.isDragging) requestAnimationFrame(this.animation)
//     }

//     setInitialWidth = () => {

//     }

//     getPositionX = (event) => event.type.includes('mouse') ? event.clientX : event.touches[0].clientX; // Позиция мыши/пальца

//     getPositionY = (event) => event.type.includes('mouse') ? event.clientY : event.touches[0].clientY; // Позиция мыши/пальца


// }

// document.addEventListener('DOMContentLoaded', () => {

//     // Coffee Slider
//     const btn = [...document.querySelectorAll(".btn__wave")];
//     if (btn.length !== 0) {
//         let wave = [...document.querySelectorAll(".wave")];
//         console.log(wave)
//         let width = 10;
//         let popupModalActive = 'popup__modal--active';
//         let popupHidden = 'popup--hidden';
//         let bodyNoScroll = 'body--noscroll';
//         let wrapperMargin = 'popup__modal-wrapper--margin'
//         new Wave(btn, wave, width);
//     }


//     // const citiesList = document.querySelector(".cities__list-hidden");
//     // const citiesBtn = document.querySelector(".cities__link");
//     // const citiesBtnActive = 'cities__link--hide';
//     // const textToggleBtn = ['Все города', 'Свернуть']
//     // console.log(citiesList)
//     // citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);


// })