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
function salvar() {
    var nome = document.getElementById("imput-login-nome").value;
    var telefone = document.getElementById("imput-login-telefone").value;
    var endereço = document.getElementById("imput-login-endereço").value;

    var str = "";

    var logins = JSON.parse(localStorage.getItem('usuarios'));
    for (var i = 0; i < logins.length; i++) {
        if (logins[i].turno === "manha") {
            str += `<div class="row aluno">
                <div class="col-12 col-md-5 img-aluno">
                    <div class="d-flex align-items-center">
                    <div class="justify-content-center">
                        <img src="" alt="Foto do Aluno" class="rounded-circle img-100">
                        <div class="ml-3">
                        <p>${nome}</p>
                        <p>${telefone}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="d-flex align-items-center justify-content-center h-100">
                    <div>
                        <p>${endereço}</p>
                        <p>Centro</p>
                    </div>
                    </div>
                </div>
                </div>`
                    
            var telaDiv = document.getElementById("tela");
            telaDiv.insertAdjacentHTML("afterbegin", str);
        }
        else if (logins[i].turno === "tarde ") {
            str += `<div class="row aluno">
                <div class="col-12 col-md-5 img-aluno">
                    <div class="d-flex align-items-center">
                    <div class="justify-content-center">
                        <img src="" alt="Foto do Aluno" class="rounded-circle img-100">
                        <div class="ml-3">
                        <p>${nome}</p>
                        <p>${telefone}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="d-flex align-items-center justify-content-center h-100">
                    <div>
                        <p>${endereço}</p>
                        <p>Centro</p>
                    </div>
                    </div>
                </div>
                </div>`
                    
            var telaDiv = document.getElementById("tela");
            telaDiv.insertAdjacentHTML("afterbegin", str);
        }
        else if (logins[i].turno === "noite") {
            str += `<div class="row aluno">
                <div class="col-12 col-md-5 img-aluno">
                    <div class="d-flex align-items-center">
                    <div class="justify-content-center">
                        <img src="" alt="Foto do Aluno" class="rounded-circle img-100">
                        <div class="ml-3">
                        <p>${nome}</p>
                        <p>${telefone}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="d-flex align-items-center justify-content-center h-100">
                    <div>
                        <p>${endereço}</p>
                        <p>Centro</p>
                    </div>
                    </div>
                </div>
                </div>`
                    
            var telaDiv = document.getElementById("tela");
            telaDiv.insertAdjacentHTML("afterbegin", str);
        }
    }

    console.log(nome, telefone, endereço);
}