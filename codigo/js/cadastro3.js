let turno = document.querySelector('#turno');
let labelturno = document.querySelector('#labelturno');
let validTurno = false;

let bairro = document.querySelector('#bairro');
let labelbairro = document.querySelector('#labelbairro');
let validBairro = false;

turno.addEventListener('change', () => {
    if (turno.value === "") {
      labelturno.setAttribute('style', 'color: red');
      labelturno.innerHTML = 'Turno *Selecione uma opção';
      turno.setAttribute('style', 'border-color: red');
      validturno = false;
    } else {
      labelturno.setAttribute('style', 'color: green');
      labelturno.innerHTML = 'Turno';
      turno.setAttribute('style', 'border-color: green');
      validTurno = true;
    }
  });
  
  bairro.addEventListener('keyup', () => {
    if (bairro.value.length <= 2) {
      labelbairro.setAttribute('style', 'color: red');
      labelbairro.innerHTML = 'Bairro *Insira no mínimo 3 caracteres';
      bairro.setAttribute('style', 'border-color: red');
      validBairro = false;
    } else {
      labelbairro.setAttribute('style', 'color: green');
      labelbairro.innerHTML = 'Bairro - Digite os bairros separados com virgula';
      bairro.setAttribute('style', 'border-color: green');
      validBairro = true;
    }
  });

function cadastrar3(){
    if(validTurno && validBairro){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        let index2 = listaUser.length-1;
        
        listaUser[index2].turnoCad = turno.value;
        listaUser[index2].bairroCad = bairro.value;
  
        localStorage.setItem('listaUser',JSON.stringify(listaUser))
        window.location.href = 'CadastroMotorista4.html'

    } else {
      alert('Nao foi possivel ralizar o cadastro')
      }
    }