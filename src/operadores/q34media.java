package operadores;

import java.util.Scanner;
//Leia 3 números, calcule e escreva a média dos números.
public class q34media {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: ");
        double num1 = input.nextDouble();

        System.out.println("Num1: ");
        double num2 = input.nextDouble();

        System.out.println("Num1: ");
        double num3 = input.nextDouble();

        //Processamento:
        double media = (num1 + num2 + num3) / 3;

        //Saída:
        System.out.printf("Media: %.1f", media);

        input.close();
    }
}