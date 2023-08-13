package operadores;

import java.util.Scanner;
//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
public class q32inversoDiferenca {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Numero de 3 digitos: ");
        double num = input.nextDouble();

        //Processamento:
        double c = Math.floor(num / 100);
        double d = Math.floor(num % 100 / 10);
        double u = Math.floor(num % 10);

        double inverso = ((u * 100) + (d * 10) + (c * 1));
        double diferenca = num - inverso;

        //Saída:
        System.out.printf("Inverso: %.0f", inverso);
        System.out.printf("%nDiferenca: %.0f", diferenca);

        input.close();
    }
}