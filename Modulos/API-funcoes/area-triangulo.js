import { question } from "readline-sync";
//Exemplo de uma função:
function main () {
    console.log('\n----> ÁREA DO TRIÂNGULO <----')
    //Entrada:
    const base = Number(question('Base: '))
    const altura = Number(question('Altura: '))

    //Processamento:
    const area = calcular_area(base, altura)

    //Saída:
    console.log(`\nÁrea: ${area} cm²`)
}

function calcular_area(b, h) {
    const area = (b * h) / 2
    return area
}

main()