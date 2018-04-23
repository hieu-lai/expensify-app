//arguments object - no longer bound with arrow function

const add = (a, b) => {
  return a + b;
};


// this keyword - no longer bound

const user = {
  name: 'Mike',
  cities: ['Melbounre', 'Sydney', 'Perth'],
  printPlacesLived() {  
    const cityMessage = this.cities.map((city) => {
      return city;
    });
    
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy : 2,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());