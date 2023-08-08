package operadores;

import java.util.Scanner;

public class q8DivisaoSomaSubtracao {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: ");
        double num1 = input.nextDouble();

        System.out.println("Num2: ");
        double num2 = input.nextDouble();

        //Processamento:
        double soma = num1 + num2;
        double diferenca = num1 - num2;

        double divisao = soma / diferenca;

        //Saída:
        System.out.printf("%nDivisao da soma pela diferenca: %.1f", divisao);

        input.close();
    }
}
