import {mount as mountCart} from "cartHOST/showCart";
import {mount as mountProducts} from "productsHOST/showProducts";

const productNode = document.getElementById("div-products-container");
const cartNode = document.getElementById("div-cart-container");

if(productNode){
    mountProducts(productNode)
}

if(cartNode){
    mountCart(cartNode)
}

console.log("CONTAINER");