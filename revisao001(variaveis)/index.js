/*
let: Use quando a variável vai ter seu valor alterado várias vezes durante a execução do código. Ideal para contadores de loops, acumuladores, e outras variáveis cujo valor muda ao longo do tempo.

const: Use para variáveis cujo valor não deve mudar após a atribuição inicial. É ideal para valores constantes, como configurações ou referências a objetos que não precisam ser reatribuídos (mas suas propriedades ainda podem ser modificadas).

var: Evite usar var na maioria dos casos. Tem escopo de função e pode causar confusão com hoisting e redeclaração. Prefira let e const por serem mais previsíveis e seguros.
*/ 


//DECLARAÇÃO DE VARIAVEIS
var a,b,c
var nome, sobrenome

//ATRIBUIÇÃO DOS VALORES
a = 2
b = 3
c = a + b
nome = 'Pedro'
sobrenome = 'Montes'
//console.log(c)
console.log(nome,sobrenome,c)