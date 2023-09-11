import { question } from "readline-sync"

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))
    const num3 = Number(question('Num3: '))

    const maior = verificar_maior(num1, num2, num3)

    console.log(`\nMaior: ${maior}`)
}

function verificar_maior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1
    } else if (n2 > n1 && n2 > n3) {
        return n2
    } else {
        return n3
    }

}

main()