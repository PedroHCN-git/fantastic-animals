import clickOutside from "./outside-click.js";

export default class MenuMobile{
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined){
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = events;
    }
    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(){
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    clickOutside(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuEvents(){
    this.eventos.forEach(userEvent => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init(){
    if (this.menuButton && this.menuList){
      this.addMenuEvents();
    }
    return this;
  }

}
