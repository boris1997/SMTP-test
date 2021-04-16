class CountTarif {

    constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

        this.switchRadio = switchRadio;
        this.switchLabel = switchLabel;
        this.togglersTariff = togglersTariff;
        this.totalPriceEl = totalPriceEl;
        this.discountPrice = 1600;
        this.primaryPriceIndex = 1;
        this.priceIndex = 1;
        this.limitier = 10;
        this.disountArr = [];
        this.totalPrice = this.strToNumbaer(this.totalPriceEl);
        this.primaryPrice = this.totalPrice;
        this.tariffIndicators = {
            'indicator': [],
            'discount': 1
        };
    }

    setDiscounts = () => {
        for (let i = 0; i <= this.limitier; i++) {
            i === 0 && this.disountArr.push(1)
            i === 1 && this.disountArr.push(0.9)
            i > 1 && this.disountArr.push(0.85)
        }
    }

    getindicators = () => this.togglersTariff.map(item => {
        this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
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

        if (this.priceIndex > 1) {
            this.priceIndex--;

            this.togglersTariff.map((item, z) => {
                let indicator = this.strToNumbaer(this.togglersTariff[z].children[1]) - this.tariffIndicators['indicator'][z];
                this.togglersTariff[z].children[1].textContent = this.addSpacesToNum(indicator);
            })
            this.countTotalPrice()
            this.showTotalPrice()
        }
    }

    incrIndicator = (i) => {
        console.log(this.tariffIndicators)
        if (this.priceIndex < this.limitier) {
            this.priceIndex++;
            this.togglersTariff.map((item, z) => {
                let indicator = this.strToNumbaer(this.togglersTariff[z].children[1]) + this.tariffIndicators['indicator'][z];

                this.togglersTariff[z].children[1].textContent = this.addSpacesToNum(indicator);
            }
            )
            this.countTotalPrice()
            this.showTotalPrice()
        }
    }






    countTotalPrice = () => {
        /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
             const discount = this.primaryPrice * this.tariffIndicators['discount'];
                console.log(discount)
                this.discountPrice += discount; */
        console.log(this.primaryPrice, this.disountArr[this.priceIndex])
        this.discountPrice = this.primaryPrice * this.disountArr[this.priceIndex - 1];
        console.log(this.discountPrice)
        this.totalPrice = this.discountPrice * this.priceIndex;
        console.log(this.priceIndex)
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

        console.log(this.discountPrice)
        this.countTotalPrice()
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
    console.log(switchRadio)
    if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
        const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
        countTarif.getindicators();
        countTarif.initSwitchTariffBtns();
        countTarif.initTogglers();
        countTarif.setDiscounts();
    }
})


















// class CountTarif {

//     constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {

//         this.switchRadio = switchRadio;
//         this.switchLabel = switchLabel;
//         this.togglersTariff = togglersTariff;
//         this.totalPriceEl = totalPriceEl;
//         this.discountPrice = 1600;
//         this.primaryPriceIndex = 1;
//         this.priceIndex = 1;
//         this.limitier = 9;
//         this.disountArr = [];
//         this.totalPrice = this.strToNumbaer(this.totalPriceEl);
//         this.primaryPrice = this.totalPrice;
//         this.tariffIndicators = {
//             'indicator': [],
//             'countIndex': [],
//             'discount': 1
//         };
//     }

//     setDiscounts = () => {
//         for (let i = 0; i <= this.limitier; i++) {
//             i === 0 && this.disountArr.push(1)
//             i === 1 && this.disountArr.push(0.9)
//             i > 1 && this.disountArr.push(0.85)
//         }
//     }

//     getindicators = () => this.togglersTariff.map(item => {
//         this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
//         this.tariffIndicators['countIndex'].push(0);
//     })



//     initSwitchTariffBtns = () => {
//         this.switchRadio.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//         this.switchLabel.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//     }
//     initTogglers = () => {
//         this.togglersTariff.map((item, i) => item.addEventListener('click', (e) => this.toggleTariffIndicators(e, item, i)))
//     }

//     toggleTariffIndicators = (e, item, i) => {
//         console.log(e.target.classList)
//         e.target.classList.contains('incDec-btn__dec') && this.decrIndicator(i)
//         e.target.classList.contains('incDec-btn__inc') && this.incrIndicator(i)
//         /*   e.target.classList[0].includes('inc') && this.decrIndicator() */
//         console.log(e.target, item, i)
//     }

//     decrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] > 0) {
//             this.tariffIndicators['countIndex'][i]--;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) - this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex--;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }

//     countDiscount = (indicator, i) => {
//         indicator === 2 && (this.tariffIndicators['discount'] = 0.9);
//         indicator === 3 && (this.tariffIndicators['discount'] = 0.85);

//     }

//     incrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] < this.limitier) {

//             this.tariffIndicators['countIndex'][i]++;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) + this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex++;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }

//     countTotalPrice = (i) => {
//         this.totalPrice = this.discountPrice * this.priceIndex;
//         console.log(this.priceIndex, this.discountPrice)
//         /*    this.totalPrice = this.totalPrice * (this.tariffIndicators['countIndex'][2] + 1) */
//         console.log(this.totalPrice)
//     }

//     countPrimaryPrice = (i) => {
//         /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
//              const discount = this.primaryPrice * this.tariffIndicators['discount'];
//                 console.log(discount)
//                 this.discountPrice += discount; */
//         console.log(this.tariffIndicators['countIndex'][i] + 1)
//         this.discountPrice = 0;
//         console.log(this.priceIndex)
//         for (let z = 0; z < this.tariffIndicators['countIndex'][i] + 1; z++) {
//             this.discountPrice += this.primaryPrice * this.disountArr[z]/*  * this.priceIndex */;
//             /*    console.log(this.disountArr[z], this.primaryPrice)
//                console.log(price.toFixed()) */
//         }
//         this.totalPrice = this.discountPrice * this.priceIndex;
//     }

//     addSpacesToNum = (element) => {
//         element = element.toString().split('')
//         for (let i = 3; i <= element.length; i += 4) {
//             element.reverse().splice(i, 0, ' ');
//             element = element.reverse()
//         }
//         return element.join('')
//     }

//     changeTariff = (i) => {
//         console.log(this.totalPrice)
//         i === 0 ? this.primaryPrice = 1600 : this.primaryPrice = 1800;
//         this.discountPrice = this.primaryPrice;
//         console.log(this.discountPrice)
//         this.countPrimaryPrice(2)
//         this.showTotalPrice()
//     }

//     showTotalPrice = () => {
//         const totalSum = this.totalPrice;
//         this.totalPriceEl.textContent = this.addSpacesToNum(totalSum)
//     }

//     strToNumbaer = (element) => +element.textContent.replace(/\s+/g, '')
// }


// document.addEventListener('DOMContentLoaded', () => {

//     // Coffee Slider
//     const switchRadio = [...document.querySelectorAll(".switch-radio__input")];
//     const switchLabel = [...document.querySelectorAll(".switch-radio__label")];
//     const togglersTariff = [...document.querySelectorAll(".togglers-tariff__btn")];
//     const totalPrice = document.querySelector(".total-price__amount");
//     console.log(switchRadio)
//     if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
//         const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
//         countTarif.getindicators();
//         countTarif.initSwitchTariffBtns();
//         countTarif.initTogglers();
//         countTarif.setDiscounts();
//     }
// })


