import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('\nN: ')
    let soma = 0

    for (let i = n; i <= n; i++) {
        print(i)
        soma = soma + i
    }

    print(`Soma dos numeros: ${soma}`)
}
main()