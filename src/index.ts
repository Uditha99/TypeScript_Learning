//==========> optinal
// Read only

interface Animal{
    name:string,
    age?:number,
    readonly isActive:boolean
}

const a1:Animal = {
    name:"dog",
    isActive:true
}

const a2:Animal = {
    name:"cat",
    age:5,
    isActive:true
}

a1.isActive = false

 
 








