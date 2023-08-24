/* Fatura: 1000           Fatura: ? em P1 e P2
   Mínimo: 20%            
   Pago: 220
   Rotativo: 780
   Meses: 10
   Taxa total a.m: 15%
   Juros Compostos 
*/

import { question } from "readline-sync"

function main () {
    const fatura = Number(question('\nValor da Fatura: '))

    const minimo = fatura * 0.2

    console.log(`\nValor da Fatura : R$ ${fatura.toFixed(2)}`)
    console.log(`Pagamento Minimo  : R$ ${minimo}`)

    console.log('\n-----> P1 <-----')
    
    const pago_p1 = Number(question('\nValor pago : '))
    const tempo_p1 = Number(question('Meses : '))

    const taxa = 15
    const rotativo_1 = fatura - pago_p1

    const valor_a_pagar_p1 = calcula_juros_rotativo(rotativo_1, taxa, tempo_p1)

    console.log(`\nValor a Pagar : R$ ${valor_a_pagar_p1.toFixed(2)}`)
    console.log(`Valor Residual  : R$ ${rotativo_1.toFixed(2)}`)
    console.log(`Meses de Atraso : ${tempo_p1}`)

    console.log('\n----------------')

    console.log('\n-----> P2 <-----')

    const pago_p2 = Number(question('Valor pago: '))
    const tempo_p2 = Number(question('Meses: '))

    const rotativo_2 = fatura - pago_p2
 
    const valor_a_pagar_p2 = calcula_juros_rotativo(rotativo_2, taxa, tempo_p2)
    
    console.log(`\nValor a Pagar : R$ ${valor_a_pagar_p2.toFixed(2)}`)
    console.log(`Valor Residual  : ${rotativo_2}`)
    console.log(`Meses de Atraso : ${tempo_p2}`)

}


function calcula_juros_rotativo(rotativo, taxa, tempo) {
    return juros_compostos(rotativo, taxa, tempo)
}


function juros_compostos(c, i, t) {
    const juros = c * (1 + (i/100))**t
    return juros
}

main()