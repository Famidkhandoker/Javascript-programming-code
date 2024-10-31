class student{
    constructor(){
        this.id=1;
        this.name="mahi";
    }
}

const student1=new student();
const student2= new student();
console.log(student1,student2);//student { id: 1, name: 'mahi' } student { id: 1, name: 'mahi' }




class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
    }
}

const student1=new student(12,"shuvo");
const student2= new student(22,"mahiya");
console.log(student1,student2);//student { id: 12, name: 'shuvo' } student { id: 22, name: 'mahiya' }


class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="High school";
    }
}

const student1=new student(12,"shuvo");
const student2= new student(22,"mahiya");
console.log(student1,student2);//student { id: 12, name: 'shuvo', school: 'High school' } student { id: 22, name: 'mahiya', school: 'High school' }





class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="High school";
    }
}

const student1=new student(12,"shuvo");
const student2=new student(22,"mahiya");
const student3=new student(29,"Bappy");
console.log(student3);//{ id: 29, name: 'Bappy', school: 'High school' }

console.log(student1.name,student2.name);//shuvo mahiya

