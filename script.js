const baseText   = document.querySelector("#baseText")
const sectFinal  = document.querySelector("section#sectionFinal")
const outputText = document.querySelector("#outputText")
const divErro    = document.querySelector("div#erro")

let output = ""
let decrypt = ""

function encrypt(){
    output = ""
    let myreverse = ""
    if (checkInput()) {
        for (let pos in baseText.value){
            switch(baseText.value[pos]){
                case 'a': output += 'l'; break
                case 'A': output += 'L'; break
                case 'b': output += 'c'; break
                case 'B': output += 'C'; break
                case 'c': output += 'b'; break
                case 'C': output += 'B'; break
                case 'd': output += 'j'; break
                case 'D': output += 'J'; break
                case 'e': output += 'i'; break
                case 'E': output += 'E'; break
                case 'f': output += 'h'; break
                case 'F': output += 'H'; break
                case 'g': output += 'g'; break
                case 'G': output += 'G'; break
                case 'h': output += 'f'; break
                case 'H': output += 'F'; break
                case 'i': output += 'e'; break
                case 'I': output += 'E'; break
                case 'j': output += 'd'; break
                case 'J': output += 'D'; break
                case 'k': output += 's'; break
                case 'K': output += 'S'; break
                case 'l': output += 'a'; break
                case 'L': output += 'A'; break
                case 'm': output += 'z'; break
                case 'M': output += 'Z'; break
                case 'n': output += 'x'; break
                case 'N': output += 'X'; break
                case 'o': output += 'w'; break
                case 'O': output += 'W'; break
                case 'p': output += 'q'; break
                case 'P': output += 'Q'; break
                case 'q': output += 'p'; break
                case 'Q': output += 'P'; break
                case 'r': output += 'u'; break
                case 'R': output += 'U'; break
                case 's': output += 'k'; break
                case 'S': output += 'K'; break
                case 't': output += 'y'; break
                case 'T': output += 'Y'; break
                case 'u': output += 'r'; break
                case 'U': output += 'R'; break
                case 'v': output += 'v'; break
                case 'V': output += 'V'; break
                case 'w': output += 'o'; break
                case 'W': output += 'O'; break
                case 'x': output += 'n'; break
                case 'X': output += 'N'; break
                case 'y': output += 't'; break
                case 'Y': output += 'T'; break
                case 'z': output += 'm'; break
                case 'Z': output += 'M'; break
                case '0': output += '0'; break
                case '1': output += '1'; break
                case '2': output += '2'; break
                case '3': output += '3'; break
                case '4': output += '4'; break
                case '5': output += '5'; break
                case '6': output += '6'; break
                case '7': output += '7'; break
                case '8': output += '8'; break
                case '9': output += '9'; break
                case ' ': output += ' '; break
                default: output  += baseText.value[pos]; break
            }
            //aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ
            console.log(`case '${output[pos]}': decrypt += ${baseText.value[pos]}; break`)
        }
        preencheOutput(output)
    }
}

function preencheOutput(res){
    sectFinal.style.display = 'block'
    outputText.value = res
}

function checkInput(){
    if (baseText.value == ""){
        divErro.style.display = 'block'
        divErro.innerHTML = "<p>Erro: Preencha o campo acima.</p>"
        return false
    } else {
        divErro.style.display = 'none'
        return true
    }
}