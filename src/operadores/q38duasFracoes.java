package operadores;

import java.util.Scanner;
//Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.
public class q38duasFracoes {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Fração 1: ");
        String fracao1 = input.nextLine();

        System.out.println("Fração 2: ");
        String fracao2 = input.nextLine();

        //Processamneto
        String[] f1 = fracao1.split("/");
        String[] f2 = fracao2.split("/");

        int num1 = Integer.parseInt(f1[0]);
        int den1 = Integer.parseInt(f1[1]);

        int num2 = Integer.parseInt(f2[0]);
        int den2 = Integer.parseInt(f2[1]);

        int den3 = den1 * den2;
        int num3 = (den1*num2 + den2*num1);

        //Saída:
        System.out.println("Nova fracao: " + num3 + "/" + den3);
    }
}