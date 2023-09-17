
// function colocaNumeroTela (numeroInformado) {
//     document.querySelector('#visor').value += numeroInformado;
//   }
  
// const listaDeTeclas = document.querySelectorAll('input[type="button"]');
  
//   for (let contador = 0; contador < listaDeTeclas.length; contador++) {
//     const tecla = listaDeTeclas[contador];
//     const numero = tecla.value;
    
//     tecla.onclick = function () {
//      colocaNumeroTela(numero);
//   }
//   }
  
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
  const tecla = listaDeTeclas[indice];
  
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}