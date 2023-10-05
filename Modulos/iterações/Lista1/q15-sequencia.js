import {get_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_number('N: ')

    let i = 1
    let atual = 1

    while (i <= n) {
        print(atual)
        i++
        atual = atual + i
    }
}

main()