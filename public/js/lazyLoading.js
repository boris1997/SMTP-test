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


