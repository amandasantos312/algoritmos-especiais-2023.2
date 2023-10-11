import {get_number_min, print, print_inline} from "../../../utils/inputs.js"

function main() {
    const qtd = get_number_min('\nNumero (>=2): ', 2)

    let count = 2
    let ant_1 = 0
    let ant_2 = 1

    print('\n----> SEQUENCE: <----')
    print_inline(ant_1)
    print_inline(' ' + ant_2)

    while (count < qtd) {
        let next = ant_1 + ant_2
        print_inline(' ' + next)

        ant_1 = ant_2
        ant_2 = next

        count++
    }
    print('\n---------------------')
}
main()