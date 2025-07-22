import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(){
    
    const url = './animaisapi.json';
    fetchAnimais(url);
    
    async function fetchAnimais(url){
        try{
            const animaisJson = await (await fetch(url)).json();
            const gridNumeros = document.querySelector('.grid-numeros');
            animaisJson.forEach(animal => {
                const novoAnimal = createAnimal(animal);
                gridNumeros.appendChild(novoAnimal)
            });
            initAnimaNumeros();
        } catch (erro){
            console.log(erro)
        }
    }
    
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

}

