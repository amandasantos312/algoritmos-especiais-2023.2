import { question } from "readline-sync"

function main() {
    console.log('\n----> Professor1: <----')
    const horas_aula1 = Number(question('Horas de aula: '))
    const valor_hora1 = Number(question('Valor da aula: '))
    console.log('\n----> Professor2: <----')
    const horas_aula2 = Number(question('Horas de aula: '))
    const valor_hora2 = Number(question('Valor da aula: '))

    const salario_prof1 = calcular_salario(horas_aula1, valor_hora1)
    const salario_prof2 = calcular_salario(horas_aula2, valor_hora2)

    const salario_maior = verificar_maior_salario(salario_prof1, salario_prof2)

    console.log(`\nSalario Professor1: ${salario_prof1}`)
    console.log(`Salario Professor2: ${salario_prof2}`)
    console.log(`\nMaior salario: R$ ${salario_maior}`)
}

function calcular_salario(horas, valor) {
    return horas * valor
}

function verificar_maior_salario(salario1, salario2) {
    if (salario1 > salario2) {
        return `${salario1}`
    } else {
        return `${salario2}`
    }
}

main()