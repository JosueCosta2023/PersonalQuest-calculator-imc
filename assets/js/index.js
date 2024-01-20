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

        metricHeight.value      = 0.0;
        metricWeight.value      = 0.0;
        imcResult.innerHTML     = (0.0).toFixed(2);
    } 
})

checkedImperial.addEventListener("click", function(){
    if(checkedImperial.checked){
        formMetric.classList.add("none")
        formImperial.classList.remove("none")
        imperialHeightPes.value         = 0.0;
        imperialHeightPolegada.value    = 0.0;
        imperialWeightPedra.value       = 0.0;
        imperialWeightLibra.value       = 0.0;   
        imcResult.innerHTML             = (0.0).toFixed(2);
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

function imcImprialCalculator(){
    totalLibras = (WeightPedraValue * 14) + WeightLibraValue
    totalPolegada = (HeightPesValue * 12) + HeightPolegadaValue
    
    imcResultTotal = (totalLibras / (totalPolegada **2 )) * 703
    imcResult.innerHTML = imcResultTotal.toFixed(2)
}




