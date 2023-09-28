import { question } from "readline-sync"

function main() {
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (eh_par(atual)) {
            console.log(atual)
        }
        atual++
    }
}

function eh_par(numero) {
    return numero % 2 === 0
}

main()