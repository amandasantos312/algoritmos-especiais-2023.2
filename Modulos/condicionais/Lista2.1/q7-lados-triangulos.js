import { question } from "readline-sync"

function main() {
    const lado1 = Number(question('\nLado1: '))
    const lado2 = Number(question('Lado2: '))
    const lado3 = Number(question('Lado3: '))

    if(eh_triangulo(lado1, lado2, lado3)) {
        console.log('\nSIM, forma um triângulo!')
        const tipo = verifica_tipo(lado1, lado2, lado3)
        console.log(`\nÉ do tipo ${tipo}!`)
    } else {
        console.log('\nNÃO forma um triângulo!')
    }
}

function eh_triangulo(l1, l2, l3) {
    return (l1 <= l2 + l3) && (l2 <= l1 + l3) && (l3 <= l1 + l2)
}

function verifica_tipo(l1, l2, l3) {
    if (eh_equilatero(l1, l2, l3)) {
        return 'Equilatero'
    } else if (eh_isosceles(l1, l2, l3)) {
        return 'Isosceles'
    } else {
        return 'Escaleno'
    }
}

function eh_equilatero(l1, l2, l3) {
    return l1 === l2 && l2 === l3
}

function eh_isosceles(l1, l2, l3) {
    return l1 === l2 || l2 === l3 || l1 === l3
}

main()