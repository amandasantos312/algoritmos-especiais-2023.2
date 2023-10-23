/* Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e 
escreva os N termos da PA. Ler o valor de N. */

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('N: ')
    const r = get_positive_number('Razao: ')
    let a0 = get_positive_number('A0: ')

    for (let i = 1; i <= n; i++) {
        print(a0)
        a0 += r
    }
}
main()