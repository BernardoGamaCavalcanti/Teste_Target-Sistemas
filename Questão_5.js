let palavra = prompt(`Digite uma palavra`)
let arvalap = ''
for(let i = palavra.length ; i >= 0; i--) {
    arvalap += palavra.charAt(i)
}

alert(arvalap)