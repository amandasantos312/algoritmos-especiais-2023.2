package operadores;

import java.util.Scanner;
//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
public class q31binario {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: 1 ou 0");
        int num1 = input.nextInt();

        System.out.println("Num2: 1 ou 0");
        int num2 = input.nextInt();

        System.out.println("Num3: 1 ou 0");
        int num3 = input.nextInt();

        System.out.println("Num4: 1 ou 0");
        int num4 = input.nextInt();

        //Processamento:
        int decimal = (num1 * 8 + num2 * 4 + num3 * 2 + num4 * 1);

        //Saída:
        System.out.printf("Decimal: %d", decimal);

        input.close();
    }
}