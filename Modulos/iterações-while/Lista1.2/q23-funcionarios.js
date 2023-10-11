import { dinheiro, get_positive_number, get_text, print } from "../../utils/inputs.js"
import {porcentagem} from "../../utils/math.js"

function main() {
    let qtd_funcionarios = get_positive_number('\nQtd de Funcionarios: ')
    
    while (qtd_funcionarios > 0) {
        const codigo = get_text('\nCodigo: ')
        const horas_trabalhadas = get_positive_number('Horas: ')
        const dependentes = get_positive_number('Qtd de Dependentes: ')

        const salario_bruto = calcular_salario(horas_trabalhadas, dependentes)
        const inss = porcentagem(salario_bruto, 8.5)
        const ir = porcentagem(salario_bruto, 5)
        const descontos = inss + ir

        const salario_liquido = salario_bruto - descontos

        const contra_cheque = `
        |>>>>> CONTRACHEQUE <<<<<|
        | GANHOS:
        | > Salário Bruto: ${dinheiro(salario_bruto)}
        | DESCONTOS:
        | > INSS: ${dinheiro(inss)}
        | > IR: ${dinheiro(ir)}
        --------------------------
        | > SALÁRIO LÍQUIDO: ${salario_liquido}`

        print(contra_cheque)

        qtd_funcionarios --
    }
}

function calcular_salario(horas_trabalhadas, dependentes) {
    const salario = (horas_trabalhadas * 12) + (dependentes * 40)
    return salario
}
main()