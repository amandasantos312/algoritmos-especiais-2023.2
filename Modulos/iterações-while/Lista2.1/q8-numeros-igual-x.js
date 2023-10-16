/* Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo 
quando a soma de dois números consecutivos da lista for igual a X. */

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    const x = get_positive_number('\nX: ')

    let anterior = 0
    let atual

    while (!(anterior + atual === x)) {
        atual = get_positive_number('\nNum: ')

        if (anterior + atual === x) {
            break
        }

        anterior = atual
    }
    print(`Ultimos que a soma igual a X:`)
    print(anterior)
    print(atual)
}

main() 