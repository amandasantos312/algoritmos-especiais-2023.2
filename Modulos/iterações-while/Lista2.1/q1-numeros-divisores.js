/* Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0) */

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let contador = 0
    let num = get_positive_number('\nNum: ')

    while (num != 0) {
        verifica_divisores(num)
    
        contador++
        num = get_positive_number('\nNum: ')
    }
}

function verifica_divisores(num) {
    let candidato = 1

    print(`\n> Divisores de ${num}:`)

    while (candidato <= num) {
        
        if (num % candidato === 0){
            print(candidato) 
        }
        candidato ++
    }
}
main()