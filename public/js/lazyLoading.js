class LazyLoading {

    constructor(sections) {
        this.sections = sections;
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
        console.log(element, backgroungUrl)
        element.style.backgroundImage = `url(${backgroungUrl}) `
    }


    scrollObserver = () => {
        const options = {
            /*     root: document.querySelector('.page'),
                rootMargin: '0px',
                threshold: 1.0 */
        }
        console.log(this.sections[1])

        const observer = new IntersectionObserver(this.scrollObserverCallback, options);
        this.sections.map(section => {

            observer.observe(section)
        })

    }


}


document.addEventListener('DOMContentLoaded', () => {

    // faq
    const sections = [...document.querySelectorAll(".section")];


    new LazyLoading(sections);

})


