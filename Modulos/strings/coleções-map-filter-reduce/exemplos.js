import {get_number, get_positive_number, print} from "../../utils/inputs.js"

function main() {
    // const qtd = get_positive_number('\nTamanho: ')
    // const min = get_number('Minimo: ')
    // const max = get_number('Maximo: ')
    //const numeros = gerar_colecao(qtd, min, max)
    const numeros = [8, 3, -2, 11, 5]

    mostrar_colecao(numeros)

    // FILTER -> filtra somente os elementos que se enquadram no criterio passado.
    let filtrados
    /*filtrados = filtrar(numeros, eh_negativo) -> filtrar possui: vetor e criterio
    mostrar_colecao(filtrados)

    filtrados = filtrar(numeros, eh_par)
    mostrar_colecao(filtrados)

    filtrados = filtrar(numeros, eh_positivo)
    mostrar_colecao(filtrados)

    filtrados = filtrar(filtrados, item => item > 10)
    mostrar_colecao(filtrados)*/

    // MAP -> transforma cada elemento da coleção e retorna o vetor transformado.
    /*let convertidos = mapear(filtrados, metade) //-> mapear possui: vetor e conversor
    mostrar_colecao(convertidos)

    convertidos = mapear(convertidos, item => item / 3)
    mostrar_colecao(convertidos)

    const somatorio = somar_valores(convertidos)
    print(`Somatorio: ${somatorio.toFixed(1)}`)*/

    //REDUCE -> retorna uma informação do vetor.
    let resultado
    /*resultado = reduzir(numeros, somar, 0) //-> reduce possui: vetor, operacao, valor_inicial

    resultado = reduzir(numeros, subtrair, 100)

    resultado = reduzir(numeros, (acc, atual) => acc * atual, 1)

    resultado = somar_valores(numeros)

    resultado = reduzir(numeros, maior_valor, -Infinity)

    resultado = reduzir(numeros, menor_valor, Infinity)*/

    resultado = reduzir(numeros, (acc, atual) => atual < acc ? atual : acc, Infinity)
    print(`\nResultado: ${resultado}`)

}

function gerar_colecao(qtd, min, max) {
    const vetor = []
    for (let i = 0; i < qtd; i++) {
        const item = obter_aleatorio(min, max)
        vetor.push(item)
    }
    return vetor
}

function obter_aleatorio(min, max) {
    const valor = Math.floor(Math.random() * (max - min + 1) + min)
    return valor
}

function mostrar_colecao(vetor) {
    print('\n>>>>>> VETOR <<<<<<')
    for (let item of vetor) {
        print(item)
    }
    print(`>>>>> ${vetor.length} itens <<<<<`)
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

function eh_negativo(numero) {
    return numero < 0
}

function eh_positivo(numero) {
    return numero > 0
}

function eh_par(numero) {
    return numero % 2 === 0
}

function eh_impar(numero) {
    return !eh_par(numero)
}

function mapear(vetor, conversor) {
    const cesta = []

    for (let item of vetor) {
        const item_convertido = conversor(item)
        cesta.push(item_convertido)
    }
    return cesta
}

function metade(item) {
    const novo_item = item / 2
    return novo_item
}

function somar_valores(vetor) {
    let somatorio = 0

    for (let item of vetor) {
        somatorio = somatorio + item
    }
    return somatorio
}

function reduzir(vetor, operacao, valor_inicial) {
    let valor_reduzido = valor_inicial

    for (let item of vetor) {
        valor_reduzido = operacao(valor_reduzido, item)
    }
    return valor_reduzido
}

function somar(valor1, valor2) {
    return valor1 + valor2
}

function subtrair(valor1, valor2) {
    return valor1 - valor2
}

function menor_valor(valor1, valor2) {
    return valor1 < valor2 ? valor1 : valor2
}

function maior_valor(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2
}

main()