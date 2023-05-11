function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); /* Que será 9 */

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = '#som_{instrumento}'

    tecla.onclick = function () {
        tocaSom ('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}