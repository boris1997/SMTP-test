// class Wave {

//     constructor(initialWidth, targetWidth, borderNone, opacity) {


//         /*    this.wave = wave; */
//         this.initialWidth = initialWidth;
//         this.targetWidth = targetWidth;
//         this.borderNone = borderNone;
//         this.opacity = opacity;
//         this.waveArr = [];
// /*         this.textBtn = textBtn;
//  */        this.initEvents()
//     }

//     initEvents = () => {


//         this.initWave();
//     }

//     setSizes = (width) => {
//         // console.log(width)
//         // console.log(width)
//         this.wave.style.width = width + '%';
//         let height = this.percentToAbsolute(width, this.btn.clientWidth).toFixed()
//         this.wave.style.height = height + 'px';

//     }

//     initWave = () => {

//         /* if (innerWidth < this.sliderBreakpoint) { */
//         //touch event

//         document.addEventListener('touchstart', this.touchStart(), { passive: true })
//         document.addEventListener('touchend', (e) => this.touchEnd(e))


//         //mouse event
//         document.addEventListener('mousedown', this.touchStart(), { passive: true })
//         document.addEventListener('mouseup', (e) => this.touchEnd(e))
//         document.addEventListener('mouseleave', (e) => this.isDragging && this.touchEnd(e))
//         /* } */


//     }


//     touchStart = () => {

//         // Начало тач события 

//         return (event) => {
//             // console.log(this.btn?.classList.contains('btn__wave'))

//             /*    if (event.target.classList.contains('btn__wave') {

//                } */

//             if (event.target.classList.contains('btn__wave') || event.target.classList.contains('wave')) {
//                 if (event.target.classList.contains('btn__wave')) {
//                     this.btn = event.target;
//                 }
//                 console.log('ok')
//                 // console.log(this.btn)
//                 // this.animationID = requestAnimationFrame(this.animation)
//                 // console.log(this.btn.children)
//                 this.btn.children.length > 4 && this.btn.removeChild(this.btn.children[0])
//                 ClassToggle.addClass(this.btn, this.borderNone)
//                 this.btnTop = this.btn.getBoundingClientRect().top
//                 this.btnLeft = this.btn.getBoundingClientRect().left
//                 // console.log(this.btn.getBoundingClientRect())
//                 this.startXPos = this.getPositionX(event);                // узнаем стартовую позицию мыши
//                 this.startYPos = this.getPositionY(event);                // узнаем стартовую позицию мыши
//                 // console.log(this.btnTop, this.startYPos)
//                 this.eventWaveLeft = this.startXPos - this.btnLeft;
//                 // console.log(this.startXPos, this.btnLeft, this.eventWaveLeft)
//                 this.eventWaveTop = this.startYPos - this.btnTop;


//                 this.createWave().then(() => {
//                     this.setSizes(this.targetWidth);
//                     this.wave.classList.add('wave_active');
//                     /* setTimeout(() => {
//                         this.wave.style.opacity = '1'
//                     }, 400) */
//                     // this.btn[this.index]

//                 })



//                 // this.isDragging = true;                                  // инициализируем перетаскивание
//             }
//             // console.log(this.startPos, this.wave[i])
//         }
//     }

//     async createWave() {
//         this.wave = document.createElement('div');
//         this.wave.className = 'wave';
//         this.btn.appendChild(this.wave);
//         // console.log(this.btn)
//         this.setSizes(this.initialWidth);
//         this.getWavePosition();

//         const waves = [...this.btn.children];
//         // console.log(waves)

//         this.btn.children.length > 1 && waves.map(wave => wave.style.setProperty(this.opacity, '0.1'))
//         // this.waveArr = [...this.waveArr, tshis.wave];
//         // console.log(this.waveArr)
//         // console.log(this.wave)
//         /*   this.wave.className */

//     }

//     getWavePosition = () => {
//         this.wave.style.top = this.eventWaveTop /* - this.wave.clientHeight / 2 */ + 'px';
//         // console.log(this.eventWaveTop - this.wave.clientHeight / 2, this.eventWaveLeft - this.wave.clientWidth / 2)
//         this.wave.style.left = this.eventWaveLeft/*  - this.wave.clientWidth / 2  */ + 'px';
//         /*    console.log(this.wave[i].clientHeight, this.eventWaveTop)
//            console.log(this.wave[i], this.eventWaveTop - this.wave[i].clientHeight / 2) */
//     }


//     animation = () => {
//         // console.log(this.wave, this.wave.clientWidth, this.percentToAbsolute(this.targetWidth, this.btn.clientWidth.toFixed()))
//         // console.log(this.wave, this.percentToAbsolute((this.targetWidth - 15), this.btn.clientWidth).toFixed())
//         // const targetWidthAnimate = this.targetWidth - 55;
//         // console.log(this.percentToAbsolute(targetWidthAnimate, this.btn.clientWidth).toFixed())
//         if (this.wave?.clientWidth < this.percentToAbsolute(this.targetWidth, this.btn.clientWidth).toFixed()) {

//             requestAnimationFrame(this.animation)
//         } else {
//             // console.log((this.animationID, this.percentToAbsolute(this.targetWidth, this.btn.clientWidth).toFixed()));
//             // console.log(this.wave.clientWidth)

//             cancelAnimationFrame(this.animationID)
//             ClassToggle.removeClass(this.btn, this.borderNone);
//             this.wave = null;
//             console.log('ok')
//             this.btn.children.length > 0 && this.btn.removeChild(this.btn.children[0])
//         }

//     }

//     percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение

//     touchEnd = (e) => {
//         // console.log(e.target.classList.contains('wave_active'), this.btn)
//         console.log(e.target.classList)
//         if (this.btn.classList.contains(this.borderNone)/* e.target.classList.contains('wave') || e.target.classList.contains('btn__wave' *//*  || this.wave.clientWidth !== 0 */) {
//             this.animationID = requestAnimationFrame(this.animation);
//         }
//         // this.wave.clientWidth === 0 && this.btn.removeChild(this.btn.children[0])
//         // console.log(this.animationID)
//         /*      if (this.btn) {

//                  setTimeout(() => {
//                      console.log(this.btn)
//                      this.btn.removeChild(this.btn.children[0])
//                  }, 500)
//              } */
//         // Остановка тач события
//         // console.log('ok')
//         this.isDragging = false;                                        // отсановка перетаскивания



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
//         /*        let wave = [...document.querySelectorAll(".wave")];
//                console.log(wave) */
//         let initialWidth = 25;
//         let targetWidth = 200;
//         let borderNone = 'btn__noBorder';
//         let opacity = '--opacity';
//         new Wave(initialWidth, targetWidth, borderNone, opacity);
//     }


//     // const citiesList = document.querySelector(".cities__list-hidden");
//     // const citiesBtn = document.querySelector(".cities__link");
//     // const citiesBtnActive = 'cities__link--hide';
//     // const textToggleBtn = ['Все города', 'Свернуть']
//     // console.log(citiesList)
//     // citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);


// })