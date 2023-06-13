function logar() {
    var login = document.getElementById('imput-login-1').value;
    var senha = document.getElementById('imput-login-2').value;

    if(localStorage.usuarios){
        logins = JSON.parse(localStorage.getItem('usuarios'))
    }
    console.log(logins);
    for(var i in logins){
        if(login == logins[i] && senha == logins[i]){
            alert('sucesso');
        }else{
            alert('erro');
        }
    }

    console.log(login, senha);
}