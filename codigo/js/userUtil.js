export function alunoAtual(){
    let alunoId = JSON.parse(localStorage.getItem("user-authenticated-id")).id;
    let alunos = JSON.parse(localStorage.getItem("alunos"));

    return alunos.find((aluno) => aluno.cpf == alunoId) || {}
}

export function motoristaAtual(){
    let motoristaId = localStorage.getItem("user-authenticated-id") || "";
    let motoristas = JSON.parse(localStorage.getItem("listaUser"));

    return motoristas.find((motorista) => motorista.cpfCad == motoristaId) || {}
}

export function motoristaPeloId(motoristaId){
    let motoristas = JSON.parse(localStorage.getItem("listaUser"));
    return motoristas.find((motorista) => motorista.cpfCad == motoristaId)
}

export function usuarioAutenticado(){
    return localStorage.hasOwnProperty("user-authenticated-id")
}