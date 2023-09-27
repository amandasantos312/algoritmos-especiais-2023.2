import { question } from "readline-sync"

function main () {
    //1° Opção:
    /*
    const n = 1

     if (n >= 1 && n <= 10) {
        let fator = 1

        console.log(`\n----> TABUADA DO ${n} <----`)

        for (fator; fator <= 10; fator++) {
            const result = n * fator
            console.log(`${n} * ${fator} = ${result}`)
        }
    } 
    */

    //2° Opção:
    let n = 1
    
    for (n; n <= 10; n++) {

        console.log(`\n---- > TABUADA DO ${n} <----`)

        let fator = 1
        for (fator; fator <= 10; fator++) {
            const result = n * fator
            console.log(`${n} * ${fator} = ${result}`)
        }
    }
}

main()