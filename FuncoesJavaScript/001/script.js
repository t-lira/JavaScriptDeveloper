function mostrarNome(nome){
  return(`Seu nome é ${nome}`)
}

function mostrarIdade (idade){
  if(idade >= 18){
   console.log(`${mostrarNome('thais')}, e você tem ${idade} anos. Já atingiu a maioridade!`); 
  }else{
    console.log(`${mostrarNome('thais')}, e você tem ${idade} anos. Não atingiu a maioridade!`)
  } 
}

mostrarIdade (29);
