// const person = {
//     name: 'Andre',
//     age: 24,
//     location: {
//         city: 'Manila',
//         temp: 92
//     } 
// };

// const { name, age, location } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age} in ${location.city}`);
// console.log(`It's ${temp} in ${city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self'} = book.publisher;

// console.log(publisherName);

const address = ['12 street', 'Manila', 'NCR', '1008'];

const [street, city, state, zip] = address;
console.log(`It's ${street} in ${zip}`)
