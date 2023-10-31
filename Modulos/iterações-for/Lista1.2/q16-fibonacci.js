/* Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci 
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2. */

import {get_positive_number, print, print_inline} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('\nN: ')

    let count = 2
    let anterior1 = 0
    let anterior2 = 1

    print_inline(anterior1)
    print_inline(' ' + anterior2)

    for (count; count < n; count++) {
        let proximo = anterior1 + anterior2
        print_inline(' ' + proximo)

        anterior1 = anterior2
        anterior2 = proximo
    }
}
main()