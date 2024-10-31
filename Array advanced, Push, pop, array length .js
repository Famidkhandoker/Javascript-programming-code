//..................... Array advanced, Push, pop, array length............................ 


var friendsAge=[15,17,14,16];
friendsAge.push(15);
console.log(friendsAge);//[ 15, 17, 14, 16, 15 ]
console.log(friendsAge.length);//5
friendsAge.push(19);
console.log(friendsAge);//[ 15, 17, 14, 16, 15, 19 ]
console.log(friendsAge.length);//6
friendsAge.pop();
console.log(friendsAge);//[ 15, 17, 14, 16, 15 ]
