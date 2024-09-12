/* var interruptor = 'on'

if(interruptor == 'on') {
  alert('A lampada esta ligada!')
} else {
  alert('A lampada esta desligada!')
}
*/

function horas() {
  let txt = document.getElementById('itxt')
  var hora = new Date().getHours()

  if (hora >= 6 && hora < 12) {
        txt.innerText =('BOM DIA!')
  } else if (hora >= 12 && hora < 18) {
        txt.innerText =('BOA TARDE!')
  } else if (hora >= 18 && hora < 23) {
        txt.innerText =('BOA NOITE!')
  } else {
        txt.innerText =('BOA MADRUGADA!')
  }
  txt.innerText += ` Aqui esta sua hora: ${ hora }`
}



function verificar() {
    let nome = document.getElementById('inome').value
    let res = document.getElementById ('res')

    if (nome == '' || nome == null) {
          alert ('Preencha de forma correta!')
          res.innerText = 'Preencha de forma correta!'
          res.style.color = 'red'
      } else {
          res.innerText = `Parabens ${nome}`
          res.style.color = 'green'

      }

}