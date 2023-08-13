package operadores;

import java.util.Scanner;
//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
public class q33inversoSoma {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Numero de 3 digitos: ");
        double num = input.nextInt();

        //Processamento:
        double c = Math.floor(num / 100);
        double d = Math.floor(num % 100 / 10);
        double u = Math.floor(num % 10);

        double inverso = ((u * 100) + (d * 10) + (c * 1));
        double soma =  num + inverso;

        //Saída:
        System.out.printf("Inverso: %.0f", inverso);
        System.out.printf("%nSoma: %.0f", soma);

        input.close();
    }
}