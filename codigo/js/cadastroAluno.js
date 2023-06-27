var formulario = document.getElementById('formularioAluno');


formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log('salvar');
    var nome = document.getElementById('nomeAluno').value;
    var matricula = document.getElementById('matriculaAluno').value;
    var cpf = document.getElementById('cpfAluno').value;
    var telefone = document.getElementById('telefoneAluno').value;
    var email = document.getElementById('emailAluno').value;
    var senha = document.getElementById('senhaAluno').value;


    var cep = document.getElementById('cepAluno').value;
    var endereço = document.getElementById('enderecoAluno').value;
    var bairro = document.getElementById('bairroAluno').value;
    var numero = document.getElementById('numeroAluno').value;
    var turno = document.querySelectorAll('input[type="checkbox"]');
    var turnos = []
    console.log(turno);
    for (let i = 0; i < 3; i++) {
        if (turno[i].checked) {
            console.log("ajkjjk" + turno[i].id);
            turnos.push(turno[i].id)
        }
    }

    let nomeV = true
    let matriculaV = true
    let cpfV = true
    let telefoneV = true
    let senhaV = true

    var alunos = new Array();

    if (localStorage.hasOwnProperty("alunos")) {
        alunos = JSON.parse(localStorage.getItem("alunos") || '[]');
    }



    alunos.push({
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha,
        cep: cep,
        endereço: endereço,
        bairro: bairro,
        numero: numero,
        turno: turnos
    });
    if (nome.length < 3) {
        alert("nome Invalido");
        nomeV = false;
    }
    if (matricula.length < 6) {
        alert("matricula Invalida");
        matriculaV = false
    }
    if (cpf.length == 11) {
        alert("CPF Invalido")
        cpfV = false
    }
    if (telefone.length < 10) {
        alert("Telefone Invalido")
        telefoneV = false
    }
    if (senha.length < 8) {
        alert("Informe Uma senha que tenha pelo menos 8 Digitos")
        senhaV = false
    }


    if ((nomeV && matriculaV && cpfV && telefoneV && senhaV == true)) {
        localStorage.setItem("alunos", JSON.stringify(alunos));
        console.log(alunos)
        for (i = 0; i < alunos.length; i++) {
            console.log(alunos[i]);
        }
    }

})

async function buscarCep() {
    let cep = document.getElementById('cepAluno').value;
    if (cep !== "") {
        let url = await "https://brasilapi.com.br/api/cep/v1/" + cep;
        console.log(url);
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);

                document.getElementById("enderecoAluno").value = endereco.street;
                document.getElementById("bairroAluno").value = endereco.neighborhood;
                document.getElementById("estadoAluno").value = endereco.state;
            }
            else if (req.status === 404) {
                alert("CEP NAO ENCONTRADO");

            }
            else {
                alert("Erro ao fazer a requisicao");
            }
        }
    }
}

window.onload = function () {
    let txtCep = document.getElementById("cepAluno");
    txtCep.addEventListener("blur", buscarCep);
}

