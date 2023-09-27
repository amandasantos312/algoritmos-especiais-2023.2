import { question } from "readline-sync"

function main () {
    const n = Number(question('N: '))
    let i = 1

    while (i <= n) {
        if (i % 2 === 0 ) {
            console.log(i)
        }
        
        i++    
    }
}

main()