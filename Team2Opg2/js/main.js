//MVC

//Model
var text = "Dine ord: ";//Text variabel
var text2 = "Dine ord: ";//Text variabel
var antalOrd=0;//Nummer variabel
var antalOrd2=0;//Nummer variabel
var randomOrd = [0,1,2,3,4,5,6,7];//Array
var ordListe = ["kjærlighet", "gladliv", "balsam", "parafin","eplejuice","kongler","svette","tårer"];//Array
var ordListe2 = ["bolle", "urin", "vaselin", "fleinsopp","whiskey","bakepapir","kaka","snørr"];//Array
var ord1=[];
var ord2=[];
var i=0;
var j=0;
//View
startNow();
function viewMeNowBitches()
{
    document.getElementById("StoryBox").innerHTML=`
    <div id="nr1">
        <h1>Ingredienser</h1>
        <p>2ss ${ord1[randomOrd[0]]}</p>
        <p>5mg ${ord1[randomOrd[1]]}</p>
        <p>7ss ${ord1[randomOrd[2]]}</p>
        <p>11dl ${ord1[randomOrd[3]]}</p>
        <p>15kg ${ord1[randomOrd[4]]}</p>
        <p>2ts ${ord1[randomOrd[5]]}</p>
        <p>5 Krutonger av ${ord1[randomOrd[6]]}</p>
        <p>1l ${ord1[randomOrd[7]]}</p>
    </div>
    <div id="nr2">
        <h1>Slik gjør du</h1>
        <p>Finn frem en stor ${ord2[randomOrd[0]]}</p>
        <p>Smelt ${ord1[randomOrd[1]]} i en liten kjele, og tilsett ${ord1[randomOrd[5]]} i blandingen</p>
        <p>Ha i ${ord2[randomOrd[2]]}, og rør alt godt sammen</p>
        <p>Smør ${ord2[randomOrd[3]]} i en langpanne og kle så pannen med ${ord1[randomOrd[2]]}</p>
        <p>Hell ${ord2[randomOrd[6]]} over i langpannen og stryk den utover</p>
        <p>Stek ${ord2[randomOrd[7]]} midt i ovnen på 150-160°c i ca 30 min</p>
        <p>Avkjøl ${ord2[randomOrd[3]]} helt og del den i ${ord2[randomOrd[5]]}</p>
        <p>Server gjerne ${ord2[randomOrd[1]]} med et lite dryss ${ord2[randomOrd[6]]}</p>
    </div>
    `;
}
function startNow() 
{
    document.getElementById("StoryBox").innerHTML=` 
    <div id="nr3">
        <h1>Oppskrift på brownies:</h1>
        <p>Velg 8 ord fra hver linje</p>
        <div>${text}</div>
        <button onClick="change(this)">${ordListe[0]}</button>
        <button onClick="change(this)">${ordListe[1]}</button>
        <button onClick="change(this)">${ordListe[2]}</button>
        <button onClick="change(this)">${ordListe[3]}</button>
        <button onClick="change(this)">${ordListe[4]}</button>
        <button onClick="change(this)">${ordListe[5]}</button>
        <button onClick="change(this)">${ordListe[6]}</button>
        <button onClick="change(this)">${ordListe[7]}</button><br><br>
        <div>${text2}</div>
        <button onClick="change2(this)">${ordListe2[0]}</button>
        <button onClick="change2(this)">${ordListe2[1]}</button>
        <button onClick="change2(this)">${ordListe2[2]}</button>
        <button onClick="change2(this)">${ordListe2[3]}</button>
        <button onClick="change2(this)">${ordListe2[4]}</button>
        <button onClick="change2(this)">${ordListe2[5]}</button>
        <button onClick="change2(this)">${ordListe2[6]}</button>
        <button onClick="change2(this)">${ordListe2[7]}</button>
    `;
} 

//Control
function change(that)
{
    if(antalOrd>7)return
    //that.disabled=true;
    text=text+=that.innerHTML+", ";
    ord1[i]=that.innerHTML;
    antalOrd+=1;
    ++i;
    startNow();
    if(antalOrd==8 && antalOrd2==8)
    {
        afterChange();
    }
}
function change2(that)
{
    if(antalOrd2>7)return
    //that.disabled=true;
    text2=text2+=that.innerHTML+", ";
    ord2[j]=that.innerHTML;
    ++j;
    antalOrd2+=1;
    startNow();
    if(antalOrd==8 && antalOrd2==8)
    {
        afterChange();
    }
}
function afterChange()
{
    randomOrd.sort(() => 0.5 - Math.random() );
    //console.log(randomOrd);
    viewMeNowBitches();
}