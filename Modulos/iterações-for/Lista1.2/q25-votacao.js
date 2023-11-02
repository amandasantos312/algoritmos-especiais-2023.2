import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let qtd_eleitores = get_positive_number('\nQtd de Eleitores: ')

    let contador = 1
    let votos_1 = 0
    let votos_2 = 0
    let votos_3 = 0
    let votos_nulo = 0
    let votos_banco = 0

    for (contador; contador <= qtd_eleitores; qtd_eleitores--) {
        const voto = get_positive_number('\nVoto: ')

        if (voto === 1) {
            votos_1++
        } else if (voto === 2) {
            votos_2++
        } else if (voto === 3) {
            votos_3++
        } else if (voto === 9) {
            votos_nulo++
        } else if (voto === 0) {
            votos_banco++
        } else {
            print('Voto Invalido!')
            qtd_eleitores++
        }
    }

    const ganhador = verificar_ganhador(votos_1, votos_2, votos_3)

    print(`\n>>>>>> APURAÇÃO <<<<<<
    Candidato 1: ${votos_1}
    Candidato 2: ${votos_2}
    Candidato 3: ${votos_3}
    Nulos: ${votos_banco}
    
    Ganhador: ${ganhador}`)
}

function verificar_ganhador(v1, v2, v3) {
    if (v1 > v2 && v1 > v3) {
        return 1
    } else if (v2 > v1 && v2 > v3) {
        return 2
    } else if (v3 > v1 && v3 > v2) {
        return 3
    } else {
        return 'EMPATE'
    }
}

main()