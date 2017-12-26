const person = {
    name: 'Raul',
    age: 23,
    location: {
        city: 'Denver',
        temp: 30
    }
};

//bar='xyz' -> default ----- bar: barName -> assigning new const
const { name = 'Anon', age } = person;
console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} degrees in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);