package operadores;

import java.util.Scanner;

public class q6KmMs {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Velocidade em km/h: ");
        double v_km = input.nextDouble();

        //Processamento:
        double v_ms = v_km / 3.6;

        //Saída:
        System.out.printf("Velocidade em m/s: %.1f", v_ms);

        input.close();
    }
    
}
