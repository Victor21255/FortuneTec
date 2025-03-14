function abrirCaixa(categoria, valor) {
  let premio;
  const random = Math.random() * valor;

  if (categoria === 'Placa de Vídeo') {
    if (random > 7000) premio = '🚀 RTX 4090!';
    else if (random > 5000) premio = '🔥 RTX 4080!';
    else if (random > 3000) premio = '💥 RTX 3070!';
    else if (random > 1500) premio = '⚡ GTX 1660 Super!';
    else premio = '💻 GTX 1050 Ti!';
  }

  if (categoria === 'Processador') {
    if (random > 4000) premio = '🎉 i9 13900K!';
    else if (random > 1500) premio = '🔥 Ryzen 5 5600X!';
    else premio = '💻 i5 10400F!';
  }

  if (categoria === 'PC Completo') {
    if (random > 12000) premio = '🎉 PC Monstro!';
    else if (random > 5000) premio = '🔥 PC Intermediário!';
    else premio = '💻 PC Básico!';
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <h3>Parabéns!</h3>
    <p>Você ganhou: <strong>${premio}</strong></p>
    <button class="btn" onclick="fecharResultado()">Fechar</button>
  `;
}

function fecharResultado() {
  document.getElementById('resultado').style.display = 'none';
}
