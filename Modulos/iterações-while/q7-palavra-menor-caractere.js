import {question } from "readline-sync"

function main() {
    let palavra = question('Palavra: ')
    let menor_palavra = palavra

    while (palavra.length != 7) {
        palavra = question('Palavra: ')
        
        if (palavra.length < menor_palavra.length) {
            menor_palavra = palavra
        }
    }
    console.log(`\nMenor Palavra: ${menor_palavra}`)
}
main()