alert("digite apenas os numeros do cep");
function descobrir() {
  let txt = document.getElementById("itxt").value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", `https://viacep.com.br/ws/${txt}/json/`);
  ajax.send();

  ajax.onload = function () {
    // let alerta =   document.getElementById('texto').innerHTML = this.responseText
    let obj = JSON.parse(this.responseText);
    let log = obj.logradouro;
    let loc = obj.localidade;
    let bairro = obj.bairro;
    let compl = obj.complemento;

    alert(`${log} , ${loc} , ${bairro} , ${compl}`);
  };
}
