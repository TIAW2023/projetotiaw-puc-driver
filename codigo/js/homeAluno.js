import { motoristaAtual, motoristaPeloId } from "./userUtil.js";

const cardsListContainer = document.querySelector("#cards-list");

$(document).ready(() => {
    loadMotorists();
    $("#busca-form").submit((event) => {
        filterMotorists(event)
        console.log($("#search-input").val());
    })
});

function loadMotorists(){
    const list = JSON.parse(localStorage.getItem('listaUser')) || []

    list.forEach((item, index) => {
        if(item.chassiCad){
            const bairros = item.bairroCad.split(',');
            console.log("bairros: ", bairros) 
            const card = document.createElement('div')
            card.classList = "col-md-4 col-mb-3"
            card.innerHTML = `
                <div class="card" id=${"card"+index}>
                    <img src=${item.vanCad} class="card-img-top" alt="Foto da van">
                    <div class="card-body">
                        <div class="d-flex flex-column mt-2 mb-4">
                            <strong class="card-text">${item.nomeCad}</strong>
                            <span class="card-text">Turno: ${item.turnoCad}</span>
                        </div>
                        <div class="d-flex">
                            ${bairros.map(bairro => (
                            `<span class="destaque">${bairro}</span>`
                            )).join('')}
                        </div>
                        <div class="estrelas">${buildRating(item)}</div>
                    </div>
                </div>
                <div class="modal fade" id=${"myModal" + index} tabindex="-1" role="dialog"
                    aria-labelledby="modalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content pb-4">
                            <div class="modal-header">
                                <h3 class="modal-title" id="exampleModalLabel">Informações do motorista</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body px-3">
                                <div class="modal-body">
                                    <div class="row" style="gap: 32px;">
                                        <div class="col-3 d-flex flex-column align-items-center perfil" style="gap: 16px;">
                                            <div class="d-flex flex-column align-items-center bg-light p-3 rounded">
                                                <img src=${item.selfieCad} alt="" class="rounded-circle img-fluid" width="80px" height="80px">
                                                <div class="mt-2 d-flex flex-column align-items-start perfil-info">
                                                    <strong>${item.nomeCad}</strong>
                                                    <p class="text-center m-0">${item.telefoneCad}</p>                                                        
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <strong class="my-2">Bairros atendidos</strong>
                                                <div class="d-flex justify-content-between bairros">
                                                    ${bairros.map(bairro => `<span class="bairros-ate">${bairro}</span>`).join('')}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-8">
                                            <div class="van-moto">
                                                <strong class="mb-4">
                                                    Motorista ${item.nomeCad} atende no turno da ${item.turnoCad}
                                                </strong>
                                                <img src=${item.vanCad                                                }
                                                    class="img-moto " alt="Foto da van">
                                            </div>
                                            <div class="estrelas">${buildRating(item)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            cardsListContainer.appendChild(card)

            $(`#card${index}`).click(function() {
                // Exiba o modal
                $(`#myModal${index}`).modal('show');
            });  
              
        }
    })
}

