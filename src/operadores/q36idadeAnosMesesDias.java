package operadores;

import java.util.Scanner;
//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
public class q36idadeAnosMesesDias {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Idade em Anos: ");
        int anos = input.nextInt();

        System.out.println("Meses: ");
        int meses = input.nextInt();

        System.out.println("Dias: ");
        int dias = input.nextInt();

        //Processamento:
        int d = anos * 365 + meses * 30 + dias;

        //Saída:
        System.out.printf("Dias Totais: %d", d);

        input.close();
    }
}