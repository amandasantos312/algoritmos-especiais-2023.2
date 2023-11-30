import { enter_to_continue, get_number, get_number_min, get_text, print } from '../utils/inputs.js'

let proxima_matricula = 1

function main() {
    let alunos = []

    let opcao = get_number_min(menu(), 0)

    while (opcao != 0) {

        if (opcao === 1) {
            const novo_aluno = adicionar_aluno()
            alunos.push(novo_aluno)
        } else if (opcao === 2) {
            listar_alunos(alunos)
        } else if (opcao === 3) {
            const alunos_aprovados = filtrar(alunos, aluno => aluno[3] >= 7)
            listar_alunos(alunos_aprovados)
        } else if (opcao === 4) {
            processar_resultado(alunos)
            //alunos = mapear(alunos, situacao)
        }

        enter_to_continue()
        opcao = get_number(menu())
    }
}

function menu() {
    return `
    ------> ALUNOS IFPI <------
    
    1 - Adicionar Aluno
    2 - Listar Alunos
    3 - Listar APROVADOS
    4 - Situacao

    0 - Sair
    
    >> `
}

function adicionar_aluno() {
    const aluno = ['', 0, '', 0.0, '', '']

    aluno[0] = get_text('\nNome: ')
    aluno[1] = get_number_min('Ano de Nascimento: ', 1900)
    aluno[2] = get_text('M | F: ')
    aluno[3] = get_number_min('Media: ', 0)
    aluno[4] = gerar_matricula()

    return aluno
}

function listar_alunos(alunos) {
    print('Matricula\tNome\t\tMedia\tSituacao')

    for(let i = 0; i < alunos.length; i++) {
        print(`${alunos[i][4]}\t\t${alunos[i][0]}\t\t${alunos[i][3]}\t${alunos[i][5]}`)
    }
}

function filtrar_alunos_aprovados(alunos) {
    const cesta = []

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i][3] >= 7.0) {
            cesta.push(alunos[i])
        }
    }
    return cesta
}

function processar_resultado(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        const aluno_atual = alunos[i]

        if (aluno_atual[3] < 4) {
            aluno_atual[5] = 'REPROVADO'
        } else if (aluno_atual[3] < 7) {
            aluno_atual[5] = 'PROVA FINAL'
        } else {
            aluno_atual[5] = 'APROVADO'
        }
        alunos[i] = aluno_atual
    }
}

function filtrar(vetor, criterio) {
    const cesta = []

    for (let i = 0; i < vetor.length; i++) {
        if (criterio(vetor[i])) {
            cesta.push(vetor[i])
        }
    }
    return cesta
}

function mapear(alunos, funcao) {
    for (let i in alunos) {
        alunos[i] = funcao(alunos[i])
    }
    return alunos
}

function gerar_matricula() {
    let padding = ''
    const ordem = proxima_matricula++

    if (ordem < 10) {
        padding = '000'
    } else if (ordem < 100) {
        padding = '00'
    } else if (ordem < 1000) {
        padding = '0'
    }

    const matricula = `23S${padding}${ordem}`
    return matricula
}

function situacao(aluno) {
    if (aluno[3] < 4) {
        aluno[5] = 'REPROVADO'
    } else if (aluno[3] < 7) {
        aluno[5] = 'PROVA FINAL'
    } else {
        aluno[5] = 'APROVADO'
    }
    return aluno
}

main()