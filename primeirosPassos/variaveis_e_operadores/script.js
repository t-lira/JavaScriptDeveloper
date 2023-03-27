/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const consumoMedio = 10; 
const distanciaPercorrida = 100; 
const valorGasolina = 6.66; 
const combustivelEtanol = 'Etanol';//Mudar p gasolina para saber o valor
const valorEtanol = 5.79;

if (combustivelEtanol === 'Etanol'){
  const gastoMedioEtanol = distanciaPercorrida / consumoMedio * valorEtanol; 
  console.log(`Etanol ${gastoMedioEtanol }`)
  
} else{
  const gastoMedioGasolina = distanciaPercorrida / consumoMedio * valorGasolina; 
  console.log(`Gasolina ${gastoMedioGasolina}`)
}