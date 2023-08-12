package operadores;

import java.util.Scanner;

public class q18comprimmentoCircunferencia {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.printf("%nRaio: ");
        double raio = input.nextDouble();

        double pi = 3.14;

        double comprimento = 2 * pi * raio;

        System.out.printf("Comprimento: %.2f", comprimento);

        input.close();
    }
}