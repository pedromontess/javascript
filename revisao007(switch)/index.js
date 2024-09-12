function verificacor() {
  let cor = document.getElementById('icor').value
    
      switch (cor) {
        case 'azul':
            document.body.style.backgroundColor = 'blue'
            
          break

        case 'vermelho':
          document.body.style.backgroundColor = 'red'

          break

        case 'amarelo':
          document.body.style.backgroundColor = 'yellow'

          break

        case 'roxo':
          document.body.style.backgroundColor = 'purple'

          break

        case 'marrom':
          document.body.style.backgroundColor = 'brown'

          break

      

        default:
          alert ('você nao inseriu uma cor correta')
      }
}
