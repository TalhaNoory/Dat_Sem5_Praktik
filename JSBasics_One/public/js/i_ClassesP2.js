class House {
    constructor(color) {
        this.color = color
    }
    getTV() {
        return 'Samsung "75"'
    }
    getFurnitures() {
        return 'cornerCouchKingSize'
    }
}

let houseObjectOne = new House('Red')
let hosueObjectTwo = new House()

console.log(houseObjectOne)
console.log(hosueObjectTwo.getTV())
console.log(hosueObjectTwo.getFurnitures())
