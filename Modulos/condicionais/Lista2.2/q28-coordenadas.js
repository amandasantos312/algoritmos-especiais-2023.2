import { question } from "readline-sync"

function main() {
    const x = Number(question('x: '))
    const y = Number(question('y: '))

    const area = calcular_area(x, y)

    if (area >= 0){
        console.log(`\nÁrea do Retângulo: ${area}m²`)
    } else {
        console.log(`\nÁrea não pode ser negativa!`)
    }
}

function calcular_area(x, y) {
    return x * y
}

main()