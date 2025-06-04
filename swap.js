//Swap variable,Swap without temp,destructing

var a= 5;
var b= 7;
console.log("Before Swap: a=", a, "b=", b);//Before Swap: a= 5 b= 7
var temp = a;
a = b;
b =temp;
console.log("After Swap: a=", a, "b =",b);//After Swap: a= 7 b = 5


var x=5;
var y=7;
x= x+y;
y= x-y;
x= x-y;
console.log("After Swap: x=", x, "y =",y);//After Swap: x= 7 y = 5


var p = 5;
var q = 7;

[p,q]= [q,p];
console.log("After Swap: p=", p, "q =",q); //After Swap: p= 7 q = 5