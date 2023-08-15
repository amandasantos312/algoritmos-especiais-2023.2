package operadores;

import java.util.Scanner;
/* O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%,
escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor. */
public class q41custoCarro {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Custo de fábrica: ");
        double custo_fabrica = input.nextDouble();

        //Processamento:
        double valor_distribuidor = 0.28 * custo_fabrica;

        double valor_impostos = 0.45 * custo_fabrica;

        double custo_consumidor = custo_fabrica + valor_distribuidor + valor_impostos;

        //Saída:
        System.out.printf("Preço do Consumidor: %.3f", custo_consumidor);

        input.close();
    }
}