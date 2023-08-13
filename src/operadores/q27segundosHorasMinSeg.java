package operadores;

import java.util.Scanner;
//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
//segundos ele corresponde.
public class q27segundosHorasMinSeg {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Segundos: ");
        double seg = input.nextDouble();

        //Processamento:
        double horas = Math.floor(seg / 3600);
        double min = Math.floor(seg % 3600) / 60;
        double s = Math.floor(seg % 60);

        //Saída:
        System.out.printf("Horas: %.0f", horas);
        System.out.printf("%nMinutos: %.0f", min);
        System.out.printf("%nSegundos: %.0f", s);
    }
}