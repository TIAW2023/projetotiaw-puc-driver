function matriculaOk() {
    var matricula = document.getElementById('input-login-matricula').value;

    if (localStorage.usuarios) {
        var logins = JSON.parse(localStorage.getItem('usuarios'));
        const passageiros = JSON.parse(localStorage.getItem('passageiros'));
        console.log(logins);

        var matriculaEncontrada = false;


        for (var i = 0; i < logins.length; i++) {
            if (matricula === logins[i].matricula) {
                if(passageiros?.find(passageiro => passageiro.matricula === matricula)){
                    alert('Passageiro já cadastrado!')
                    clearForm()
                    return
                }
                matriculaEncontrada = true;
                var nome = logins[i].nome;
                var telefone = logins[i].telefone;
                var endereço = logins[i].endereço;
                var turno = logins[i].turno;
                console.log(nome, telefone, endereço);

                document.getElementById("input-login-nome").value = nome;
                document.getElementById("input-login-telefone").value = telefone;
                document.getElementById("input-login-endereco").value = endereço;
                document.getElementById("input-login-turno").value = turno;
                break;
            }
        }1

        if (!matriculaEncontrada) {
            alert('Matrícula não encontrada!');
        }
    } else {
        alert('Erro!');
    }

    console.log(matricula);
}

function salvar(event) {
    event.preventDefault()
    const nome = event.target.querySelector("#input-login-nome").value;
    const telefone = event.target.querySelector("#input-login-telefone").value;
    const endereco = event.target.querySelector("#input-login-endereco").value;
    const matricula = event.target.querySelector("#input-login-matricula").value;
    const turno = event.target.querySelector("#input-login-turno").value;

    const passageiro = {
        nome,
        telefone,
        endereco,
        matricula,
        turno,
    }

    const passageiros = JSON.parse(localStorage.getItem("passageiros")) ?? []
    passageiros?.push(passageiro)

    localStorage.setItem('passageiros', JSON.stringify(passageiros))

    changeTab(turno)
    document.querySelectorAll('button.nav-link').forEach(item => item.classList.remove('active'))
    document.getElementById(`nav-${turno}-tab`).classList.add('active')

    clearForm()
}

function changeTab(tab){
    const tela = document.querySelector(`#nav-home`)
    const passageiros = JSON.parse(localStorage.getItem("passageiros")) ?? []

    tela.innerHTML = ""

    document.querySelectorAll('button.nav-link').forEach(item => item.classList.remove('active'))
    document.getElementById(`nav-${tab}-tab`).classList.add('active')

    for (var i = 0; i < passageiros.length; i++) {
        if(passageiros[i].turno === tab){
            const str = `
            <div class="bg-white col-12 col-md-4 col-sm-8  py-4  d-flex flex-column rounded">
                <div class="d-flex align-items-center" style="gap: 24px">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" width="80" height="80">
                    <div class="d-flex flex-column" style="gap: 8px;">
                        <div>
                            <span style="color: #000; font-weight: 600;">Nome: </span>
                            <p>${passageiros[i].nome}</p>
                        </div>
                        <div>
                            <span style="color: #000; font-weight: 600;">Telefone: </span>
                            <p>${passageiros[i].telefone}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <span style="color: #000; font-weight: 600;">Endereço: </span>
                    <p>${passageiros[i].endereco}</p>
                </div>
            </div>`
                
            tela.insertAdjacentHTML("afterbegin", str);
        }
    }
    
}

function clearForm(){
    document.getElementById("input-login-matricula").value = "";
    document.getElementById("input-login-nome").value = "";
    document.getElementById("input-login-telefone").value = "";
    document.getElementById("input-login-endereco").value = "";
    document.getElementById("input-login-turno").value = "";
}