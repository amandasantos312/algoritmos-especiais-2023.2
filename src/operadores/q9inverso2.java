package operadores;

import java.util.Scanner;
//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
public class q9inverso2 {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite dois numeros separados por um espaco: ");
        String input = scanner.nextLine();

        String[] valores = input.split(" ");

        //Processamento:
        double a = Double.parseDouble(valores[0]);
        double b = Double.parseDouble(valores[1]);

        //Saída:
        System.out.printf("Inverso: %.0f %.0f", b, a);
        
        scanner.close();
    }
}