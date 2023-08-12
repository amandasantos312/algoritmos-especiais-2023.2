package operadores;

import java.util.Scanner;
//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
public class q23kgG {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Valor para kg: ");
        double kg = input.nextDouble();

        //Processamento:
        double g = kg * 1000;

        //Saída:
        System.out.printf("G: %.1f", g);
    }
}