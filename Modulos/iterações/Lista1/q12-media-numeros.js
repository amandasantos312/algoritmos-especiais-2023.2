import { question } from "readline-sync"

function main() {
    const n = Number(question('Qtd de numeros: '))

    let i = 0
    let soma = 0
    let media = 0

    while (i < n) {
        const n = Number(question('Numero: '))
        soma = soma + n
        i++
    }
    media = soma / n
    console.log(`\nMédia: ${media}`)
}

main()