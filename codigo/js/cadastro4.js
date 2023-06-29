let crlv = document.querySelector('#crlv');
let labelcrlv = document.querySelector('#labelcrlv');
let validCrlv = false;

let van = document.querySelector('#van');
let labelvan = document.querySelector('#labelvan');
let validVan = true;

let selfie = document.querySelector('#selfie');
let labelselfie = document.querySelector('#labelselfie');
let validSelfie = true;

crlv.addEventListener('change', () => {
  const file = crlv.files[0];
  if (file) {
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
      labelcrlv.setAttribute('style', 'color: green');
      labelcrlv.innerHTML = 'CRLV';
      crlv.setAttribute('style', 'border-color: green');
      validCrlv = true;
    } else {
      labelcrlv.setAttribute('style', 'color: red');
      labelcrlv.innerHTML = 'CRLV *Insira uma foto com extensão válida (jpg, jpeg, png)';
      crlv.setAttribute('style', 'border-color: red');
      validCrlv = false;
    }
  }
});

// van.addEventListener('change', () => {
//   const file = van.files[0];
//   if (file) {
//     const fileName = file.name;
//     const fileExtension = fileName.split('.').pop().toLowerCase();
//     if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
//       labelvan.setAttribute('style', 'color: green');
//       labelvan.innerHTML = 'Van';
//       van.setAttribute('style', 'border-color: green');
//       validVan = true;
//     } else {
//       labelvan.setAttribute('style', 'color: red');
//       labelvan.innerHTML = 'Van *Insira uma foto com extensão válida (jpg, jpeg, png)';
//       van.setAttribute('style', 'border-color: red');
//       validVan = false;
//     }
//   }
// });

// selfie.addEventListener('change', () => {
//   const file = selfie.files[0];
//   if (file) {
//     const fileName = file.name;
//     const fileExtension = fileName.split('.').pop().toLowerCase();
//     if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
//       labelselfie.setAttribute('style', 'color: green');
//       labelselfie.innerHTML = 'Selfie';
//       selfie.setAttribute('style', 'border-color: green');
//       validSelfie = true;
//     } else {
//       labelselfie.setAttribute('style', 'color: red');
//       labelselfie.innerHTML = 'Selfie *Insira uma foto com extensão válida (jpg, jpeg, png)';
//       selfie.setAttribute('style', 'border-color: red');
//       validSelfie = false;
//     }
//   }
// });

function cadastrar4() {
  if (validCrlv && validVan && validSelfie) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    let index3 = listaUser.length - 1;

    listaUser[index3].crlvCad = crlv.value;
    listaUser[index3].vanCad = van.value;
    listaUser[index3].selfieCad = selfie.value;


    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    setTimeout(() => {
      alert('Cadastro realizado com Sucesso!')
      localStorage.setItem('user-authenticated-id', JSON.stringify({
        id: listaUser[index3].cpfCad,
        type: "motorista"
      }));
      location.href = "/codigo/html/HomeMotorista.html"
    }, 1000)
  } else {
    alert('Nao foi possivel ralizar o cadastro')
  }
}