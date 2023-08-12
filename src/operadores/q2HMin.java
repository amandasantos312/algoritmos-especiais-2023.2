package operadores;

import java.util.Scanner;
//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
public class q2hMin {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);
        
        System.out.printf("%nHoras: ");
        int horas = input.nextInt();

        System.out.printf("%nMinutos: ");
        int min = input.nextInt();

        //Processamento:
        int total_min = horas * 60 + min;

        //Saída:
        System.out.printf("%nTotal em minutos: %d", total_min);

        input.close();
    }
}