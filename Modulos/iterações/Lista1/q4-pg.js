import { question } from "readline-sync"

function main() {

    let A0 = Number(question('A0: '))
    const limite = Number(question('Limite: '))
    const R = Number(question('R: '))

    while (A0 < limite) {
        console.log(A0)
        A0 *= R
    }
}

main()