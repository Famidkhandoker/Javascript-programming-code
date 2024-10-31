//............................ Array, index, set by index, indexOf........................

var friendsAge=[15,17,14,16];
// console.log(friendsAge);//[ 15, 17, 14, 16 ]
// console.log(friendsAge[0]);//15
// console.log(friendsAge[3]);//16
// var sonaliAge=friendsAge[2];
// console.log(sonaliAge);//14


//set by index
 friendsAge[1]=21;
console.log(friendsAge);//[ 15, 21, 14, 16 ]


 //indexOf
var position=friendsAge.indexOf(14);
console.log(position);//2

var position=friendsAge.indexOf(141);
console.log(position);//-1