import { question } from "readline-sync"

function main() {
    const altura = Number(question('\nAltura: '))
    const peso = Number(question('Peso: '))

    const imc = calcular_imc(altura, peso)

    const situacao = verifica_imc(imc)

    console.log(`Imc: ${imc.toFixed(1)}\nSituação: ${situacao}`)
}

function calcular_imc(altura, peso) {
    return peso / (altura**2)
}

function verifica_imc(imc) {
    if (imc <= 25) {
        return 'Normal'
    } else if (imc <= 30) {
        return 'Obeso'
    } else {
        return 'Obesidade Mórbida'
    }
}
main()