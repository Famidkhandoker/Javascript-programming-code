//Remove duplicate item from an array

var name=[3,6,2,7,3,2,8,1,9,11,56];
var uniqueName=[];
for(var i=0;i<name.length;i++){
    var element=name[i];
    var index=uniqueName.indexOf(element);// index of means dublicate array nibe na
    if(index== -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
//[
//     3, 6,  2,  7, 8,
//     1, 9, 11, 56
//   ]