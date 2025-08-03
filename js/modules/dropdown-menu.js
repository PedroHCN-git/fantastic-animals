import clickOutside from "./outside-click.js";

export default class DropdownMenu {
  constructor(elementRef, events){
    this.dropDowns = document.querySelectorAll(elementRef);
    if (events === undefined){
      this.userEvents = ['click', 'touchstart'];
    } else {
      this.userEvents = events;
    }
    this.userEvents = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';
  }

  addDropdownMenuEvent(){
    this.dropDowns.forEach((element) => {
      this.userEvents.forEach((userEvent) => {
        element.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event){
    const target = event.currentTarget;
    event.preventDefault();
    target.classList.add(this.activeClass);
    clickOutside(target, this.userEvents, () => {
      target.classList.remove(this.activeClass);
    });
  }

  init(){
    if (this.dropDowns.length > 0){
      this.addDropdownMenuEvent();
    }
    return this;
  }
}

