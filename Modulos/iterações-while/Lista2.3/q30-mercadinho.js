/* Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. 
Escreva o nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo 
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto */

import { dinheiro, get_positive_number, get_text, print} from "../../utils/inputs.js"

function main() {
    let produto 
    let preco 
    let qtd 

    while (true) {
        produto = get_text('\nProduto: ')

        if (produto === 'FIM') {
            break
        }

        preco = get_positive_number('Preco: ')
        qtd = get_positive_number('Qtd: ')

        const valor = preco * qtd
        const valor_a_pagar = calcular_desconto(qtd, valor)

        print(`
        \n------> QUITANDA PREÇO BOM <------
        PRODUTO ------ ${produto}
        QTD ---------- ${qtd} unidades
        PREÇO(und) --- ${dinheiro(preco)}
        VALOR TOTAL -- ${dinheiro(valor)}

        VALOR COM DESCONTO (se houver) -------- ${dinheiro(valor_a_pagar)}
        `)
    }
}

function calcular_desconto(qtd, valor) {
    if (qtd <= 10) {
        return valor
    } else if (qtd <= 20) {
        return  valor - (0.10 * valor)
    } else if (qtd <= 50) {
        return valor - (0.20 * valor)
    } else {
        return valor - (0.25 * valor)
    }
}
main()