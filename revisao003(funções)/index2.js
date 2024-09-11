// FUNÇÃO PARA CONVERSÃO

function RealParaDolar(real, cotaçaodolar) {
    return real * cotaçaodolar
}
//FUNÇÃO PARA RECEBER OS DADOS E CHAMAR A CONVERSÃO
function conversao() {
  let num = Number(document.getElementById('inum').value)
  let res = document.getElementById('res')
    if(num > 0) {
      let cotacao = 5
      let conversao = RealParaDolar (num,cotacao)
      res.innerText = `Aqui está sua conversão: $ ${conversao.toFixed(2)}`
    } else {
      alert('Preencha de forma correta!')
    }
}