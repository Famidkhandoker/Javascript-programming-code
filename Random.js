// Random Number,Random number between 1 to 6

var num =2.12458;
var result=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);
console.log(result);//2
console.log(result2);//3
console.log(result3);//2



var num =2.82458;
var result=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);
console.log(result);//2
console.log(result2);//3
console.log(result3);//3


var num =2.5;
var result=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);
console.log(result);//2
console.log(result2);//3
console.log(result3);//3


var num =2.499999;
var result=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);
console.log(result);//2
console.log(result2);//3
console.log(result3);//2


var dice =Math.random();
console.log(dice);//0.9387266519835176// random number 0 point something ashbe kono somoy 1 hobe na and 1 thake choto number ashbe


var dice =Math.random()*10;
console.log(dice);//7.486227283229201

var randomNum=Math.random()*10;
var output =Math.round(randomNum);
console.log(output);//4 //man(0-10) ashbe

var randomNum=Math.random()*6;
var output =Math.round(randomNum);
console.log(output);//5 //man(0-6) ashbe

for(i=0;i<10;i++){
    var randomNum=Math.random()*6;
    var output =Math.round(randomNum);
    console.log(output);
    // 3
    // 2
    // 2
    // 1
    // 4
    // 1
    // 3
    // 5
    // 1
    // 4
    // 5
}
