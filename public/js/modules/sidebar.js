class Sidebar {
    constructor(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay, transitionTime) {
        this.page = page,
            this.sections = sections,
            this.menuItems = menuItems,
            this.mobileMenuItems = mobileMenuItems,
            this.index = 0,
            this.sidebar = sidebar,
            this.hamburgerMenu = hamburgerMenu,
            this.sidebarBody = sidebarBody,
            this.sidebarOverlay = sidebarOverlay,
            this.transitionTime = transitionTime
    }
    sidebarManipulation = () => {

        console.log('ok')
        window.onresize = () => {
            if (window.innerWidth > 1224 && this.sidebar.classList.contains('page__sidebar--active')) {
                this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.toggle('page_screen_full')
                this.removeSidebar()
            }

        }
        this.sidebarOverlay.onclick = () => this.removeSidebar();
        this.hamburgerMenu.onclick = (e) => this.toggleSidebar(), Styles.addTransition(this.sidebarBody, 'transform', '0.3s', 'ease-in-out');
        this.mobileMenuItems.map(item => item.onclick = () => this.removeSidebar())
    }



    toggleSidebar = () => {
        console.log('ok')
        this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.toggle('page_screen_full');
        this.sidebar.classList.toggle('page__sidebar--active');
        this.page.classList.toggle('page--noScroll');
        this.sidebarBody.classList.toggle('sidebar__content--active');
        console.log(this.sidebarBody)
        setTimeout(() => {
            this.sidebarBody.classList.toggle('sidebar__content--visible');
        }, this.sidebarBody.classList.contains('sidebar__content--active') ? 0 : this.transitionTime)
        this.sidebarOverlay.classList.toggle('overlay--show');
        this.hamburgerMenu.classList.toggle('hamburger-menu__content--active');
        /*      window.scrollTo({
                 top: 0,
                 behavior: "smooth"
             }) */
    }

    removeSidebar = () => {
        this.sidebar.classList.contains('sidebar--full-page') && this.page.classList.remove('page_screen_full')
        setTimeout(() => {
            console.log('ok')
            this.sidebarBody.classList.remove('sidebar__content--visible');
        }, this.transitionTime)
        this.sidebar.classList.remove('page__sidebar--active');
        this.page.classList.remove('page--noScroll');
        this.sidebarBody.classList.remove('sidebar__content--active');
        this.sidebarOverlay.classList.remove('overlay--show');
        this.hamburgerMenu.classList.remove('hamburger-menu__content--active');
    }

    menuItemsInit = () => {
        this.menuItems.map((menuItem, i) => menuItem.onclick = () => { this.changeItemStyle(i) })
        /*   this.menuItems.map((menuItem, i) => menuItem.onmouseover = () => { this.hoverItemStyleOver(menuItem) })
          this.menuItems.map((menuItem, i) => menuItem.onmouseout = () => { this.hoverItemStyleOut(menuItem) }) */
    }

    changeItemStyle = (i) => {
        console.log('object')
        const activeMenuItem = document.querySelector('.menu__items--active');
        activeMenuItem.classList.remove('menu__items--active');
        this.menuItems[i].classList.add('menu__items--active');
        /* this.menuItems.map((menuItem, z) => i !== z && (console.log(z))) */
    }


}


document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const sections = [...document.querySelectorAll('.section')];
    const menuItems = [...document.querySelectorAll('.menu__items')];
    const mobileMenuItems = [...document.querySelectorAll('.mobile-menu__item')];
    const sidebar = document.querySelector('.page__sidebar');
    const sidebarBody = document.querySelector('.sidebar__content');
    const sidebarOverlay = document.querySelector('.overlay');
    const hamburgerMenu = document.querySelector('.hamburger-menu__content');
    const transitionTime = 300;
    const scroll = new Sidebar(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay, transitionTime);

    scroll.menuItemsInit();
    scroll.sidebarManipulation()

})
