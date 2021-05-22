// import smoothscroll from 'smoothscroll-polyfill';

/* smoothscroll.polyfill(); */
class Scroll {

    constructor(btn, scrollToSection) {
        this.btn = btn;
        this.scrollToSection = scrollToSection;
        this.scrollTop = null;
        this.scrollTo = null;
        // this.smoothScroll = require('smoothscroll');
        this.initEvents()
    }


    initEvents = () => {
        this.initArrayBtn()
    }



    initArrayBtn = () => {
        console.log(this.btn)
        this.btn.map((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                this.scrollToSection[i].dataset.scroll === this.btn[i].dataset.scroll && this.setScroll(this.scrollToSection[i])

                // this.additionalElement && this.fullHeight(this.additionalElement)
            })
        }
        )
    }

    setScroll = (scrollToSection) => {
        // this.smoothScroll(scrollToSection)
        console.log(window.scrollY)
        this.scrollTop = window.scrollY;
        this.scrollTo = scrollToSection.getBoundingClientRect().top;
        console.log('ok')
        this.animation()
    }


    animation = () => {
        console.log(this.scrollTop)
        this.scrollTop += 100;
        window.scrollTo({
            top: this.scrollTop,
            behavior: "auto"
        });
        this.scrollTop < this.scrollTo && requestAnimationFrame(this.animation)
    }






}


document.addEventListener('DOMContentLoaded', () => {

    const scrollBtn = [...document.querySelectorAll(".data-scroll__btn")];
    console.log(scrollBtn)
    if (scrollBtn.length !== 0) {
        const scrollToSection = [...document.querySelectorAll(".data-scrollTo")];
        console.log(scrollToSection)
        new Scroll(scrollBtn, scrollToSection);
    }
})


