// controller (ingenting her ennå)

function LeggTil()
{
    let a=numbersTotal.length;
    let b=numbers.length;
    if(b<a)
    {
        var testMeg = numbers.indexOf(Number(currentNumber)) !== -1;
        if(testMeg==false)
        {
            numbers.push(currentNumber);
            currentNumber--;
        }
        else{
            currentNumber--;
            LeggTil();
        }
    }
    console.log(b + " " + a);
    console.log(numbers);
    show();
}

function KlikketPaa(that)
{
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
    if(inputValue !== undefined && (inputValue >0 && inputValue < 11))
    {
        var testMeg = numbers.indexOf(Number(inputValue)) !== -1;
        if(testMeg===false)
        {
            const index = numbers.indexOf(chosenBar);
            numbers[index] = Number(inputValue);
            numbers;
        }
        else
    {
        visTekst="Tabbelen har allerede det ønskede nummeret.";
    }
    }
    else
    {
        visTekst="Må være mellom 1 og 10";
    }
    show();
}

function Fjerne()
{
    const index = numbers.indexOf(chosenBar);
    if (index > -1) {
        numbers.splice(index, 1);
    }
    visTekst="Fjernet 1 fra listen";
    chosenBar="Ingen";
    visEllerIkke="disabled";
    show();
}