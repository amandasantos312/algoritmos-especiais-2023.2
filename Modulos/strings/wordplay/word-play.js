import { readFileSync } from "fs"
import { enter_to_continue, get_number, get_positive_number, get_text, print } from "../../utils/inputs.js"
import { contem_letra, text_to_lower } from "../../utils/strings.js"
import { percentual_de_total } from "../../utils/math.js"

function main() {
    const palavras = load_palavras()
    const qtd = palavras.length

    let opcao = get_number(show_menu(palavras.length))

    while (opcao != 0) {

        if (opcao === 1) {
            const palavras_filtradas = palavras_com_mais_de_n_letras(palavras)
            print_words(palavras_filtradas, qtd)
        } else if (opcao === 2) {
            const palavras_filtradas = palavras_sem_determinada_letra(palavras)
            print_words(palavras_filtradas, qtd)
        } else if (opcao === 3) {
            const palavras_filtradas = palavras_sem_letras_proibidas(palavras)
            print_words(palavras_filtradas, qtd)
        } else if (opcao === 4) {
            const palavras_filtradas = palavras_com_letras_aceitas(palavras)
            print_words(palavras_filtradas, qtd)
        } else if (opcao === 5) {
            const palavras_filtradas = palavras_com_letras_obrigatorias(palavras)
            print_words(palavras_filtradas, qtd)
        } else if (opcao === 6) {
            const palavras_filtradas = palavras_abecedarian(palavras)
            print_words(palavras_filtradas, qtd)
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
    1 - Palavras com mais de N letras
    2 - Palavras sem determinada letra
    3 - Palavras sem letras proibidas
    4 - Palavras somente com letras permitidas
    5 - Palavras somente com letras obrigatorias
    6 - Palavras abecedarian

    0 - Sair

    >>> `
}


function print_words(palavras, qtd) {
    for (let palavra of palavras) {
        print(palavra)
    }
    
    const percentual = percentual_de_total(palavras.length, qtd)

    print(`----------------------
    \n${palavras.length} palavras encontradas que correspondem a ${percentual.toFixed(3)}% de ${qtd}`)
}


function palavras_com_mais_de_n_letras(palavras) { //opção 1
    const cesta = []

    const tamanho = get_positive_number('\nTamanho: ')

    for (let palavra of palavras) {
        if (palavra.length > tamanho) {
            cesta.push(palavra)
        }
    }
    return cesta
}


function has_no_letter(palavra, letra_proibida) { 
    const palavra_em_minusculo = text_to_lower(palavra)

    for (let letra of palavra_em_minusculo) {
        if (letra === text_to_lower(letra_proibida)) {
            return false
        }
    }
    return true
}


function palavras_sem_determinada_letra(palavras) { //opção 2
    const cesta = []

    const letra_proibida = get_text('\nSem Letra: ')

    for (let palavra of palavras) {
        if(has_no_letter(palavra, letra_proibida) === true) {
            cesta.push(palavra)
        }
    }
    return cesta
}


function avoids(palavra, letras_proibidas) { 
    for (let letra of letras_proibidas) {
        if (contem_letra(palavra, letra)) {
            return false
        }
    }
    return true
}


function palavras_sem_letras_proibidas(palavras) { //opção 3
    const cesta = []

    const letras_proibidas = get_text('\nLetras Proibidas: ')

    for (let palavra of palavras) {
        if (avoids(palavra, letras_proibidas)) {
            cesta.push(palavra)
        }
    }
    return cesta
}


function uses_only(palavra, letras_aceitas) {
    for (let letra of palavra) {
        if (!contem_letra(letras_aceitas, letra)) {
            return false
        }
    }
    return true
}


function palavras_com_letras_aceitas(palavras) {
    const cesta = []

    const letras_aceitas = get_text('\nLetras Aceitas: ')

    for (let palavra of palavras) {
        if(uses_only(palavra, letras_aceitas)) {
            cesta.push(palavra)
        }
    }
    return cesta
}


function uses_all(palavra, letras_obrigatorias) {
    for (let letra_obrigatoria of letras_obrigatorias){
        if (!contem_letra(palavra, letra_obrigatoria)){
            return false
        }
    }
    return true
}

function palavras_com_letras_obrigatorias(palavras) { //opção 5
    const cesta = []

    const letras_obrigatorias = get_text('\nLetras Obrigatorias: ')

    for (let palavra of palavras) {
        if(uses_all(palavra, letras_obrigatorias)){
            cesta.push(palavra)
        }
    }
    return cesta
}

function is_abecedarian(palavra) {

    for (let i = 0; i < (palavra.length - 1); i++) {
        let letra_atual = palavra[i]
        let proxima = palavra[i + 1]

        if (letra_atual.charCodeAt() > proxima.charCodeAt()) {
            return false
        }
    }
    return true
}


function palavras_abecedarian(palavras) { //opção 6
    const cesta = []

    for (let palavra of palavras) {
        if (is_abecedarian(palavra)) {
            cesta.push(palavra)
        }
    }
    return cesta
}

main()