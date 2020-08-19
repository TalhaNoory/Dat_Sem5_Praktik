class Car {
    constructor(brand) {
        this.carName = brand
    }
    startEngine() {
        return this.carName + " Wroooooooooooom!!!"
    }
    static stopEngine() {
        return "..."
    }
}

// let myCarOne = new Car("Tesla")
// let myCarTwo = new Car("Audi")
// let myCarThree = new Car("Benz")

// let myCars = [myCarOne, myCarTwo, myCarThree]
// console.log(myCars)

// To call the 'startEnginge' which is a static method use 
// Car.startEngine(), example shown below
// console.log(Car.startEngine(myCarOne))
// console.log(Car.stopEngine())

// Inheritence Example

class Model extends Car {
    constructor(brand, mod) {
        super(brand)
        this.model = mod;
    }
    show() {
        return this.startEngine() + ', it is a ' + this.model
    }
}

let myCar = new Model("Ferrari", "uknown")

console.log(myCar.show())