import clickOutside from "./outside-click.js"
export default function initMenuMobile(){

}

const menuButton = document.querySelector("[data-menu='button']")
const menuList = document.querySelector("[data-menu='list']")
const eventos = ['click', 'touchstart']

if(menuButton){
    function openMenu(event){
        menuButton.classList.toggle('active')
        menuList.classList.toggle('active')
        clickOutside(menuList, eventos, () => {
            menuButton.classList.remove('active')
            menuList.classList.remove('active')
        })
    }
    
    eventos.forEach(userEvent => {
        menuButton.addEventListener(userEvent, openMenu)
    })
}