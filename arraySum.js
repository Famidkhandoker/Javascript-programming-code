//sum of all number in an array

var numbers=[45,65,78,12,3,54,65]
var sum=0;

for(var i=0;i<numbers.length;i++)
{
    var element =numbers[i];
    sum=sum+element;
}
console.log("Total of the numbers: ",sum);//Total of the numbers:  322



var numbers=[45,65,78,12,3,54,65]
function getArraySum(numbers){
    var sum=0;
    for(var i=0;i<numbers.length;i++)
        {
            var element =numbers[i];
            sum=sum+element;
        }
        return sum;
}
var numbers=[45,65,78,12,3,54,65];
var result=getArraySum(numbers);

console.log("Total of the numbers: ",result);//Total of the numbers:  322


var numbers=[45,65,78,12,3,54,65]
function getArraySum(numbers){
    var sum=0;
    for(var i=0;i<numbers.length;i++)
        {
            var element =numbers[i];
            sum=sum+element;
        }
        return sum;
}
var numbers=[45,65,78,12];
var result=getArraySum(numbers);
console.log("Total of the numbers: ",result);//Total of the numbers:  200

var total=getArraySum([43,56,12,41,86]);
console.log("Total of the numbers: ",total);//Total of the numbers:  238