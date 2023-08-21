import {question} from "readline-sync"

function main() {
    console.log('\n----> SIMULADOR CDB <----')

    //Entrada:
    const valor_investido = Number(question('Valor: '))
    const taxa = Number(question('Taxa (%): '))
    const ano_vencimento = Number(question('Ano de Vencimento: '))

    //Processamento:
    const tempo_ano = calcular_tempo_investido(ano_vencimento)
    const rendimento = calcular_juros_cdb(valor_investido, taxa, tempo_ano)

    const valor_a_sacar = valor_investido + rendimento
    const percentual_faturado = taxa * tempo_ano

    //Saída:
    console.log(`\n----> EXTRATO CDB: <----`)
    console.log(`Valor Aplicado: R$ ${valor_investido.toFixed(2)}`)
    console.log(`Rendimento    : R$ ${rendimento.toFixed(2)}`)
    console.log(`Total a Sacar : R$ ${valor_a_sacar.toFixed(2)}`)
    console.log(`Rendimento (%): R$ ${percentual_faturado.toFixed(2)}`)

    console.log('\n-------------------------')
    console.log('\n----> SIMULADOR CDC <----')

    //Entrada:
    const valor_emprestado = valor_investido
    const taxa_mes = Number(question('Taxa Mensal (%): '))
    const tempo_meses = tempo_ano * 12

    //Processamento:
    const juros_emprestimo = calcular_juros_emprestimo(valor_emprestado, taxa_mes, tempo_meses)
    const lucro_banco = juros_emprestimo - rendimento
    const valor_total_emprestimo = valor_emprestado + juros_emprestimo

    //Saída:
    console.log(`-----> EXTRATO BANCO <-----`)
    console.log(`Total Empréstimo: R$ ${valor_total_emprestimo.toFixed(2)}`)
    console.log(`Juros Empréstimo: R$ ${juros_emprestimo.toFixed(2)}`)
    console.log(`Juros CDB       : R$ - ${rendimento.toFixed(2)}`)
    console.log(`Lucro do Banco  : R$ ${lucro_banco.toFixed(2)}`)
}


function calcular_tempo_investido(ano) {
    return ano - 2023
}


function calcular_juros_cdb(valor, taxa, tempo) {
    return juros_simples(valor, taxa, tempo)
}


function juros_simples(c, i, t) {
    const juros = c * (i/100) * t
    return juros
}


function calcular_juros_emprestimo(valor, taxa_mes, tempo_meses) {
    return juros_compostos(valor, taxa_mes, tempo_meses)
}


function juros_compostos(c, i, t){
    const juros = c * (1 + (i/100))**t
    return juros
}


main()