package operadores;

import java.util.Scanner;

import java.lang.Math;

public class q5cdu {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.printf("%nNumero de 3 digitos: ");
        int num = input.nextInt();

        //Processamento:
        double c = Math.floor(num / 100);
        double d = Math.floor(num % 100 / 10);
        double u = Math.floor(num % 10);

        //Saída:
        double soma = c + d + u;

        System.out.printf("%nSoma dos numeros: %.1f", soma);

        input.close();
    }
}