import { question, questionNewPassword } from "readline-sync"

function main() {
    const opcao = Number(question('\nOpcao: '))
    const num1 = Number(question('Num1: '))
    const num2 = Number(question('Num2: '))
    const num3 = Number(question('Num3: '))

    console.log(verificar_opcao(opcao, num1, num2, num3))
}

function verificar_opcao(opcao, n1, n2, n3) {
    if (opcao === 1) {
        return n1
    } else if (opcao === 2) {
        return n2
    } else if (opcao === 3) {
        return n3
    } else {
        return `Número Inválido`
    }
}

main()