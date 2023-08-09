package operadores;

import java.util.Scanner;
//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
public class q10divisao {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: ");
        double num1 = input.nextInt();

        System.out.println("Num1: ");
        double num2 = input.nextInt();

        //Processamento:
        double divisao = Math.floor(num1 / num2);
        double quociente = num1 % num2;

        //Saída:
        System.out.printf("%nDivisao: %.1f", divisao);
        System.out.printf("%nQuociente: %.1f", quociente);

        input.close();
    }
}