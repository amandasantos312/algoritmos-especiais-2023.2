// Funções V1-MONTADORAS

import fs from 'fs'
import { get_number_min, print, skip_line } from "./utils.js"

export function iniciar_dados(tipo) {

    if (tipo === 'montadoras') {
        const vetor = []
        const dados = fs.readFileSync('montadoras.txt', 'utf-8') //forma de ler um arquivo
        const linhas = dados.split('\n') //serve para separar em linhas os dados

        for (let linha of linhas) {
            const atributos = linha.split('/')
            const montadora = {
                'id': atributos[0],
                'nome': atributos[1],
                'pais': atributos[2],
                'ano': atributos[3] 
            }
            vetor.push(montadora)
        }
        return vetor

    } else if (tipo === 'modelos') {
        const modelos = []
        const dados = fs.readFileSync('modelos.txt', 'utf-8')
        const linhas = dados.split('\n')

        for (let linha of linhas) {
            const atributos = linha.split('/')
            const modelo = {
                'id': atributos[0],
                'nome': atributos[1],
                'montadora': atributos[2]
            }
            modelos.push(modelo)
        }
        return modelos

    }
}

export function gravar_dados_montadoras(montadoras) {
        let dados = ''

        for (let montadora of montadoras) {
        dados += `${montadora['id']}/${montadora['nome']}/${montadora['pais']}/${montadora['ano']}\n`
        }

        fs.writeFileSync('montadoras.txt', dados)
}


export function gravar_dados_modelos(modelos) {
        let dados = ''

        for (let modelo of modelos) {
        dados += `${modelo['id']}/${modelo['nome']}/${modelo['montadora_id']}/${modelo['valor_ref']}/${modelo['motorizacao']}/${modelo['turbo']}/${modelo['automatico']}\n`
        }

        fs.writeFileSync('modelos.txt', dados)
}

export function obter_index(vetor) { //genérica
    skip_line()
    for (let i = 0; i < vetor.length; i++) {
        const m = vetor[i]
        const linha = `${i}: ${m['nome']}`

        print(linha)
    }
    const codigo = get_number_min('\nNum: ', 0)
    return codigo
}

function filtrar(vetor, criterio) {
    const cesta = []

    for (let item of vetor) {
        if (criterio(item)) {
            cesta.push(item)
        }
    }
    return cesta
}

export function verificar_opcao(forma, montadoras) {
    const nome = forma === '1' ? ['nome'] : ['pais']
    const validar = filtrar(montadoras, contem_letra(nome))
    return validar
}


export function bubble_sort(vetor, criterio, reverse='ASC') {
    let contador = 0

    for (let p = 0; p < vetor.length - 1; p++) {
        let houve_troca = false

        for (let i = 0; i < vetor.length - 1 - p; i++) {
            if (reverse === 'DESC') {
                if (criterio[vetor[1]] < criterio(vetor[i+1])) {
                    const aux = vetor[i]
                    vetor[i] = vetor[i+1]
                    vetor[i+1] = aux
                    houve_troca = true
                }
            } else { //reverse === 'ASC'
                if (criterio[vetor[i]] > criterio(vetor[i+1])) {
                    const aux = vetor[i]
                    vetor[i] = vetor[i+1]
                    vetor[i+1] = aux
                    houve_troca = true
                }
            }
            contador++
        }
        if (!houve_troca) break
    }
    return contador
}

// FUNÇÕES V2-MODELOS