console.log("tpe scriptgghdhd");

//variable---------------------------
let age:number = 10;

let name1:string = 'uditha';
let animals:Array<string>=['we','ee']

let vehical:string[]=['','']

let student:{name2:string,age1:number}={name2:'',age1:2}

interface Animal {
    name:string,
    breed:string,
    age:number
}

let dog:Animal = {name:"na",breed:"ad",age:2}
console.log(dog.age)

//functions-----------------
function getAgeafter3y(age:number,name?:string):number{

    if(name){
        console.log(`Hello ${name}`)
    }else{
        console.log(`Hello age ${age}`)
    }
    return age+3
}

let age3:number=getAgeafter3y(1,'uditha')

///================Arrays

let numbers:number[] = [10,20,30]

let Strings:Array<string> = ['','']

Strings.push("")
Strings.pop()

//=========> Tuple
let students:[string , number] = ['sama', 20]

///=========> 
for(let i =0; numbers.length>i ; i++){
    console.log(numbers[i])
}

for(let temp of numbers){
    console.log(temp)
}