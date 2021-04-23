// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');

// model
var numbers = [1, 3, 5, 7, 8];
var numbersTotal = [0,1,2,3,4,5,6,7,8,9];
let chosenBar="Ingen"; // Variabel for hvilken stolpe som er valgt
let chosenBarARR=0;
let inputValue=null; // Variabel for hva som er skrevet i input-feltet
let visEllerIkke="disabled";
let visTekst="";
let currentNumber=10;
let kant="white";
let valgt=0;
// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        chosenBarARR=i;
        if(i != chosenBar)svgInnerHtml += createBar(numbers[i], i + 1);
        else{
            svgInnerHtml += createBarChosen(numbers[i], i + 1);
        }
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 100 120">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${chosenBar}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" onchange="inputValue = this.value" />
        <button onclick="LeggTil()">Legg til stolpe</button>
        <button onclick="Endre()" ${visEllerIkke}>Endre valgt stolpe</button>
        <button onclick="Fjerne()" ${visEllerIkke}>Fjerne valgt stolpe</button>
        <p>${visTekst}</p>
        `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 120 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect class="firkant" onclick="KlikketPaa(${chosenBarARR})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" stroke="white" stroke-width="0.5" stroke-linecap="round"></rect>`;
}
function createBarChosen(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 120 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect class="firkant" onclick="KlikketPaa(${chosenBarARR})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" stroke="black" stroke-width="0.5" stroke-linecap="round"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

