import { get_positive_number } from "../../utils/inputs.js"
import { print_tabuada } from '../../utils/math.js'

function main () {
    const num = get_positive_number('Numero: ')

    print_tabuada(num, 'SOMA')
    print_tabuada(num, 'SUBTRACAO')
    print_tabuada(num, 'MULTIPLICACAO')
    print_tabuada(num, 'DIVISAO')
}

main()