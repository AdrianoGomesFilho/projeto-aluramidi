
function colocaNumeroTela (numeroInformado) {
    document.querySelector('#visor').value += numeroInformado;
  }
  
  const listaDeTeclas = document.querySelectorAll('input[type="button"]');
  
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const numero = tecla.value;
    
    tecla.onclick = function () {
     colocaNumeroTela(numero);
  }
  }
  