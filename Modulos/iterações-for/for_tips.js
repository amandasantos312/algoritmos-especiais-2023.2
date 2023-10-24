import { print } from "../utils/inputs.js"


function for_of() {
    const alunos = ['Amanda', 'Vitória', 'Giovanna', 'Kamila']

    for (let aluno of alunos) {
        print(`*${aluno} - ${aluno.length} letras`)
    }
}
for_of()


function for_in() {
    const alunos = ['Amanda', 'Vitória', 'Giovanna', 'Kamila']

    for (let i in alunos) {
        const aluno = alunos[i]
        print(`-${aluno} - ${aluno.length} letras`)
    }
}
for_in()


function for_3_expressions() {
    const alunos = ['Amanda', 'Vitória', 'Giovanna', 'Kamila']

    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i]
        print(`> ${aluno} - ${aluno.length} letras`)
    }
}
for_3_expressions()


function main_while() {
    const alunos = ['Amanda', 'Vitória', 'Giovanna', 'Kamila']

    let i = 0

    while (i < alunos.length) {
        const aluno = alunos[i]
        print(`# ${aluno} - ${aluno.length} letras`)
        i++
    }
}
main_while()