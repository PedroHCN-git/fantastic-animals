export default function initAnimaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')
    
    function animaNumeros(){
        numeros.forEach(numero => {
            const total = +numero.innerText
            const incremento = Math.round(total / 100);
            let start = 0
            const timer = setInterval(() => {
                start = start + incremento;
                numero.innerText = start
                if (start > total){
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 25)
        })
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            animaNumeros()
        }
    }
    
    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation)
    
    observer.observe(observerTarget, {attributes: true})
}
