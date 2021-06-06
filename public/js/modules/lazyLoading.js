import ClassToggle from './utilities/classToggle'

export class LazyLoading {

    constructor(dataLazy, observerRoot, activeClass) {
        this.dataLazy = dataLazy;
        this.observerRoot = observerRoot;
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
        ClassToggle.addClass(element, this.activeClass)
        this.observer.unobserve(element)
    }
    loadImg = (element, src) => {
        element.src = src;
        this.observer.unobserve(element)
    }

    scrollObserver = () => {

        const options = {
            root: this.observerRoot,
            threshold: 0,
            rootMargin: '0px 0px 500px 0px'
        }

        this.observer = new IntersectionObserver(this.scrollObserverCallback, options);
        this.dataLazy.map(data => {

            this.observer.observe(data)
        })

    }


}
export const initLazyLoading = () => {

    // faq
    const dataLazy = [...document.querySelectorAll(".data-lazy")];
    const observerRoot = document.querySelector("intersaction-observer");
    const activeClass = 'section--active'
    new LazyLoading(dataLazy, observerRoot, activeClass);


}
