import { question } from "readline-sync"

function main() {
    let palavra = question('Palavra: ')

    while(palavra.length != 7) {
        palavra = question('Palavra: ')
    }
}
main()