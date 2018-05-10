// const person = {
//   name: 'Mike',
//   age: 26,
//   location: {
//     city: 'Melbourne',
//     temp: 18
//   }
// };

// const { name = 'Anon', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring

const address = ['78 Random St', 'Melbourne', 'Victoria', '3000'];
const [, city, state = 'NY'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee', '$2', '$2.5', '$3'];
const [drink, , mediumPrice] = item;
console.log(`A medium ${drink} costs ${mediumPrice}.`);