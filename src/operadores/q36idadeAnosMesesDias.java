package operadores;

import java.util.Scanner;
//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
public class q36idadeAnosMesesDias {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Idade: ");
        double idade = input.nextDouble();

        System.out.println("Meses: ");
        double meses = input.nextDouble();

        System.out.println("Dias: ");
        double dias = input.nextDouble();

        //Saída:
        System.out.printf("");

        input.close();
    }
}
