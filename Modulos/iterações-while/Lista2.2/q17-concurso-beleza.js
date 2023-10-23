/* Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. 
Escreva um algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais 
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM'). */

import { get_positive_number, get_text, print } from "../../utils/inputs.js"

function main() {
    let cartao = get_text('\nNome/Altura/Peso: ').split(' ')

    let nome = cartao[0]
    let altura = Number(cartao[1])
    let peso = Number(cartao[2])


    while(true) {
        if (nome === 'FIM') {
            break
        }
        cartao = get_text('\nNome/Altura/Peso: ').split(' ')

    }
}
main()