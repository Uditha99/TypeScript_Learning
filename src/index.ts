//==========>key of
// 

interface student{
    name:string,
    age:number,
    isActive:boolean
}

type Studentkey = keyof student

const studentName:Studentkey = "name"
const studentAge:Studentkey = "age"
const studentAc:Studentkey = "isActive"
  





