package operadores;

import java.util.Scanner;
/* Escreva um algoritmo que tendo como dados de entrada 2 pontos quaisquer no plano,
ponto1(x1, y1) e ponto2(x2, y2), escreva a distância entre eles, conforme a fórmula abaixo.
d = raiz[(x2 - x1)² + (y2 - y1)²] */
public class q42distanciaPontos {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Ponto1: ");
        String ponto1 = input.nextLine();

        System.out.println("Ponto2: ");
        String ponto2 = input.nextLine();

        //Processamento:
        String[] p1 = ponto1.split(" ");
        String[] p2 = ponto2.split(" ");

        double x1 = Double.parseDouble(p1[0]);
        double y1 = Double.parseDouble(p1[1]);

        double x2 = Double.parseDouble(p2[0]);
        double y2 = Double.parseDouble(p2[1]);

        double distancia = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));

        //Saída:
        System.out.printf("Distancia entre Pontos: %.1f", distancia);

        input.close();
    }
}