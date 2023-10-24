import { print } from "../utils/inputs.js"

function main () {

    for (let i = 33; i <= 255; i++) {
        const caractere = String.fromCharCode(i)
        const space = i < 100 ? '    ' : '   '

        print(`${i}${space}${caractere}`)
    }
}
main()