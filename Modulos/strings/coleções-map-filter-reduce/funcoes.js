import { print } from "../../utils/inputs.js"

function main() {
    executor(saudacao, 'Amanda')
    executor(mostrar_dobro, 2003)
}

function executor(funcao, parametro) {
    funcao(parametro)
}

function mostrar_dobro(numero) {
    const dobro = numero * 2
    print(`O dobro de ${numero} é ${dobro}`)
}

function saudacao(destinatario) {
    print(`Olá ${destinatario}, seja muito bem vindo(a)!`)
}

main()