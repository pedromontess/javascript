let contador = 0;
const txt = document.getElementById("itxt");
const add = document.getElementById("ibutao");
const main = document.getElementById("AreaLista");

// Função para adicionar uma nova tarefa
function AdicionarTarefa() {
  const valorInput = txt.value.trim();
  if (valorInput) {
    contador++;
    const novoItem = `
      <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
          <i id="icone${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
          <button id="deletar${contador}" onclick="deletar(${contador})" class="delete">
            <i class="mdi mdi-delete-circle"></i> Delete
          </button>
        </div>
      </div>`;
    main.innerHTML += novoItem;
    // Limpa o campo de input e dá foco novamente
    txt.value = "";
    txt.focus();
  }
}

// Função para deletar uma tarefa
function deletar(id) {
  const tarefa = document.getElementById(id);
  tarefa.remove();
}

// Função para marcar uma tarefa como concluída
function marcarTarefa(id) {
  const item = document.getElementById(id);
  const icone = document.getElementById(`icone${id}`);
  if (item.classList.contains("item")) {
    item.classList.add("item-nome-marcado");
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle-outline");
  }
}

// Adiciona um evento para adicionar a tarefa ao pressionar a tecla Enter
txt.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    add.click();
  }
});
