export default () => {
    const container = document.createElement('div');
    container.classList.add('quizzContainer');
  
    const template = `
    
    <header class="comeco"><a href="/#">Inicio</a></header>
    texto2
    <div class="container">
    <h1> Pergunta 01</h1>
    <p class="enunciado">enunciado</p>

    <input type="radio" id="opcao1" name="questao1" value="errada1">
    <label for="teste1"> opção 1 </label> <br>
    <input type="radio" id="opcao2" name="questao1" value="errada2">
    <label for="teste2"> opção 2 </label> <br>
    <input type="radio" id="opcao3" name="questao1" value="certa">
    <label for="teste3"> opção 3 </label> <br>
    <input type="radio" id="opcao4" name="questao1" value="errada3">
    <label for="teste4"> opção 4 </label> <br>
    <input type="radio" id="opcao5" name="questao1" value="errada4">
    <label for="teste5"> opção 5 </label> <br>
    </div>
    <footer class="rodape"></footer>
    
    `
  
    container.innerHTML = template;
  
    return container;

    
  }

  //var questao1_1 = document.getElementById(opcao1);
  //var questao1_2 = document.getElementById(opcao2);
  //var questao1_3 = document.getElementById(opcao3);
  //var questao1_4 = document.getElementById(opcao4);
  //var questao1_5 = document.getElementById(opcao5);

  //if (questao1_1.addEventListener("click")){
   // console.log(errada);
  //}