import { question } from "readline-sync"

export function get_number(label) {
    return Number(question(label))
}

export function get_number_min(label, minimo) {
    let numero = get_number(label)

    while (numero < minimo) {
        console.log(`ERROR: Digite um número maior ou iguak a ${minimo}`)
    }
    return numero
}

export function get_positive_number(label) {
    return get_number_min(label, 1)
}

export function print(texto) {
    console.log(texto)
}

