import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('N: ')
    const limite_inferior = get_positive_number('\nLimite Inferior: ')
    const limite_superior = get_positive_number('Limite Superior: ')

    let i = limite_inferior

    for (i; i <= limite_superior; i++) {
        if (i % n === 0) {
            print(i)
        }
    }
}
main()