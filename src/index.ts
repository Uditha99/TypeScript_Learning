//==========> objects
// objects with class

class Students{
    names:string;
    age: number;

    address:{
        city:string;
        post:number;
    }

    constructor(names:string, age:number , address:{city:string , post:number}){
        this.names=names;
        this.age=age;
        this.address=address;
    }

}

 let student:Students= new Students("uditah", 90 , {city:"kaluthara" , post:10})

console.log(student);







