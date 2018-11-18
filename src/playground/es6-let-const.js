var square = function(x) {
    return x * x;
}

var squareArrow = (x) => {
    return x * x;
}

var squareArrowTwo = (x) => x * x;

console.log(squareArrowTwo(7));


const fullName = "Arjun Ankathatti";
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameTwo = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameTwo(fullName));


// arguments object - no longer bound with arrow functions
 const add = function(a, b) {
     console.log(arguments)
 }


 const user = {
     name: "Arjun Ankathatti",
     cities: ["Bangalore", "Hyderabad", "Columbia"],
     printPlacesLived() {
         return this.cities.map((city) => this.name + ' has lived in ' + city);
     }
 }


 console.log(user.printPlacesLived());

 // Challenge area

 const multiplier = {
    numbers: [10, 20, 30, 40],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
 };

 console.log(multiplier.multiply());