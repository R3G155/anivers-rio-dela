let botao = document.getElementById("botao");
let contadorTexto = document.getElementById("contador");
let mensagem = document.getElementById("mensagem");

let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;

  if (cliques < 18) {
    contadorTexto.textContent = `Quantos anos você vai fazer ?: ${cliques}`;
  } else if (cliques === 18) {
    mensagem.innerHTML = `
      <p>Parabéns, meu amor! 🥳💕</p>
      <p>Hoje você completa 18 anos e meu coração transborda de alegria.</p>
      <p>Você é incrível, linda, inteligente e tem o dom de fazer tudo ficar mais leve e bonito.</p>
      <p>Sou muito grato por ter você na minha vida e poder celebrar esse momento ao seu lado.</p>
      <p>Que sua nova fase seja cheia de conquistas, amor, saúde e sorrisos.</p>
      <p>Te amo demais! 💖</p>
    `;
    mensagem.classList.remove("escondido");
    contadorTexto.textContent = "";
    botao.disabled = true;
  }
});
