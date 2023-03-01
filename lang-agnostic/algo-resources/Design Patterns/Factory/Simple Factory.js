// Use factories when:
// 
// Unsure which concrete implemnetation of an interface I want to return 
// Creation should be spearated from representation of an object
// Lots of if/else blocks when deciding which concrete class to create
// Switch statements when deciding which concrete class to create

//We store which object to create outside of the program
    // i.e. in db, in config file

function main(cn){

    let carName = cn;
    let car = GetCar(carName);
    car.TurnOn();
    car.TurnOff();

    
}

// If we want to add a new car we can modify the switch statement. 
//Seems like a small change, but it violates the open/closed principle
// Classes should be closed for modification , open for extensibility
function GetCar(carName){

    switch(carName){
        case "bmw":
            return new BMW335Xi();
        case "mini":
            return new MiniCooper();
        
           default:
           return new NullCar();
    }
}
