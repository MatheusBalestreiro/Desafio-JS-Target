document.getElementById('tabPadrao').click()

// Mudar de janelas

function abrirTab(event, idTab) {
  var conteudos = document.getElementsByClassName('conteudo')

  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none'
  }

  var tabs = document.getElementsByClassName('tab-button')

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace('ativo', '')
  }

  document.getElementById(idTab).style.display = 'block'
  event.currentTarget.className += ' ativo'
}

// Exercício 2

function verificaNumero() {
  let num = document.querySelector('#numInput2').value
  let a = 0
  let b = 1
  let c

  while (b < num) {
    c = a + b
    a = b
    b = c
  }

  if (b == num || num == 0) {
    document.querySelector('.Resp').innerText =
      'Pertence à sequência de Fibonacci.'
  } else {
    document.querySelector('.Resp').innerText =
      'Não pertence à sequência de Fibonacci.'
  }
}

// Exercício 3
function completarSeq() {
  document.querySelector('.DescA').innerText =
    'a) 1, 3, 5, 7, 9'  
  document.querySelector('.DescB').innerText =
    'b) 2, 4, 8, 16, 32, 64, 128'  
  document.querySelector('.DescC').innerText =
    'c) 0, 1, 4, 9, 16, 25, 36, 49'  
  document.querySelector('.DescD').innerText =
    'd) 4, 16, 36, 64, 100'
  document.querySelector('.DescE').innerText =
    'e) 1, 1, 2, 3, 5, 8, 13' 
  document.querySelector('.DescF').innerText =
    'f) 2,10, 12, 16, 17, 18, 19, 200'
  // Completa a sequencia
}

// Exercício 5

function inverterString() {
  const str = document.getElementById('numInput5').value
  let strInvertida = ''
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i]
  }
  document.getElementById('Resp5').innerHTML = strInvertida
}
