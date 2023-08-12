package operadores;

import java.util.Scanner;
//Leia um valor em real (R$), calcule e escreva 70% deste valor.
public class q13porcentagem {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.printf("%nDigite um valor em real: "); 
        double valor = input.nextDouble();

        double novo_valor = 0.7 * valor;

        System.out.printf("%nNovo valor: %.1f", novo_valor);

        input.close();

    }
}
