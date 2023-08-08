package operadores;

import java.util.Scanner;

public class q4dolar {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.printf("%nValor do dolar hoje: ");
        double cotacao = input.nextDouble();

        System.out.printf("Quantos dolares ? ");
        double qtd_dolar = input.nextDouble();

        double real = cotacao * qtd_dolar;

        System.out.printf("%nValor em Real: %.2f", real);

        input.close();
    }
}