package operadores;

import java.util.Scanner;
//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
//corresponde.
public class q28horasSemanasDiasHoras {

    public static void main(String[] args) {
        //Entrada
        Scanner input = new Scanner(System.in);

        System.out.println("Horas: ");
        double horas = input.nextDouble();

        //Processamento:
        double semanas = Math.floor(horas / 168);
        double dias = Math.floor(horas % 168) / 24;
        double h = Math.floor(horas % 24);

        //Saída:
        System.out.printf("Semanas: %.0f", semanas);
        System.out.printf("%nDias: %.0f", dias);
        System.out.printf("%nHoras: %.0f", h);
    }
}