function salvarCadastro() {
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  var cadastro = {
    nome: nome,
    cpf: cpf,
    telefone: telefone,
    email: email
  };

  var cadastroJSON = JSON.stringify(cadastro);

  localStorage.setItem("cadastro", cadastroJSON);
}
