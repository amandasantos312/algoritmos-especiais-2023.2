import { question } from "readline-sync"

function main() {
    const num = Number(question('Numero: '))

    if (eh_primo(num)) {
        console.log(`O numero ${num} é primo`)
    } else {
        console.log(`O numero ${num} NÃO é primo`)
    }
    
}

function eh_primo(num) {
    if (num <= 1) {
        return false
    }

    if (num === 3 || num === 5 || num === 7) {
        return true
    }

    return !eh_divisivel(num, 3) && !eh_divisivel(num, 5) && !eh_divisivel(num, 7)
}

function eh_divisivel(num, divisor) {
    return num % divisor === 0 
}

main()