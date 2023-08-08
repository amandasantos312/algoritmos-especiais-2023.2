package operadores;

import java.util.Scanner;

public class q9inverso {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);
        
        System.out.println("Numero de 2 digitos: ");
        int num = input.nextInt();

        //Processamento:
        double a = Math.floor(num / 10);
        double b = Math.floor(num % 10);

        //Saída:
        System.out.printf("Inverso: %.0f %.0f", b, a);
        
        input.close();
    }
}