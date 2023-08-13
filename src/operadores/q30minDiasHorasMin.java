package operadores;

import java.util.Scanner;
//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.
public class q30minDiasHorasMin {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Minutos: ");
        double minutos = input.nextDouble();

        //Processamento:
        double dias = Math.floor(minutos / 1440);
        double horas = Math.floor(minutos % (60 * 24) / 60);
        double min = Math.floor(minutos % 60);

        //Saída:
        System.out.printf("Dias: %.0f", dias);
        System.out.printf("%nHoras: %.0f", horas);
        System.out.printf("%nMinutos: %.0f", min);

        input.close();
    }
}