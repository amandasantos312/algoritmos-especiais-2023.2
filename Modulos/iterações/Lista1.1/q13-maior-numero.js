import {get_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_number('Qtd de Numeros: ')

    let i = 0
    let maior = 0

    while (i < n) {
        const numero = get_number('Numero: ')
        if (numero > maior) {
            maior = numero
        }
        i++
    }
    print(`\nMaior: ${maior}`)
}
main()