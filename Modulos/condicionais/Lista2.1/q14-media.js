import { question } from "readline-sync"

function main() {
    const nota1 = Number(question('\nNota1: '))
    const nota2 = Number(question('Nota2: '))
    const nota3 = Number(question('Nota3: '))
    const nota4 = Number(question('Nota4: '))
    const nota5 = Number(question('Nota5: '))

    const media = calcular_media(nota1, nota2, nota3, nota4, nota5)

    console.log(`\nMedia: ${media}`)

    console.log(verifica_notas_acima_media(media, nota1, nota2, nota3, nota4, nota5))
}

function calcular_media(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5
}

function verifica_notas_acima_media(media, n1, n2, n3, n4, n5) {
    const notas_acima = []

    if (n1 > media) {
        notas_acima.push(n1)
    }
    if (n2 > media) {
        notas_acima.push(n2)
    }
    if (n3 > media) {
        notas_acima.push(n3)
    }
    if (n4 > media) {
        notas_acima.push(n4)
    }
    if (n5 > media) {
        notas_acima.push(n5)
    }

    return notas_acima
}

main()