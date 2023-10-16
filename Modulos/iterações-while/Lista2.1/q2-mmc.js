/* Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos. */

import { get_positive_number, print, print_inline} from "../../utils/inputs.js"

function main() {
    const num1 = get_positive_number('\nNumero 1: ')
    const num2 = get_positive_number('Numero 2: ')

    let mmc = num1

    print_inline('* ')

    while(mmc % num1 !== 0 || mmc % num2 !== 0) {
        print_inline('* ')
        mmc++
    }

    print(`\nO MMC (${num1},${num2}) é ${mmc}`)
}
main()