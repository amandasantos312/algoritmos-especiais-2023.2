import {get_positive_number, print} from "../../utils/inputs.js"
import { is_even } from "../../utils/math.js"

function main() {
    const limite_inferior = get_positive_number('\nLimite Inferior: ')
    const limite_superior = get_positive_number('Limite Superior: ')

    let i = limite_inferior

    for (i; i <= limite_superior; i++) {
        if (!(is_even(i))) {
            print(i)
        }
    }
}
main()