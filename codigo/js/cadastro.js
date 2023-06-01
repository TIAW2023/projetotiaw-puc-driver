/* INICIO VARIAVEIS PAGINA 1 */
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

/* FIM VARIAVEIS PAGINA 1 */

/* INICIO FUNCOES VARIAVEIS PAGINA 1 */

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelnome.setAttribute('style', 'color: red');
    labelnome.innerHTML = 'nome *Insira no mínimo 3 caracteres';
    nome.setAttribute('style', 'border-color: red');
    validNome = false;
  } else {
    labelnome.setAttribute('style', 'color: green');
    labelnome.innerHTML = 'nome';
    nome.setAttribute('style', 'border-color: green');
    validNome = true;
  }
});

cpf.addEventListener('keyup', () => {
  const numbersOnly = cpf.value.replace(/\D/g, '');
  cpf.value = numbersOnly;

  if (numbersOnly.length <= 2) {
    labelcpf.setAttribute('style', 'color: red');
    labelcpf.innerHTML = 'cpf *Insira no mínimo 3 caracteres';
    cpf.setAttribute('style', 'border-color: red');
    validCpf = false;
  } else {
    labelcpf.setAttribute('style', 'color: green');
    labelcpf.innerHTML = 'cpf';
    cpf.setAttribute('style', 'border-color: green');
    validCpf = true;
  }
});

telefone.addEventListener('keyup', () => {
  const numbersOnly = telefone.value.replace(/\D/g, '');
  telefone.value = numbersOnly;

  if (numbersOnly.length <= 9) {
    labeltelefone.setAttribute('style', 'color: red');
    labeltelefone.innerHTML = 'telefone *Insira no mínimo 9 caracteres';
    telefone.setAttribute('style', 'border-color: red');
    validTelefone = false;
  } else {
    labeltelefone.setAttribute('style', 'color: green');
    labeltelefone.innerHTML = 'telefone';
    telefone.setAttribute('style', 'border-color: green');
    validTelefone = true;
  }
});

email.addEventListener('keyup', () => {
  if (email.value.length <= 3 || !email.value.includes('@')) {
    labelemail.setAttribute('style', 'color: red');
    labelemail.innerHTML = 'email *Insira um email válido';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelemail.setAttribute('style', 'color: green');
    labelemail.innerHTML = 'email';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
});

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelsenha.setAttribute('style', 'color: red')
    labelsenha.innerHTML = 'senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelsenha.setAttribute('style', 'color: green')
    labelsenha.innerHTML = 'senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

/* FIM FUNCOES VARIAVEIS PAGINA 1 */

/* INICIO VARIAVEIS PAGINA 2 */

let placa = document.querySelector('#placa');
let labelplaca = document.querySelector('#labelplaca');
let validplaca = false;

let chassi = document.querySelector('#chassi');
let labelchassi = document.querySelector('#labelchassi');
let validchassi = false;

let ano = document.querySelector('#ano');
let labelano = document.querySelector('#labelano');
let validano = false;

/* FIM VARIAVEIS PAGINA 2 */

/* INICIO FUNCOES VARIAVEIS PAGINA 2 */

placa.addEventListener('keyup', () => {
  if(placa.value.length <= 7){
    labelplaca.setAttribute('style', 'color: red')
    labelplaca.innerHTML = 'placa *Insira no minimo 6 caracteres'
    placa.setAttribute('style', 'border-color: red')
    validplaca = false
  } else {
    labelplaca.setAttribute('style', 'color: green')
    labelplaca.innerHTML = 'placa'
    placa.setAttribute('style', 'border-color: green')
    validplaca = true
  }
})

chassi.addEventListener('keyup', () => {
  if(chassi.value.length <= 7){
    labelchassi.setAttribute('style', 'color: red')
    labelchassi.innerHTML = 'chassi *Insira no minimo 17 caracteres'
    chassi.setAttribute('style', 'border-color: red')
    validchassi = false
  } else {
    labelchassi.setAttribute('style', 'color: green')
    labelchassi.innerHTML = 'chassi'
    chassi.setAttribute('style', 'border-color: green')
    validchassi = true
  }
})

ano.addEventListener('keyup', () => {
  const currentYear = new Date().getFullYear();
  const enteredYear = parseInt(ano.value);

  if (ano.value.length <= 3 || isNaN(enteredYear) || enteredYear > currentYear) {
    labelano.setAttribute('style', 'color: red');
    labelano.innerHTML = 'ano *Insira um ano válido';
    ano.setAttribute('style', 'border-color: red');
    validano = false;
  } else {
    labelano.setAttribute('style', 'color: green');
    labelano.innerHTML = 'ano';
    ano.setAttribute('style', 'border-color: green');
    validano = true;
  }
});

/* FIM FUNCOES VARIAVEIS PAGINA 2 */


/* MENSAGENS */
/*
let msgSuccess = document.querySelector('#msgSuccess');
*/
/* FIM MENSAGENS */

/* INICIO CADASTRO PAGINA 1 */

function cadastrar(){
    if(validNome && validCpf && validTelefone && validEmail && validSenha){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

      listaUser.push({
        nomeCad: nome.value,
        cpfCad: cpf.value,
        telefoneCad: telefone.value,
        emailCad: email.value,
        senhaCad: senha.value,
        placaCad: null,
        chassiCad: null,
        anoCad: null
      });

      localStorage.setItem('listaUser',JSON.stringify(listaUser))


      alert('Cadastro realizado')
          setTimeout(()=>{ 
            window.location.href = '../codigo/html/CadastroMotorista2.html'
           }, 3000)
           } else{
      alert('Nao foi possivel ralizar o cadastro')
    }
    
  } 

/* FIM CADASTRO PAGINA 1 */

/* INICIO CADASTRO PAGINA 2 */

   function cadastrar2(){
    if(validplaca && validchassi && validano){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

      listaUser.push(
        {
        /*nomeCad: nome.value,
        cpfCad: cpf.value,
        telefoneCad: telefone.value,
        emailCad: email.value,
        senhaCad: senha.value, */
        placaCad: placa.calue,
        chassiCad: chassi.value,
        anoCad: ano.value
        }
      )

      localStorage.setItem('listaUser',JSON.stringify(listaUser))


      alert('Cadastro realizado')
         /* na ultima pagina colocar um setTimeout(()=>{ 
          window.location.href = 'pag2.html'
           }, 3000) */
      alert('Nao foi possivel ralizar o cadastro') 
    } 
  } 
  
/* FIM CADASTRO PAGINA 2 */