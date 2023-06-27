let placa = document.querySelector('#placa');
let labelplaca = document.querySelector('#labelplaca');
let validPlaca = false;

let chassi = document.querySelector('#chassi');
let labelchassi = document.querySelector('#labelchassi');
let validChassi = false;

let ano = document.querySelector('#ano');
let labelano = document.querySelector('#labelano');
let validAno = false;


placa.addEventListener('keyup', () => {
  if (placa.value.length <= 6) {
    labelplaca.setAttribute('style', 'color: red');
    labelplaca.innerHTML = 'Placa *Insira no minimo 7 caracteres';
    placa.setAttribute('style', 'border-color: red');
    validPlaca = false;
  } else {
    labelplaca.setAttribute('style', 'color: green');
    labelplaca.innerHTML = 'Placa';
    placa.setAttribute('style', 'border-color: green');
    validPlaca = true;
  }
})

chassi.addEventListener('keyup', () => {
  if (chassi.value.length <= 16) {
    labelchassi.setAttribute('style', 'color: red');
    labelchassi.innerHTML = 'Chassi *Insira no minimo 17 caracteres';
    chassi.setAttribute('style', 'border-color: red');
    validChassi = false;
  } else {
    labelchassi.setAttribute('style', 'color: green');
    labelchassi.innerHTML = 'Chassi';
    chassi.setAttribute('style', 'border-color: green');
    validChassi = true;
  }
})

ano.addEventListener('keyup', () => {
  const currentYear = new Date().getFullYear();
  const enteredYear = parseInt(ano.value);

  if (ano.value.length <= 3 || isNaN(enteredYear) || enteredYear > currentYear) {
    labelano.setAttribute('style', 'color: red');
    labelano.innerHTML = 'Ano *Insira um ano válido';
    ano.setAttribute('style', 'border-color: red');
    validAno = false;
  } else {
    labelano.setAttribute('style', 'color: green');
    labelano.innerHTML = 'Ano';
    ano.setAttribute('style', 'border-color: green');
    validAno = true;
  }
});

function cadastrar2() {
  if (validPlaca && validChassi && validAno) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    let index1 = listaUser.length - 1;

    listaUser[index1].placaCad = placa.value;
    listaUser[index1].chassiCad = chassi.value;
    listaUser[index1].anoCad = ano.value;

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    window.location.href = 'CadastroMotorista3.html'

  } else {
    alert('Nao foi possivel ralizar o cadastro')
  }
}