import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('\nN: ')
    let soma = 0
    let i = 0

    for (i; i < n; i++) {
        const numero = get_positive_number('\nNum: ')
        soma = soma + numero
    }
    const media = soma / i
    print(`\nMedia: ${media}`)
}
main()