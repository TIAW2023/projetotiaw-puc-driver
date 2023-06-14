const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        });

        target.classList.add('active');
    })
});

$('a.nav-link').click(function(){
    //add active class to item clicked and remove other ones
    $(this).addClass('active').parent().siblings().children().removeClass('active');

    switch(this.id){
        case 'tab-1': 
            $('#tab_1').load('../../html/motorista/dados-basicos.html')
            break;
        case 'tab-2': 
            $('#tab_2').load('../../html/motorista/info-van.html')
            break;
        case 'tab-3': 
            $('#tab_3').load('../../html/motorista/anexos.html')
            break;
        case 'tab-4': 
            $('#tab_4').load('../../html/motorista/disponibilidade.html')
            break;
        default:
            break;
    }
});

$(document).ready(function() {
    $('#tab_1').load('../../html/motorista/dados-basicos.html');
});