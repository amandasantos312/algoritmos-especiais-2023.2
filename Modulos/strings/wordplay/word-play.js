import { readFileSync } from "fs"
import { enter_to_continue, get_number, get_text, print, skip_line } from "../../utils/inputs.js"
import { percentual_de_total } from "../../utils/math.js"

function main() {
    const palavras = load_palavras()
    let opcao = get_number(show_menu(palavras.length))

    while (opcao != 0) {

        if (opcao === 1) {
            skip_line()
            mostar_palavras_20_caracteres(palavras)
        } else if (opcao === 2) {
            skip_line()
            mostar_palavras_sem_letra_e(palavras, palavras.length)
        } else if (opcao === 3) {
            avoids(palavras)
            //palavras_com_letras_proibidas(palavras)
        }
        enter_to_continue()
        opcao = get_number(show_menu(palavras.length))
    }
}

function load_palavras() {
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const palavras = arquivo.split('\n')

    return palavras
}

function show_menu(qtd_palavras) {
    return `
    -----------> WORDPLAY <------------
    ${qtd_palavras} palavras carregadas
    -----------------------------------
    1 - Palavras com mais de 20 caracteres
    2 - Palavras sem a letra 'e'/'E'
    3 - Palavras sem letras proibidas

    0 - Sair

    >>> `
}

function mostar_palavras_20_caracteres(palavras) {
    for (let palavra of palavras) {
        if (palavra.length > 20) {
            print(palavra)
        }
    }
}

function mostar_palavras_sem_letra_e(palavras) {
    let count = 0

    for (let palavra of palavras) {
        if((has_no_e(palavra))) {
            print(palavra)
            count++
        }
    }

    const palavras_totais = palavras.length
    const porcentagem = percentual_de_total(count, palavras_totais)

    print(`\n${count} palavras sem a letra 'e'
    \nCorresponde a ${porcentagem.toFixed(1)}% de ${palavras_totais}`)
}

function has_no_e(palavra) {
    let letra_proibida = 'e'

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra_proibida) {
            return false
        }
    }
    return true
}

function avoids(palavra, letras_proibidas) {
    const word = get_text('\nPalavra: ')
    const letras_proibidas = get_text('Letras Proibidas: ')
 
    for(let letra_proibida of letras_proibidas) {
        if (contem_letra(palavra)) {
            return false
        }
    }  
    return true
}

function palavras_com_letras_proibidas(palavras) {

}

function is_abecedarian() {

    for (let letra of palavra) {
        
    }
}

main()