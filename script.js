//Modell
let shoppingCartItems = [];
let shoppingCartListHTML = ``;
let itemInput = "";

//View
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <input id="userinput" type="text" oninput="itemInput = this.value;" onchange="addToCart()"/>
    <button onclick="addToCart()">Add to Cart</button>
    <button onclick="resetCart()">Reset Cart</button>
    <ul>
    ${shoppingCartListHTML}
    </ul>
    `;
}

//Controller
function resetCart() {
    shoppingCartItems.splice(0, shoppingCartItems.length)
    makeCart();
    updateView();
    document.getElementById('userinput').value = itemInput;
    document.getElementById('userinput').focus();
}

function addToCart() {
    shoppingCartItems.push(itemInput);
    makeCart();
    updateView();
    document.getElementById('userinput').value = itemInput;
    document.getElementById('userinput').focus();
}

function makeCart() {
    shoppingCartListHTML = ``;
    for (let i = 0; i < shoppingCartItems.length; i++) {
        shoppingCartListHTML += /*HTML*/ `
        <li>${shoppingCartItems[i]}</li>
        `;
    }
}
