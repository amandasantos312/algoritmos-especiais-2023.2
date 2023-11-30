import { get_text, print } from '../../utils/inputs.js'

function main() {
    //const vetor = [32, 38, 45, 28, 0, 42, 13, 9, 50, 19]
    //const vetor = ['Samuel', 'Mariana', 'Wagner', 'Ayrlon', 'Amanda', 'Teresa', 'pc']
    const vetor = [
    {'nome':'MARI', 'nota':'10', 'idade':'19'},
    {'nome':'LU', 'nota':'7.8', 'idade':'25'},
    {'nome':'SAMIR', 'nota':'6.0', 'idade':'21'},
    {'nome':'HELO', 'nota':'7.1', 'idade':'33'}
    ]

    print(vetor)

    const alunos_situacao = mapear(vetor, computar_situacao)
    print(alunos_situacao)

    const atributo = get_text('\nQual atributo: ') //nome, nota ou idade
    const asc_desc = get_text('ASC | DESC: ')

    const aprovados = filtrar(alunos_situacao, por_aprovado)
    const contador = bubble_sort(aprovados, por_atributo(atributo), asc_desc)

    print(`Vetor ordenado com ${contador} instrucoes`)
    print(aprovados)

}

function mapear(vetor, conversor) {
    const cesta = []

    for (let item of vetor) {
        const item_convertido = conversor(item)
        cesta.push(item_convertido)
    }
    return cesta
}

function computar_situacao(aluno) {
    const situacao = aluno['nota'] >= 7 ? 'APROVADO' : 'REPROVADO'
    aluno['situacao'] = situacao
    return aluno
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

function por_aprovado(aluno) {
    return aluno['nota'] >= 7.0
}

function por_atributo(chave) {
    function funcao(item) {
        return item[chave]
    }
    return funcao
}

function por_nome(item) {
    return item['nome']
}

function por_nota(item) {
    return item['nota']
}

function by_pass(item) {
    return item
}

function por_tamanho(item) {
    return item.length
}

function ultima_letra(item) {
    return item[item.length - 1]
}

function bubble_sort(vetor, criterio, reverse='ASC') {
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

main()