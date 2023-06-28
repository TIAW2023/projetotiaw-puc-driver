import { alunoAtual, motoristaPeloId } from "./userUtil.js"

const ratingStars = [...document.getElementsByClassName("condition")];

$(document).ready(() => {
    executeRating("condition");
    executeRating("punctuality");
    executeRating("treatment");

    let aluno = alunoAtual();
    let passageiro = (JSON.parse(localStorage.getItem("passageiros")) ?? []).find(item => item.matricula == aluno.matricula)
    
    if(passageiro != undefined) {
        console.log(passageiro)
        $("#feedback-container").removeClass("invisible").addClass("visible");

        let motorista = motoristaPeloId(passageiro.motorista)
        $("#motorista-selfie").attr("src", motorista.selfieCad)

        $('#saveComment').click(() => {
            saveToLocalStorage(
                $('.condition').length,
                $('.punctuality').length,
                $('.treatment').length,
                $('#commentArea').val(),
                motorista.cpfCad
            )
        })

    }else {
        $("#no-motorista").removeClass("invisible").addClass("visible");
    }
    
})

function executeRating(className){
    let stars = [...document.getElementsByClassName(className)]
    const starClassActive = `${className} bi bi-star-fill rating-color`;
    const starClassInactive = "bi bi-star";
    const starsLength = stars.length;

    stars.map((star) => {
        star.onclick = () => {
            let i = stars.indexOf(star);

            if(star.className === starClassInactive){
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        }
    });
}

function saveToLocalStorage(conditionStars, punctualityStars, treatmentStars, comment, motoristaId){
    var feedback = {
        conditionStars: conditionStars,
        punctualityStars: punctualityStars,
        treatmentStars: treatmentStars,
        comment: comment,
        motoristaId: motoristaId
    }

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) ?? []
    feedbacks?.push(feedback)

    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))

    alert("Comentário salvo com sucesso!")
}