//==========>\
// type guards (=> typeof , indtsnce of , in)

class Dog{
    sound(){
        console.log(`dog sound`);
        
    }
}

class Cat{
    soundcat(){
        console.log(`cat sound`);
        
    }
}

function executeSound(value:Dog | Cat){
        if(value instanceof Dog){
            value.sound();
        }else{
            value.soundcat()
        }
}

executeSound(new Dog())
executeSound(new Cat())











