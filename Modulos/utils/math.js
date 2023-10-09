import {print} from "./inputs.js"

export function fatorial(num) {
    if (num === 0) return 1

    let fat = num
    num --

    while (num > 1) {
        fat = fat * num
        num --
    }
    return fat
}

export function fatorial_recursiva(num) {
    if (num === 0 || num === 1) {
        return 1
    } 

    return num * fatorial_recursiva(num - 1)
}

export function print_tabuada(num, tipo) {
    if (tipo === 'SOMA') {
        tabuada_soma(num)
    } else if (tipo === 'SUBTRACAO') {
        tabuada_subtracao(num)
    } else if (tipo === 'MULTIPLICACAO') {
        tabuada_multiplicacao(num)
    } else if (tipo === 'DIVISAO') {
        tabuada_divisao(num
            )
    } else {
        print('Tipo inválido!')
    }
}

function tabuada_soma(num) {
    let parcela = 1
    print('\n----> SOMA <----')
    print('----------------')

    while (parcela <= 10) {
        const soma = num + parcela
        print(`${parcela} + ${num} = ${soma}`)
        parcela++
    }
}

function tabuada_subtracao(num) {
    let minueno = num + 1
    print('\n----> SUBTRACAO <----')
    print('---------------------')

    while (minueno <= (num + 10)) {
        const diferenca = minueno - num
        print(`${minueno} - ${num} = ${diferenca}`)
        minueno++
    }
}

function tabuada_multiplicacao(num) {
    let fator = 1
    print('\n----> MULTIPLICACAO <----')
    print('-------------------------')

    while (fator <= 10) {
        const produto = num * fator
        print(`${num} * ${fator} = ${produto}`)
        fator++
    }
}

function tabuada_divisao(num) {
    let dividendo = num
    print('\n----> DIVISAO <----')
    print('-------------------')

    while (dividendo <= (10 * num)) {
        const quociente = dividendo / num
        print(`${dividendo} / ${num} = ${quociente}`)
        dividendo = dividendo + num
    }
}

export const is_even = num => num % 2 === 0

export function is_prime(num) {
    let count_dividers = 0
    let candidate = 1

    while (candidate <= num) {
        if (num % candidate === 0) {
            count_dividers++
        }
        candidate++
    }
    return contar_divisores == 2  //Para ser primo o número deve ter somente dois divisores, o 1 e o próprio número
}

export function eh_primo(num) {
    if (num <= 0) return false

    let contador = contar_divisores(num)

    return contador === 2
}

function contar_divisores(num) {
    if (num <= 1) return 0

    let contador = 0
    let atual = 1

    while (atual <= num) {
        if (num % atual === 0) {
            contador++
        }
        atual++
    }
    return contador === 2
}

export function porcentagem(valor, percentual) {
    return valor * (percentual / 100)
}

function eh_multiplo(num , candidato) {
    return num % candidato === 0
}