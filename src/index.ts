//==========>\union types
// 

interface Vehicle{
    name:string
}

interface car extends Vehicle{
    names:"car1",
    drive():void;
}

interface van extends Vehicle{
    names:"van",
    start():void;
}

type vehical =  car | van

function execution(v1 : vehical){
    if(v1.name =='car'){
        console.log("car");
        
    }else
    {
        console.log("vsn");
    }
}








