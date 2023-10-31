import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('\nN: ')

    let atual = 1

    for(let i = 1; i <= n;) {
        print(atual)
        i++
        atual = atual + i
    }
        
}
main()