import { question } from "readline-sync";

function main() {
    console.log('\n-----> SIMULADOR DE CDB <-----')
    //Entrada:
    const valor_investido = Number(question('\nValor: '))
    const taxa_cdb = Number(question('Taxa 1% a 20%: '))
    const ano_vencimento = Number(question('Ano: '))
    
    //Processamento:
    const tempo_ano = calcular_tempo(ano_vencimento)
    const rendimento = calcular_juros(valor_investido, taxa_cdb, tempo_ano)

    const valor_a_sacar = valor_investido + rendimento
    const percentual_faturado = taxa_cdb * tempo_ano

    //Saída:
    console.log('\n-------> EXTRATO CDB <--------')
    console.log(`Valor Investido: R$ ${valor_investido.toFixed(2)}`)
    console.log(`Rendimento     : R$ ${rendimento.toFixed(2)}`)
    console.log(`Valor a Retirar: R$ ${valor_a_sacar.toFixed(2)}`)
    console.log(`Rendimento (%) : R$ ${percentual_faturado.toFixed(2)}`)


    console.log('\n------------------------------')
    console.log('\n-----> SIMULADOR DE CDC <-----')

    //Entrada:
    const valor_emprestado = valor_investido
    const taxa_cdc = Number(question('Taxa 1% a 17%: '))
    const qtd_parcelas = Number(question('24x, 36x ou 60x: '))
    
    //Processamento:
    const tempo_meses = tempo_ano * 12
    const juros_cdc = calcular_juros(valor_emprestado, taxa_cdc, tempo_meses)
    const valor_a_pagar = valor_emprestado + juros_cdc
    const valor_parcelas = valor_a_pagar / qtd_parcelas
    const lucro_banco = valor_a_pagar - rendimento

    //Saída:
    console.log(`\nValor Emprestado: R$ ${valor_emprestado.toFixed(2)}`)
    console.log(`Juros Empréstimo: R$ ${juros_cdc.toFixed(2)}`)
    console.log(`Valor a Pagar   : R$ ${valor_a_pagar.toFixed(2)}`)
    console.log(`Valor Parcelas  : R$ ${valor_parcelas.toFixed(2)}`)
    console.log(`Lucro do Banco  : R$ ${lucro_banco.toFixed(2)}`)

}

function calcular_tempo(ano){
    return ano - 2023
}


function calcular_juros(c, i, t) {
    const juros = c * (1 + (i/100))**t
    return juros
}


main()