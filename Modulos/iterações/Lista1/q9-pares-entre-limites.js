import {get_number} from "../../utils/inputs.js"
import { eh_par } from "../../utils/math.js"

function main() {
    const limite_inferior = get_number('Limite Inferior: ')
    const limite_superior = get_number('Limite Superior: ')

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (eh_par(atual)) {
            console.log(atual)
        }
        atual++
    }
} 

main()