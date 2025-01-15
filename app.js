
const listaDeFilmes = document.getElementById('lista_de_filmes');
const inputFilme = document.getElementById('input_filme');
const buttonAdd = document.getElementById('adicionar_Button');

inputFilme.addEventListener('input', function (){
    const filme = inputFilme.value;
    console.log(filme);
});

buttonAdd.addEventListener('click', function (){
    
    if (inputFilme.value === '') {
        alert('Digite seu filme');

    } else {

        const novoFilme = document.createElement('li');
        novoFilme.textContent = inputFilme.value;
        novoFilme.classList.add('caixafilme'); 

        listaDeFilmes.appendChild(novoFilme);
        inputFilme.value = '';
    }
});






