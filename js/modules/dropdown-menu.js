import clickOutside from "./outside-click.js";

export default function initDropdownMenu() {
    const dropDowns = document.querySelectorAll('[data-dropdown]');
    const userEvents = ['click', 'touchstart'];
    
    dropDowns.forEach((element) => {
        userEvents.forEach((userEvent) => {
            element.addEventListener(userEvent, handleClick);
        });
    });
    
    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        clickOutside(this, userEvents, () => {
            this.classList.remove('active');
        });
    }
}
