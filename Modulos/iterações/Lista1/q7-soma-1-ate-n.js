import { question } from "readline-sync"

function main() {
    const n = Number(question('Numero: '))
    let atual = 0
    let soma = 0

    while (atual < n) {
        atual++
        soma = soma + atual
    }
    console.log(`\nSoma dos números: ${soma}`)
}
main()