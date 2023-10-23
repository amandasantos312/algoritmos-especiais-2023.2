import {get_number, print} from "../../utils/inputs.js"

function main () {
    const n = get_number('N: ')
    let i = 1

    while (i <= n) {
        if (eh_par(i)) {
            print(i)
        }
        i++    
    }
}

function eh_par(numero) {
    return numero % 2 === 0
}

main()