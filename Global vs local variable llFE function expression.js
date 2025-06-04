// function addTodo(task){
//     const newTaskElement=document.createElement('li');//local variable
// }

//gobal variable


// var name='Rashed';
// function addUser(){
// console.log(name);
// }
// addUser();//Rashed


// function addUser(){
// var romanticName='Famid'
// }
// console.log(romanticName);//error bahair thake access kora jabe na



// function addUser(){
//     var romanticName='Famid'
//     console.log(romanticName);
// }
// addUser();//Famid
// console.log(romanticName);//error bahair thake access kora jabe na

// //error not detection 

// function addUser(){
//      romanticName='Famid'
//     console.log(romanticName);//Famid
// }
// addUser();//Famid
// console.log(romanticName);//Famid

//IIFE
(function addUser(){
     romanticName='Famid'
    console.log(romanticName);//Famid
})();

//declaration and expression

var myTodo=function(task){

};
