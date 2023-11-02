import { dinheiro, get_positive_number, get_text, print } from "../../utils/inputs.js"
import {porcentagem} from "../../utils/math.js"

function main() {

    let qtd_funcionarios = get_positive_number('\nQtd de Funcionarios: ')

    for (qtd_funcionarios; qtd_funcionarios > 0; qtd_funcionarios--) {

        let codigo = get_text('\nCodigo: ')
        let horas_trabalhadas = get_positive_number('Horas Trabalhadas: ')
        let qtd_dependentes = get_positive_number('Qtd de Dependentes: ')

        const salario_bruto = calcular_salario_bruto(horas_trabalhadas, qtd_dependentes)
        const inss = porcentagem(salario_bruto, 8.5)
        const ir = porcentagem(salario_bruto, 5)
        const total_descontos = inss + ir
        const salario_liquido = salario_bruto - total_descontos

        const contra_cheque = `
        | >>>>>> CONTRACHEQUE <<<<<< |
        | FUNCIONARIO ${codigo} 
        |
        | SALARIO BRUTO: ${dinheiro(salario_bruto)}
        |
        | DESCONTOS:
        | INSS: ${dinheiro(inss)}
        | IR: ${dinheiro(ir)}
        |
        | SALARIO LIQUIDO: ${dinheiro(salario_liquido)}
        |----------------------------|`

        print(contra_cheque)
    }
}


function calcular_salario_bruto(horas_trabalhadas, qtd_dependentes) {
    return (horas_trabalhadas * 12) + (qtd_dependentes * 40) 
}

main()