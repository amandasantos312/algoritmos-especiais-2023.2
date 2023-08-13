package operadores;

import java.util.Scanner;
//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
public class q20celsiusFahrenheit {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Temperatura em Celsius: ");
        double celsius = input.nextDouble();

        //Processamento:
        double fahreheit = (9 * celsius + 160) / 5;

        //Saída:
        System.out.printf("Temperatura em Fahrenheit: %.1f", fahreheit);

        input.close();
    }
}
