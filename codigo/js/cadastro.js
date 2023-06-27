/* INICIO VARIAVEIS */
let nome = document.querySelector('#nome');
let labelnome = document.querySelector('#labelnome');
let validNome = false;

let cpf = document.querySelector('#cpf');
let labelcpf = document.querySelector('#labelcpf');
let validCpf = false;

let telefone = document.querySelector('#telefone');
let labeltelefone = document.querySelector('#labeltelefone');
let validTelefone = false;

let email = document.querySelector('#email');
let labelemail = document.querySelector('#labelemail');
let validEmail = false;

let senha = document.querySelector('#senha');
let labelsenha = document.querySelector('#labelsenha');
let validSenha = false;

/* FIM VARIAVEIS */

/* INICIO FUNCOES VARIAVEIS */

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelnome.setAttribute('style', 'color: red');
    labelnome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
    nome.setAttribute('style', 'border-color: red');
    validNome = false;
  } else {
    labelnome.setAttribute('style', 'color: green');
    labelnome.innerHTML = 'Nome';
    nome.setAttribute('style', 'border-color: green');
    validNome = true;
  }
});

cpf.addEventListener('keyup', () => {
  const numbersOnly = cpf.value.replace(/\D/g, '');
  cpf.value = numbersOnly;

  if (numbersOnly.length <= 10) {
    labelcpf.setAttribute('style', 'color: red');
    labelcpf.innerHTML = 'CPF *Insira no mínimo 11 caracteres';
    cpf.setAttribute('style', 'border-color: red');
    validCpf = false;
  } else {
    labelcpf.setAttribute('style', 'color: green');
    labelcpf.innerHTML = 'CPF';
    cpf.setAttribute('style', 'border-color: green');
    validCpf = true;
  }
});

telefone.addEventListener('keyup', () => {
  const numbersOnly = telefone.value.replace(/\D/g, '');
  telefone.value = numbersOnly;

  if (numbersOnly.length <= 9) {
    labeltelefone.setAttribute('style', 'color: red');
    labeltelefone.innerHTML = 'Telefone *Insira no mínimo 9 caracteres';
    telefone.setAttribute('style', 'border-color: red');
    validTelefone = false;
  } else {
    labeltelefone.setAttribute('style', 'color: green');
    labeltelefone.innerHTML = 'Telefone';
    telefone.setAttribute('style', 'border-color: green');
    validTelefone = true;
  }
});

email.addEventListener('keyup', () => {
  if (email.value.length <= 3 || !email.value.includes('@')) {
    labelemail.setAttribute('style', 'color: red');
    labelemail.innerHTML = 'E-mail *Insira um email válido';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelemail.setAttribute('style', 'color: green');
    labelemail.innerHTML = 'E-mail';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
});

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 7) {
    labelsenha.setAttribute('style', 'color: red');
    labelsenha.innerHTML = 'Senha *Insira no minimo 8 caracteres';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelsenha.setAttribute('style', 'color: green');
    labelsenha.innerHTML = 'Senha';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
})

/* FIM FUNCOES VARIAVEIS */

/* INICIO CADASTRO PAGINA 1 */

function cadastrar() {
  if (validNome && validCpf && validTelefone && validEmail && validSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push({
      nomeCad: nome.value,
      cpfCad: cpf.value,
      telefoneCad: telefone.value,
      emailCad: email.value,
      senhaCad: senha.value,
      placaCad: null,
      chassiCad: null,
      anoCad: null,
      turnoCad: null,
      bairroCad: null,
      crlvCad: null,
      vanCad: null,
      selfieCad: null
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    window.location.href = 'CadastroMotorista2.html'

  } else {
    alert('Nao foi possivel ralizar o cadastro')
  }
}

/* FIM CADASTRO PAGINA 1 */