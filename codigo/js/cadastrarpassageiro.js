document.getElementById('bnt-adicionar').addEventListener('click', function () {
    var matricula = document.getElementById('imput-login-matricula').value;
    var imagem = document.getElementById('imput-login-imagem').value;
    var nome = document.getElementById('imput-login-nome').value;
    var telefone = document.getElementById('imput-login-telefone').value;
    var endereco = document.getElementById('imput-login-endereço').value;

    var camposVazios = [];

    if (matricula === '') {
        camposVazios.push('Matrícula');
    }
    if (nome === '') {
        camposVazios.push('Nome');
    }
    if (telefone === '') {
        camposVazios.push('Telefone');
    }
    if (endereco === '') {
        camposVazios.push('Endereço');
    }

    if (camposVazios.length > 0) {
        alert('Os seguintes campos estão vazios: ' + camposVazios.join(', '));

        camposVazios.forEach(function (campo) {
            document.getElementById('imput-login-' + campo.toLowerCase()).style.borderColor = 'red';
        });
    } else {
        var usuarios = [];

        if (localStorage.usuarios) {
            usuarios = JSON.parse(localStorage.getItem('usuarios'));
        }

        var matriculaExistente = usuarios.some(function (usuario) {
            return usuario.matricula === matricula;
        });

        if (matriculaExistente) {
            alert('Matrícula já cadastrada!');
        } else {
            usuarios.push({
                matricula: matricula,
                imagem:imagem,
                nome: nome,
                telefone: telefone,
                endereco: endereco
            });

            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            var card = document.createElement('div');
            card.className = 'col-12 col-md-6';
            card.innerHTML = `
                <div class="row aluno">
                    <div class="col-12 col-md-5 img-aluno">
                        <div class="d-flex align-items-center justify-content-center">
                            <img src="${imagem}" alt="Foto do Aluno" class="rounded-circle img-100">
                        </div>
                         <p>${nome}</p>
                        <p>${telefone}</p>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <p>${endereco}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            var container = document.getElementById('content');
            container.appendChild(card);
        }
    }

});
