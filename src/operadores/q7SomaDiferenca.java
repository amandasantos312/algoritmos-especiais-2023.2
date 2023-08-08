package operadores;

import java.util.Scanner;

public class q7somaDiferenca {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Num1: ");
        double num1 = input.nextInt();

        System.out.println("Num2: ");
        double num2 = input.nextInt();

        System.out.println("Num3: ");
        double num3 = input.nextInt();

        //Processamento:
        double soma = num1 + num2;
        double diferenca = num2 - num3;

        //Saída:
        System.out.printf("%nSoma dos dois primeiros: %.1f", soma);
        System.out.printf("%nDiferenca entre os dois ultimos: %.1f", diferenca);

        input.close();
    }
}
