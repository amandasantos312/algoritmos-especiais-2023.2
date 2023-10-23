/* Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios descritos abaixo), 
a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2 somas. (Flag: salário=0) */

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let soma_salarios_atuais = 0
    let soma_salarios_reajustados = 0

    let salario = get_positive_number('\nSalario: ')

    while (salario !== 0) {
        let salario_reajustado

        if (salario <= 2999.99) {
            salario_reajustado = calcular_reajuste(salario, 0.25)
            print(`Salario Reajustado: ${salario_reajustado}`)
        } else if (salario <= 5999.99) {
            salario_reajustado = calcular_reajuste(salario, 0.20)
            print(`Salario Reajustado: ${salario_reajustado}`)
        } else if (salario <= 9999.99) {
            salario_reajustado = calcular_reajuste(salario, 0.15)
            print(`Salario Reajustado: ${salario_reajustado}`)
        } else { //>= 10000
            salario_reajustado = calcular_reajuste(salario, 0.10)
            print(`Salario Reajustado: ${salario_reajustado}`)
        }

        soma_salarios_atuais += salario
        soma_salarios_reajustados += salario_reajustado

        salario = get_positive_number('\nSalario: ')
    } 
    
    const diferenca = soma_salarios_reajustados - soma_salarios_atuais
    
    print(`\nSoma Salarios Atuais: R$ ${soma_salarios_atuais}`)
    print(`Soma Salarios Reajustados: R$ ${soma_salarios_reajustados}`)
    print(`Diferenca das Somas: R$ ${diferenca}`)
}

function calcular_reajuste(salario, valor) {
    return (salario * valor) + salario
}

main()