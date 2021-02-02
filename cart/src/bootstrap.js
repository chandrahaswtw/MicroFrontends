import faker from "faker";

var node = document.getElementById("div-cart");

const mount = (myNode) => {
    myNode.innerHTML = `Number of items in cart are ${faker.random.number()}`;
};

if (process.env.NODE_ENV === "development") {
  if (node) {
    mount(node);
  }
}

export {mount};