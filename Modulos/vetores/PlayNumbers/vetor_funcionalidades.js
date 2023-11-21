import { readFileSync } from "fs"
import { get_number, get_positive_number, get_text, print } from "../../utils/inputs.js";

export function menu_iniciar() {

    return `
    -----> OPCOES DE INICIALIZACAO <------
    
        1 - Dados Automaticos
        2 - Informar Valores
        3 - Carregar Valores de Arquivo

        >>> `
}

export function gerar_vetor() {
    const qtd = get_positive_number('\nTamanho: ')
    const min = get_number('Minimo: ')
    const max = get_number('Maximo: ')
    const numeros = gerar_aleatorios(qtd, max, min)

    return numeros
}

export function gerar_aleatorios(qtd, max, min) {
    
    const vetor = []

    for (let i = 0; i < qtd; i++) {
        const aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
        vetor.push(aleatorio)
    }
    return vetor
}

export function mostrar_colecao(vetor) {
    console.log(vetor)
}

export function informar_valores() {
    const qtd = get_positive_number('Qtd: ')
    const min = get_number('Minimo: ')
    const max = get_number('Maximo: ')

    const cesta = []
    for (let i = 0; i < qtd; i++) {
        let item = get_number('\nNum: ')

        while (item < min || item > max) {
            print('Numero invalido, informe um valor dentro da faixa estabelecida!')
            item = get_number('\nNum: ')
        }

        cesta.push(item)
    }
    return cesta
}

export function carregar_valores_de_arquivo() {
    const nome_arquivo = get_text('Nome do Arquivo: ')

    const arquivo = readFileSync(nome_arquivo, 'utf-8')
    const numeros = arquivo.split('\n')

    return numeros
}