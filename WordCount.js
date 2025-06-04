//count the number of words in a string


 // var speech ="I am a good person. I don't snore at night";
// console.log(speech.length);//42
// console.log(speech[3]);//m
// speech[2]="q";//change korte pare na



// var speech ="I am a good person. I don't snore at night";
// for(var i=0;i<speech.length;i++)
// {
//     var char =speech[i];
//     console.log(char);
// // I

// // a
// // m

// // a

// // g
// // o
// // o
// // d

// // p
// // e
// // r
// // s
// // o
// // n
// // .

// // I

// // d
// // o
// // n
// // '
// // t

// // s
// // n
// // o
// // r
// // e

// // a
// // t

// // n
// // i
// // g
// // h
// // t
// }


// var speech ="I am a good person. I don't snore at night.";
// var count=0;
// for(var i=0;i<speech.length;i++)
// {
//     var char =speech[i];
//     if(char== " "){
//         count++;
//     }
// }
// console.log(count);//9

// var speech ="I am a good person. I don't snore at night. ";//  full stop er pore  e space ase
// var count=0;
// for(var i=0;i<speech.length;i++)
// {
//     var char =speech[i];
//     if(char== " "){
//         count++;
//     }
// }
// console.log(count);//10

// var speech ="I am a good person. I don't snore at night."; //full stop er pore  e space nai
// var count=0;
// for(var i=0;i<speech.length;i++)
// {
//     var char =speech[i];
//     if(char== " "){
//         count++;
//     }
// }
// count++;
// console.log(count);//10


// var speech ="I am   a good person. I don't snore at night."; //am er pore double space ase
// var count=0;
// for(var i=0;i<speech.length;i++)
// {
//     var char =speech[i];
//     if(char== " "){
//         count++;
//     }
// }
// count++;
// console.log(count);//12


var speech ="I am   a good person. I   don't snore at night."; //double space remove korar code
var count=0;
for(var i=0;i<speech.length;i++)
{
    var char =speech[i];
    if(char== " " && speech[i-1]!=" "){
        count++;
    }
}
count++;
console.log(count);//10