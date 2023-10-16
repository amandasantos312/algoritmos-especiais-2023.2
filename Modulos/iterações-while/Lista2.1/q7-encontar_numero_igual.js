/* Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido. */

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    const num = get_positive_number('\nNum: ')

    let gemeo = 0

    while (gemeo <= num) {
        print(gemeo)

        if (gemeo === num) {
            print(`\nParou em ${gemeo} porque é igual ao numero digitado!`)
        }

        gemeo++
    }
}
main()