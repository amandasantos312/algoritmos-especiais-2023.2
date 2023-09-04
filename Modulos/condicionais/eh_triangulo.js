import { question } from "readline-sync"

function main() {
    const lado_a = Number(question('Lado A: '))
    const lado_b = Number(question('Lado B: '))
    const lado_c = Number(question('Lado C: '))

    if (eh_triangulo(lado_a, lado_b, lado_c)) {
        console.log('\nSim, é um triangulo!')
        const tipo = tipo_triangulo(lado_a, lado_b, lado_c)
        console.log(`\nEh do tipo ${tipo}`)
    } else {
        console.log('\nNão é um triangulo!')
    }

}

function eh_triangulo(a, b, c) {
    return (a <= b + c) && (b <= a + c) && (c <= a + b)
}

function tipo_triangulo(a, b, c) {
    if (eh_equilatero(a, b, c)) {
        return 'Equilatero'
    } else if (eh_isosceles(a, b, c)) {
        return 'Isosceles'
    } else {
        return 'Escaleno'
    }
}

function eh_equilatero(a, b, c) {
    return a === b && b === c
}

function eh_isosceles(a, b, c) {
    return !eh_equilatero(a, b, c) && (a === b || b === c || a === c)
}

main()