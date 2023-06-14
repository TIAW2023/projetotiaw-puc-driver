var formulario = document.getElementById('formularioAluno');


formulario.addEventListener('submit', e =>{
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
    var turno = document.getElementById('turnoAluno').value;  
    
    var usuarios = new Array();

    if(localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios") || '[]');
    }
    usuarios.push({
        nome:nome,
        matricula:matricula,
        cpf:cpf,
        telefone:telefone,
        email:email,
        senha:senha,
        cep:cep,
        endereço:endereço,
        bairro: bairro,
        numero:numero,
        turno:turno
    });
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    console.log(usuarios)
    for(i=0;i<usuarios.length;i++){
        console.log(usuarios[i]);
    }
})

async function buscarCep(){
    let cep = document.getElementById('cepAluno').value;
    if(cep !== ""){
       let url = await "https://brasilapi.com.br/api/cep/v1/" + cep;
        console.log(url);
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function(){
            if( req.status === 200){
                let endereco = JSON.parse(req.response);
               
                document.getElementById("enderecoAluno").value = endereco.street;
                document.getElementById("bairroAluno").value = endereco.neighborhood;
                document.getElementById("estadoAluno").value = endereco.state;
            }
            else if (req.status === 404){
                alert("CEP NAO ENCONTRADO");

            }
            else {
                alert("Erro ao fazer a requisicao");
            }
        }
    }
}

window.onload = function(){
    let txtCep = document.getElementById("cepAluno");
    txtCep.addEventListener("blur", buscarCep);
}

