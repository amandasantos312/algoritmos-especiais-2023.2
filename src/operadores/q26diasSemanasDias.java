package operadores;

import java.util.Scanner;
//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
public class q26diasSemanasDias {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Dias: ");
        double dias = input.nextDouble();

        double semanas = Math.floor(dias / 7);
        double d = Math.floor(dias % 7);

        System.out.printf("Semanas: %.0f", semanas);
        System.out.printf("%nDia(s): %.0f", d);
    }
}