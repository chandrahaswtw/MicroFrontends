import faker from 'faker'

var node = document.getElementById("div-cart");

node.innerHTML = `Number of items in cart are ${faker.random.number()}`