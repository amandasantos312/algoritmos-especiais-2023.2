import { question } from "readline-sync"

function main() {
    const num1 = Number(question('\nNum1: '))
    const num2 = Number(question('Num2: '))
    const num3 = Number(question('Num3: '))

    console.log(ordem_crescente(num1, num2, num3))
}

function ordem_crescente(n1, n2, n3) {
    if (n3 > n2 && n2 > n1) {
        return (`${n1} / ${n2} / ${n3}`)
    } else if (n2 > n3 && n3 > n1) {
        return (`${n1} / ${n3} / ${n2}`)
    } else if (n3 > n1 && n1 > n2) {
        return (`${n2} / ${n1} / ${n3}`)
    } else if (n1 > n3 && n3 > n2) {
        return (`${n2} / ${n3} / ${n1}`)
    } else if (n2 > n1 && n1 > n3) {
        return (`${n3} / ${n1} / ${n2}`)
    } else if (n1 > n2 && n2 > n3) {
        return (`${n3} / ${n2} / ${n1}`)
    } else {
        return (`${n1} / ${n2} / ${n3}`)
    }
} 

main()