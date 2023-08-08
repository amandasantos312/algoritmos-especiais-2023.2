package operadores;

import java.util.Scanner;

import java.lang.Math;
//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
public class q3minHMin {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.printf("%nMinutos: ");
        int minutos = input.nextInt();

        //Processamento:
        double horas = Math.floor(minutos / 60);
        double m = minutos % 60;

        //Saída:
        System.out.printf("%nHoras: %.2f %n", horas);
        System.out.printf("Min: %.2f", m);

        input.close();
    }
}