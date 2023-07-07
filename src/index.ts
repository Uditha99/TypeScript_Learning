//======>

function sayHello(messag:string){
    console.log(`Message : ${messag}`)
}

sayHello("Uditha")

const helloIsuru = (messages:string)=>{

}

const horekda = (names : string , Theif?:boolean):void=>{
 
    if(Theif){
        console.log(`${names}`)

    }else{
        console.log(`${names}`)
    }
}
horekda("ranil",true)
horekda('anura')


///=====res  parameter

function sum(...values:number[]):number{

    let ttl=0
    for(let temp of values){
        ttl+=temp
    }
    return ttl
}

console.log(sum(10,20,30))
