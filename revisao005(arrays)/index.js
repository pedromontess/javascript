const frutas = ['maçã','banana','melão']
console.log(frutas [1])

const lista = ['arroz','feijão','macarrão','leite']
lista [4] = 'ovo'
let x = lista [3]
console.log (x)
/*
let carro = {marca:'Toyota',modelo: 'Corolla', ano: 2021}
const auto = [carro,'moto','jetski']
console.log(auto [0])
*/

//diff array/object
const arypessoa = ['Pedro','Montes', 18] //Array
const objpessoa = {nome:'Pedro',sobrenome:'Montes',idade: 18} //objeto
arypessoa.push('Brasil') // adicionar a ultima casa o item

objpessoa.nome
console.log(objpessoa.nome)
arypessoa[0]
console.log(arypessoa[1])


console.log(arypessoa.length) //quantidade
console.log(arypessoa[arypessoa.length -1]) //mostra sempre o ultimo
console.log (Array.isArray(arypessoa) ) // descobrir se é array
console.log (Array.isArray(objpessoa))
