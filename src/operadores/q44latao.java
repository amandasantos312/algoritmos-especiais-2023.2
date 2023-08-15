package operadores;

import java.util.Scanner;
/* Sabendo que latão é constituído de 70% de cobre e 30% de zinco,
escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter
certa quantidade de latão(em kg), informada pelo usuário. */
public class q44latao {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Qtd em kg de latao: ");
        double qtd_latao = input.nextDouble();

        //Processamento:
        double qtd_cobre = 0.7 * qtd_latao;

        double qtd_zinco = 0.3 * qtd_latao;

        //Saída:
        System.out.printf("Qtd de Cobre kg: %.1f" , qtd_cobre );
        System.out.printf("%nQtd de Zinco kg: %.1f" , qtd_zinco);

        input.close();
    }
}