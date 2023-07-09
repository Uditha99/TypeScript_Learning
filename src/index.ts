//==========>\
// interface extends anther interface

interface Laptop{
    cost:number,
    type:string
}

interface mac extends Laptop{
    byeElemant:boolean
}

interface windows extends Laptop{

}

const m1:mac={cost:20,type:"fff",byeElemant:true}

const w1:windows={cost:69 , type:"kkk"}



 
 








