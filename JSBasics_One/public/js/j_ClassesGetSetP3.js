class Car {
    constructor(brand) {
        this._carName = brand
    }
    get carName() {
        return this._carName
    }
    set carName(x) {
        this._carName = x
    }
}

let myCar = new Car("Audi")
myCar.carName = "Tesla"

console.log(myCar)