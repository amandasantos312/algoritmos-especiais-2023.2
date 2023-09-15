import { question } from "readline-sync"

function main() {
    const numero = question('Numero: ').split('.').map(Number)

    const num_arredondado = verificar_numero(numero[0], numero[1])

    console.log(`${num_arredondado}`)
}

function verificar_numero(inteira, decimal) {
    if (decimal >= 5) {
        return inteira += 1
    } else {
        return inteira
    }
}

main()