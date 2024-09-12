
const pessoa = ['Pedro' , ' Montes' , 18 ] 
pessoa.pop() // remove o ultimo
pessoa.push('Qualquer Coisa') // adiciona a ultima
pessoa.shift() // remove o primeiro
pessoa.unshift('Bonitão') // adiciona ao primeiro
delete pessoa [2] // ao inves de excluir e redefinir as casas ele só remove e deixa undefined
pessoa.splice(1,0, ' item1','item2') //(seleciona a matriz,quantos elementos serao removidos,elementos adicionados a partir da matriz selecionada)
 document.getElementById('teste').innerText = pessoa.join(" ")

 
// concatenação de array
 const lista1 = ['arroz','feijão','carne']
 const lista2 = ['sabão em pó','detergente','sabonete']
 const lista3 = ['Chiclete','Chocolate','Biscoito']
 
 const superLista = lista1.concat(lista2,lista3)
 console.log(superLista)

 //alert(superLista)

 const jogadores = ['Biro Biro', 'Ribamar', 'Pelé','Maradona','Neymar','Messi','Vampeta','Dimitri',]
 const craques = jogadores.slice(2,6) //ponto 2 até o ponto 6. a ultima casa não conta
 jogadores.sort() // ordem alfabetica
 jogadores.reverse() //ordem ''desalfabetica''
// alert(jogadores)


const numeros = [43,56,32,11,4,7]
numeros.sort(function(a,b){return a - b}) //ordenação numerica

let txt = document.getElementById('txt')
function MaiorNumero(array) {
    return Math.max.apply(null,array)

}

function MenorNumero (array) {
    return Math.min.apply(null,array)
}
txt.innerText = MenorNumero(numeros) 

const maior20 = numeros.filter(filtragem)

function filtragem (value, index, array) {
    return value > 20
    numeros.sort( //numeros.sort(function(a,b){return a - b})
      function(a,b) {
        return a - b
      }
    )
}
alert(maior20)