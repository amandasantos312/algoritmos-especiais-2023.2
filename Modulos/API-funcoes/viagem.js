import { question } from "readline-sync";

function main() {
  const distancia = Number(question('\nDistancia Total(km): '))
  const perc_eletrico = Number(question('Percentual no Eletrico (%): '))
  const preco_alc = Number(question('Preco do litro do Alcool: '))
  const preco_gas = Number(question('Preco do litro da Gasolina: '))
  const consumo_alcool = Number(question('Consumo Alcool(km/l): '))
  const consumo_gasolina = Number(question('Consumo Gasolina(km/l): '))

  const dist_eletrico = distancia * (perc_eletrico / 100)
  const dist_combustivel = distancia - dist_eletrico
  
  const litros_alc = dist_combustivel / consumo_alcool
  const gasto_alcool = litros_alc * preco_alc
  
  const litros_gas = dist_combustivel / consumo_gasolina
  const gasto_gasolina = litros_gas * preco_gas

  console.log('\n-----> ALCOOL: <-----')
  console.log(`Litros: ${litros_alc.toFixed(1)}`)
  console.log(`Gasto: ${gasto_alcool.toFixed(2)}`)

  console.log(`\n-----> GASOLINA: <-----`)
  console.log(`Litros: ${litros_gas.toFixed(1)}`)
  console.log(`Gasto: ${gasto_gasolina.toFixed(2)}`)

}

main()