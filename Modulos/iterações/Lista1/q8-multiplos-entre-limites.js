import { question } from "readline-sync"

function main() {
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))
    const numero = Number(question('Numero: '))

    let atual = limite_inferior

    while (atual <= limite_superior) {
        if (atual % numero === 0) {
            console.log(atual)
        }
        atual++
    }
}
main()