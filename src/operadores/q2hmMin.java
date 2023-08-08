package operadores;

import java.util.Scanner;

public class q2hmMin {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);
        
        System.out.printf("%nHoras: ");
        int horas = input.nextInt();

        System.out.printf("Minutos: ");
        int min = input.nextInt();

        //Processamento:
        int total_min = horas * 60 + min;

        //Saída:
        System.out.printf("%nTotal em minutos: %d", total_min);

        input.close();
    }
}