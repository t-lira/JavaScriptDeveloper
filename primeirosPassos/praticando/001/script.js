/*Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

const notaUm = 10
const notaDois = 10
const notaTres = 10

const media = (notaUm + notaDois + notaTres) / 3

if (media < 5){
  console.log('reprovado')
  
} else if(media >= 5 && media <= 7){
  console.log('recuperação')

}else{
  console.log('Parabéns, Você passou de semestre!')
}