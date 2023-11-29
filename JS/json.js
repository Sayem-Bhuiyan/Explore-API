const user = {
    id: 1,
    name: 'Gorib',
    job: 'Actor'
}
const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);

/*
{ id: 1, name: 'Gorib', job: 'Actor' }
{"id":1,"name":"Gorib","job":"Actor"}
*/ 

const shop = {
    owner: 'Alia',
    address: {
        street: "kochukhet voter goli",
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revinew: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
