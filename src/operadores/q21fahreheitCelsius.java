package operadores;

import java.util.Scanner;
//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
public class q21fahreheitCelsius {

    public static void main(String[] args) {
        //Entrada
        Scanner input = new Scanner(System.in);

        System.out.println("Temperatura em Fahrenheit: ");
        double fahreheit = input.nextDouble();

        //Processamento:
        double celsius = (5 * fahreheit - 160) / 9;

        //Saída:
        System.out.printf("Temperatura em Celsius : %.1f", celsius);
    }
}
