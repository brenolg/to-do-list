let botaoCriar = document.querySelector('#criar-tarefa');
botaoCriar.addEventListener('click', function(){
    let inputText = document.querySelector('#texto-tarefa');
    let tarefas = document.createElement('li');
    tarefas.className = "tarefas";
    document.querySelector('ol').appendChild(tarefas);
    tarefas.innerHTML = inputText.value;
    inputText.value = '';
})