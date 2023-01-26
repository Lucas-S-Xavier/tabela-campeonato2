var primeira_rodada = document.getElementById ('primeira-rodada');
var segunda_rodada = document.getElementById ('segunda-rodada');
var terceira_rodada = document.getElementById ('terceira-rodada');
var quarta_rodada = document.getElementById('quarta-rodada')
var rodada1 = document.getElementById('rodada1')
var rodada2 = document.getElementById('rodada2')
var rodada3 = document.getElementById('rodada3')
var rodada4 = document.getElementById('rodada4')

function clickDireitaUm() {
    if (segunda_rodada.style.display = 'none') {
        segunda_rodada.style.display = 'block'
        primeira_rodada.style.display = 'none'
        rodada2.innerHTML = '2° Rodada'
    }
}

function clickEsquerdaDois() {
    if (segunda_rodada.style.display = 'block') {
        segunda_rodada.style.display = 'none'
        primeira_rodada.style.display = 'block'
    }
}

function clickDireitaDois() {
    if (terceira_rodada.style.display = 'none') {
        terceira_rodada.style.display = 'block' 
        segunda_rodada.style.display = 'none'
        rodada3.innerHTML = '3° Rodada'
    }
}


function clickEsquerdaTres() {
    if (segunda_rodada.style.display = 'none') {
        segunda_rodada.style.display = 'block'
        terceira_rodada.style.display = 'none'
    }
} 

function clickDireitaTres() {
    if (quarta_rodada.style.display = 'none') {
        quarta_rodada.style.display = 'block'
        terceira_rodada.style.display = 'none'
        rodada4.innerHTML = '4° Rodada'
    }
}

function clickEsquerdaQuatro() {
    if (terceira_rodada.style.display = 'none') {
        terceira_rodada.style.display = 'block'
        quarta_rodada.style.display = 'none'
    }
}