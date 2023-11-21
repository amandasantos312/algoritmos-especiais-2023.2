import { enter_to_continue, get_number } from "../../utils/inputs.js"
import {
    menu_iniciar,
    gerar_vetor,
    informar_valores,
    mostrar_colecao,
    carregar_valores_de_arquivo,

} from './vetor_funcionalidades.js'

function main() {
    
    let vetor = []

    let opcao = get_number(show_menu(vetor))

    while (opcao != 16) {

        if (opcao === 1) {
            menu_iniciar()
            opcao = get_number(menu_iniciar(vetor))

            if (opcao === 1) {
                vetor = gerar_vetor()
            } else if (opcao === 2) {
                informar_valores(vetor)
            } else {
                carregar_valores_de_arquivo(vetor)
            }
        } else if (opcao === 2) {
            mostrar_colecao(vetor)
        } else if (opcao === 3) {
            resetar_vetor(vetor)
        } else if (opcao === 4) {
            ver_qtd_itens()
        } else if (opcao === 5) {
            menor_e_maior_valores(vetor)
        } else if (opcao === 6) {
            somatorio_valores()
        } else if (opcao === 7) {
            media_valores()
        } else if (opcao === 8) {
            mostrar_valores_positivos_e_qtd()
        } else if (opcao === 9) {
            mostrar_valores_negativos_e_qtd()
        } else if (opcao === 10) {
            atualizar_valores()
        } else if (opcao === 11) {
            adicionar_novos_valores()
        } else if (opcao === 12) {
            remover_itens_por_valor_exato()
        } else if (opcao === 13) {
            remover_por_posicao()
        } else if (opcao === 14) {
            editar_valor_especifica_por_posicao()
        } else if (opcao === 15) {
            salvar_valores_em_arquivo()
        } else { //opcao === 16
            salvar_valores_automaticamente()
        }

        enter_to_continue()
        opcao = get_number(show_menu(vetor))
    }
}

function show_menu() {
    return `
    -------> PLAY NUMBERS <-------
    1 - Inicializar Vetor
    2 - Mostrar Valores
    3 - Resetar Vetor
    4 - Ver Quantidade de Itens no Vetor
    5 - Ver Menor e Maior Valores e Respectivas Posicoes
    6 - Somatorio dos Valores
    7 - Media dos Valores
    8 - Mostrar Valores Positivos e Quantidade
    9 - Mostrar Valores Negativos e Quantidade
    10 - Atualizar Valores por uma Regra **
    11 - Adicionar Novos Valores
    12 - Remover Itens por Valor Exato
    13 - Remover por Posicao
    14 - Editar Valor Especifico por Posicao
    15 - Salvar Valores em Arquivo
    16 - Sair e Salvar Valores Automaticamente
    
    >>> `
}

main()