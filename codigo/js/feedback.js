const ratingStars = [...document.getElementsByClassName("condition")];

function executeRating(className){
    let stars = [...document.getElementsByClassName(className)]
    const starClassActive = `${className} bi bi-star-fill rating-color`;
    const starClassInactive = "bi bi-star";
    const starsLength = stars.length;

    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if(star.className === starClassInactive){
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        }
    });
}

$('#saveComment').click(() => {
    saveToLocalStorage(
        $('.condition').length,
        $('.punctuality').length,
        $('.treatment').length,
        $('#commentArea').val()
    )
})

function saveToLocalStorage(conditionStars, punctualityStars, treatmentStars, comment){
    var values = {
        conditionStars: conditionStars,
        punctualityStars: punctualityStars,
        treatmentStars: treatmentStars,
        comment: comment
    }

    let storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    if(storedFeedbacks.length == 0){
        arrayData = []
        arrayData.push(values)
        localStorage.setItem('feedbacks', JSON.stringify(arrayData))
    } else {
        storedFeedbacks.push(values)
        localStorage.setItem('feedbacks', JSON.stringify(storedFeedbacks))
    }

    alert("Comentário salvo com sucesso!    ")
}

executeRating("condition");
executeRating("punctuality");
executeRating("treatment");