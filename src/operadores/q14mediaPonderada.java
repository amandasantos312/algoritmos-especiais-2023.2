package operadores;

import java.util.Scanner;
//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
public class q14mediaPonderada {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.printf("%nNum1: ");
        double num1 = input.nextDouble();

        System.out.println("Peso1: ");
        double p1 = input.nextDouble();

        System.out.println("Num2: ");
        double num2 = input.nextDouble();

        System.out.println("Peso2: ");
        double p2 = input.nextDouble();

        System.out.println("Num3: ");
        double num3 = input.nextDouble();

        System.out.println("Peso3: ");
        double p3 = input.nextDouble();

        double soma_pesos = p1 + p2 + p3;

        double media = (num1*p1 + num2*p2 + num3*p3) / soma_pesos;

        System.out.printf("%fMedia: %.1f", media);

        input.close();
    }
}