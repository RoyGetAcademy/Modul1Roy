// controller (ingenting her ennå)

function LeggTil()
{
    if(inputValue<11 || inputValue==null)
    {
        let a=numbersTotal.length;
        let b=numbers.length;
        if(b<a)
        {
            if(inputValue!=undefined)
            {
                numbers.push(Number(inputValue));
            }
            else
            {
                numbers.push(currentNumber);
                currentNumber--;
            }
        }
        console.log(b + " " + a);
        console.log(numbers);
    }
    else
    {
        visTekst="Må være mellom 1 og 10";
    }
    
    show();
}

function KlikketPaa(that)
{
    valgt=that;
    if(chosenBar==that)
    {
        chosenBar="Ingen";
        visEllerIkke="disabled";
    }
    else{
        chosenBar=that;
        visEllerIkke="";
    }
    show();
}

function Endre()
{
    console.log("BeforeTest: "+inputValue);
    if(inputValue >0 && inputValue < 11)
    {
        numbers[valgt] = Number(inputValue);
        visTekst="Byttet";
        console.log(numbers);
    }
    else
        {
            visTekst="Må være mellom 1 og 10";
        }
    show();
}

function Fjerne()
{
    const index = numbersTotal.indexOf(valgt);
    if (index >= 0) {
        numbers.splice(index, 1);
    }
    visTekst="Fjernet 1 fra listen";
    chosenBar="Ingen";
    valgt=-1;
    visEllerIkke="disabled";
    show();
}