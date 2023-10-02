import {get_number, print} from "../../utils/inputs.js"

function main() {
    const limite_inferior = get_number('Limite Inferior: ')
    const limite_superior = get_number('Limite Superior: ')

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if(eh_impar(atual)) {
            print(atual)
        }
        atual++
    }
}

function eh_impar(numero) {
    return numero % 2 === 1
}

main()