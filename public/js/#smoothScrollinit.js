// // import smoothscroll from 'smoothscroll-polyfill';

// /* smoothscroll.polyfill(); */
// class Scroll {

//     constructor(btn, scrollToSection) {
//         this.btn = btn;
//         this.scrollToSection = scrollToSection;
//         this.scrollTop = null;
//         this.scrollTo = null;
//         // this.smoothScroll = require('smoothscroll');
//         this.initEvents()
//     }


//     initEvents = () => {
//         this.initArrayBtn()
//     }



//     initArrayBtn = () => {
//         console.log(this.btn)
//         this.btn.map((item, i) => {
//             item.addEventListener('click', (e) => {
//                 e.preventDefault()
//                 this.scrollToSection[i].dataset.scroll === this.btn[i].dataset.scroll && this.setScroll(this.scrollToSection[i])

//                 // this.additionalElement && this.fullHeight(this.additionalElement)
//             })
//         }
//         )
//     }

//     setScroll = (scrollToSection) => {
//         // this.smoothScroll(scrollToSection)
//         console.log(window.scrollY)
//         this.scrollTop = window.scrollY;
//         this.scrollTo = scrollToSection.getBoundingClientRect().top;
//         console.log('ok')
//         this.animation()
//     }


//     animation = () => {
//         console.log(this.scrollTop)
//         this.scrollTop += 100;
//         window.scrollTo({
//             top: this.scrollTop,
//             behavior: "auto"
//         });
//         this.scrollTop < this.scrollTo && requestAnimationFrame(this.animation)
//     }


//     changeTextVisibility = (text, btn) => {
//         console.log(text, btn)
//         this.setMaxHeight(text, btn);

//         btn.classList.toggle(this.activeBtn);
//         this.activeText && text.classList.toggle(this.activeText)
//     }




//     setMaxHeight = (element, btn) => {
//         console.log(this.activeBtn)
//         this.setHeightValue(element).then((res) => {
//             if (btn.classList.contains(this.activeBtn)) {
//                 console.log(btn)
//                 setTimeout(() => {
//                     element.style.setProperty(this.heightVar, `initial`)
//                 }, this.transitionTime
//                 )
//             }
//         })
//     }

//     async setHeightValue(element) {
//         console.log(element.scrollHeight)
//         if (element.clientHeight === 0) {
//             console.log(element.scrollHeight)
//             element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
//         } else {
//             console.log('ok', element.scrollHeight, this.heightVar)
//             element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
//             setTimeout(() => {
//                 element.style.setProperty(this.heightVar, '0px')
//             }, 50)
//         }
//     }



//     changeBtnText = (btn) => {
//         console.log(this.textToggleBtn, this);
//         btn.classList.contains(this.activeBtn) ? this.textToggleBtn.textContent = this.textToggle[0] : this.textToggleBtn.textContent = this.textToggle[1]
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {

//     const scrollBtn = [...document.querySelectorAll(".data-scroll__btn")];
//     console.log(scrollBtn)
//     if (scrollBtn.length !== 0) {
//         const scrollToSection = [...document.querySelectorAll(".data-scrollTo")];
//         console.log(scrollToSection)
//         new Scroll(scrollBtn, scrollToSection);
//     }
// })


