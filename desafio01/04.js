var capital = 1000
var taxa_fixa = 0.125
var tempo = 3

var motante_calculo1 =  1 + taxa_fixa

var motante_elevado = motante_calculo1 ** tempo

motantante_Final = capital * motante_elevado

console.log (' O valor do juros composto é:', motantante_Final)