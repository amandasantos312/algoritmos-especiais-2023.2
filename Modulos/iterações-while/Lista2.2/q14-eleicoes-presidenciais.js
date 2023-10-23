/* Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O 
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então 
responder: indeciso=99, outros=98, nulo/branco=0. 
O algoritmo deve ler a opinião de voto de cada entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. 
Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2º turno; */

import { get_number, print } from "../../utils/inputs.js"
import { percentual_de_total } from "../../utils/math.js"

function main() {
    let votos_serra = 0
    let votos_dilma = 0
    let votos_ciro = 0
    let votos_indecisos = 0
    let votos_outros = 0
    let votos_nulos_brancos = 0
    let count = 0

    let voto = get_number(menu())

    while (voto !== (-1)) {
        voto = get_number('\nVoto: ')

        if (voto === 45) {
            votos_serra++
        } else if (voto === 13) {
            votos_dilma++
        } else if (voto === 23) {
            votos_ciro++
        } else if (voto === 99) {
            votos_indecisos++
        } else if (voto === 98) {
            votos_outros++
        } else { //voto = 0
            votos_nulos_brancos
        }
        count++
    }

    const qtd_votos = count - 1

    const perc_dilma = percentual_de_total(votos_dilma, qtd_votos)
    const perc_ciro = percentual_de_total (votos_ciro, qtd_votos)
    const perc_serra = percentual_de_total(votos_serra, qtd_votos)
    const perc_indecisos = percentual_de_total(votos_indecisos, qtd_votos)
    const perc_outros = percentual_de_total(votos_outros, qtd_votos)
    const perc_nulos_brancos = percentual_de_total(votos_nulos_brancos, qtd_votos)

    print(`\n-----> RESULTADO <-----`)
    print(`Dilma: ${perc_dilma.toFixed(1)}%`)
    print(`Ciro: ${perc_ciro.toFixed(1)}%`)
    print(`Serra: ${perc_serra.toFixed(1)}%`)
    print(`Indecisos: ${perc_indecisos.toFixed(1)}%`)
    print(`Nulos/Brancos: ${perc_nulos_brancos.toFixed(1)}%`)
    print(`Outros: ${perc_outros.toFixed(1)}%`)
    print(`-------------------------`)
    print(`Total de Entrevistados: ${qtd_votos}`)
}

function menu() {
    const menu = `
    ----> ELEICOES PRESIDENCIAIS <----
    
    DILMA ------- 13
    CIRO  ------- 23
    SERRA ------- 45
    ----------------
    Nulo/Branco -- 0
    Outros ------ 98
    Indeciso ---- 99
    
    -PRESS ENTER TO START-`

    return menu
}

main()