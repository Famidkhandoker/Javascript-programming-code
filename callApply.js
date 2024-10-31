//const normalPerson={
  //  firstName:"Rahim",
  //  lastName:"Uddin",
  //  getFullName:function(){
  //      console.log(this.firstName , this.lastName);
  //  }
//}
//console.log(normalPerson);//{
                            // firstName: 'Rahim',
                            // lastName: 'Uddin',
                            // getFullName: [Function: getFullName]
                                // }
//console.log(normalPerson.firstName);//Rahim



// const normalPerson={
//     firstName:"Rahim",
//     lastName:"Uddin",
//     salary:15000,
//     getFullName:function(){
//         console.log(this.firstName , this.lastName);
//     },

// chargeBill:function(amount){
//     this.salary=this.salary-amount;
//     return this.salary;
// }
// }

// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);//14850
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);//11850


// const normalPerson={
//     firstName:"Rahim",
//     lastName:"Uddin",
//     salary:15000,
//     getFullName:function(){
//         console.log(this.firstName , this.lastName);
//     },

// chargeBill:function(amount){
//     console.log(this);
//     this.salary=this.salary-amount;
//     return this.salary;
// }
// }

// const heroPerson={
//     firstName:"Hero",
//     lastName:"Balam",
//     salary:25000
// }

// const friendlyPerson={
//     firstName:"Hero",
//     lastName:"Golam",
//     salary:25000
// }

//normalPerson.chargeBill();//{
                                // firstName: 'Rahim',
                                // lastName: 'Uddin',
                                // salary: 15000,
                                // getFullName: [Function: getFullName],
                                //  chargeBill: [Function: chargeBill]
                                //      }


//---------------------------------------Bind Method---------------------------------------

// const heroBillCharge=normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);//{ firstName: 'Hero', lastName: 'Balam', salary: 25000 }
// heroBillCharge(3000);//{ firstName: 'Hero', lastName: 'Balam', salary: 23000 }
// console.log(heroPerson.salary);//20000
// console.log(normalPerson.salary);//15000


// const friendlyBillCharge=normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(1500);//{ firstName: 'Hero', lastName: 'Golam', salary: 25000 }
// console.log(friendlyPerson.salary);//23500


// normalPerson.chargeBill.call(heroPerson,900);
// console.log(heroPerson.salary);//24100
// normalPerson.chargeBill.call(heroPerson,3000);
// console.log(heroPerson.salary);//21100


const normalPerson={
    firstName:"Rahim",
    lastName:"Uddin",
    salary:15000,
    getFullName:function(){
        console.log(this.firstName , this.lastName);
    },

chargeBill:function(amount,tips,tax){
    console.log(this);
    this.salary=this.salary-amount-tips-tax;
    return this.salary;
}
}

const heroPerson={
    firstName:"Hero",
    lastName:"Balam",
    salary:25000
}

const friendlyPerson={
    firstName:"Hero",
    lastName:"Golam",
    salary:25000
}

//-------------------------------------------------call Method------------------------------------

// normalPerson.chargeBill.call(heroPerson,900,100,10);
// normalPerson.chargeBill.call(heroPerson,3000,300,30);
// console.log(heroPerson.salary);//20660

// normalPerson.chargeBill.call(friendlyPerson,5000,500,50);
// console.log(friendlyPerson.salary);//19450
// console.log(normalPerson.salary);//15000





//----------------------------------apply method-----------------------------------
normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
console.log(heroPerson.salary);//{ firstName: 'Hero', lastName: 'Balam', salary: 25000 }
                               //21670
normalPerson.chargeBill.apply(heroPerson,[4000,400,40]);
console.log(heroPerson.salary);//{ firstName: 'Hero', lastName: 'Balam', salary: 21670 }
                                //17230