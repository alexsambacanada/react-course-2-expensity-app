//
// Object destructuring
//

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'NY' ] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [coffeetype, , medprice] = item;

console.log(`A medium ${coffeetype} costs ${medprice}`)

