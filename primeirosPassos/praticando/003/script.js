/*O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

const peso = 73;
const altura = 1.68;

const imc = peso / (altura * altura);
const imcTotal = imc.toFixed(1)
const consumoDeAgua = (peso / 35);
const consumoDiario = consumoDeAgua.toFixed(2)

if (imc < 18.5){
  console.log(`O seu imc é: ${imcTotal} e você esta abaixo do peso. E você deve consumir ${consumoDiario}L de água por dia.`)

} else if ( imc >= 18.5 && imc < 24.9){

  console.log(`O seu imc é: ${imcTotal} e você esta com peso normal. E você deve consumir ${consumoDiario}L de água por dia. `)

} else if ( imc > 25 && imc < 29.9){

  console.log(`O seu imc é: ${imcTotal} e você esta com sobrepeso (obesidade grau 1). E você deve consumir ${consumoDiario}L de água por dia.`)

}else if ( imc > 30 && imc < 39.9){

  console.log(`O seu imc é: ${imcTotal} e você esta com Obesidade (obesidade grau 2). E você deve consumir ${consumoDiario}L de água por dia.`)

}else{
  console.log(`O seu imc é: ${imcTotal} e você esta com Obesidade grave (obesidade grau 3). E você deve consumir ${consumoDiario}L de água por dia.`)
}