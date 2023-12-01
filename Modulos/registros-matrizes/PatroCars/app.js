import { ulid } from 'ulid'
import { enter_to_continue, print, get_number_min, get_positive_number, get_text, skip_line } from './utils.js'


const montadoras = []

function main() {
    
    let opcao = get_number_min(show_menu(), 0)

    while (opcao != 0) {

        if (opcao === 1) {
            const montadora = adicionar_montadora()
            montadoras.push(montadora)
        } else if (opcao === 2) {
            skip_line()
            listar_montadoras()
        } else if (opcao === 3) {
            atualizar(montadoras)
        } 

        enter_to_continue()
        console.clear()
        opcao = get_positive_number(show_menu())
    }
}

function show_menu() {
    const menu = `
    ------> SYSTEM CARS <-------

    -----> V1 Montadoras <-----
    1 - Adicionar Montadora 
    2 - Listar Montadoras
    3 - Atualizar Montadora
    4 - Remover Montadora
    5 - Filtrar Montadora

    -----> V2 Modelo Veiculos <-----
    6 - Adicionar Modelo
    7 - Listar Modelos
    8 - Remover Modelo
    9 - Editar Modelo

    -----> V3 Veiculos <-----
    10 - Adicionar Veiculo
    11 - Editar e Remover
    12 - Vender Veiculo
    13 - Listar Veiculos
    
    0 - Sair
    
    >> `

    return menu
}

function adicionar_montadora() {
    const montadora = {
        'id': ulid(),
        'nome': '',
        'pais': '',
        'ano_fundacao': 0, 
    }
    
    montadora['nome'] = get_text('\nNome: ')
    montadora['pais'] = get_text('Pais: ')
    montadora['ano_fundacao'] = get_number_min('Ano: ', 1850)

    return montadora
}

function listar_montadoras() {
    for (let montadora of montadoras) {
        print(montadora)
    }
}



main()