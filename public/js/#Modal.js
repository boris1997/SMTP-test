class Modal {

    constructor(body, popup, popupModal, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm) {
        this.body = body;
        this.popup = popup;
        this.popupModal = popupModal;
        this.btnPopup = btnPopup;
        this.closeBtn = closeBtn;
        this.formInputs = formInputs;
        this.popupModalActive = popupModalActive;
        this.popupHidden = popupHidden;
        this.bodyNoScroll = bodyNoScroll;
        this.staticForm = staticForm;
/*         this.textBtn = textBtn;
 */        this.initEvents()
    }

    initEvents = () => {
        console.log(this.btnPopup)
        this.initArrayBtnPopup();
        this.initCloseBtn();
    }


    initCloseBtn = () => {
        this.popup.addEventListener('click', (e) => {
            console.log(e.target.dataset)

            if (e.target.classList.contains('popup__modal--active') || e.target.classList.contains('popup__modal-close') || e.target.dataset.modal === 'close') {
                e.stopPropagation()
                console.log(e.target.classList)

                this.popupModal.map((popupModal, i) => {
                    if (popupModal.classList.contains(this.popupModalActive)) {
                        this.removeClass(this.body, this.bodyNoScroll);
                        this.removeNoScrollStyles(this.body);
                        !popupModal.classList.contains(this.staticForm) && this.removeNoScrollStyles(popupModal);
                        !popupModal.classList.contains(this.staticForm) && this.removeClass(popupModal, this.popupModalActive);
                        this.addClass(this.popup, this.popupHidden)
                    }
                })

            }
        })
    }

    initArrayBtnPopup = () => {
        this.btnPopup.map((btnPopup, i) => {
            console.log(btnPopup, btnPopup.type)
            if (btnPopup.type === 'submit') {
                /* console.log(this.btnPopup[i], this.popupModal[i]) */
                this.popupModal.map((popupModal, i) => {
                    popupModal.dataset.modal === 'form' && this.submitForm(popupModal)
                })
            } else {
                console.log(btnPopup)
                btnPopup.addEventListener('click', () => {
                    this.popupModal.map((popupModal, i) => {
                        console.log(popupModal.dataset.modal, btnPopup.dataset.modal)
                        if (btnPopup.dataset.modal === popupModal.dataset.modal) {
                            popupModal.dataset.modal === 'form' && this.submitForm(popupModal)
                            this.addNoScrollStyles(popupModal)
                            !this.body.classList.contains(this.bodyNoScroll) && (this.addNoScrollStyles(this.body), this.addClass(this.body, this.bodyNoScroll))
                            this.addClass(popupModal, this.popupModalActive);
                            this.popup.classList.contains(this.popupHidden) && this.removeClass(this.popup, this.popupHidden)

                        }
                    })
                    /*      this.changeTextVisibility(this.text[i], item);
                         this.textBtn && this.changeBtnText(item) */
                })
            }
        }
        )
    }

    addNoScrollStyles = (element) => {
        element.style.paddingRight = window.innerWidth - this.body.offsetWidth + 'px';
        element.style.width = '100vw';
    }

    removeNoScrollStyles = (element) => {
        element.style.paddingRight = 0;
        element.style.width = '100%';
    }

    addClass = (element, clas) => {
        element.classList.add(clas)
    }


    removeClass = (element, clas) => {
        element.classList.remove(clas)
    }

    submitForm = (popupModalForm) => {
        console.log(popupModalForm)
        popupModalForm.addEventListener('submit', (e) => {
            console.log('ok')
            e.preventDefault()
            !popupModalForm.classList.contains(this.staticForm) && this.removeClass(popupModalForm, this.popupModalActive)
            this.popup.classList.contains(this.popupHidden) && this.removeClass(this.popup, this.popupHidden)
            this.clearFields(this.formInputs)
            this.popupModal.map((popupModal, i) => {
                if (popupModal.dataset.modal === 'success') {
                    console.log(this.staticForm)
                    this.addClass(popupModal, this.popupModalActive);
                }
                console.log(e.target, popupModal)
            })
        })
    }

    clearFields = (fields) => {
        console.log(fields)
        fields.map((field, i) => field.value = '')
    }

}


document.addEventListener('DOMContentLoaded', () => {

    // Coffee Slider
    const popupMain = document.getElementById("popup-main");
    if (popupMain !== null) {
        let body = document.querySelector(".body");
        let popup = document.querySelector(".popup");
        let popupModal = [...document.querySelectorAll(".popup__modal")];
        let btnPopup = [...document.querySelectorAll(".btn__popup")];
        let closeBtn = [...document.querySelectorAll(".popup__modal-close")];
        let formInputs = [...document.querySelectorAll(".contact-form__input")];
        let popupModalActive = 'popup__modal--active';
        let popupHidden = 'popup--hidden';
        let bodyNoScroll = 'body--noscroll';
        console.log(closeBtn)
        /*    faqBtn.length !== 0 && */ new Modal(body, popup, popupModal, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll);
    }


    const popupContact = document.getElementById("popup-contact");
    if (popupContact !== null) {
        let body = document.querySelector(".body");
        let popup = document.querySelector(".popup");
        let popupModal = [...document.querySelectorAll(".popup__modal")];
        let btnPopup = [...document.querySelectorAll(".btn__popup")];
        let closeBtn = [...document.querySelectorAll(".popup__modal-close")];
        let formInputs = [...document.querySelectorAll(".contact-form__input")];
        let popupModalActive = 'popup__modal--active';
        let popupHidden = 'popup--hidden';
        let bodyNoScroll = 'body--noscroll';
        let staticForm = 'contact__form';
        new Modal(body, popup, popupModal, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm);
    }
    // const citiesList = document.querySelector(".cities__list-hidden");
    // const citiesBtn = document.querySelector(".cities__link");
    // const citiesBtnActive = 'cities__link--hide';
    // const textToggleBtn = ['Все города', 'Свернуть']
    // console.log(citiesList)
    // citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);


})