class CountTarif {

    constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

        this.switchRadio = switchRadio;
        this.switchLabel = switchLabel;
        this.togglersTariff = togglersTariff;
        this.totalPriceEl = totalPriceEl;
        this.priceIndex = 1;
        this.limitier = 9;
        this.totalPrice = this.strToNumbaer(this.totalPriceEl);
        this.primaryPrice = this.totalPrice;
        this.tariffIndicators = {
            'indicator': [],
            'countIndex': []
        };
    }

    getindicators = () => this.togglersTariff.map(item => {
        this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
        this.tariffIndicators['countIndex'].push(0);
        this.tariffIndicators['discount'] = 1;
    })



    initSwitchTariffBtns = () => {
        this.switchRadio.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
        this.switchLabel.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
    }
    initTogglers = () => {
        this.togglersTariff.map((item, i) => item.addEventListener('click', (e) => this.toggleTariffIndicators(e, item, i)))
    }

    toggleTariffIndicators = (e, item, i) => {
        console.log(e.target.classList)
        e.target.classList.contains('incDec-btn__dec') && this.decrIndicator(i)
        e.target.classList.contains('incDec-btn__inc') && this.incrIndicator(i)
        /*   e.target.classList[0].includes('inc') && this.decrIndicator() */
        console.log(e.target, item, i)
    }

    decrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.tariffIndicators['countIndex'][i] > 0) {
            this.priceIndex--;
            this.tariffIndicators['countIndex'][i]--;
            let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) - this.tariffIndicators['indicator'][i];
            console.log(indicator)
            i === 2 && this.countDiscount(indicator, i);
            this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
            i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
            this.showTotalPrice()
        }
    }

    countDiscount = (indicator, i) => {
        indicator === 2 && (this.tariffIndicators['discount'] = 0.9);
        indicator === 3 && (this.tariffIndicators['discount'] = 0.85);

    }

    incrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.tariffIndicators['countIndex'][i] < this.limitier) {
            this.priceIndex++;
            this.tariffIndicators['countIndex'][i]++;
            let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) + this.tariffIndicators['indicator'][i];
            console.log(indicator)
            i === 2 && this.countDiscount(indicator, i);
            this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
            i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
            this.showTotalPrice()
        }
    }

    countTotalPrice = () => {
        this.totalPrice = this.primaryPrice * this.priceIndex * this.tariffIndicators['discount'];
    }

    countPrimaryPrice = (i) => {
        console.log(this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'])
        this.primaryPrice = this.primaryPrice * (this.tariffIndicators['countIndex'][i] + 1) * this.tariffIndicators['discount'];
        this.totalPrice = this.primaryPrice;
    }

    addSpacesToNum = (element) => {
        element = element.toString().split('')
        for (let i = 3; i <= element.length; i += 4) {
            element.reverse().splice(i, 0, ' ');
            element = element.reverse()
        }
        return element.join('')
    }

    changeTariff = (i) => {
        console.log(this.totalPrice)
        i === 0 ? this.primaryPrice = 1600 : this.primaryPrice = 1800;
        this.countPrimaryPrice(2)
        this.showTotalPrice()
    }

    showTotalPrice = () => {
        const totalSum = this.totalPrice;
        this.totalPriceEl.textContent = this.addSpacesToNum(totalSum)
    }

    strToNumbaer = (element) => +element.textContent.replace(/\s+/g, '')
}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const switchRadio = [...document.querySelectorAll(".switch-radio__input")];
    const switchLabel = [...document.querySelectorAll(".switch-radio__label")];
    const togglersTariff = [...document.querySelectorAll(".togglers-tariff__btn")];
    const totalPrice = document.querySelector(".total-price__amount");

    const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);

    countTarif.getindicators();
    countTarif.initSwitchTariffBtns();
    countTarif.initTogglers();

})


