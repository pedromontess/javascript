let lista = document.getElementById('ilista')
let res = document.getElementById('res')
let valores = []

// Função para verificar se o número está entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = Number(document.getElementById('inum').value)
    let campoNum = document.getElementById('inum') // Referência ao campo de entrada

    if (isNumero(num) && !inLista(num, valores)) {
        valores.push(num) // Adiciona o número ao array
        let item = document.createElement('option') // Cria um novo item de lista
        item.text = `Valor ${num} adicionado` // Define o texto do item
        lista.appendChild(item) // Adiciona o item à lista no DOM
        res.innerText = '' // Limpa o campo de resultado
    } else {
        alert('Valor inválido ou já inserido na lista')
    }

    campoNum.value = '' // Limpa o campo de entrada
    campoNum.focus() // Coloca o foco de volta no campo de entrada
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione Valores antes de Finalizar')
    } else {
        let tot = valores.length

        res.innerText = '' // Limpa o campo de resultado
        res.innerText += `Ao todo, temos ${tot} números` // Exibe o total de números
    }
}
