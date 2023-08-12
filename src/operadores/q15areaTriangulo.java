package operadores;

import java.util.Scanner;

public class q15areaTriangulo {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        System.out.println("Base: ");
        double base = input.nextDouble();

        System.out.println("Altura: ");
        double altura = input.nextDouble();

        double area = (base * altura) / 2;

        System.out.printf("Area: %.2f", area);

        input.close();
    }
}