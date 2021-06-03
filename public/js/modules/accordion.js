class Accordion {

    constructor(btn, text, activeBtn, activeClasses, activeText, textToggle, textToggleBtn, transitionTime, heightVar, additionalElement, elementBody) {
        this.btn = btn;
        this.text = text;
        this.activeBtn = activeBtn;
        this.activeClasses = activeClasses;
        this.activeText = activeText;
        this.textToggle = textToggle;
        this.textToggleBtn = textToggleBtn;
        this.transitionTime = transitionTime;
        this.heightVar = heightVar;
        this.additionalElement = additionalElement;
        this.elementBody = elementBody;
        this.initEvents()
    }


    initEvents = () => {
        this.initArrayBtn()
    }

    fullHeight = (element) => {
        /*   */
        setTimeout(() => {
            // element.style.maxHeight = 300 + 'px';
            ;
            // element.style.maxHeight = 1000 + 'px';
            element.style.maxHeight = this.elementBody.clientHeight + 'px';
            // element.style.height = this.elementBody.clientHeight + 'px';
            setTimeout(() => {

                element.style.maxHeight = '100%';
            }, this.transitionTime)
        }, this.transitionTime)
    }


    initArrayBtn = () => {
        console.log(this.btn)
        this.btn.map((item, i) => {
            item.addEventListener('click', (e) => {
                // console.log(e.target)
                if (!e.target.dataset.element) {
                    this.textToggle && this.changeBtnText(item, this.textToggleBtn)
                    this.changeTextVisibility(this.text[i], item);
                }
                // this.additionalElement && this.fullHeight(this.additionalElement)
            })
        }
        )
    }

    initBtn = () => {
        this.btn.addEventListener('click', (e) => {
            this.textToggle && this.changeBtnText(this.btn, this.textToggleBtn)
            this.changeTextVisibility(this.text, this.btn)
        })
    }

    changeTextVisibility = (text, btn) => {
        console.log(text, btn)
        this.setMaxHeight(text, btn);

        btn.classList.toggle(this.activeBtn);
        this.activeText && text.classList.toggle(this.activeText)
    }

    setMaxHeight = (element, btn) => {
        console.log(this.activeBtn)
        this.setHeightValue(element).then((res) => {
            if (btn.classList.contains(this.activeBtn)) {
                console.log(btn)
                setTimeout(() => {
                    element.style.setProperty(this.heightVar, `initial`)
                }, this.transitionTime
                )
            }
        })
    }

    async setHeightValue(element) {
        console.log(element.scrollHeight)
        if (element.clientHeight === 0) {
            console.log(element.scrollHeight)
            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
        } else {
            console.log('ok', element.scrollHeight, this.heightVar)
            element.style.setProperty(this.heightVar, `${element.scrollHeight}px`)
            setTimeout(() => {
                element.style.setProperty(this.heightVar, '0px')
            }, 50)
        }
    }



    changeBtnText = (btn) => {
        console.log(this.textToggleBtn, this);
        btn.classList.contains(this.activeBtn) ? this.textToggleBtn.textContent = this.textToggle[0] : this.textToggleBtn.textContent = this.textToggle[1]
    }
}



export default Accordion