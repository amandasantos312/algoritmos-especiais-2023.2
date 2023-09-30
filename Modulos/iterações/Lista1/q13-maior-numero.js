import { question } from "readline-sync"

function main() {
    const n = Number(question('Qtd de Numeros: '))

    let i = 0
    let maior = 0

    while (i < n) {
        const numero = Number(question('Numero: '))
        if (numero > maior) {
            maior = numero
        }
        i++
    }
    console.log(`\nMaior: ${maior}`)
}
main()