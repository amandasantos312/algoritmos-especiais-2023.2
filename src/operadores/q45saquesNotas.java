package operadores;

import java.util.Scanner;
/* Um algoritmo para gerenciar os saques de um caixa eletônico deve possuir algum mecanismo
para decidir o número de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque.
Um possível critério seria o da "distribuição ótima" no sentido  de que as notas de menor valor disponíveis fossem
distribuídas em número mínimo possível. Por exemplo, se a máquina só dispõe de notas de R$ 50, R$ 10, R$ 5 e de R$ 1,
para uma quantia de solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de
R$ 5 e duas notas de R$ 1. Ecreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das
notas de acordo com o critério da distribuição ótima. */
public class q45saquesNotas {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Valor de saque: ");
        double valor = input.nextDouble();

        //Processamento:
        double cinquenta = Math.floor(valor / 50);

        double dez = Math.floor(valor % 50 / 10);

        double cinco = Math.floor(valor % 10 / 5);

        double um = Math.floor(valor % 5);

        //Saída:
        System.out.printf("Notas de R$ 50: %.0f", cinquenta);
        System.out.printf("%nNotas de R$ 10: %.0f", dez);
        System.out.printf("%nNotas de R$ 5: %.0f", cinco);
        System.out.printf("%nNotas de R$ 1: %.0f", um);

        input.close();
    }
}