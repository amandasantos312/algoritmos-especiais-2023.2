import { question } from "readline-sync"

function main() {
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (eh_primo(atual)) {
            console.log(atual)
        }
        atual++
    }
}

main()