package operadores;

import java.util.Scanner;
//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
public class q11inverso3 {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Numero de 3 digitos: ");
        int num = input.nextInt();

        //Processamento:
        double a = Math.floor(num / 100);
        double b = Math.floor(num % 100 / 10);
        double c = Math.floor(num % 10);

        //Saída:
        System.out.printf("Inverso: %.0f %.0f %.0f", c, b, a);

        input.close();
    }
}
