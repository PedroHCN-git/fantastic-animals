export default class Accordion {

  constructor(links){
    this.accordionList = document.querySelectorAll(links);
    this.activeClass = 'ativo';
  }

  activeAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.activeAccordion(item));
    });
  }

  init(){
    if (this.accordionList.length > 0) {
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }

}
