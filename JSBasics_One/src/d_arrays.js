let workers = ['Mathias', 'Solveig', 'Anders', 'Unknown']

workers[3] = 'Talha' // Changing the given Index number, which is a name in the array
// workers.pop() // removing the name on the last index number
// workers.length // Showing the number the array have

workers[4] = 46 // Adding a number to the given index
workers.sort() // Sorts the array by digits and alphabet

console.log(workers) // Accessing the full array

let nestedArray = [[10, 20, 30, 40], ['Ahmad',  'Talha', 'Noory'], [10.10, 20.20, 30.30, 40.40]]

let getName = nestedArray[1][2]
let getFloatValue = nestedArray[2][3]
let getNumber = nestedArray[0][1]

console.log('Hello my name is... ' + getName)
console.log('The value of this float is... ' + getFloatValue)
console.log('My age is... ' + getNumber)