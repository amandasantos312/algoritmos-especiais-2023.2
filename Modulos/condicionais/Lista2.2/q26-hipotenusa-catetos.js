import { question } from "readline-sync"

function main() {
    const a = Number(question('Lado a: '))
    const b = Number(question('Lado b: '))
    const c = Number(question('Lado c: '))

    let hipotenusa, cateto1, cateto2

    if (a >= b && a >= c) {
        hipotenusa = a
        cateto1 = b
        cateto2 = c
    } else if (b >= a && b >= c) {
        hipotenusa = b
        cateto1 = c
        cateto2 = a
    } else {
        hipotenusa = c
        cateto1 = a
        cateto2 = b
    }

    const hipotenusa_quadrado = hipotenusa ** 2
    const cateto1_quadrado = cateto1 ** 2
    const cateto2_quadrado = cateto2 ** 2

    console.log(`\nHipotenusa: ${hipotenusa}\nH²: ${hipotenusa_quadrado}`)
    console.log(`Cateto1: ${cateto1}\nC1: ${cateto1_quadrado}`)
    console.log(`Cateto2: ${cateto2}\nC2: ${cateto2_quadrado}`)
}

main()