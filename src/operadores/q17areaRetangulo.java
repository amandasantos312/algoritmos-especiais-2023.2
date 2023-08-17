package operadores;

import java.util.Scanner;
//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
public class q17areaRetangulo {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Base: ");
        double base = input.nextDouble();

        System.out.println("Altura: ");
        double altura = input.nextDouble();

        //Processamento:
        double area = base * altura;

        //Saída:
        System.out.printf("Area: %.2f", area);

        input.close();
    }
}
