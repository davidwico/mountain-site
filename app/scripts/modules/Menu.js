class Menu {
    constructor() {
        this.MenuButton = $('.menu-icon');
        this.Menu = $('.header-nav');
        this.menuEvent();
    }

    menuEvent() {
        this.MenuButton.on('click', () => {this.toggleMenu(); this.hideMenu()});
    }

    toggleMenu() {
        this.Menu.toggleClass('unvisible');
    }

    hideMenu() {
        setTimeout(() => {
            this.Menu.addClass('unvisible');
        }, 5000);
    }
}

export default Menu;  