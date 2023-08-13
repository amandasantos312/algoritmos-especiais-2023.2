package operadores;

import java.util.Scanner;
//Leia um valor em m, calcule e escreva o equivalente em cm.
public class q24mCm {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("M: ");
        double m = input.nextDouble();

        double cm = m * 100;

        System.out.printf("Cm: %.1f", cm);

        input.close();
    }
}
