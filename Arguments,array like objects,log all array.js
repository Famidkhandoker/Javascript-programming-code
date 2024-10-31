// function add(num1,num2){
//     return num1+num2;
// }
// const result=add(2,3);
// console.log(result);//5

// function add(num1,num2){
//     return num1+num2;
// }
// const result=add(2,3,5);
// console.log(result);//5// three parameter pass korle answer vul dekhabe


// function add(num1,num2){
//     console.log(arguments);//{ '0': 2, '1': 3, '2': 5 }// 0,1,2 is the index value
//     return num1+num2;
// }
// const result=add(2,3,5);
// console.log(result);//5


// function add(num1,num2){
//     console.log(arguments);
//     return num1+num2+arguments[2];// { '0': 2, '1': 3, '2': 5 }
// }
// const result=add(2,3,5);
// console.log(result);//10


// function add(num1,num2){
//     console.log(arguments);
//     return num1+num2+arguments[2];//  { '0': 2, '1': 3, '2': 5, '3': 7 }
// }
// const result=add(2,3,5,7);
// console.log(result);//10//Four parameter pass korle answer vul dekhabe


// function add(num1,num2){
//     console.log(...arguments);//2 3 5 7
//     return num1+num2+arguments[2];
// }
// const result=add(2,3,5,7);
// console.log(result);//10//Four parameter pass korle answer vul dekhabe



function add(num1,num2){
    console.log([...arguments]);//[ 2, 3, 5, 7 ]
    return num1+num2+arguments[2];
}
const result=add(2,3,5,7);
console.log(result);//10//Four parameter pass korle answer vul dekhabe