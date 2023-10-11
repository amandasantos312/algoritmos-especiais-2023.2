import {get_number, print} from "../../utils/inputs.js"

function main() {
    let numero = get_number('Numero: ')

    if (numero === 0) return 1

    let fat = 1

    while (numero > 1) {
        fat = fat * numero
        numero --
    }
    print(`Fatorial: ${fat}`)
}

main()