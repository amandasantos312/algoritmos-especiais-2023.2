import { question } from "readline-sync"

function main() {
    let numero = Number(question('Numero: '))

    if (numero === 0) return 1

    let fat = 1

    while (numero > 1) {
        fat = fat * numero
        numero --
    }
    console.log(`Fatorial: ${fat}`)
}

main()