// controller (ingenting her ennå)

function LeggTil()
{
    if(inputValue <1 || inputValue >10)
    {
        visTekst="Må være mellom 1 og 10";
    }
    else
    {
        numbers.push(Number(inputValue));
        inputValue=-1;
    }
    
    show();
}

function KlikketPaa(that)
{
    chosenBar = chosenBar === that ? "Ingen" : that;
    visEllerIkke = chosenBar === "Ingen" ? "disabled" : "";
    show();
}

function Endre()
{
    console.log("BeforeTest: "+inputValue);
    if(inputValue >0 && inputValue < 11)
    {
        numbers[(chosenBar-1)] = Number(inputValue);
        visTekst="Byttet";
        console.log(numbers);
    }
    else
        {
            visTekst="Må være mellom 1 og 10";
        }
        inputValue=-1;
    show();
}

function Fjerne()
{
    chosenBar-=1;
    if (chosenBar >= 0) {
        numbers.splice(chosenBar, 1);
    }
    visTekst="Fjernet 1 fra listen";
    chosenBar="Ingen";
    visEllerIkke="disabled";
    show();
}