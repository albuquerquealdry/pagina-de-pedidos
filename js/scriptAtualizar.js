function fazPost(url) {
    let request = new XMLHttpRequest()
    request.open("PATCH", url, true)
  
    request.onload = function() {
        console.log(this.responseText)
    }
  
    return request.responseText
  }
  
  
  function cadastraUsuario() {
    event.preventDefault()
    let numberP = document.getElementById('numero').value
    let url = `http://localhost:3000/checkout/${numberP}`
    
  
  
    fazPost(url)
  }