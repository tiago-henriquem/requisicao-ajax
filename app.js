var button = document.querySelector('.test')

button.addEventListener('click', function() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.github.com/users/tiago-henriquem')
  xhr.send()

  var deuCerto = new Promise(function(resolve, reject) {
    xhr.onreadystatechange = chegouDados()
    })

  console.log(xhr.responseText)
})