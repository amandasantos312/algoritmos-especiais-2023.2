import { question } from "readline-sync"

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))

    console.log(verificar_menor_maior(num1, num2))
}

function verificar_menor_maior(n1, n2) {
    if (n1 > n2) {
        return `Menor: ${n2} e Maior: ${n1}`
    } else {
        return `Menor: ${n1} e Maior: ${n2}`
    }
}
main()