package operadores;

import java.util.Scanner;

public class q16areaQuadrado {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.printf("%nLado: ");
        double lado = input.nextDouble();

        double area = lado*lado;

        System.out.printf("Area: %.2f", area);

        input.close();
    }
}