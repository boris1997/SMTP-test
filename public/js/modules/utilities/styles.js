class Styles {
    static addTransition(element, type, dur, effect) {
        element.style.transition = `${type} ${dur} ${effect}`
    }
    static addTransform(element, type, value, unit) {
        element.style.transform = `${type}( ${dur} ${effect})`
    }

}

export default Styles