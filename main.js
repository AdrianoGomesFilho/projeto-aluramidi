function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
//A função anônima seria uma chamada em sala de aula. Ao abrir a porta o professor chama o nome de todos os alunos em sala (0, 1, 2, 3 etc). Em seguida, ao entrar o diretor, o mesmo seleciona um aluno qualquer (exemplo, o 2). Sem o professor ter realizado a chamada no início (ao abrir a porta) o diretor nunca poderia chamar o aluno 2, pois ele antes não foi nomeado. Essa técnica é chamada de closure
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}