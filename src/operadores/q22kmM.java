package operadores;

import java.util.Scanner;
//Leia um valor em km, calcule e escreva o equivalente em m.
public class q22kmM {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Valor para km: ");
        double km = input.nextDouble();

        //Processamento:
        double m = km * 1000;

        //Saída:
        System.out.printf("M: %.1f", m);
    }
}
