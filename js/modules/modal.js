export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';

    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.eventTogleModal = this.eventTogleModal.bind(this);
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventTogleModal);
    this.botaoFechar.addEventListener('click', this.eventTogleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  toggleModal(){
    this.containerModal.classList.toggle(this.activeClass);
  }

  eventTogleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event){
    if (event.target === this.containerModal){
      this.toggleModal();
    }
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvents();
    }
    return this;
  }

}
