/*
for = repetiçao; variavel i = 0 ; o loop continua enquanto a condiçao for verdadeira; a cada alteraçao é incrementado o que eu pedi
 for (let i = 0 ; i < 10 ; i++) {
  console.log(i)
}
*/
//let anos = new Date().getFullYear();
/*
for (let i = anos; i >= 1900; i--) {
  let select = document.getElementById("iano")
  select.innerHTML += `<option value="${i}">${i}</option>`;
}
*/

const carros = ["gol", "fusca", "brasilia", "chevette"];

let tamanho = carros.length;

for (let c = 0; c <= tamanho; c++) {
  console.log(carros[c])
}
