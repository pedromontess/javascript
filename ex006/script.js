function carregar() {
  let msg = document.querySelector('div#msg')
  let data = new Date()
  let hora = data.getHours()
  
  // Atualiza o texto da mensagem com a hora atual
  if (hora >= 0 && hora < 6) {
      msg.innerText = `Boa Madrugada, agora são ${hora} horas`
      document.body.style.background = 'black'
  } else if (hora < 12) {
      msg.innerText = `Bom Dia, agora são ${hora} horas`
      document.body.style.background = 'yellow'
  } else if (hora <= 18) {
      msg.innerText = `Boa Tarde, agora são ${hora} horas`
      document.body.style.background = 'orange'
  } else {
      msg.innerText = `Boa Noite, agora são ${hora} horas`
      document.body.style.background = 'black'
  }
  

}
