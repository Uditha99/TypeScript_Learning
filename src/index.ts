//==========>\
// genaric constrain

interface elemantLength{
    length:number
}

function showLength<T extends elemantLength>(value:T){
    console.log(value.length);
    
}

 showLength([1,2,3])
 showLength("ww")
 








