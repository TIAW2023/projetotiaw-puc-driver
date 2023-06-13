function logar() {
    var login = document.getElementById('imput-login-2').value;
    var senha = document.getElementById('imput-login-1').value;

    if (localStorage.usuarios) {
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        console.log(logins);

        var loginEncontrado = false;
        var matricula = false;

        // Aluno
        for (var i = 0; i < logins.length; i++) {
            if (login == logins[i].email && senha == logins[i].senha) {
                loginEncontrado = true;
                let id = logins[i].cpf;

                location.href = "/codigo/html/HomeAluno.html"

                break;
            }
        }
        // MOTORISTA
        for (var i = 0; i < logins.length; i++) {
            if (login == logins[i].email && senha == logins[i].senha) {
                loginEncontrado = true;
                let id = logins[i].cpf;

                location.href = "/codigo/html/HomeMotorista.html"
                
                break;
            }
        }
        
        if (loginEncontrado) {
            alert('LOGIN EFETUADO COM SUCESSO');
        } else {
            alert('USUARIO OU SENHA INCORRETOS');
        }
    } else {
        alert('Erro!');
    }

    console.log(login, senha);
}

function redefinirsenha(){
    var login = document.getElementByI('').value;
    var cpf = document.getElementById('').value;
    var novaSenha = document.getElementById('').value;

    if(localStorage.usuarios){
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        console.log(logins);

        var loginEncontrado = false;

        for (var i = 0; i < logins.length; i++){
            if(login == logins[i].email && cpf == logins[i].cpf){
                logins[i].senha = novaSenha;
                break;
            }
        }

        if(loginEncontrado){
            alert('TROCA DE SENHA EFETUADA COM SUCESSO');
        }else{
            alert('EMAIL OU CPF INCORRETOS');
        }
    }else{
        alert('erro!'); 
    }
}