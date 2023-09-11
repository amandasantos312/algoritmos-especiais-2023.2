import { question } from "readline-sync"

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))

    const operacao = Number(question('Numero da Operacao: '))

    const resultado = verifica_operador(num1, num2, operacao)

    console.log(`\nResultado: ${resultado}`)
}

function verifica_operador(n1, n2, op) {
    if (op === 1) {
        return n1 + n2
    } else if (op === 2) {
        return n1 - n2
    } else if (op === 3) {
        return n1 * n2
    } else {
        return n1 / n2
    }
}

main()