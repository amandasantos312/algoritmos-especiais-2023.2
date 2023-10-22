import {get_positive_number, print} from "../../utils/inputs.js"

function main() {
    let num = get_positive_number('\nNum: ')

    if (num === 0) return 1

    let fat = 1
    for (fat; num > 1; num --) {
        fat = fat * num
    }
    print(`Fatorial: ${fat}`)
}
main()