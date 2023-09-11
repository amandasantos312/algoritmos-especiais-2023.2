import { question } from "readline-sync"

function main() {
    const num = question('\nNumero de 2 digitos: ').split(' ').map(Number)

    const dez_uni = verificar_dez_uni(num)

    console.log(dez_uni)
}

function verificar_dez_uni(num) {
    const dez = Math.floor(num / 10)
    const uni = num % 10

    if (dez === uni) {
        return '\nDezena é igual a Unidade'
    } else {
        return '\nDezena é diferente da Unidade'
    }
}

main()