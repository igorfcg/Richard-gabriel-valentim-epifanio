//cadastro de aluno//


let aluno1 = {
    nome: "Richard Gabriel Valentim Epifanio", 
    idade: 18,
    tecnico: ["TIA", "PDM", "GEO", "HIS", "POO"],
    presença: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05", "2024-01-06", "2024-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "4879666"
}


//função para validar cadastro//
function validarCadastro(){


if(aluno1.nome.length <10){
console.log(idade)


}

//função parar mostrar a idade nao atingida//
if(aluno1.idade > 14){
  console.log("idade minima nao atingida")
  return

}


//mostrando o minimo de materia cursada//
if (aluno1.cursotecnico.length<=3){
  console.log("minimo de materia")

   return
}


//mostrando a presença do aluno//
if(aluno1.presença.length <3){
console.log("falta de presença minima")

return

}



}
