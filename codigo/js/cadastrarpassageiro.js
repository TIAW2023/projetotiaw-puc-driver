function matriculaOk() {
    var matricula = document.getElementById('imput-login-matricula').value;

    if (localStorage.usuarios) {
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        console.log(logins);

        var matriculaEncontrada = false;

        for (var i = 0; i < logins.length; i++) {
            if (matricula === logins[i].matricula) {
                matriculaEncontrada = true;
                var nome = logins[i].nome;
                var telefone = logins[i].telefone;
                var endereço = logins[i].endereço;
                console.log(nome, telefone, endereço);

                document.getElementById("imput-login-nome").value = nome;
                document.getElementById("imput-login-telefone").value = telefone;
                document.getElementById("imput-login-endereço").value = endereço;
                break;
            }
        }

        if (!matriculaEncontrada) {
            alert('Matrícula não encontrada!');
        }
    } else {
        alert('Erro!');
    }

    console.log(matricula);
}