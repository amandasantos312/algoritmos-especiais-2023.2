package operadores;

import java.util.Scanner;
/* Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
* D = R + S / 2 onde R = (A + B)² e S = (B + C)²
*/
public class q39expressao {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: ");
        double a = input.nextDouble();

        System.out.println("Num2: ");
        double b = input.nextDouble();

        System.out.println("Num1: ");
        double c = input.nextDouble();

        //Processamento:
        double r = Math.pow((a + b), 2);
        double s = Math.pow((b + c), 2);

        double d = r + s / 2;

        //Saída:
        System.out.printf("Resultado: %.1f", d);

        input.close();
    }
}