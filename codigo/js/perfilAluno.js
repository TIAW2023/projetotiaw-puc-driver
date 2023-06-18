let pessoas;
const userAuthenticated = localStorage.getItem('user-authenticated-id');
let userLogged = null

if (localStorage.hasOwnProperty("usuarios") && userAuthenticated) {
    pessoas = JSON.parse(localStorage.getItem("usuarios"));
    //deixei settado um usuarios para preencher os dados para fins de avaliação; mas depois será verificado conforme login da pessoa;
    userLogged = pessoas.find(pessoa => pessoa.cpf === userAuthenticated);
    console.log(pessoas)
    console.log(userLogged)
}

if(userLogged){
  document.getElementById('nomeAluno').innerText = userLogged.nome;
  document.getElementById('matriculaAluno').value = userLogged.matricula;
  document.getElementById('enderecoAluno').value = userLogged.endereço;
  document.getElementById('bairroAluno').value = userLogged.bairro;
  document.getElementById('cepAluno').value = userLogged.cep;
  document.getElementById('cpfAluno').value = userLogged.cpf;
  document.getElementById('telefoneAluno').value = userLogged.telefone;
  document.getElementById('emailAluno').value = userLogged.email;
  document.getElementById('numeroAluno').value = userLogged.numero;
  document.getElementById('turnoAluno').value = userLogged.turno; 
}


