
const name="Famid";
console.log(name);
const numbers=[12,45];
numbers[1]=88;
console.log(numbers);//[ 12, 88 ]
numbers.push(12);
console.log(numbers);//[ 12, 88, 12 ]
numbers=["hasib","kabir","oni"];//Error ashbe karon const er variable change kora jay na
console.log(numbers);



const name="Famid";
console.log(name);//Famid
const numbers=[12,45];
numbers[1]=88;
numbers.push(12);
console.log(numbers);//[ 12, 88, 12 ]
const nayok={name:"sakib khan",phone:4578};
console.log(nayok);//{ name: 'sakib khan', phone: 4578 }



let patientName="mahi";
patientName="hasan";//let er variable er value change kora jay
console.log(patientName);//hasan

let sum=0;
for(var i=0;i<10;i++){
    sum=sum+i;
}
console.log(i);//10


let sum=0;
for(let i=0;i<10;i++){
    sum=sum+i;
}
console.log(i);//error ashbe karon for er moddhe let use kora jay na