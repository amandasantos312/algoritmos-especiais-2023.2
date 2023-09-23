import { question } from "readline-sync"

function main() {
    const valor_investido = Number(question('\nValor: '))

    console.log(`\nData de Investimento: `)
    const mes_investimento = Number(question('Mes: '))
    const ano_investimento = Number(question('Ano: '))
    console.log(`\nData de Realização: `)
    const mes_realizacao = Number(question('Mes: '))
    const ano_realizacao = Number(question('Ano: '))
    const taxa_cdb = Number(question('\nTaxa ate 1% a.m: '))
    const inflacao = Number(question('Inflacao do Periodo(%): '))

    //Processamentos:
    const tempo_meses = calcular_meses(mes_investimento, ano_investimento, mes_realizacao, ano_realizacao)
    const rendimento_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_meses)
    const ir = calcular_ir(rendimento_cdb, tempo_meses)
    const iof = calcular_iof(rendimento_cdb, tempo_meses)

    const rendimento_liquido = rendimento_cdb - (ir + iof)
    const valor_a_sacar = valor_investido + rendimento_liquido
    const ganho_percentual = (rendimento_liquido / valor_investido) * 100

    const valor_inflacao = valor_investido * (inflacao / 100)
    const ganho_real_pos_inflacao = rendimento_liquido - valor_inflacao
    const ganho_real_pos_inflacao_perc = (ganho_real_pos_inflacao / valor_investido) * 100

    console.log(`\n****** TRIBUTAÇÃO RENDA FIXA *******`)
    console.log(`Valor Investimento: ${valor_investido.toFixed(2)}`)
    console.log(`Taxa de Rendimento: ${taxa_cdb}% a.m`)
    console.log(`Investido em      : ${mes_investimento}/${ano_investimento}`)
    console.log(`Realizado em      : ${mes_realizacao}/${ano_realizacao}`)
    console.log(`------------------------------------`)
    console.log(`Rendimento Bruto  : ${rendimento_cdb.toFixed(2)}`)
    console.log(`IOF               : ${iof.toFixed(2)}`)
    console.log(`IR                : ${ir.toFixed(2)}`)
    console.log(`Total Impostos    : ${(iof+ir).toFixed(2)}`)
    console.log(`------------------------------------`)
    console.log(`Rendimento Líquido: ${rendimento_liquido.toFixed(2)}`)
    console.log(`Rendimento Líquido: ${ganho_percentual.toFixed(1)}%`)
    console.log(`------------------------------------`)
    console.log(`Valor Total Sacar : ${valor_a_sacar.toFixed(2)}`)
    console.log(`------------------------------------`)
    console.log(`Inflação Período  : ${valor_inflacao.toFixed(2)}`)
    console.log(`Ganho Real        : ${ganho_real_pos_inflacao.toFixed(2)} ou ${ganho_real_pos_inflacao_perc.toFixed(1)}%`)
    console.log(`------------------------------------`)
}

function calcular_meses(mes_investimento, ano_investimento, mes_realizacao, ano_realizacao) {
    const meses_final = mes_realizacao + (12 * ano_realizacao)
    const meses_inicial = mes_investimento + (12 * ano_investimento)

    const total_meses = (meses_final - meses_inicial) // + 1

    if (meses_final < meses_inicial) {
        return -1
    }
    return total_meses
}

function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_meses) {
    const montante = valor_investido * (1 + taxa_cdb/100)**tempo_meses
    const rendimento = montante - valor_investido
    return rendimento
}

function calcular_ir(rendimento_cdb, tempo_meses) {
    const dias = tempo_meses * 30

    if (dias <= 180) {
        return rendimento_cdb * (22.5/100)
    } else if (dias <= 360) {
        return rendimento_cdb * (20/100)
    } else if (dias <= 720) {
        return rendimento_cdb * (17.5/100) 
    } else {
        return rendimento_cdb * (15/100)
    }
}

function calcular_iof(rendimento_cdb, tempo_meses) {
    if (tempo_meses === 1) {
        return rendimento_cdb * 0.05
    } else {
        return 0
    }
}

main()