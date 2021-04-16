class Direction {

    constructor(directionsBody, directions, directionActive) {
        this.directionsBody = directionsBody;
        this.directions = directions;
        this.directionActive = directionActive;
        this.initEvents()
    }

    initEvents = () => {
        /*    console.log(direction, direction.getBoundingClientRect().top, direction.parentNode.getBoundingClientRect().top)
        console.log(window.getComputedStyle(direction).marginTop) */
        this.directionResizeObserver()


        /*    console.log(window.getComputedStyle(direction), direction, direction.scrollTop) */


    }

    removeClass = (element, clas) => {
        console.log(element, clas)
        element.classList.remove(clas)
    }
    addClass = (element, clas) => {
        /*   console.log(element, clas) */
        /*  console.log(this.directions.indexOf(element) % 3) */
        this.directions.indexOf(element) % 3 !== 0 && element.classList.add(clas)
    }

    directionRzeObrCallback = (entries) => {
        /*  console.log(entries[0].target) */
        console.log(this.directions)
        this.directions.map((direction, i) => {
            let childMarginTop = +window.getComputedStyle(direction).marginTop.split('px').join('');
            childMarginTop = +childMarginTop.toFixed();
            let parentTop = direction.parentNode.getBoundingClientRect().top;
            parentTop = +parentTop.toFixed();
            let childTop = direction.getBoundingClientRect().top;
            childTop = +childTop.toFixed()
            /*  console.log(childTop - parentTop, childMarginTop, direction); */
            /*    console.log(childTop - parentTop, direction) */

            /*  (childTop - parentTop > childMarginTop, direction.classList.contains(this.directionActive)) && this.removeClass(direction, this.directionActive); */
            // (childTop - parentTop === childMarginTop, !direction.classList.contains(this.directionActive)) && this.addClass(direction, this.directionActive)
            if ((childTop - parentTop) > childMarginTop && direction.classList.contains(this.directionActive) && this.directions.indexOf(direction) % 3 !== 0) {
                this.removeClass(direction, this.directionActive)
                direction.previousElementSibling.style.marginRight = '40px'
                console.log(direction, childTop - parentTop, childMarginTop)
            }
            if (childTop - parentTop === childMarginTop && !direction.classList.contains(this.directionActive) && this.directions.indexOf(direction) % 3 !== 0) {
                console.log(direction, childTop - parentTop, childMarginTop)
                direction.previousElementSibling.style.marginRight = '0'
                this.addClass(direction, this.directionActive)
            }
        })
        // Настройка слайдера после изменения ширина слайда(в процентом соотношении)
        // Узнаем шаг для X транслэйта



    }

    directionResizeObserver = (direction) => {
        console.log(direction)
        // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
        this.resizerDirection = new ResizeObserver(this.directionRzeObrCallback);
        this.resizerDirection.observe(this.directionsBody)
    }

}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const directions = [...document.querySelectorAll(".direction__item")];
    const directionsBody = document.querySelector(".direction__body-wrapper");
    const directionActive = 'direction__item--margin';
    directions.length !== 0 && new Direction(directionsBody, directions, directionActive);




})


