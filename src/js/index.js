const abas = document.querySelectorAll(".aba");
const informacoes = document.querySelectorAll(".info");

abas.forEach((aba) => {
    aba.addEventListener("click", function () {

        const abaClicadaEstaSelecionado = aba.classList.contains("selecionado");
        if(abaClicadaEstaSelecionado) return;

        const abaSelecionada = document.querySelector('.selecionado');
        abaSelecionada.classList.remove('selecionado');

        informacoes.forEach((info) => {
            const estaSelecionada = info.classList.contains("selecionado");
            if (estaSelecionada) {                
                esconderInformacoes(info);
            } else {
                aba.classList.add('selecionado');
                mostrarInformacoes(info);
            }
        });
    });
});

function esconderInformacoes(info) {
    info.classList.remove("selecionado");
}

function mostrarInformacoes(info) {
    info.classList.add("selecionado");
}


//Future feature soon...


// let totalSlides = document.querySelectorAll('.slider--item').length;
// let currentSlide = 0;

// let sliderWidth = document.querySelector('.slider').clientWidth;

// document.querySelector('.slider--width').style.width = 
//     `${sliderWidth * totalSlides}px`;

// document.querySelector('.slider--controls').style.width = 
//     `${sliderWidth}px`;
// document.querySelector('.slider--controls').style.height = 
//     `${document.querySelector('.slider').clientHeight}px`;

// function goPrev() {
//     currentSlide--;
//     if(currentSlide < 0) {
//         currentSlide = totalSlides - 1;
//     }
//     updateMargin();
// }
// function goNext() {
//     currentSlide++;
//     if(currentSlide > (totalSlides-1)) {
//         currentSlide = 0;
//     }
//     updateMargin();
// }

// function updateMargin() {
//     let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
//     let newMargin = (currentSlide * sliderItemWidth);
//     document.querySelector('.slider--width').style.marginLeft = 
//         `-${newMargin}px`;
// }

// setInterval(goNext, 5000);