//==========>\
// type guards (=> typeof , indtsnce of , in)

class Dog{
    name:string;

    constructor(name:string){this.name=name}
}

class Cat{
    age:number;

    constructor(age:number){this.age=age}
}

function executeSound(value:Dog | Cat){
        if('name' in value){
            value.name;
        }else{
            value.age
        }
}

executeSound(new Dog('s'))
executeSound(new Cat(3))











