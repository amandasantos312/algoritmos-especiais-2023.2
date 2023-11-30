import { ulid } from 'ulid'
import { get_text, get_positive_number, print } from '../utils/inputs.js'

const livros = []
const autores = []

function main() {
    
    let opcao = get_positive_number(menu())

    while (opcao != 0) {

        if (opcao === 1) {
            const autor = novo_autor()
            autores.push(autor)
            print('\nAutor Adicionado!')
        } else if (opcao === 2) {
            listar_autores()
        } else if (opcao === 5) {
            const livro = novo_livro()
            livros.push(livro)
            print('\nLivro Adicionado!')
        } else if (opcao === 6) {
            listar_livros()
        }

        get_text('\nEnter...')
        console.clear()
        opcao = get_positive_number(menu())
    }
}

function menu() {
    const opcoes = `
    |----- LIBRARY SYSTEM -----|
    1 - Novo Autor
    2 - Listar Autores
    5 - Novo Livro
    6 - Listar Livros
    
    0 - Sair
    
    >>> `

    return opcoes
}

function novo_autor() {
    const autor = {
        'id': ulid(),
        'nome': '',
    }

    autor['nome'] = get_text('\nNome: ')

    return autor
}

function listar_autores() {
    for (let autor of autores) {
        print(autor)
    }
}

function novo_livro() {
    for (let i = 0; i < autores.length; i++) {
        print(`${i}: ${autores[i]['nome']}`)
    }

    const index = get_positive_number('\nIndex do Autor: ')
    const autor_id = autores[index]['id']
    const livro = {
        'id' : ulid(),
        'nome' : get_text('Nome do Livro: '),
        'ano' : get_positive_number('Ano: '),
        'autor_id' : autor_id
    }
    return livro
}

function listar_livros() {
    for (let livro of livros) {
        const autor = obter_autor_por_id(livro['autor_id'])
        print(`\n${livro['id']} - ${livro['nome']} - ${autor['nome']} - ${livro['ano']}`)
    }
}

function obter_autor_por_id(id) {
    for (let autor of autores) {
        if (autor['id'] === id)  {
            return autor
        }
    }
    return 'Nao Localizado!'
}

main()