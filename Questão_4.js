let SP = 67836.43
let RJ = 36678.66
let MG = 29229.88
let ES = 27165.48
let Outros = 19849.53
let faturamentoTotal = SP + RJ + MG + ES + Outros 
console.log(faturamentoTotal)

let porcSP = (67836.43 * 100) / 180759.98
let porcRJ = (36678.66 * 100) / 180759.98
let porcMG = (29229.88 * 100) / 180759.98
let porcES = (27165.48 * 100) / 180759.98
let porcOutros = (19849.53 * 100) / 180759.98
let total = porcSP + porcRJ + porcMG + porcES + porcOutros

//resultados
alert(`\nSão Paulo: ${porcSP.toFixed(2)}%\n
       Rio de Janeiro: ${porcRJ.toFixed(2)}%\n
       Minas Gerais: ${porcMG.toFixed(2)}%\n
       Espirito Santo: ${porcES.toFixed(2)}%\n
       Demais estados: ${porcOutros.toFixed(2)}%
       Faturamento total: R$${total}`)
