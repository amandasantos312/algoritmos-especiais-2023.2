import { dinheiro, get_positive_number, print } from "../../utils/inputs.js"
import { percentual_de_total } from "../../utils/math.js"

function main() {

    let qtd_habitantes = get_positive_number('\nQtd Habitantes: ')

    let contador = 1
    let soma_salario = 0
    let soma_filhos = 0
    let qtd_salario_ate_1000 = 0

    for (contador; contador <= qtd_habitantes; contador++) {
        print(`\nHabitante ${contador}`)
        const salario = get_positive_number('Salario: ')
        const qtd_filhos = get_positive_number('Qtd Filhos: ')

        soma_salario = soma_salario + salario
        soma_filhos = soma_filhos + qtd_filhos

        if (salario <= 1000) qtd_salario_ate_1000++
    }

    const media_salarial_pop = soma_salario / qtd_habitantes
    const media_filhos = soma_filhos / qtd_habitantes
    const perc_salario_ate_100 = percentual_de_total(qtd_salario_ate_1000, qtd_habitantes)

    print(`
    >>>> RESULTADOS <<<<
    Media Salarial da Populacao: ${dinheiro(media_salarial_pop)}
    Media de Numero de Filhos: ${media_filhos}
    Percental de Salarios ate 1.000,00: ${perc_salario_ate_100}%
    --------------------------------------------
    `)
}
main()