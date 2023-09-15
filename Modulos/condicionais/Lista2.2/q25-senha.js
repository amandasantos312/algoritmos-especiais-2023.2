import { question } from "readline-sync"

function main() {
    const senha = Number(question('\nSenha: '))

    const acesso = verifica_senha(senha)

    console.log(acesso)
}

function verifica_senha(senha) {
    if (senha === 1234) {
        return 'Acesso Liberado'
    } else {
        return 'Acesso Negado'
    }
}

main()