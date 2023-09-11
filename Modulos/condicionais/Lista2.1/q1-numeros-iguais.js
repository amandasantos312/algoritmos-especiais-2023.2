import { question } from "readline-sync"

function main() {
    
    const num1 = Number(question('Num1: '))
    const num2 = Number(question('Num2: '))
    const num3 = Number(question('Num3: '))

    const numeros = verifica_numeros(num1, num2, num3)

    console.log(`\nExiste ${numeros} numeros iguais`)
}

function verifica_numeros(n1, n2, n3) {
    if (n1 === n2 && n2 === n3) {
        return '3'
    } else if (n1 == n2 || n1 === n3 || n2 === n3) {
        return '2'
    } else {
        return '0'
    }
}
main()