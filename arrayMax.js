//Find the largest element of an array

var marks=[45,81,63,98,56,35,23];
var max =marks[0];
for(var i=0;i<marks.length;i++)
{
    var element =marks[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest value is :",max);//Highest value is : 98