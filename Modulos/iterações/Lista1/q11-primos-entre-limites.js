import { get_number, print } from "../../utils/inputs.js"
import {is_prime} from "../../utils/math.js"

function main() {
    const limite_inferior = get_number('Limite Inferior: ')
    const limite_superior = get_number('Limite Superior: ')

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (is_prime(atual)) {
            print(atual)
        }
        atual++
    }
}

main()