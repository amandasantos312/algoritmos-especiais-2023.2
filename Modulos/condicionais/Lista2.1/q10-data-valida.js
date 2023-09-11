import { question } from "readline-sync"

function main() {
    const data = question('\nData: ').split('/').map(Number)

    console.log(verificar_data(data))
}

function verificar_data(data) {
    if (data[0] <= 31 && data[1] <= 12 && data[2] <= 9999) {
        return 'A data é válida!'
    } else {
        return 'A data não é válida!'
    }
}

main()