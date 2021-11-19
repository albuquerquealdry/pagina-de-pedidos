function fazPost(url, body) {
  console.log("Body=", body)
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function() {
      console.log(this.responseText)
  }

  return request.responseText
}


function cadastraUsuario() {
  event.preventDefault()
  let url = " https://core-api-delivery.herokuapp.com/delivery"
  let nome = document.getElementById('name').value
  let numero = document.getElementById("numero").value
  let casa = document.getElementById("casa").value
  let cep =  document.getElementById("cep").value
  let type = document.getElementById("entrega").value
  console.log(nome)
  console.log(numero)

  body = {
      "name" : nome,
      "numberP" : numero,
      "numberC" : casa,
      "cep" : cep,
      "type" : type
  }

  fazPost(url, body)
}