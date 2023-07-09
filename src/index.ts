//==========>\
// inheritance

class animal{
    name:string;
    age : number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    sound() {
        console.log(`${this.name} sound`);
        
    }
}

class dog extends animal{
    breed:string;

    constructor(name:string,age:number,breed:string){
        super(name,age)
        this.breed=breed
    }
}

let a1 = new animal("animal",10)
let d1 = new dog("dog" , 2 , "dg breed")

console.log(a1);
console.log(d1);

a1.sound()
d1.sound()





 
 








