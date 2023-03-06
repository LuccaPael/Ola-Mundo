let nome = "Lucca"
let sobrenome = "Pael"
let idade = 25

// String Normal ""
let nomeCompletoString = nome + ' ' + sobrenome
console.log ("Nome: " + nomeCompletoString)



//Templet String  ``
let nomeCompletoTemplate = `Nome: ${nome} ${sobrenome} S. do Nascimento` 
console.log (nomeCompletoTemplate)


let idadeTemplate = `Idade: ${idade + 2}` 
console.log (idadeTemplate)

