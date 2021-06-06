export default class MathUtl {
    static percentToAbsolute = (percent, container) => percent / 100 * container  // Перевод в абсолюбное значение
    static absToPercent = (absolute, container) => absolute / container * 100  // Перевод в проценты
    static toggleClass = (element, clas) => { element.classList.toggle(clas) }
}

