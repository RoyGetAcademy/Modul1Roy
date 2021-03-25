//model
var i=0;
var reke= [0,1,2,3,4];
var ordene=["_","_","_","_","_"];

//View
oppdater();
function oppdater()
{
    document.getElementById("app").innerHTML=`
    <p>Det var en gang en ${ordene[reke[0]]} som ville kjøpe ${ordene[reke[1]]}. ${ordene[reke[2]]} Skulle egentlig bare ${ordene[reke[3]]}, men endte opp med og ${ordene[reke[4]]}.</p>
    <button onClick="ord(this)">Potet</button>
    <button onClick="ord(this)">Mandel</button>
    <button onClick="ord(this)">Skare</button>
    <button onClick="ord(this)">Oransje</button>
    <button onClick="ord(this)">Brus</button>
    <button onClick="ord(this)">Salt</button>
`;
}
//Controller
function ord(that)
{
    that.disabled=true;
    ordene[i]=that.innerHTML;
    ++i;
    reke.sort(() => 0.5 - Math.random() );
    if(i==5)
    {
        bla();
    }
}
function bla()
{
    oppdater();
}