  function contar () {
  let ini = Number (document.getElementById ('txti').value)
  let fim = Number (document.getElementById ('txtf').value)
  let passo = Number (document.getElementById ('txtp').value)
  let res = document.getElementById ('res')

      if (ini == 0 || fim== 0 || passo== 0)  {
          alert ('[ERRO]')
      } else {
          res.innerText = 'Contando:'
          if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO = 1');
            passo = 1;
        }
        
          if (ini < fim) {
            //contagem crescente
          for (ini ; ini<= fim ; ini += passo) {
                  res.innerText += ` ${ini}`
              }           
            } else {
                  //contagem regressiva
                for (ini; ini >= fim; ini -= passo) {
                    res.innerText += ` -${ini}` 
                  }
                }
              }
  }