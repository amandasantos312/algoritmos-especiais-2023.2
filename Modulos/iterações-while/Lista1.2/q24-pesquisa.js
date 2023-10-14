import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let qtd_habitantes = get_positive_number('\nQtd Habitantes: ')

    let count = 1

    let soma_salario = 0
    let soma_filhos = 0
    let qtd_salario_ate_1000 = 0

    while (count <= qtd_habitantes) {
        print(`\n>>>Habitante ${count}: <<<`)
        const salario = get_positive_number(`Salario: `)
        const qtd_filhos = get_positive_number(`Qtd de Filhos: `)

        soma_salario = soma_salario + salario
        soma_filhos = soma_filhos + qtd_filhos

        if (salario <= 1000) qtd_salario_ate_1000++

        count++
    }

    const media_salarial = soma_salario / qtd_habitantes
    const media_filhos = soma_filhos / qtd_habitantes
    const percentual = cacular_percentual(qtd_salario_ate_1000, qtd_habitantes)

    print(`\n----------------------
    \n>>> RESULTADO <<<
    Media Salarial: ${media_salarial.toFixed(2)}
    Media Filhos: ${media_filhos.toFixed(1)}
    Percentual De Pessoas Com Salarios Ate 1000: ${percentual.toFixed(1)}%`)
}

function cacular_percentual(qtd_salario_ate_1000, qtd_habitantes) {
    return (qtd_salario_ate_1000/qtd_habitantes) * 100
}

main()