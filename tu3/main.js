//model
var i=0;
var rekke= [0,1,2,3,4];
var ordene= ["_","_","_","_","_"];

//View
oppdater();
function oppdater()
{
    document.getElementById("app").innerHTML=`
    <p>Det var en gang en ${ordene[rekke[0]]} som ville kjøpe ${ordene[rekke[1]]}. ${ordene[rekke[2]]} Skulle egentlig bare ${ordene[rekke[3]]}, men endte opp med og ${ordene[rekke[4]]}.</p>
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
    if(that=="Potet")that.disabled=true;
    
    ordene[i]=that.innerHTML;
    ++i;
    rekke.sort(() => 0.5 - Math.random() );
    if(i==5)
    {
        oppdater();
    }
}