import { question } from "readline-sync"

function main() {
    const ang1 = Number(question('\nAng1: '))
    const ang2 = Number(question('Ang1: '))
    const ang3 = Number(question('Ang1: '))

    if(eh_triangulo(ang1, ang2, ang3)) {
        console.log('\nSIM, forma um triângulo!')
        const tipo = verifica_tipo(ang1, ang2, ang3)
        console.log(`\nÉ do tipo ${tipo}!`)
    } else {
        console.log('\nNÃO forma um triângulo!')
    }
}

function eh_triangulo(a1, a2, a3) {
    return a1 != 0 && a2 != 0 && a3 != 0 && a1 + a2 + a3 === 180
}

function verifica_tipo(a1, a2, a3) {
    if (eh_retangulo(a1, a2, a3)) {
        return 'Retangulo'
    } else if (eh_acutangulo(a1, a2, a3)) {
        return 'Acutangulo'
    } else {
        return 'Obtusangulo'
    }
}

function eh_retangulo(a1, a2, a3) {
    return a1 === 90 || a2 === 90 || a3 === 90
}

function eh_acutangulo(a1, a2, a3) {
    return a1 < 90 && a2 < 90 && a3 < 90
}

main()