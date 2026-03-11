/*

1. You should declare an empty array named inventory.
2. You should have a function named findProductIndex.
3. findProductIndex("flour") should return the index of the object having name equal to "flour" inside the inventory array.
4. findProductIndex("FloUr") should return the index of the object having name equal to "flour" inside the inventory array.
5. findProductIndex("Flour") should return -1 when no object having name equal to "flour" is found inside the inventory array.
6. You should have a function named addProduct.
7. addProduct({name: "FLOUR", quantity: 5}) should add 5 to quantity value of the object having name equal to "flour" in the inventory array.
8. addProduct({name: "FLOUR", quantity: 5}) should log flour quantity updated when an object having name equal to "flour" is found in the inventory array.
9. addProduct({name: "FLOUR", quantity: 5}) should push {name: "flour", quantity: 5} to the inventory array when no object having name equal to "flour" is found in the inventory.
10. addProduct({name: "FLOUR", quantity: 5}) should log flour added to inventory when no object having name equal to "flour" is found in the inventory.
11. You should create a function named removeProduct.
12. removeProduct("FLOUR", 5) should log flour not found when no object having name equal to "flour" is found in the inventory array.
13. removeProduct("FLOUR", 5) should subtract 5 from the quantity value of the object having name equal to "flour" inside the inventory array.
14. removeProduct("FLOUR", 5) should log Remaining flour pieces: 15 to the console, when inventory is equal to [{name: "flour", quantity: 20}, {name: "rice", quantity: 5}].
15. If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory.
16. removeProduct("FLOUR", 10) should log Not enough flour available, remaining pieces: 5 when inventory is equal to [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}].

*/


/* Create global inventory array which will store and test values */
const inventory = [{name: "FLOUR", quantity: 5}];

/* Return the index of a matching product in the inventory, or -1 if not found */
function findProductIndex(product) {

    let lwrPrd = product.toLowerCase();

    for(let i = 0; i < inventory.length; i++) {
       if(inventory[i].name.toLowerCase() == lwrPrd) {
        return i;
       }
    }
    return -1;
};

/* Add a new product to the inventory, or update quantity if the product is present*/
function addProduct(obj) {
    let find = findProductIndex(obj.name.toLowerCase());
    
    if(find == -1) {
        let lwrName = obj.name.toLowerCase();
        obj.name = lwrName;

        inventory.push(obj);
        console.log(`${lwrName} added to inventory`);
    } else if (find !== -1) {
        let lwrName = obj.name.toLowerCase();

        inventory[find].quantity += obj.quantity;
        console.log(`${lwrName} quantity updated`)
    }

};

/* Remove product from inventory and log remaining quantities with message*/
function removeProduct(prod, num) {
    let lwrName = prod.toLowerCase();
    let find = findProductIndex(lwrName);

    if(find == -1) {
        console.log(`${lwrName} not found`)
    } else if (find !== -1 && inventory[find].quantity >= num && inventory[find].quantity - num == 0) {
        inventory[find].quantity -= num;
        console.log(`Remaining ${lwrName} pieces: ${inventory[find].quantity}`);
        inventory.splice(find, 1);
    } else if (find !== -1 && inventory[find].quantity >= num) {
        inventory[find].quantity -= num;
        console.log(`Remaining ${lwrName} pieces: ${inventory[find].quantity}`);
    } else if (find !== -1 && inventory[find].quantity <= num) {
        console.log(`Not enough ${lwrName} available, remaining pieces: ${inventory[find].quantity}`)
    } 
 return inventory;
};

