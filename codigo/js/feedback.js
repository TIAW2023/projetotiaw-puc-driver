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
    let conditionStars = $('.condition').length
    let punctualityStars = $('.punctuality').length
    let treatmentStars = $('.treatment').length
    let comment = $('#commentArea').val()

    saveToLocalStorage(
        $('.condition').length,
        $('.punctuality').length,
        $('.treatment').length,
        $('#commentArea').val()
    )
})

function saveToLocalStorage(conditionStars, punctualityStars, treatmentStars, comment){
    var obj = new Object();
    obj.conditionStars = conditionStars;
    obj.punctualityStars = punctualityStars;
    obj.treatmentStars = treatmentStars;
    obj.comment = comment;

    let storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    //storedFeedbacks.push(JSON.stringify(obj));
    console.log(typeof storedFeedbacks);

    localStorage.setItem('feedbacks', JSON.stringify([obj]));
}

executeRating("condition");
executeRating("punctuality");
executeRating("treatment");