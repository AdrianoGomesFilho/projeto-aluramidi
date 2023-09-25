const listaDeTeclas = document.querySelectorAll('input[type=button]');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  tecla.onkeydown = function () {
    tecla.classList.add('ativa');
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}