function filterMotorists(event){
    event.preventDefault()
    cardsListContainer.innerHTML = ""

    const searchString = event.target.querySelector("#search-input").value
    const manhaCheckbox = event.target.querySelector("#manha-checkbox").checked
    const tardeCheckbox = event.target.querySelector("#tarde-checkbox").checked
    const noiteCheckbox= event.target.querySelector("#noite-checkbox").checked


    const list = JSON.parse(localStorage.getItem('listaUser')) || []

    const filterList = list.filter(item => {
        if(searchString){
            return item.bairroCad.toLowerCase().includes(searchString.toLowerCase())
        } else {
            return (manhaCheckbox && item.turnoCad == "manha") ||
            (tardeCheckbox && item.turnoCad == "tarde") ||
            (noiteCheckbox && item.turnoCad == "noite")
        }
    })

    console.log(filterList)

    filterList.forEach((item, index) => {
        const bairros = item.bairroCad.split(',');
        const card = document.createElement('div');
        card.classList = "col-md-4 col-mb-3"
        card.innerHTML = `
            <div class="card" id=${"card"+index}>
                <img src=${item.vanCad} class="card-img-top" alt="Foto da van">
                <div class="card-body">
                    <div class="d-flex flex-column mt-2 mb-4">
                        <strong class="card-text">${item.nomeCad}</strong>
                        <span class="card-text">Turno: ${item.turnoCad}</span>
                    </div>
                    <div class="d-flex">
                        ${bairros.map(bairro => (
                        `<span class="destaque">${bairro}</span>`
                        )).join('')}
                    </div>
                    <div class="estrelas">${buildRating(item)}</div>
                </div>
            </div>
            <div class="modal fade" id=${"myModal" + index} tabindex="-1" role="dialog"
                aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content pb-4">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Informações do motorista</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body px-3">
                            <div class="modal-body">
                                <div class="row" style="gap: 32px;">
                                    <div class="col-3 d-flex flex-column align-items-center perfil" style="gap: 16px;">
                                        <div class="d-flex flex-column align-items-center bg-light p-3 rounded">
                                            <img src=${item.selfieCad} alt="" class="rounded-circle img-fluid" width="80px" height="80px">
                                            <div class="mt-2 d-flex flex-column align-items-start perfil-info">
                                                <strong>${item.nomeCad}</strong>
                                                <p class="text-center m-0">${item.telefoneCad}</p>                                                        
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <strong class="my-2">Bairros atendidos</strong>
                                            <div class="d-flex justify-content-between bairros">
                                                ${bairros.map(bairro => `<span class="bairros-ate">${bairro}</span>`).join('')}
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="col-8">
                                        <div class="van-moto">
                                            <strong class="mb-4">
                                                Motorista ${item.nomeCad} atende no turno da ${item.turnoCad}
                                            </strong>
                                            <img src=${item.vanCad                                                }
                                                class="img-moto " alt="Foto da van">
                                        </div>
                                        <div class="estrelas">
                                            <input type="radio" id="" name="card1_fb"
                                                value="" checked />
                                            <label for=""><i class="fa"></i></label>
                                            <input type="radio" id="" name="card1_fb"
                                                value="1" />
                                            <label for=""><i class="fa"></i></label>
                                            <input type="radio" id="" name="card1_fb"
                                                value="2" />
                                            <label for=""><i class="fa"></i></label>
                                            <input type="radio" id="" name="card1_fb"
                                                value="3" />
                                            <label for=""><i class="fa"></i></label>
                                            <input type="radio" id="" name="card1_fb"
                                                value="4" />
                                            <label for=""><i class="fa"></i></label>
                                            <input type="radio" id="" name="card1_fb"
                                                value="5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        cardsListContainer.appendChild(card)
    
        $(`#card${index}`).click(function() {
            // Exiba o modal
            $(`#myModal${index}`).modal('show');
        });  
    })
}

function buildRating(motorista){
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || []
    let feedback = feedbacks.filter((feedback) => feedback.motoristaId == motorista.cpfCad)

    let total = feedback.reduce((total, item) => {
        return total + ((item.conditionStars + item.punctualityStars + item.treatmentStars) / 3)
    }, 0)

    let rate = Math.floor((total/feedback.length).toFixed(2));

    let rateString = ""
    for(let i =0; i< 5; i++){
        if(i<rate){
            rateString += `
            <i class="bi bi-star-fill"></i>
        `;
        }else {
            rateString += `
            <i class="bi bi-star"></i>
        `;
        }
    }
    
    if(feedback.length == 0){
        return rateString + `0.0 (${feedback.length})`;
    } else {
        return rateString + `${(total/feedback.length).toFixed(2)} (${feedback.length})`;
    }
    
}