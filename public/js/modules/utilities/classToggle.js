export default class ClassToggle {
    static addClass = (element, clas) => { element.classList.add(clas) }
    static removeClass = (element, clas) => { element.classList.remove(clas) }
    static toggleClass = (element, clas) => { element.classList.toggle(clas) }
}

