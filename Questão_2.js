let term1 = 0
let term2 = 1
let term3 = 0
let cont  = 3
let result = []

let number = Number(prompt(`Digite um número e descubra se ele faz parte da sequencia de Fibonacci `))

while(cont <= number) {
    term3 = term1 + term2
    result.push(term3)
    term1 = term2
    term2 = term3
    cont += 1
}

let search = result.includes(number)
if(search === false) {
    alert("O número digitado não pertence à sequencia")
} else {
    console.log("O número digitado pertence à sequencia")
}
