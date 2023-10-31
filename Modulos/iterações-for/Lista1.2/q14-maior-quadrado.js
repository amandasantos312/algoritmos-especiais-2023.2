import { get_positive_number, print } from "../../utils/inputs.js";

function main() {
    const n = get_positive_number('\nN: ')
    let maior_quadrado = 0

    for (let i = 0; i * i <= n; i++) {
        maior_quadrado = i * i
    }

    print(`\nMaior Quadrado: ${maior_quadrado}`)
}
main()