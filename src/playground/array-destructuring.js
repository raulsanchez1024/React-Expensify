const address = ['1211 S Quebec Way', 'Denver', 'CO', '80231'];
console.log(`You are in ${address[1]}, ${address[2]}`);

const [ , city = 'CO', state ] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ coffee, , meduimeCoffee ] = item;

console.log(`A medium ${coffee} costs ${meduimeCoffee}`);