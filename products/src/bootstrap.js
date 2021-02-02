import faker from "faker";

const node = document.getElementById("div-products");

const mount = (myNode) => {
  for (let i = 0; i < 5; i++) {
    myNode.innerHTML += `<p>${faker.vehicle.manufacturer()}</p>`;
  }
};

if (process.env.NODE_ENV === "development") {
  if (node) {
    mount(node);
  }
}

export { mount };
