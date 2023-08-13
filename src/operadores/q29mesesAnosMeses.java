package operadores;

import java.util.Scanner;
//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
public class q29mesesAnosMeses {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Meses: ");
        double meses = input.nextDouble();

        //Processamento:
        double anos = Math.floor(meses / 12);
        double m = Math.floor(meses % 12);

        //Saída:
        System.out.printf("Anos: %.0f", anos);
        System.out.printf("%nMeses: %.0f", m);

        input.close();
    }
}