import { get_positive_number, get_text, print } from "../utils/inputs.js"

function main() {
    const qtd_num = get_positive_number('\nQtd de Numeros: ')
    const cesta = []

    for (let i = 1; i <= qtd_num; i++) {
        const num = get_text(`Numero ${i}: `)
        cesta.push(num)
    }
    
    let zeros = 0
    let positivos = 0
    let negativos = 0

    for (let num of cesta) {
        if (num === 0) {
            zeros++
        } else if (num > 0) {
            positivos++
        } else {
            negativos++
        }
    }

    print(`
    \n>>> RESULTADO: <<<
    Zeros: ${zeros}
    Positivos: ${positivos}
    Negativos: ${negativos}
    `)
    
}

main()