class Styles {
    static addTransition = (element, type, dur, effect) => {
        console.log(element, type, dur, effect)
        element.style.transition = `${type} ${dur} ${effect}`
    }
}