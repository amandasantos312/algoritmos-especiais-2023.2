import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('\nN: ')
    let maior = 0

    for (let i = 0; i < n; i++) {
        const numero = get_positive_number('\nNum: ')

        if (numero > maior) {
            maior = numero
        }
    }
    print(`\nMaior: ${maior}`)
}
main()