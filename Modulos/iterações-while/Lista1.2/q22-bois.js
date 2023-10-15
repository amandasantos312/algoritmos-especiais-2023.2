import {print, get_positive_number, get_text} from "../../utils/inputs.js"
//não finalizei
function main() {
    let id_menor 
    let id_maior 
    let peso_menor = 0 
    let peso_maior = 9999 

    let qtd_fichas = get_positive_number('\n>>> Qtd de Fichas: ')
    
    const opcao = get_positive_number(menu(), 1)

    while (opcao != 0) {

        if (opcao === 1) {
            cadastrar_bois(qtd_fichas, id_menor, id_maior, peso_menor, peso_maior)
        } else if (opcao === 2){
            print("Função em Breve")//mostrar_bois(qtd_fichas)
        } else {
            print(`Opcao Invalida!`)
        }
    }
}

function menu() {
    const menu = `
    |---->>> MANDA BOIS <<<----|

    1 - Cadastrar
    2 - Ver Bois
    
    0 - Sair
    Opcao >>> `

    return menu
}

function cadastrar_bois(qtd_fichas, id_menor, id_maior, peso_menor, peso_maior) {
    let count = 1

    while (count <= qtd_fichas) {
        const id = get_positive_number('\nId: ')
        const nome = get_text('Nome: ')
        const peso = get_positive_number('Peso(kg): ')
        
        count++

        if (peso < peso_menor) {
            peso_menor = peso 
            id_menor = id
        }

        if (peso > peso_maior) {
            peso_maior = peso
            id_maior = id
        }
    }
}

function print_bois(id_maior, peso_maior, id_menor, peso_menor) {
    const print = `
    Id Maior: ${id_maior}
    Maior Peso: ${peso_maior}
    Id Menor: ${id_menor}
    Menor Peso: ${peso_menor}`

    return print
}

main()