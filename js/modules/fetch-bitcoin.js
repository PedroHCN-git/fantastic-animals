export default function fetchBtc(url, elementRef){

  fetch(url)
    .then(response => response.json())
    .then(bitcoin => {
      const btcPreco = document.querySelector(elementRef);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch(erro => {
      console.log(erro);
    });

}
