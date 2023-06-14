 let pessoas;
if (localStorage.hasOwnProperty("usuarios")) {
    pessoas = JSON.parse(localStorage.getItem("usuarios"));
    pessoas = pessoas[0];//deixei settado um usuarios para preencher os dados para fins de avaliação; mas depois será verificado conforme login da pessoa;
    console.log(pessoas)
  }

document.getElementById('nomeAluno').innerHTML = pessoas.nome;
document.getElementById('matriculaAluno').value = pessoas.matricula;
document.getElementById('enderecoAluno').value = pessoas.endereço;
document.getElementById('bairroAluno').value = pessoas.bairro;
document.getElementById('cepAluno').value = pessoas.cep;
document.getElementById('cpfAluno').value = pessoas.cpf;
document.getElementById('telefoneAluno').value = pessoas.telefone;
document.getElementById('emailAluno').value = pessoas.email;
document.getElementById('numeroAluno').value = pessoas.numero;
document.getElementById('turnoAluno').value = pessoas.turno;


