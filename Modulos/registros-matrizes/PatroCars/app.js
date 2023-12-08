/* FALTA TERMINAR/AJEITAR:
Gravar - a
Filtar/Ordenar das 3 - f
Toda as funcoes de V3 - f 
*/

import { ulid } from 'ulid'
import { enter_to_continue, print, get_number_min, get_text, skip_line } from './utils.js'
import { iniciar_dados, obter_index, verificar_opcao, bubble_sort, gravar_dados_montadoras, gravar_dados_modelos } from './app-utils.js'

    let montadoras = iniciar_dados('montadoras')
    let modelos = iniciar_dados('modelos')

function main() {

    let opcao = get_number_min(menu(), 0)

    while (opcao != 0) {

        if (opcao === 1) {
            const montadora = adicionar_montadora()
            montadoras.push(montadora)
        } else if (opcao === 2) {
            listar_montadoras(montadoras)
        } else if (opcao === 3) {
            atualizar(montadoras, 'montadoras')
        } else if (opcao === 4) {
            remover(montadoras, 'montadoras')
        } else if (opcao === 5) {
            listar_montadoras()
            const forma = get_text('\nFiltrar por:\n1- Parte Nome\n2- Parte Nome Pais\n>> ')
            const filtrados = verificar_opcao(forma, montadoras)
            const atributo = get_text('Qual Atributo? ')
            const asc_desc = get_text('ASC || DESC? ')
            const ordenados = bubble_sort(filtrados, atributo, asc_desc)
            print(ordenados)
        } else if (opcao === 6) {
            const modelo = adicionar_modelo(modelos)
            modelos.push(modelo)
        } else if (opcao === 7) {
            listar_modelos(modelos)
        } else if (opcao === 8) {
            atualizar(modelos, 'modelos')
        } else if (opcao === 9) {
            remover(modelos, 'modelos')
        }

        enter_to_continue()
        console.clear()
        opcao = get_number_min(menu(), 0)
    }
    gravar_dados_montadoras(montadoras) //assim que sair do while, os dados irão ser gravados!
    gravar_dados_modelos(modelos)
}

function menu() {
    const menu = `
    ------> SYSTEM CARS <-------

    -----> V1 Montadoras <-----
    1 - Adicionar Montadora 
    2 - Listar Montadoras
    3 - Atualizar 
    4 - Remover 
    5 - Filtrar e Ordenar

    -----> V2 Modelo Veiculos <-----
    6 - Adicionar Modelo
    7 - Listar Modelos
    8 - Atualizar
    9 - Remover
    10 - Filtrar e Ordenar

    -----> V3 Veiculos <-----
    11 - Adicionar Veiculo
    12 - Listar
    13 - Atualizar
    14 - Remover
    15 - Vender
    
    0 - Sair
    
    >> `

    return menu
}

function adicionar_montadora() {
    const montadora = {
        'id': ulid(),
        'nome': '',
        'pais': '',
        'ano': 0, 
    }
    
    montadora['nome'] = get_text('\nNome: ')
    montadora['pais'] = get_text('Pais: ')
    montadora['ano'] = get_number_min('Ano: ', 1800)

    print(`\nMontadora ${montadora['nome']} adicionada com sucesso!`)

    return montadora
}

function listar_montadoras() {
    skip_line()
    let i = 0
    for (let montadora of montadoras) {
        i++
        print(`${montadora['id']} - ${montadora['nome']} - ${montadora['pais']} - ${montadora['ano']}`)
    }
    print(`\nVoce possui ${i} montadoras cadastradas!`)
}

function atualizar(montadoras, tipo, modelos) { //genérica

    if (tipo === 'montadoras') {
        listar_montadoras()

        const index = obter_index(montadoras)
        const montadora = montadoras[index]

        montadora['nome'] = get_text('Novo nome: ')
        montadora['pais'] = get_text('Novo pais: ')
        montadora['ano'] = get_number_min('Novo Ano: ', 1800)

        return montadora

    } else if (tipo === 'modelos') {
        listar_modelos()

        const index = obter_index(modelos)
        const modelo = montadoras[index]

        modelo['nome'] = get_text('\nNome: ')
        modelo['montadora_id'] = get_text('Montadora Id: ')
        modelo['valor_ref'] = get_number_min('Valor Referencia: ', 0)
        modelo['motorizacao'] = get_number_min('Motor(cv): ', 50)
        modelo['turbo'] = get_text('Turbo? T|F: ')
        modelo['automatico'] = get_text('Automatico? T|F: ')

        return modelo
    }
}

function remover(montadoras, tipo, modelos) { //genérica
    
    if (tipo === 'montadoras') {
        listar_montadoras()

        const index = obter_index(montadoras)
        const montadora = montadoras[index]['nome']

        montadoras.splice(index, 1)
        print(`Montadora ${montadora} removida com sucesso!`)

    } else if (tipo === 'modelos') {
        listar_modelos()

        const index = obter_index(modelos)
        const modelo = modelos[index]['nome']

        modelos.splice(index, 1)
        print(`Modelo ${modelo} removido com sucesso!`)
    }
}

function adicionar_modelo() {
    for (let i = 0; i < montadoras.length; i++) {
        print(`${i}: ${montadoras[i]['nome']}`)
    }

    const index = get_number_min('\nIndex da Montadora: ')
    const montadora_id = montadoras[index]['id']
    const modelo = {
        'id': ulid(),
        'nome': get_text('Nome do modelo: '),
        'montadora_id': montadora_id,
        'valor_ref': get_number_min('Valor Ref: ', 1000),
        'motorizacao': get_number_min('Motor(cv): ', 50),
        'turbo': get_text('Turbo(Sim|Nao): '),
        'automatico': get_text('Automatico(Sim|Nao): ')
    }
    return modelo
}

function listar_modelos(modelos, montadoras) {
    skip_line()
    let i = 0
    for (let modelo of modelos) {
        i++
        print(`${modelo['id']} - ${modelo['nome']} - ${modelo['montadora_id']} - ${modelo['valor_ref']} - ${modelo['motorizacao']} - ${modelo['turbo']} - ${modelo['automatico']}`)
    }
    print(`\nVoce possui ${i} modelos cadastrados!`)
}



main()