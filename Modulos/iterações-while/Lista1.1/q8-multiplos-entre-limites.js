import {get_number, print} from "../../utils/inputs.js"

function main() {
    const limite_inferior = get_number('Limite Inferior: ')
    const limite_superior = get_number('Limite Superior: ')
    const numero = get_number('Numero: ')

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (atual % numero === 0) {
           print(atual)
        }
        atual++
    }
}

main()