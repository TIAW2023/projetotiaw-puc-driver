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
    if(placa.value.length <= 7){
      labelplaca.setAttribute('style', 'color: red');
      labelplaca.innerHTML = 'placa *Insira no minimo 7 caracteres';
      placa.setAttribute('style', 'border-color: red');
      validPlaca = false;
    } else {
      labelplaca.setAttribute('style', 'color: green');
      labelplaca.innerHTML = 'placa';
      placa.setAttribute('style', 'border-color: green');
      validPlaca = true;
    }
  })
  
  chassi.addEventListener('keyup', () => {
      if(chassi.value.length <= 15){
        labelchassi.setAttribute('style', 'color: red');
        labelchassi.innerHTML = 'chassi *Insira no minimo 17 caracteres';
        chassi.setAttribute('style', 'border-color: red');
        validChassi = false;
      } else {
        labelchassi.setAttribute('style', 'color: green');
        labelchassi.innerHTML = 'chassi';
        chassi.setAttribute('style', 'border-color: green');
        validChassi = true;
      }
    })
  
  ano.addEventListener('keyup', () => {
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(ano.value); 
  
    if (ano.value.length <= 3 || isNaN(enteredYear) || enteredYear > currentYear) {
      labelano.setAttribute('style', 'color: red');
      labelano.innerHTML = 'ano *Insira um ano válido';
      ano.setAttribute('style', 'border-color: red');
      validAno = false;
    } else {
      labelano.setAttribute('style', 'color: green');
      labelano.innerHTML = 'ano';
      ano.setAttribute('style', 'border-color: green');
      validAno = true;
    }
  });

  function cadastrar2(){
    if(validPlaca && validChassi && validAno){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
          placaCad: placa.value,
          chassiCad: chassi.value,
          anoCad: ano.value
        });
  
        localStorage.setItem('listaUser',JSON.stringify(listaUser))
        alert('cadastro sucesso')
           /* setTimeout(()=>{ 
              window.location.href = 'pag3.html'
            }, 1000) */
    } else{
        alert('Nao foi possivel ralizar o cadastro')
    }
      
    }