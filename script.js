/*const originalArray = [1, 2, 3];
const modifiedArray = originalArray.map((num) => num * 2);

const myPromisse = new Promise((resolve, reject) => {
  const nome = "Mateus";

  if (nome === "Mateus") {
    resolve("Usuario Mateus Encontrado!");
  } else {
    reject("Usuário não encontrado!");
  }
});

myPromisse.then((data) => {
  console.log(data);
}); */

/*const products = [
  { productName: "Bicicleta", preco: 1200, stock: 5 },
  { productName: "Bolas", preco: 25, stock: 33 },
  { productName: "Capacete", preco: 35, stock: 12 },
  { productName: "Sapato", preco: 55, stock: 13 },
  { productName: "Camiseta", preco: 45, stock: 26 },
];

console.log(products);

function filtrarProducts(products, precoMinimo) {
  const produtosFiltrados = [];

  for (const produto of products) {
    if (produto.preco >= precoMinimo) {
      produtosFiltrados.push(produto);
    }
  }
  return produtosFiltrados;
}

const produtosFiltrados = filtrarProducts(products, 50);
console.log(produtosFiltrados); */

/*const carrinhoDeCompras = [];

function adicionarAoCarrinho(carrinhoDeCompras, produtos) {
  carrinhoDeCompras.push(produtos);
}

function calcularTotal(carrinhoDeCompras) {
  const total = carrinhoDeCompras.reduce(
    (total, produto) => total + produto.preco,
    0
  );
  return total;
}

adicionarAoCarrinho(carrinhoDeCompras, {
  nome: "Caderno",
  preco: 20,
});

adicionarAoCarrinho(carrinhoDeCompras, {
  nome: "Caneta",
  preco: 5,
});

adicionarAoCarrinho(carrinhoDeCompras, {
  nome: "Livro",
  preco: 50,
});

const total = calcularTotal(carrinhoDeCompras);
console.log(total); */

const usuarios = [
  { nome: "Marcelo", idade: 32, pontos: 170 },
  { nome: "Maria", idade: 25, pontos: 150 },
  { nome: "Jose", idade: 24, pontos: 275 },
  { nome: "Carlos", idade: 19, pontos: 370 },
  { nome: "Ana", idade: 30, pontos: 200 },
  { nome: "Rafael", idade: 28, pontos: 180 },
  { nome: "Juliana", idade: 49, pontos: 340 },
  { nome: "Roberto", idade: 40, pontos: 300 },
  { nome: "Larissa", idade: 22, pontos: 130 },
  { nome: "Eduardo", idade: 33, pontos: 260 },
  { nome: "Isabela", idade: 29, pontos: 190 },
  { nome: "Fernando", idade: 45, pontos: 320 },
  { nome: "Camila", idade: 26, pontos: 160 },
  { nome: "Gabriel", idade: 31, pontos: 240 },
  { nome: "Patricia", idade: 38, pontos: 280 },
];

document.addEventListener("DOMContentLoaded", function () {
  // Obtém a referência da tabela
  const tabelaUsuarios = document.getElementById("tabelaUsuarios");

  if (tabelaUsuarios) {
    // Obtém a referência do corpo da tabela
    const tbody = tabelaUsuarios.querySelector("tbody");

    // Preenche a tabela com os dados dos usuários
    usuarios.forEach((usuario) => {
      const row = tbody.insertRow();
      const cellNome = row.insertCell(0);
      const cellIdade = row.insertCell(1);
      const cellPontos = row.insertCell(2);

      cellNome.textContent = usuario.nome;
      cellIdade.textContent = usuario.idade;
      cellPontos.textContent = usuario.pontos;
    });
  } else {
    console.error("Elemento com ID 'tabelaUsuarios' não encontrado.");
  }
});

// Aqui está uma função com método filter
function filtrarPorIdade(usuarios, idadeMinima) {
  return usuarios.filter((usuario) => usuario.idade >= idadeMinima);
}
const idadeFiltrada = filtrarPorIdade(usuarios, 18);
//console.log(idadeFiltrada);
//-----------------------------------------------------------------------

// Aqui ele recebe o array da function filtrarPorIdade e devolve um array
// ordenado por pontos
function ordenarPorPontos(idadeFiltrada) {
  return idadeFiltrada.sort((a, b) => b.pontos - a.pontos);
}
const usuariosPorPontos = ordenarPorPontos(idadeFiltrada);
//console.log(usuariosPorPontos);
//-----------------------------------------------------------------------

// Aqui ele faz um método filter de idade e retorna apenas os Nomes em String
function filtrarPorIdade2(usuarios, idadeMinima, idadeMaxima) {
  return usuarios
    .filter(
      (usuario) => usuario.idade >= idadeMinima && usuario.idade <= idadeMaxima
    )
    .map((usuario) => usuario.nome);
}
const idadeFiltrada2 = filtrarPorIdade2(usuarios, 25, 33);
//console.log(idadeFiltrada2);
//-----------------------------------------------------------------------

/*function combinarFuncoes(filtrarPorIdade, ordenarPorPontos) {
  return (usuarios, idadeMinima) => {
    const idadeFiltrada3 = filtrarPorIdade(usuarios, idadeMinima);
    return ordenarPorPontos(idadeFiltrada3);
  };
}
const usuariosComMaisPontos = combinarFuncoes(
  filtrarPorIdade,
  ordenarPorPontos
)(usuarios, 35);
//console.log(usuariosComMaisPontos);
//-----------------------------------------------------------------------*/

// Sua função combinarFuncoes
function combinarFuncoes(filtrarPorIdade, ordenarPorPontos) {
  return (usuarios, idadeMinima) => {
    const idadeFiltrada = filtrarPorIdade(usuarios, idadeMinima);
    return ordenarPorPontos(idadeFiltrada);
  };
}

// Função para aplicar o filtro ao clicar no botão
function aplicarFiltro() {
  const idadeMinima = document.getElementById("nIdade").value;
  const usuariosFiltradosOrdenados = combinarFuncoes(
    filtrarPorIdade,
    ordenarPorPontos
  )(usuarios, idadeMinima);

  // Limpa a tabela antes de adicionar os resultados
  const tabelaUsuarios = document.getElementById("tabelaUsuarios");
  const tbody = tabelaUsuarios.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  // Adiciona os resultados na tabela
  usuariosFiltradosOrdenados.forEach((usuario) => {
    const row = tbody.insertRow();
    const cellNome = row.insertCell(0);
    const cellIdade = row.insertCell(1);
    const cellPontos = row.insertCell(2);

    cellNome.textContent = usuario.nome;
    cellIdade.textContent = usuario.idade;
    cellPontos.textContent = usuario.pontos;
  });
}
