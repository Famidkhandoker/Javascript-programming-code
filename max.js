//Find max of two values ,find max of three values

var business =450;
var minister =350;

if(business > minister)
{
    console.log("Business is Bigger");//Business is Bigger
}
else{
    console.log("Minister is Bigger");
}


var business =150;
var minister =350;

if(business > minister)
{
    console.log("Business is Bigger");
}
else{
    console.log("Minister is Bigger");//Minister is Bigger
}


var business =450;
var minister =650;
var sochib=550;

if(business > minister)
{
    if(business>sochib)
    {
        console.log("Business is Bigger");
    }
    else{
        console.log("sochib is Bigger");
    }
}
else{
    if(minister>sochib)
    {
        console.log("Minister is Bigger");//Minister is Bigger
    }
    else{
        console.log("Sochib is Bigger");
    }
}

var business =450;
var minister =650;
var sochib=750;

if(business > minister)
{
    if(business>sochib)
    {
        console.log("Business is Bigger");
    }
    else{
        console.log("sochib is Bigger");//Sochib is Bigger
    }
}
else{
    if(minister>sochib)
    {
        console.log("Minister is Bigger");
    }
    else{
        console.log("Sochib is Bigger");
    }
}



var business =850;
var minister =650;
var sochib=750;

var max= Math.max(business,minister);
console.log(max);//850



var business =850;
var minister =650;
var sochib=950;

var max= Math.max(business,minister,sochib);
console.log(max);//950