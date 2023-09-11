import { question } from "readline-sync"

function main() {
    const num = Number(question('\nNumero: '))

    console.log(`O numero é ${verifica_numero(num)}`)
}

function verifica_numero(num) {
    if (num % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

main()