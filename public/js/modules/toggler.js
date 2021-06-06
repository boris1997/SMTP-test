
import ClassToggle from './utilities/classToggle'

export class Togglers {

    constructor(btn, item, btnActiveClass, itemActiveClass) {
        this.btn = btn;
        this.item = item;
        this.btnActiveClass = btnActiveClass;
        this.itemActiveClass = itemActiveClass;
        this.initEvents()
    }


    initEvents = () => {
        this.initArrayBtn()
    }


    initArrayBtn = () => {
        console.log(this.btn)
        this.btn.map((btn, i) => {
            btn.addEventListener('click', (e) => {
                const activeBtn = document.querySelector(`.${this.btnActiveClass}`);
                ClassToggle.removeClass(activeBtn, this.btnActiveClass);
                ClassToggle.addClass(btn, this.btnActiveClass)
                this.switchContent(btn)
            })
        }
        )
    }

    switchContent = (btn) => {
        this.item.map((item, i) => {
            console.log('ok')
            btn.dataset.show === item.dataset.show ? ClassToggle.addClass(item, this.itemActiveClass) : ClassToggle.removeClass(item, this.itemActiveClass);
        })
    }
}

export const initTogglers = () => {

    const togglersBtn = [...document.querySelectorAll(".togglers__button")];
    if (togglersBtn.length !== 0) {

        const tariffItem = [...document.querySelectorAll(".tariff__switch")];
        const togglersActiveClass = 'togglers__button--active';
        const itemActiveClass = 'tariff__switch--active';

        new Togglers(togglersBtn, tariffItem, togglersActiveClass, itemActiveClass);
    }

}


