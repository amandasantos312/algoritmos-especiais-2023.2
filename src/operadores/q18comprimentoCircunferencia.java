package operadores;

import java.util.Scanner;
//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
public class q18comprimentoCircunferencia {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.printf("%nRaio: ");
        double raio = input.nextDouble();

        double pi = 3.14;

        //Processamento:
        double comprimento = 2 * pi * raio;

        //Saída:
        System.out.printf("Comprimento: %.2f", comprimento);

        input.close();
    }
}