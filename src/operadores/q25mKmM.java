package operadores;

import java.util.Scanner;
//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
public class q25mKmM {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("M: ");
        double metros = input.nextDouble();

        //Processamento:
        double km = Math.floor(metros / 1000);
        double m = Math.floor(metros % 1000);

        //Saída:
        System.out.printf("Km: %.1f", km);
        System.out.printf("%nM: %.1f", m);

    }
}