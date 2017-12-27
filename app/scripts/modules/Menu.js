class Menu {
    constructor() {
        this.MenuButton = $('.header-icon');
        this.Menu = $('.header-nav');
        this.menuEvent();
    }

    menuEvent() {
        this.MenuButton.on('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.Menu.toggleClass('unvisible');
    }
}

export default Menu;  