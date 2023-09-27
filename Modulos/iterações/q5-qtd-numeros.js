import {question} from "readline-sync"

function main() {
    let numero = Number(question('Numero: '))
    let contador = 1

    while (numero % 7 != 0) {
        numero = Number(question('Numero: '))
        contador++
    }
    console.log(`\nNúmeros Digitados: ${contador}`)
}
main()