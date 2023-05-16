<<<<<<< HEAD
var codes = {
  "576308": {
    code: "aaab73pmsa7czuhw",
    password: "senha1"
  },
  "527671": {
    code: "aaab73pmvfgzxywe",
    password: "senha2"
  },
  // ... adicione os demais códigos e senhas aqui
};

var rescueForm = document.getElementById('rescueForm');
var result = document.getElementById('result');

rescueForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var idInput = document.getElementById('idInput').value.trim();
  var passwordInput = document.getElementById('passwordInput').value;

  if (codes.hasOwnProperty(idInput)) {
    var codeInfo = codes[idInput];
    if (passwordInput === codeInfo.password) {
      result.textContent = "Seu código resgatado é: " + codeInfo.code;
    } else {
      result.textContent = "Senha incorreta. Tente novamente.";
    }
  } else {
    result.textContent = "ID inválido. Por favor, insira um ID válido.";
  }
});
=======
// Seleciona todos os elementos com a classe "lote"
const lotes = document.querySelectorAll(".lote");

// Variável que guarda a terra selecionada
let terraSelecionada = null;

// Adiciona um event listener a cada lote
lotes.forEach(lote => {
  lote.addEventListener("click", () => {
    // Remove a classe "selecionado" de todos os lotes
    lotes.forEach(lote => {
      lote.classList.remove("selecionado");
    });

    // Adiciona a classe "selecionado" ao lote clicado
    lote.classList.add("selecionado");

    // Atualiza a variável "terraSelecionada" com a terra escolhida
    terraSelecionada = lote.getAttribute("data-terra");
  });
});

// Seleciona o botão "Calcular" e o input de colheitas
const calcularButton = document.querySelector("#calcularButton");
const colheitasInput = document.querySelector("#colheitasInput");

// Adiciona um event listener ao botão "Calcular"
calcularButton.addEventListener("click", () => {
  // Verifica se a terra foi selecionada
  if (terraSelecionada !== null) {
    const colheitas = parseInt(colheitasInput.value);
    let custo = 0;
    let lucro = 0;

    // Calcula o custo e o lucro de acordo com a terra selecionada
    switch (terraSelecionada) {
      case "marrom":
        custo = 8000;
        lucro = 12000;
        break;
      case "vermelha":
        custo = 15000;
        lucro = 35000;
        break;
      case "preta":
        custo = 20000;
        lucro = 80000;
        break;
      case "dourada":
        custo = 30000;
        lucro = 150000;
        break;
      case "ametista":
        custo = 40000;
        lucro = 280000;
        break;
      case "sombra":
        custo = 50000;
        lucro = 650000;
        break;
    }

    const totalLucro = lucro * colheitas - custo;
    const resultado = document.querySelector("#resultado");

    // Exibe o resultado na página
    resultado.innerHTML = `Seu lucro diário será de R$ ${totalLucro.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } else {
    alert("Selecione uma terra antes de calcular o lucro.");
  }
});
>>>>>>> d8411618c05a2c3972bf135a4ceb3d64729b68d3
