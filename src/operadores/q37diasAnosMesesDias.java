package operadores;

import java.util.Scanner;
//Leia a idade de uma pessoa expressa em dias e escreva a expressão em anos, meses e dias.
public class q37diasAnosMesesDias {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Idade em dias: ");
        double dias = input.nextDouble();

        //Processamento:
        double anos = Math.floor(dias / 365);

        double meses = Math.floor(dias % 365 / 12);

        double d = Math.floor(dias % 30);

        //Saída:
        System.out.printf("Anos: %.0f", anos);
        System.out.printf("%nMeses: %.0f", meses);
        System.out.printf("%nDias: %.0f", d);

        input.close();
    }
}