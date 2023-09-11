import { question } from "readline-sync"

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))
    const num3 = Number(question('Num3: '))
    const num4 = Number(question('Num4: '))
    const num5 = Number(question('Num5: '))

    const maior = verificar_maior(num1, num2, num3, num4, num5)
    const menor = verificar_menor(num1, num2, num3, num4, num5)
    
    console.log(`\nMaior: ${maior}`)
    console.log(`Menor: ${menor}`)
}

function verificar_maior(n1, n2, n3, n4, n5) {
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
        return n1
    } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
        return n2
    } else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
        return n3
    } else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
        return n4
    } else {
        return n5
    }
}

function verificar_menor (n1, n2, n3, n4, n5) {
    if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
        return n1
    } else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
        return n2
    } else if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
        return n3
    } else if (n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
        return n4
    } else {
        return n5
    }
}

main()