let arrayNomes = [];

function preencherArray(event) {
  event.preventDefault();

  const nome = document.getElementById("nomeArray").value;
  const idade = document.getElementById("idadeArray").value;

  arrayNomes.push({ nome: nome, idade: idade });
  atualizarLista();
}

function atualizarLista() {
  const listaNomes = document.getElementById("listaNomes");
  listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar

  arrayNomes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `Nome: ${item.nome}, Idade: ${item.idade}`;
    listaNomes.appendChild(li);
  });
}
