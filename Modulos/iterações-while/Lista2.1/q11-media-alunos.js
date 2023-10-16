/* Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por 
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
-> Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3) / 10
-> Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o 
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total 
de alunos da turma.*/

import { get_positive_number, print } from "../../utils/inputs.js"

function main() {
    let matricula
    let nota1
    let nota2
    let nota3
    let count = 0
    let media_final
    let aprovado = 0
    let reprovado = 0

    while (!(matricula === 0)) {
        matricula = get_positive_number('\nMatricula: ')

        if (matricula === 0) {
            break
        }

        nota1 = get_positive_number('Nota1: ')
        nota2 = get_positive_number('Nota2: ')
        nota3 = get_positive_number('Nota2: ')

        media_final = ((nota1*2) + (nota2 * 3) + (nota3 * 5)) / 10
        
        if (media_final >= 7) {
            aprovado++
        } else {
            reprovado++
        }

        count++
    }

    print(`\n------> RESULTADO <------`)
    print(`\nTotal de Alunos: ${count}`)
    print(`Aprovados: ${aprovado}`)
    print(`Reprovados: ${reprovado}`)
}
main()