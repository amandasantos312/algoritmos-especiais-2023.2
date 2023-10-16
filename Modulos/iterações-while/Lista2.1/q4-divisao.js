/* Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. 
Escreva o resultado da última divisão efetuada. */
import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let num = get_positive_number('\nNum: ')

    let divisor = 2

    let resultado

    while(resultado > 1) {
        resultado = num / divisor
        resultado++
        print(resultado)
    }
    
}
main()