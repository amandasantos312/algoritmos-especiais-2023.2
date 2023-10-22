import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    const n = get_positive_number('N: ')

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            print(i)
        }
    }
}
main()