import { question } from "readline-sync"

function main() {
    const a = Number(question('a: '))
    const b = Number(question('b: '))
    const c = Number(question('c: '))

    const delta = calcular_delta(a, b, c)

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / 2 * a
        const x2 = (-b - Math.sqrt(delta)) / 2 * a
        console.log(`\nX1: ${x1}`)
        console.log(`X2: ${x2}`)
    } else if (delta === 0) {
        const x1 = -b / (2 * a)
        console.log(`\nX1: ${x1.toFixed(1)}`)
    } else {
        console.log('\nNão possui raiz real')
    }
}

function calcular_delta(a, b, c) {
    return (b**2) - 4 * a * c
}

main()