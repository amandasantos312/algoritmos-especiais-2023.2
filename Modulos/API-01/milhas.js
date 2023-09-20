import { question } from "readline-sync"

function main() {
    const valor_ref = 70
    const milhas = 1000

    const desconto = Number(question('Desconto(0 - 80): '))

    if (desconto > 80){
        return 'Desconto fora da faixa!'
    }

    const bonus = Number(question('Bonus(0 - 300): '))

    const valor_com_desconto = calcula_desconto(valor_ref, desconto)
    const milhas_bonus = calcula_bonus(milhas, bonus)

    const milhas_totais = milhas + milhas_bonus
    const valor_final = calcula_valor_final(valor_com_desconto, milhas_totais)

    const classificacao = verifica_classificacao(valor_final)
    const recomendacao = verifica_recomendacao(classificacao)

    console.log(`\n*******COMPRA DE MILHAS ********`)
    console.log(`Valor Ref.     : R$ ${valor_ref.toFixed(2)}/milheiro`)
    console.log(`Milhas Comprar : ${milhas}`)
    console.log(`\nDesconto     : ${desconto}%`)
    console.log(`Valor com desc.: R$ ${valor_com_desconto.toFixed(2)}/milheiro`)
    console.log(`\nBônus        : ${bonus}%`)
    console.log(`Milhas de Bônus: ${milhas_bonus}`)
    console.log(`\nMilhas Totais: ${milhas_totais}`)
    console.log(`Valor Total    : R$ ${valor_com_desconto.toFixed(2)}`)
    console.log(`\nVALOR FINAL MILHEIRO: >> R$ ${valor_final.toFixed(2)}`)
    console.log(`Classificação  : ${classificacao}`)
    console.log(`Recomendação   : ${recomendacao}`)
}

function calcula_desconto(valor_ref, desconto) {
    return valor_ref - (valor_ref * (desconto/100)) 
}

function calcula_bonus(milhas, bonus) {
    return (milhas * (bonus/100))
}

function calcula_valor_final(valor_com_desconto, milhas_totais) {
    return (valor_com_desconto / milhas_totais) * 1000
}

function verifica_classificacao(valor_final) {
    if (valor_final <= 14) {
        return 'EXCELENTE'
    } else if (valor_final <= 17.5) {
        return 'BOA'
    } else if (valor_final <= 35) {
        return 'RUIM'
    } else {
        return 'PÉSSIMA'
    }
}

function verifica_recomendacao(classificacao) {
    if (classificacao === 'EXCELENTE') {
        return 'Compre!'
    } else if (classificacao === 'BOA') {
        return 'Ainda vale a pena, compre também caso tenha uma viagem próxima!'
    } else if (classificacao === 'RUIM') {
        return 'Só compre se for pouca quantidade e urgentes!'
    } else {
        return 'Não compre! Avalie compra a passagem mesmo, e em "ultissimo caso" compre somente para completar um dado alvo.'
    }
}
main()