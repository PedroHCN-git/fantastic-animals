export default function initFetchBtc(){

    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector('.doacao')
        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch(erro => {
        console.log(erro);
    });

}



