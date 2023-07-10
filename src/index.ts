//==========>\type casting
// asserton

interface Vehicle{
    type:string
}

interface car extends Vehicle{
    drive():void;
}

interface van extends Vehicle{
    start():void;
}


function execution(vehical:Vehicle){
    (vehical as van).start()
}








