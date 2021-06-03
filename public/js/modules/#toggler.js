class Togglers {

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
                // ClassToggle.removeClass(activeBtn, this.btnActiveClass);
                // ClassToggle.addClass(btn, this.btnActiveClass)
                this.switchContent(btn)
            })
        }
        )
    }

    switchContent = (btn) => {
        this.item.map((item, i) => {
            console.log('ok')
            // btn.dataset.show === item.dataset.show ? ClassToggle.addClass(item, this.itemActiveClass) : ClassToggle.removeClass(item, this.itemActiveClass);
        })
    }
}





export default Togglers