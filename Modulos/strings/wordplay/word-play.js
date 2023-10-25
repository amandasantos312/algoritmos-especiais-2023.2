import { readFileSync } from "fs"
import { enter_to_continue, get_number, print, solta_linha } from "../../utils/inputs.js"

function main() {
    const palavras = load_palavras()
    let opcao = get_number(show_menu(palavras.length))

    while (opcao != 0) {
        if (opcao === 1) {
            solta_linha()
            mostar_palavras_20_caracteres(palavras)
        } else if (opcao === 2) {
            solta_linha()
            mostar_palavras_sem_letra_e(palavras)
        }

        enter_to_continue
        opcao = get_number(show_menu(palavras.length))
    }
}

function load_palavras() {
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const palavras = arquivo.split('\n')

    return palavras
}

function show_menu(qtd_palavras) {
    const menu = `
    -----------> WORDPLAY <------------
    ${qtd_palavras} palavras carregadas
    -----------------------------------
    1 - Ver Palavras Com Mais De 20 Caracteres
    2 - Palavras Sem A Letra 'e'/'E'

    0 - Sair
    >> `
    return menu
}

function mostar_palavras_20_caracteres(palavras) {
    for (let palavra of palavras) {
        if (palavra.length > 20) {
            print(palavra)
        }
    }
}

function mostar_palavras_sem_letra_e(palavras) {
    for (let palavra of palavras) {
        if(palavra(nao_contem_e)) {
            return palavra
        }
    }
}

function nao_contem_e(palavra) {
    //let 

    for(let i = 0; i < palavra.length; i++) {
        
    }
}

main()