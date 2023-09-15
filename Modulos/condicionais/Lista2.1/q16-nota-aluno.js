import { question } from "readline-sync"

function main() {
    const nota1 = Number(question('Nota1: '))
    const nota2 = Number(question('Nota2: '))

    const media = calcular_media(nota1, nota2) 
    const situacao = verifica_situacao(media)
   
    console.log(`\nMédia: ${media}`)
    console.log(`Situação: ${situacao}`)
}

function calcular_media(n1, n2) {
    return ( n1 + n2) / 2
}

function verifica_situacao(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else {
        console.log(`Você está de Prova Final!`)
        const exame = Number(question('Nota exame: '))
        const situacao_pf = verifica_situacao_pf(exame, media)
        return situacao_pf 
    }
}

function verifica_situacao_pf(nota, media) {
    const media_final = calcular_media(nota, media)
    console.log(`Sua média após a Prova Final: ${media_final.toFixed(1)}`)

    if (media_final >= 5) {
        return 'Aprovado PF'
    } else {
        return 'Reprovado PF'
    }
}
 
main()