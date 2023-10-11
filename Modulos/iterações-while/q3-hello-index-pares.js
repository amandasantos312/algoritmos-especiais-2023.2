function main() {
    let contador = 0

    while (contador < 10) {
        if (eh_par(contador)) {
            console.log(`[${contador+1}] Hello *`)
        } else {
            console.log(`[${contador+1}] Hello`)
        }
        contador++
    }
}

function eh_par(contador) {
    return (contador+1) % 2 === 0
}
main()