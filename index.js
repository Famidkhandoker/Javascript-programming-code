// const firstName="Famid";
// const lastName="Khandoker";
// const fullName=firstName +" "+lastName +" is a developer boy"; 
// const fullName2=`${firstName} ${lastName} is a developer boy` ;
// const fullName3=`${firstName} ${20+50+30} is a developer boy`;

// console.log(fullName);//Famid Khandoker is a developer boy
// console.log(fullName2);//Famid Khandoker is a developer boy
// console.log(fullName3);//Famid 100 is a developer boy


// const multiline="Hello Everyone\n"
// +"welcome Javascript class\n"
// +"It's Essential For you"
// console.log(multiline);//Hello Everyone
//                         //welcome Javascript class
//                         //It's Essential For you


//on the otherhand
// const multiline2=`Hello Everyone
// welcome Javascript class
// It's Essential For you`
// console.log(multiline2);//Hello Everyone
//                         //welcome Javascript class
//                         //It's Essential For you











// class child{
//     constructor(name){
//         this.name=name;
//     }
// }
// const baby=new child("Android");
// const baby2= new child("Tom");
// console.log(baby);//child { name: 'Android' }
// console.log(baby2);//child { name: 'Tom' }



// class parents{
//     constructor(){
//         this.fatherName="abul";
//     }
// }
// class child extends parents{
//     constructor(name){
//         super();
//         this.name=name;
//     }
// }
// const baby=new child ("Android");
// const baby2=new child("Tom");
// console.log(baby);//child { fatherName: 'abul', name: 'Android' }               
// console.log(baby2); // child { fatherName: 'abul', name: 'Tom' }




// class parents{
//     constructor(){
//         this.fatherName="abul";
//     }
// }
// class child extends parents{
//     constructor(name){
//         super();
//         this.name=name;
//     }
//     getFullName(){
//         return this.name+" " +this.fatherName;
//     }
// }
// const baby=new child ("Android");
// const baby2=new child("Tom");

// console.log(baby.getFullName());  //Android abul       
// console.log(baby2.getFullName()); //Tom abul




// const person ={name:"hasib",age:33,job:"facebook",gfName:"Ema", phone:123456789}
// console.log(person.job);//facebook


// const gfName=person.gfName;
// const phone=person.phone
// console.log(gfName);//Ema
// console.log(gfName, phone);//Ema 123456789

// const {phone,gfName}=person;
// console.log(gfName,phone);//Ema 123456789

// const {phone,gfName,job}=person;
// console.log(phone,gfName,job);//123456789 Ema facebook


// const friends=["sakib khan","Arman Khan","Aamir khan","salman khan"];
// const [chotoFriend]=friends;
// console.log(chotoFriend);//sakib khan

// const [chotoFriend,nextFriend]=friends;
// console.log(chotoFriend,nextFriend);//sakib khan Arman Khan

// const [chotoFriend,nextFriend,...restFriend]=friends;
// console.log(restFriend);//[ 'Aamir khan', 'salman khan' ]

// const [chotoFriend,...olderFriend]=friends;
// console.log(olderFriend);//[ 'Arman Khan', 'Aamir khan', 'salman khan' ]


// .................................................API....................................................//


// function sum(first,second) {
//     let result=first+second;
//     return result;
// } 
// const output=sum(3,7);
// console.log(output);//10

//Javascript Switch case break and Default
 
