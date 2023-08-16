package operadores;

import java.util.Scanner;
/* Uma loja vende seus produtos no sistema entrada mais duas prestações,
sendo a entrada maior ou igual a cada uma das prestações; estas devem ser igual, inteiras e as maiores possíveis.
Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00;
se o valor da mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas prestações,
de acordo com as regras acima. */
public class q46entradaParcelas {

    public static void main(String[] args) {
        //Entrada:
        Scanner input = new Scanner(System.in);

        System.out.println("Valor: ");
        double valor_compra = input.nextDouble();

        //Processamento:
        double resto = valor_compra % 3;

        double parcelas = (valor_compra - resto) / 3;

        double entrada = parcelas + resto;

        //Saída:
        System.out.printf("Entrada: %.2f", entrada);
        System.out.printf("%n2 Prestacoes de  %.2f", parcelas);

        input.close();
    }
}