class LazyLoading {

    constructor(dataLazy, activeClass) {
        this.dataLazy = dataLazy;
        this.activeClass = activeClass;
        /*         this.text = text;
                this.activeBtn = activeBtn;
                this.activeClasses = activeClasses;
                this.activeText = activeText;
                this.textToggle = textToggle;
                this.textToggleBtn = textToggleBtn;
                this.transitionTime = transitionTime;
                this.heightVar = heightVar; */
        this.initEvents()
    }

    initEvents = () => {
        this.scrollObserver()
    }
    scrollObserverCallback = (entries, observer) => {
        /* Content excerpted, show below */
        console.log(entries, observer)
        entries.map(entry => {
            if (entry.isIntersecting) {
                this.loadContent(entry.target)
                console.log(entry)
            }
        })
    };

    loadContent = (entry) => {
        console.log(entry.dataset)
        entry.dataset.backgroungImg && this.loadBackground(entry, entry.dataset.backgroungImg)
        /*     if (entry) */
    }

    loadBackground = (element, backgroungUrl) => {
        element.style.backgroundImage = `url(${backgroungUrl})`
        element.classList.add(this.activeClass);
        this.observer.unobserve(element)
    }


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


