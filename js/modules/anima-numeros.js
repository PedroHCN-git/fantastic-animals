export default class AnimaNumeros {
  constructor(elementRef, numeros, observerClass){
    this.numeros = document.querySelectorAll(elementRef);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(numeros);
    this.handleMutation = this.handleMutation.bind(this);
  }


  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.round(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total){
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25);
  }

  animaNumeros(){
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  handleMutation(mutation){
    if (mutation[0].target.classList.contains(this.observerClass)){
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  init(){
    if (this.observerTarget && this.numeros.length)
      this.addMutationObserver();
  }
}
