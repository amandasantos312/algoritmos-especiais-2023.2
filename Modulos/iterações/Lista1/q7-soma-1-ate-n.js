import {get_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_number('Numero: ')
    let atual = 0
    let soma = 0

    while (atual < n) {
        atual++
        soma = soma + atual
    }
    print(`\nSoma dos números: ${soma}`)
}
main()