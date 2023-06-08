function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); /* Que serão 9 teclas*/

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = function () { //Função anonima
        tocaSom ('#som_tecla_pom');
    } 

    contador = contador + 1;

    console.log(contador);
}