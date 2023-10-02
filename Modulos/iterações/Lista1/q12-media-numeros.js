import {get_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_number('Qtd de numeros: ')

    let i = 0
    let soma = 0
    let media = 0

    while (i < n) {
        const n = get_number('Numero: ')
        soma = soma + n
        i++
    }
    media = soma / n
    print(`\nMédia: ${media}`)
}

main()