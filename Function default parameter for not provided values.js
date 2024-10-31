
function add(num1,num2){
    return num1 +num2;
 }
 const total=add(15,17)
 console.log(total);//32



///on the otherhand
function add(num1,num2){
    if(num2==undefined){
        num2 = 0;
    }
    return num1+num2;
}
const total=add(15);
console.log(total);//15


//on the otherhand
function add(num1,num2){
    num2= num2||0;
    return num1 + num2;
}
const total=add(15);
console.log(total);//15


//on the otherhand
function add(num1,num2){
    num2= num2||20;
    return num1 + num2;
}
const total=add(15);
console.log(total);//35


//on the otherhand
function add(num1,num2=20){
    return num1+num2;
}
const total=add(15);
console.log(total);//35



//on the otherhand
function add(num1,num2=20){
    return num1+num2;
}
const total=add(15,1);
console.log(total);//16
