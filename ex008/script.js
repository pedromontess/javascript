function gerar() {
  let num = Number (document.getElementById('inum').value)
  let tab = document.getElementById('itabuada')
   if (num <= 0) {
    alert ('digite um numero')
      
   } else {
      let nt = 1
      tab.innerText = ``
        while (nt <= 10) {
          let item = document.createElement ('option')
          item.text = `${num} x ${nt} = ${num * nt}`
          tab.appendChild(item)
          nt++
      }
   }
}