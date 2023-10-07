import {get_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_number('N: ')

    let i = 0
    let maior_quadrado = 0

    while (i * i <= n) {
        maior_quadrado = i * i
        i++
    }
    print(`\nMaior Quadrado: ${maior_quadrado}`)
}

main()