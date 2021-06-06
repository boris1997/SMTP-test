import ClassToggle from './utilities/classToggle'

export class Direction {

    constructor(directionsBody, directions, directionActive) {
        this.directionsBody = directionsBody;
        this.directions = directions;
        this.directionActive = directionActive;
        this.initEvents()
    }

    initEvents = () => {
        console.log('')
        this.directionResizeObserver()
    }

    directionRzeObrCallback = (entries) => {
        /*  console.log(entries[0].target) */
        this.directions.map((direction, i) => {
            this.detectOverflow(direction)
        })
    }

    directionResizeObserver = (direction) => {
        this.resizerDirection = new ResizeObserver(this.directionRzeObrCallback);
        this.resizerDirection.observe(this.directionsBody)
    }


    detectOverflow = (direction) => {
        let childMarginTop = +window.getComputedStyle(direction).marginTop.split('px').join('');
        let childMarginRight = +window.getComputedStyle(direction).marginRight.split('px').join('');
        childMarginTop = +childMarginTop.toFixed();
        let parentTop = direction.parentNode.getBoundingClientRect().top;
        parentTop = +parentTop.toFixed();
        let childTop = direction.getBoundingClientRect().top;
        childTop = +childTop.toFixed()


        // let directionUlLength = direction.parentNode.children.length;
        let directionUl = [...direction.parentNode.children];
        if (window.innerWidth > 1190) {
            childMarginRight > 0 && (direction.style.marginRight = '0') // console.log 
        }
        if ((childTop - parentTop) > childMarginTop && direction.classList.contains(this.directionActive) && directionUl.indexOf(direction) !== 0) {
            ClassToggle.removeClass(direction, this.directionActive)

            direction.previousElementSibling.style.marginRight = '34px'
        }

        if (childTop - parentTop === childMarginTop && !direction.classList.contains(this.directionActive) && directionUl.indexOf(direction) !== 0) {
            direction.previousElementSibling.style.marginRight = '0'
            ClassToggle.addClass(direction, this.directionActive)
        }
    }
}

export const initDirection = () => {

    // Coffee Slider
    const directions = [...document.querySelectorAll(".direction__item")];
    const directionsBody = document.querySelector(".direction__body-wrapper");
    const directionActive = 'direction__item--margin';
    directions.length !== 0 && new Direction(directionsBody, directions, directionActive);

}


