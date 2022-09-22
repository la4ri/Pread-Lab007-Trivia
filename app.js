import quizz from './quizz/quizz/quizz.js';
import home from './quizz/home/home.js';

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
      main.innerHTML = " ";
      switch (window.location.hash) {
        case "#quizz":
          main.appendChild(quizz());
          break;
        default:
          main.appendChild(home());
      }
    })
  }

  window.addEventListener("load", () => {
    main.appendChild(home());
    init();
  })