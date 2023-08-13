package operadores;

import java.util.Scanner;
//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
public class q19volumeEsfera {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("%nRaio: ");
        double raio = input.nextDouble();

        double pi = 3.14;

        //Processamento:
        double volume = (4 * pi * Math.pow(raio, 3) / 3);

        //Saída:
        System.out.printf("Volume: %.2f", volume);

        input.close();
    }
}
