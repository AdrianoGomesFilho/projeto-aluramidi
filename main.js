function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onlick = tocaSom;
    contador = contador + 1;
    console.log(contador);
}