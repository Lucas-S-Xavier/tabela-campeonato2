var primeira_rodada = document.getElementById ('primeira_rodada')
var segunda_rodada = document.getElementById ('segunda_rodada')

function clickDireita() {
    if (segunda_rodada.style.display = 'none') {
        segunda_rodada.style.display = 'block'
        primeira_rodada.style.display = 'none'
    }
}

function clickEsquerda() {
    if (segunda_rodada.style.display = 'block') {
        segunda_rodada.style.display = 'none'
        primeira_rodada.style.display = 'block'
    }
}