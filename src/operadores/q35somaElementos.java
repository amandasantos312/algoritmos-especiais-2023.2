package operadores;

import java.util.Scanner;
//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:número = 9534 ; soma = 9+5+3+4 = 21.
public class q35somaElementos {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Numero de 4 digitos: ");
        double num = input.nextDouble();

        //Processamento:
        double um = Math.floor(num / 1000);

        double c = Math.floor(num % 1000 / 100);

        double d = Math.floor(num % 100 / 10);

        double u = Math.floor(num % 10);

        double soma = um + c + d + u;

        //Saída:
        System.out.printf("Soma dos elementos: %.0f", soma);

        input.close();
    }
}