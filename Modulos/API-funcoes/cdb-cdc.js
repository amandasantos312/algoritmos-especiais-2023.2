import { question } from "readline-sync";

function main() {
    console.log('\n-----> SIMULADOR DE CDB <-----')
    
    //Entrada CDB:
    const valor_investido = Number(question('\nValor: '))
    const taxa_cdb = Number(question('Taxa mensal: '))
    const ano_vencimento = Number(question('Ano: '))
    
    //Processamento:
    const tempo_ano = calcular_tempo(ano_vencimento)
    const juros_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano)
    const valor_a_receber = valor_investido + juros_cdb
    const percentual_faturado = (juros_cdb / valor_investido) * 100

    //Saída:
    console.log('\n--------> DADOS CDB <---------')
    console.log(`Valor Investido : R$ ${valor_investido.toFixed(2)}`)
    console.log(`Rendimento      : R$ ${juros_cdb.toFixed(2)}`)
    console.log(`Valor a Retirar : R$ ${valor_a_receber.toFixed(2)}`)
    console.log(`Rendimento (%)  : ${percentual_faturado.toFixed(2)} %`)


    console.log('\n------------------------------')
    console.log('\n-----> SIMULADOR DE CDC <-----')

    //Entrada CDC:
    const valor_emprestado = valor_investido
    const taxa_cdc = Number(question('Taxa ao ano: '))
    
    //Processamento:
    const tempo_meses = tempo_ano * 12
    const juros_cdc = calcular_juros_cdc(valor_emprestado, taxa_cdc, tempo_meses)
    const valor_a_pagar = valor_emprestado + juros_cdc
    const valor_parcela = valor_a_pagar / tempo_meses
    const percentual_total = (juros_cdc / valor_emprestado) * 100

    //Saída:
    console.log(`\n--------> DADOS CDC <---------`)
    console.log(`Valor Emprestado : R$ ${valor_emprestado.toFixed(2)}`)
    console.log(`Juros Emprestimo : R$ ${juros_cdc.toFixed(2)}`)
    console.log(`Valor a Pagar    : R$ ${valor_a_pagar.toFixed(2)}`)
    console.log(`CET %            : ${percentual_total.toFixed(2)} %`)
    console.log(`Valor Parcelas   : ${tempo_meses}x de ${valor_parcela.toFixed(2)}`)
    
    const lucro_banco = juros_cdc - juros_cdb

    console.log(`\n------> Lucro do Banco <------`)
    console.log(`Lucro do Banco   : R$ ${lucro_banco.toFixed(2)}`)
}

function calcular_tempo(ano){
    return ano - 2023
}


function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano) {
    return calcular_juros_compostos(valor_investido, taxa_cdb, tempo_ano)
}


function calcular_juros_cdc(valor_emprestado, taxa_cdc, tempo_meses) {
    return calcular_juros_compostos(valor_emprestado, taxa_cdc, tempo_meses)
}


function calcular_juros_compostos(c, i, t) {
    const montante = c * (1 + (i/100))**t
    const juros = montante - c
    return juros
}


main()