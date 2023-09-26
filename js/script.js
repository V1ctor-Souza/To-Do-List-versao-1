let taskInput = document.querySelector('#taskInput');
let btnEnviar = document.querySelector('.btnEnviar');
let resultados = document.querySelector('.resultados');
let receive = document.querySelector('.receive');

btnEnviar.addEventListener('click', ()=> {
    let valorInput = taskInput.value;
    if(!valorInput){
        return;
    }

    let containerPai = document.createElement('div');
    containerPai.classList.add('conteudos');
    resultados.appendChild(containerPai);

    let paragrafo = document.createElement('p');
    valorInput = document.createTextNode(valorInput);
    paragrafo.appendChild(valorInput);
    containerPai.appendChild(paragrafo);

    let concluir = document.createElement('div');
    concluir.classList.add('concluir');
    paragrafo.after(concluir);
    concluir.innerHTML = 'Concluir';

    let excluir = document.createElement('div');
    excluir.classList.add('excluir');
    concluir.after(excluir);
    excluir.innerHTML = 'X';

    concluir.addEventListener('click', function() {
        paragrafo.style.setProperty('text-decoration', 'line-through');
        paragrafo.style.setProperty('color', '#ccc');
        concluir.remove();
    });

    excluir.addEventListener('click', function() {
        paragrafo.remove();
        concluir.remove();
        excluir.remove();
    });

});