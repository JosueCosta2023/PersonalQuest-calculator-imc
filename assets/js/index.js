const checkedMetric             = document.getElementById("metric");
const checkedImperial           = document.getElementById("imperial");
const formMetric                = document.querySelector(".unity-metric")
const formImperial              = document.querySelector(".unity-imperial")

const metricHeight              = document.getElementById("height");
const metricWeight              = document.getElementById("weight");
const imcResult                 = document.getElementById("result");
const imperialHeightPes         = document.getElementById("input-pes")
const imperialHeightPolegada    = document.getElementById("input-polegada")
const imperialWeightPedra       = document.getElementById("input-pedra")
const imperialWeightLibra       = document.getElementById("input-libra")

metricHeight.addEventListener("input",              metricHeightFun)
metricWeight.addEventListener("input",              metricWeightFun)
imperialHeightPes.addEventListener("input",         imperialHeightPesFun)
imperialHeightPolegada.addEventListener("input",    imperialHeightPolegadaFun)
imperialWeightPedra.addEventListener("input",       imperialWeightPedraFun)
imperialWeightLibra.addEventListener("input",       imperialWeightLibraFun)

metricHeight.value              = 0.0;
metricWeight.value              = 0.0;
imperialHeightPes.value         = 0.0;
imperialHeightPolegada.value    = 0.0;
imperialWeightPedra.value       = 0.0;
imperialWeightLibra.value       = 0.0;   
imcResult.innerHTML             = (0.0).toFixed(2);

checkedMetric.addEventListener("click", function(){
    if(checkedMetric.checked){
        formMetric.classList.remove("none")
        formImperial.classList.add("none")
        zerarCampos()
    } 
})

checkedImperial.addEventListener("click", function(){
    if(checkedImperial.checked){
        formMetric.classList.add("none")
        formImperial.classList.remove("none")
        zerarCampos()
    } 
})


function metricHeightFun(){
    heightValue = parseFloat(metricHeight.value)
    imcMetricCalculator();
}

function metricWeightFun(){
    weightValue = parseFloat(metricWeight.value)
    imcMetricCalculator();
}

function imcMetricCalculator(){
    let imcResultTotal =  weightValue / (heightValue * heightValue)
    imcResult.innerHTML = imcResultTotal.toFixed(2)
    
    let infoResultado = mensagemResoltado(imcResultTotal)
    let detailsResult = document.getElementById("result-details");
    detailsResult.textContent = infoResultado
}

function imperialHeightPesFun(){
    HeightPesValue = parseFloat(imperialHeightPes.value)
    imcImprialCalculator()
}

function imperialHeightPolegadaFun(){
    HeightPolegadaValue = parseFloat(imperialHeightPolegada.value)
    imcImprialCalculator() 
}

function imperialWeightPedraFun(){
    WeightPedraValue = parseFloat(imperialWeightPedra.value)
    imcImprialCalculator()  
}

function imperialWeightLibraFun(){
    WeightLibraValue = parseFloat(imperialWeightLibra.value)
    imcImprialCalculator()
}

function imcImprialCalculator( ){
    totalLibras = (WeightPedraValue * 14) + WeightLibraValue
    totalPolegada = (HeightPesValue * 12) + HeightPolegadaValue
    
    imcResultTotal = (totalLibras / (totalPolegada **2 )) * 703
    imcResult.innerHTML = imcResultTotal.toFixed(2);

    let infoResultado = mensagemResoltado(imcResultTotal)
    let detailsResult = document.getElementById("result-details");
    detailsResult.textContent = infoResultado
}


function zerarCampos(){
    imperialHeightPes.value         = 0.0;
    imperialHeightPolegada.value    = 0.0;
    imperialWeightPedra.value       = 0.0;
    imperialWeightLibra.value       = 0.0;   
    imcResult.innerHTML             = (0.0).toFixed(2);
    metricHeight.value              = 0.0;
    metricWeight.value              = 0.0;
    imcResult.innerHTML             = (0.0).toFixed(2);
    detailsResult.textContent       = "...";
}

function mensagemResoltado(imcResultTotal){

    let mensagem = '';
    
    switch (true){
        case imcResultTotal < 18.5:
            mensagem = " abaixo do peso."
            break;
        case imcResultTotal >= 18.5 && imcResultTotal < 25:
            mensagem = " com o peso ideal."
            break;
        case imcResultTotal >= 25 && imcResultTotal < 30:
            mensagem = " com sobrepeso."
            break;
        
        case imcResultTotal >= 30 && imcResultTotal < 35:
            mensagem = " com obesidade grau I"
            break;
            
        case imcResultTotal >= 35 && imcResultTotal < 40:
            mensagem = " com obesidade grau II"
            break;

        case imcResultTotal >= 40 && imcResultTotal < 90:
            mensagem = " com obesidade grau III"
            break;
        default:
            mensagem = " Insira os dados corretamente."
    }

    return mensagem

}




