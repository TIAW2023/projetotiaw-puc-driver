function logar() {
    var login = document.getElementById('imput-login-2').value;
    var senha = document.getElementById('imput-login-1').value;

    //if (localStorage.usuarios || localStorage.listaUser) {
        var logins = JSON.parse(localStorage.getItem('alunos')) || [];
        var logins2 = JSON.parse(localStorage.getItem('listaUser')) || [];
        console.log(logins);
        console.log(logins2);

        var loginEncontrado = false;

        // Aluno
        for (var i = 0; i < loginPassageiro.length; i++) {
            if (login == loginPassageiro[i].email && senha == loginPassageiro[i].senha) {
                loginEncontrado = true;
                let id = logins[i].cpfCad;
                let idUser = logins.find(user => user.login == login)

                console.log(">>>>" + idUser);
                

                localStorage.setItem('user-authenticated-id', id);
                location.href = "/codigo/html/HomeAluno.html"

                break;
            }
        }
        // MOTORISTA
        for (var i = 0; i < loginMotorista.length; i++) {
            if (login == loginMotorista[i].emailCad && senha == loginMotorista[i].senhaCad) {
                loginEncontrado = true;
                let id = logins2[i].cpfCad;
                let idUser = logins.find(user => user.login == login)

                console.log(">>>>" + idUser);

                console.log(">>>>2" + id);
                alert('LOGIN EFETUADO COM SUCESSO' + id);

                localStorage.setItem('user-authenticated-id', id);
                location.href = "/codigo/html/HomeMotorista.html"

                break;
            }
        }

        if (loginEncontrado) {
            alert('LOGIN EFETUADO COM SUCESSO');
        } else {
            alert('USUARIO OU SENHA INCORRETOS');
        }
    //} else {
    //    alert('Erro! ');
    //}

    console.log(login, senha);
}

function redefinirsenha() {
    var login = document.getElementById('imput-redefinir-email').value;
    var cpf = document.getElementById('imput-redefinir-cpf').value;
    var novaSenha = document.getElementById('imput-redefinir-senha').value;

    if (localStorage.alunos || localStorage.listaUser) {
        var loginPassageiro = JSON.parse(localStorage.getItem('alunos'));
        var loginMotorista = JSON.parse(localStorage.getItem('listaUser'));

        var loginEncontrado = false;

        //Aluno
        for (var i = 0; i < loginPassageiro.length; i++) {
            if (login == loginPassageiro[i].email && cpf == loginPassageiro[i].cpf) {
                if(novaSenha.length > 7){
                loginPassageiro[i].senha = novaSenha; // Atualiza a senha no objeto loginPassageiro[i]
                }else{
                    alert("Senha com menos de 8 digitos");
                }

                localStorage.setItem('alunos', JSON.stringify(loginPassageiro)); // Atualiza o valor 'alunos' no localStorage

                loginEncontrado = true;
                break;
            }
        }
        //Motorista
        for (var i = 0; i < loginMotorista.length; i++) {
            if (login == loginMotorista[i].emailCad && cpf == loginMotorista[i].cpfCad) {
                if(novaSenha.length > 7){
                loginMotorista[i].senhaCad = novaSenha; // Atualiza a senha no objeto loginMotorista[i]
                }else{
                    alert("Senha com menos de 8 digitos");
                }

                localStorage.setItem('alunos', JSON.stringify(loginMotorista)); // Atualiza o valor 'alunos' no localStorage

                loginEncontrado = true;
                break;
            }
        }

        if (loginEncontrado) {
            alert('TROCA DE SENHA EFETUADA COM SUCESSO');
        } else {
            alert('EMAIL OU CPF INCORRETOS');
        }
    } else {
        alert('erro!');
    }
}