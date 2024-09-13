//JSON = JavaScript Object Notation
// forma de converter object em texto ou ao contrario

//JSON.parse() = Converte texto no padrão JSON em object
//JSON.stringify() = Converte object em texto padrão JSON

//object car
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2001,
};
//conversão pra string
let txt = document.getElementById("area");
let texto = JSON.stringify(carro);
txt.innerHTML = texto;

//conversão pra obj
let obj = JSON.parse(texto);
console.log(obj.modelo);
