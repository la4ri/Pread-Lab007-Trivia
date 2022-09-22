export default () => {
    const container = document.createElement('div');
    container.classList.add('homeContainer');
  
    const template = `
    <header class="comeco"></header>
    <h1 class="quizz">
    QUIZZ - LÓGICA DE PROGRAMAÇÃO
    </h1>
    <p class="texto1">
    A linguagem da lógica tem como objeto de estudo as Proposições. 
    A Proposição é uma sentença declarativa que pode ser interpretada como verdadeira ou falsa, mas não ambos. Uma proposição não pode ser uma sentença ambígua.
    </p>
    <p class="texto1">
    Com isso, vamos treinar um pouco?
    </p>
    <div  class="botao">
    <a href="/#quizz"> Iniciar Quizz </a> 
    </div>
  <footer class="rodape">Desenvolvido por: </footer>
    `
  
    container.innerHTML = template;
  
    return container;
  }