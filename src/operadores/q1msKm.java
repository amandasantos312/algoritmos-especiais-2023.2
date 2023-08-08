package operadores;

import java.util.Scanner;

public class q1MsKm {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Velocidade em m/s: ");
        double v_ms = input.nextDouble();

        //Processamento:
        double v_km = v_ms * 3.6;

        //Saida:
        System.out.printf("Velocidade em km/h: %f", v_km);

        input.close();
    }
}