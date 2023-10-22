import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    let a0 = get_positive_number('\nA0: ')
    const limite = get_positive_number('Limite: ')
    const r = get_positive_number('Razao: ')

    for ( ; a0 <= limite; ) {
        print(a0)
        a0 += r
    }
}
main()