import { question } from "readline-sync"

function main() {
    const num1 = Number(question('Num1: '))
    const num2 = Number(question('Num2: '))

    const resto = calcula_resto(num1, num2)
    const opcao = verifica_resto(resto, num1, num2)
    
    console.log(`Resto: ${resto}`)
    console.log(`Resultado: ${opcao}`)
}

function calcula_resto(num1, num2) {
    return num1 % num2
}

function verifica_resto(resto, n1, n2) {
    if (resto === 1) {
        return n1 + n2 + resto    
    } else if (resto === 2) {
        return verifica_nums(n1, n2)
    } else if (resto === 3) {
        return (n1 + n2) * n1
    } else if (resto === 4) {
        return (n1 + n2) / n2
    } else {
        return (n1 * n1) + (n2 * n2)
    }
}

function verifica_nums(n1, n2){
    if (n1 % 2 === 0 && n2 % 2 === 0) {
        return 'Pares'
    } else {
        return 'Impares'
    }
}

main()