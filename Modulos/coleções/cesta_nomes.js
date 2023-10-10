import { get_positive_number, get_text, print } from "../utils/inputs.js"

function main() {
    const qtd_nomes = get_positive_number('\nQuantos Nomes? ')
    const cesta = []

    for (let i = 1; i <= qtd_nomes; i++) {
        const nome = get_text(`Nome: `)
        cesta.push(nome)
    }

    let pares = 0
    let impares = 0

    for (let nome of cesta) {
        if (nome.length % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }

    print(`
    \n>>> RESULTADO: <<<
    Pares: ${pares}
    Impares: ${impares}
    `)
}
main()