/* MMC Otimizado */

import { get_positive_number, print_inline, print } from "../../utils/inputs.js"

function main() {
    const num1 = get_positive_number('\nNumero1: ')
    const num2 = get_positive_number('Numero2: ')

    let maior
    let menor

    if (num1 > num2) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }

    let mmc = maior
    print_inline('* ')

    while(mmc % menor !== 0) {
        print_inline('* ')
        mmc = mmc + maior
    }

    print(`\nO MMC(${num1}, ${num2}) é ${mmc}`)
}
main()