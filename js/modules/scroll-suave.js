export default class ScrollSuave {
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if (options){
      this.options = options;
    } else {
      this.options = {behavior: 'smooth', block: 'start'};
    }

    // bind define qual será a referência de this na função
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length > 0){
      this.addLinkEvent();
    }
    return this;
  }
}
