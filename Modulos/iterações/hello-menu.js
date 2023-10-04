import { enter_to_continue, get_number_min, get_positive_number, print } from "../utils/inputs.js"
import { is_even, is_prime } from "../utils/math.js"

function main() {
    let num = get_positive_number('\nMagic Number: ')

    const menu = `
    |------- MAGIC NUMBER -------|

    1 - Info
    2 - Mostrar N Multiplos
    3 - Mostar N Divisores
    4 - Mudar o Magic Number
    
    0 - Sair
    Opcao >>> `

    let opcao = get_number_min(menu, 0)

    while (opcao !== 0) {

        if (opcao === 1) {
            show_info(num)
        } else if (opcao === 2) {
            show_multiples(num)
        } else if (opcao === 3) {
            show_divisors(num)
        } else if (opcao === 4) {
            num = get_positive_number('\nMagic Number: ')
        } else {
            print('Opção Inválida!')
        }

    enter_to_continue()
    opcao = get_number_min(menu, 0)
    }
}

function show_info(num) {
    const par_impar = is_even(num) ? 'PAR' : 'IMPAR'
    const prime = is_prime(num) ? 'É PRIMO' : 'NÃO É PRIMO'

    const info = `
    |---- MAGIC NUMBER: ${num} ----|

    >${par_impar}
    >${prime}
    `
    print(info)
}

function show_multiples(num) {
    let count = 0
    let count_multiples = get_number_min('\nQuantos Multiplos: ', 1)
    let actual = 0

    while (count < count_multiples) {
        print(`> ${actual}`)
        actual = actual + num
        count++
    }
    print('----------------------')
}

function show_divisors(num) {
    let count = 0
    let candidate = 1
    const count_dividers = get_number_min('\nQuantos Divisores: ')

    while (count < count_dividers && candidate <= num) {

        if (num % candidate === 0) {
            print(`> ${candidate}`)
            count++
        }
        candidate++
    }

    if (count < count_dividers) {
        print(`\nALERT: Unable find ${count_dividers} divisors!`)
        print(`ALERT: The number only has ${count} divisors! `)
    }
}

main()