/* Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da 
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e 
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo, 
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
    Lugar Pontos
      1      9
      2      6
      3      4
      4      3

Ao final, o algoritmo deve escrever os totais de pontos de cada clube, indicando o clube vencedor. */

import { get_positive_number, get_text, print } from "../../utils/inputs.js"

function main() {
  console.log('\n-------------------')
  let num_prova = get_positive_number('\nNum da Prova: ')
  let qtd_nadadores = get_positive_number('Qtd Nadadores: ')

  let points_club_a
  let points_club_b

  while (num_prova != 0 && qtd_nadadores != 0) {
    let count = 0

    while (count <= qtd_nadadores) {
      print(`\nNadador ${count + 1}`)

      let nome = get_text('Nome: ')
      let classificacao = get_positive_number('Classificacao: ')
      let tempo = get_positive_number('Tempo(s): ')
      let clube = get_text('Clube(a/b): ')

      let points = calcular_points(classificacao)

      if (clube === 'a') {
        points_club_a += points
      } else {
        points_club_b += points
      }
      count++
    }
    let num_prova = get_positive_number('\nNum da Prova: ')
    let qtd_nadadores = get_positive_number('Qtd Nadadores: ')
  }
    print(`>>> Pontuações dos Clubes <<<`)
    print(`Clube A: ${points_club_a}`)
    print(`Clube B: ${points_club_b}`)

    let ganhador = verificar_ganhador(points_club_a, points_club_b)
    print(`>>> Clube Campeão: ${ganhador}`)
}

function calcular_points(classificacao) {
  if (classificacao === 1) {
    return 9
  } else if (classificacao === 2) {
    return 6
  } else if (classificacao === 3) {
    return 4
  } else if (classificacao === 4) {
    return 3
  } else {
    return 0
  }
}

function verificar_ganhador(pontos_club_a, pontos_club_b) {
  if (pontos_club_a > pontos_club_b) {
    return 'CLUBE A'
  } else if (pontos_club_b > pontos_club_a) {
    return 'CLUBE B'
  } else {
    return 'EMPATE!'
  }
}

main()