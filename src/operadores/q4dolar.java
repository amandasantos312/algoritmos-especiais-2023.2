package operadores;

import java.util.Scanner;

public class q4dolar {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.printf("%nValor do dolar hoje: ");
        double cotacao = input.nextDouble();

        System.out.printf("Quantos dolares ? ");
        double qtd_dolar = input.nextDouble();

        //Processamento:
        double real = cotacao * qtd_dolar;

        //Saída:
        System.out.printf("%nValor em Real: %.2f", real);

        input.close();
    }
}