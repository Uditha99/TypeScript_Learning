//==========>\
// genaric reusable components

/*interface Shape1{
    type:string
}

interface Shape2{
    type:number
}
interface Shape3{
    type:boolean
}

let s1:Shape1 = {type:""}
let s2:Shape2 = {type:2}
let s3:Shape3 = {type:true}
*/

interface Shape<T>{
    type:T
}

let s1:Shape<string> = {type:""}
let s2:Shape<number> = {type:2}
let s3:Shape<boolean> = {type:true}


 
 








