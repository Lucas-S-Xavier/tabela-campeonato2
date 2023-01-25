var primeira_rodada = document.getElementById ('primeira-rodada')
var segunda_rodada = document.getElementById ('segunda-rodada')
var numero_rodadas = document.getElementById ('numero-rodadas')

function clickDireita() {
    if (segunda_rodada.style.display = 'none') {
        segunda_rodada.style.display = 'block'
        primeira_rodada.style.display = 'none'
        numero_rodadas.innerHTML = '2° Rodada'
    }
}

function clickEsquerda() {
    if (segunda_rodada.style.display = 'block') {
        segunda_rodada.style.display = 'none'
        primeira_rodada.style.display = 'block'
        numero_rodadas.innerHTML = '1° Rodada'
    }
}