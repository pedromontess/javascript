alert ('digite apenas os numeros do cep')
function descobrir() {
  let txt = document.getElementById("itxt").value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", `https://viacep.com.br/ws/${txt}/json/`);
  ajax.send();

  ajax.onload = function () {
    let alerta =   document.getElementById('texto').innerHTML = this.responseText
   // alert (alerta)
  };
}
