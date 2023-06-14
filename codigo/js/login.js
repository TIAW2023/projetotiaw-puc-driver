function logar() {
    var login = document.getElementById('imput-login-2').value;
    var senha = document.getElementById('imput-login-1').value;

    if (localStorage.usuarios) {
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        var logins2 = JSON.parse(localStorage.getItem('listaUser'));
        console.log(logins);
        console.log(logins2);

        var loginEncontrado = false;

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
        for (var i = 0; i < logins2.length; i++) {
            if (login == logins2[i].emailCad && senha == logins2[i].senhaCad) {
                loginEncontrado = true;
                let id = logins2[i].cpf;

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

function redefinirsenha() {
    var login = document.getElementById('imput-redefinir-email').value;
    var cpf = document.getElementById('imput-redefinir-cpf').value;
    var novaSenha = document.getElementById('imput-redefinir-senha').value;

    if (localStorage.usuarios) {
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        console.log(logins);
        console.log(login, cpf, novaSenha);

        var loginEncontrado = false;

        for (var i = 0; i < logins.length; i++) {
            if (login == logins[i].email && cpf == logins[i].cpf) {
                logins[i].senha = novaSenha; // Atualiza a senha no objeto logins[i]

                localStorage.setItem('usuarios', JSON.stringify(logins)); // Atualiza o valor 'usuarios' no localStorage

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