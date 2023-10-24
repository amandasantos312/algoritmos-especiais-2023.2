/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião 
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo).
Escreva um algoritmo que leia a idade e a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados */

import { get_number, print } from "../../utils/inputs.js"
import { percentual_de_total } from "../../utils/math.js"

function main() {
    let idade = 0
    let nota 
    
    let count = 0
    let soma_idades_otimo = 0
    let count_otimo = 0
    let votos_bom = 0
    let votos_regular = 0

    while (idade !== (-1)) {

        idade = get_number('\nIdade: ')
        nota = get_number('Nota(1/2/3/4): ')


        if (nota === 1) {
            soma_idades_otimo = soma_idades_otimo + idade
            count_otimo++
        }

        if (nota === 2) {
            votos_bom++
        }

        if (nota === 3) {
            votos_regular++
        }

        count++
    }
    const media_idades = soma_idades_otimo / count_otimo
    const perc_bom = percentual_de_total(votos_bom, count)

    print(`\n
    Qtd: ${count-1}
    Media Das Idades: ${media_idades.toFixed(1)}
    Qtd Votos Regular: ${votos_regular}
    Percentual de Votos Otimo: ${perc_bom.toFixed(1)}%`)
}
main()