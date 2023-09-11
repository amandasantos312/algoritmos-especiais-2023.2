import { question } from "readline-sync"

function main() {
    const num = Number(question('\nNumero: '))

    console.log(`O numero é ${verificar_numero(num)}`)
}

function verificar_numero(num) {
    if (num % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

main()