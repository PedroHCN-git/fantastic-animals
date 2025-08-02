import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistances = debounce(this.checkDistances.bind(this), 50);
    this.distances;
  }

  getDistance(){
    this.distances = [...this.sections].map((section) => {
      const ofsset = section.offsetTop;
      return {
        element: section,
        ofsset: Math.floor(ofsset - this.windowMetade)
      };
    });
    this.checkDistances();
  }

  checkDistances(){
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.ofsset){
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')){
        item.element.classList.remove('ativo');
      }
    });
  }

  init(){
    this.getDistance();
    this.checkDistances();
    window.addEventListener('scroll', this.checkDistances);
  }

  stop(){
    window.removeEventListener(this.checkDistances);
  }
}
