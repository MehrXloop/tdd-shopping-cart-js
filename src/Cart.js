module.exports = class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
      }

      addItem(itemObj, quantity) {
        const cartItem = {
          itemObj: itemObj,
          quantity: quantity,
        };
        this.items.push(cartItem);
    
        this.totalPrice += cartItem.itemObj.price * cartItem.quantity;
      }

      itemQuantities() {
        return this.items.map((cartItem) => {
          return `${cartItem.itemObj.name} - x${cartItem.quantity}`;
        });
      }
}
