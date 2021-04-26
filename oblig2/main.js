// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');

// model
var numbers = [1, 5, 3, 7, 2];
let chosenBar="Ingen"; // Variabel for hvilken stolpe som er valgt
let chosenBarARR=0;
let inputValue=null; // Variabel for hva som er skrevet i input-feltet
let visEllerIkke="disabled";
let visTekst="";
// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        chosenBarARR=i+1;
        svgInnerHtml += createBar(numbers[i], i + 1);
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
    let barstyle = chosenBar === barNo ? 'stroke: black' : '';
    return `<rect class="firkant" onclick="KlikketPaa(${chosenBarARR})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" style="${barstyle}" stroke-width="0.5" stroke-linecap="round"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

