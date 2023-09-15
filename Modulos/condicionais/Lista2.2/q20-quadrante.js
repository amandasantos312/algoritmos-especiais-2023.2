import { question } from "readline-sync"

function main() {
    const angulo = Number(question('\nAngulo: '))

    const quadrante = verifica_quadrante(angulo)

    console.log(`${quadrante} quadrante`)
}

function verifica_quadrante(angulo) {
    if (angulo <= 90) {
        return '1°'
    } else if (angulo <= 180) {
        return '2°'
    } else if (angulo <= 270) {
        return '3°'
    } else {
        return '4°'
    }
}

main()