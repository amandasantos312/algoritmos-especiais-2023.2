import { question } from "readline-sync"

function main() {
    const nota1 = Number(question('\nNota1: '))
    const nota2 = Number(question('Nota1: '))

    const media = calcular_media(nota1, nota2) 
    const situacao = verifica_situacao(media)
   
    console.log(`Média: ${media}`)
    console.log(`Situação: ${situacao}`)
}

function calcular_media(n1, n2) {
    return ( n1 + n2 / 2)
}

function verifica_situacao(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else {
        const exame = Number(question('Nota exame: '))
        const media_final = (media + exame) / 2

        if (media_final >= 5) {
            return 'Aprovado'
        } else {
            return 'Reprovado'
        }
    }
}
 
main()