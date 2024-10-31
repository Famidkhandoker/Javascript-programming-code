
//  var teaLine=['kalam','salam','Balam'];
//  console.log(teaLine);//[ 'kalam', 'salam', 'Balam' ]
//  teaLine.push('Jalam');
//  console.log(teaLine);//[ 'kalam', 'salam', 'Balam', 'Jalam' ]
//  teaLine.pop();
//  console.log(teaLine);//[ 'kalam', 'salam', 'Balam' ]
//  teaLine.shift();
//  console.log(teaLine);//[ 'salam', 'Balam' ]
//  teaLine.unshift('palam');
//  console.log(teaLine);//[ 'palam', 'salam', 'Balam' ]

var teaLine=['palam','kalam','salam','Balam','Jalam','Talam'];
//  var part=teaLine.slice(2);
//  console.log(part);//[ 'salam', 'Balam', 'Jalam', 'Talam' ]

//  var part=teaLine.slice(2,4);
//  console.log(part);//[ 'salam', 'Balam' ]

 
 var part=teaLine.slice(2,5);
 console.log(part);//[ 'salam', 'Balam', 'Jalam' ]
 console.log(teaLine);//[ 'palam', 'kalam', 'salam', 'Balam', 'Jalam', 'Talam' ]