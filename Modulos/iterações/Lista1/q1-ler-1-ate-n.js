import { question } from "readline-sync"

function main () {
    const n = Number(question('N: '))
    let i = 1

    while (i <= n) {
        console.log(i)
        i++
    }
}

main ()