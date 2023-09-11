import { question } from "readline-sync"

function main() {
    const num = question('\nNumero de 2 digitos: ').split(' ').map(Number)

    const dez_uni = verifica_dez_uni(num)

    console.log(dez_uni)
}

function verifica_dez_uni(num) {
    const dez = Math.floor(num / 10)
    const uni = num % 10

    if (dez === uni) {
        return '\nDezena é igual a Unidade'
    } else {
        return '\nDezena é diferente da Unidade'
    }
}

main()