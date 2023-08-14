package operadores;

import java.util.Scanner;
//Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
public class q43equacao {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("NumA: ");
        double a = input.nextDouble();

        System.out.println("NumB: ");
        double b = input.nextDouble();

        System.out.println("NumC: ");
        double c = input.nextDouble();

        System.out.println("NumD: ");
        double d = input.nextDouble();

        System.out.println("NumE: ");
        double e = input.nextDouble();

        System.out.println("NumF: ");
        double f = input.nextDouble();

        //Processamento:
        double x = c*e - b*f / a*e - b*d;
        double y = a*f - c*d / a*e - b*d;

        //Saída:
        System.out.printf("X: %.1f", x);
        System.out.printf("%nY: %.1f", y);

        input.close();
    }
}