import {question} from "readline-sync"

function main() {
    let numero = Number(question('Numero: '))

    while (numero % 7 != 0) {
        numero = Number(question('Numero: '))
    }
}
main()