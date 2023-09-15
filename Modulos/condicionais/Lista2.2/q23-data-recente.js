import { question } from "readline-sync"

function main() {
    const data1 = question('\nData1: ').split('/').map(Number)
    const data2 = question('Data2: ').split('/').map(Number)

    const data_recente = verifica_datas(data1, data2)

    console.log(`\n${data_recente}`)

}

function verifica_datas(d1, d2) {
    if (d1[2] > d2[2]) { //Posição 2 corresponde ao ano
        return 'Data1 é a mais recente'
    } else {
        return 'Data2 é a mais recente'
    }
}

main()