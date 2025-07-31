import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(url, numeros){

  createAnimais(url);

  function animaisAnimaNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function createAnimais(url){
    try {
      const animaisJson = await (await fetch(url)).json();
      const gridNumeros = document.querySelector(numeros);
      animaisJson.forEach(animal => {
        const novoAnimal = createAnimal(animal);
        gridNumeros.appendChild(novoAnimal);
      });
      animaisAnimaNumeros();
    } catch (erro){
      console.log(erro);
    }
  }

  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

}

