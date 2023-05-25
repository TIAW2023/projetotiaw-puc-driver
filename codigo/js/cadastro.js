var cadastroJSON = JSON.parse(localStorage.getItem("motoristas"));
if (!cadastroJSON){
  cadastroJSON=[]
}
function salvarCadastro() {

  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  var cadastro = {
    nome: nome,
    cpf: cpf,
    telefone: telefone,
    email: email,
    senha: senha,
    placa: "",
    chassi: "",
    ano: "",
    crlv: "",
    van: "",
    selfie: "",
    turno: "",
    bairros: ""
  };

  cadastroJSON.push(cadastro);

  var id=parseInt(cadastroJSON.lenght-1);
  alert(id);


/*
  localStorage.setItem("motoristas", cadastroJSON);
  
  var cadastroJSON = JSON.stringify(cadastro);
  var verificar = localStorage.getItem("cadastro");
  if (verificar.length==0){
  localStorage.setItem("motoristas", cadastroJSON);}
  else {
    verificar JSON.stringify(verificar).push}
    */
}
function salvarParte2(){

  alert(cadastroJSON);
}
