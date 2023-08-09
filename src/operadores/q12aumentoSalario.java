package operadores;

import java.util.Scanner;
//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
public class q12aumentoSalario {
    
    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Salario: ");
        double salario = input.nextDouble();

        //Processamento:
        double aumento = salario * 0.25;

        double novo_salario = salario + aumento;
        
        //Saída:
        System.out.printf("Novo salario: %.2f" , novo_salario);

        input.close();
    }
}
