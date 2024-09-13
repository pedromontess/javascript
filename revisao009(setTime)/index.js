//eventos de cronometragem
//setTimeout  = funçao que deve ser executado em X tempo especificado

//setInterval = ativa uma funçao a cada periodo de tempo

//funçao dentro de outra funçao com cronometragem

function start() {
  // let tempo = document.getElementById('itime')
  // tempo.innerText = `começou a contar`
  //ativa a funçao uma vez quando der o tempo
  //  global = setTimeout(function(){
  //  tempo.innerText = `executou o setTimeout`
  // },5000)

  
  globalInterval =  setInterval(function () {
    let cronometro = document.getElementById("itime");
    var soma = parseInt(cronometro.innerText) + 1;
    document.getElementById("itime").innerText = soma;
  }, 1000);
}
// pra limpar a contagem
function stop() {
  //    clearTimeout(global)
  clearInterval(globalInterval) 
}
