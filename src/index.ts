//==========>\
// abstract

abstract class Phone1 { //eshan

    private displaySize:string

    constructor(displaySize:string){
        this.displaySize=displaySize
    }

    call():void{
        console.log("calling........"); 
    }

    message(){
        console.log("messaging....");
    }

    abstract flieTransfer():void;
}

abstract class PhneOshada extends Phone1{
    dancing(){
        console.log("dancing.....");
        
    }
}

class hasanthaPhone extends PhneOshada{
    flieTransfer(): void {
        console.log("filetransefering........");
        
    }
}




 
 








