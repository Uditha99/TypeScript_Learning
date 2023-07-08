//==========> objects
// literals with intrface

interface Students{
    names:string,
    age:number,
    address:{
        city:string,
        post:number
    }
}

const students:Students = {
    names: "uditha",
    age:23,
    address:{
        city:"kurunegala",
        post: 23333
    }
}

console.log(students);
console.log(students.names);
console.log(students.address.post);







