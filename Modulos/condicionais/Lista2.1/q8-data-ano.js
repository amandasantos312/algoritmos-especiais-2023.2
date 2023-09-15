import { question } from "readline-sync"

function main() {
    const data_atual = question('\nData Atual: ').split('/').map(Number)
    const data_nascimento = question('Data Nascimento: ').split('/').map(Number)

    const anos = data_atual[2] - data_nascimento[2]

    const idade_correta = verifica_mes(data_atual, data_nascimento, anos)

    console.log(`\nIdade: ${idade_correta} anos`)
}

function verifica_mes(data_atual, data_nascimento, anos) { // índices: 0-dia 1-mes
    if (data_nascimento[1] > data_atual[1] || (data_nascimento[1] === data_atual[1] && data_nascimento[0] > data_atual[0])) {
        anos -= 1
    }
    return anos
}

main()