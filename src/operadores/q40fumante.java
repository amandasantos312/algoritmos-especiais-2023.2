package operadores;

import java.util.Scanner;
/* Calcule a quantidade de dinheiro gasta por um fumante.
Dados de entrada: o número de anos que elefuma, o n° de cigarros fumados por dia e o preço de uma carteira
(1 carteira tem 20 cigarros).
*/
public class q40fumante {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Anos fumando: ");
        int anos = input.nextInt();

        System.out.println("Qtd de cigarros por dia: ");
        int qtd = input.nextInt();

        System.out.println("Preço da carteira: ");
        double preco = input.nextDouble();

        //Processamento:
        double cigarros_totais = qtd * 365 * anos;

        double carteiras = Math.floor(cigarros_totais / 20);

        double total_gasto = preco * carteiras;

        //Saída:
        System.out.printf("Valor gasto: %.2f" ,total_gasto);

        input.close();
    }
}