const tarefas = [
  { descricao: "Lorena", prioridade: 2, concluida: true },
  { descricao: "Maria", prioridade: 5, concluida: false },
  { descricao: "Jose", prioridade: 4, concluida: true },
  { descricao: "Carlos", prioridade: 9, concluida: false },
  { descricao: "Ana", prioridade: 3, concluida: true },
  { descricao: "Rafael", prioridade: 8, concluida: false },
  { descricao: "Juliana", prioridade: 1, concluida: false },
  { descricao: "Roberto", prioridade: 8, concluida: true },
  { descricao: "Larissa", prioridade: 7, concluida: false },
  { descricao: "Eduardo", prioridade: 3, concluida: true },
  { descricao: "Isabela", prioridade: 9, concluida: true },
  { descricao: "Fernando", prioridade: 5, concluida: false },
  { descricao: "Camila", prioridade: 6, concluida: false },
  { descricao: "Gabriel", prioridade: 10, concluida: true },
  { descricao: "Patricia", prioridade: 7, concluida: false },
];

let tabelaTarefas;
document.addEventListener("DOMContentLoaded", function () {
  tabelaTarefas = document.getElementById("tabelaTarefas");
});

let baixa;
let media;
let alta;

function preencherTabelaUsuarios() {
  const inputPrioridade = document.getElementById("nPrioridade").value;

  // Filtra as tarefas com base na prioridade
  const prioridadeFiltrada = filtraPorPrioridade(tarefas, inputPrioridade);

  if (tabelaTarefas) {
    const tbody = tabelaTarefas.querySelector("tbody");

    // Limpa a tabela antes de adicionar os resultados
    tbody.innerHTML = "";

    // Preenche a tabela com os dados das tarefas filtradas
    prioridadeFiltrada.forEach((tarefa) => {
      const row = tbody.insertRow();
      const cellDescricao = row.insertCell(0);
      const cellPrioridade = row.insertCell(1);
      const cellConcluida = row.insertCell(2);

      cellDescricao.textContent = tarefa.descricao;
      cellPrioridade.textContent = tarefa.prioridade;
      cellConcluida.textContent = tarefa.concluida;
    });
  } else {
    console.error("Elemento com ID 'tabelaTarefas' não encontrado.");
  }
}

const inputdaPrioridade = document.getElementById("nPrioridade").value;
function filtraPorPrioridade(tarefas, inputPrioridade) {
  const baixa = [];
  const media = [];
  const alta = [];

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (tarefa.prioridade <= 3) {
      baixa.push(tarefa);
      return false; // Não incluir em tarefasFiltradas, pois já foi adicionado a 'baixa'
    } else if (tarefa.prioridade >= 4 && tarefa.prioridade <= 7) {
      media.push(tarefa);
      return false; // Não incluir em tarefasFiltradas, pois já foi adicionado a 'media'
    } else if (tarefa.prioridade >= 8) {
      alta.push(tarefa);
      return false; // Não incluir em tarefasFiltradas, pois já foi adicionado a 'alta'
    }
    return true; // Incluir em tarefasFiltradas se não se encaixar nas condições acima
  });

  // Retorna o array correspondente à prioridade selecionada
  if (inputPrioridade <= 3) {
    return baixa;
  } else if (inputPrioridade >= 4 && inputPrioridade <= 7) {
    return media;
  } else if (inputPrioridade >= 8) {
    return alta;
  } else {
    // Retorna todas as tarefas se a prioridade não estiver dentro das categorias especificadas
    return tarefasFiltradas;
  }
}
