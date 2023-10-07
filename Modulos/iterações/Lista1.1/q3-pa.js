import {get_number, print} from "../../utils/inputs.js"

function main() {

    let A0 = get_number('A0: ')
    const limite = get_number('Limite: ')
    const R = get_number('R: ')

    while (A0 <= limite) {
        print(A0)
        A0 += R
    }
}

main()