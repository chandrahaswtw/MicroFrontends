import faker from 'faker';

const node = document.getElementById("div-products");

for(let i = 0; i < 5; i++)
{
    node.innerHTML += `<p>${faker.vehicle.manufacturer()}</p>`
}

