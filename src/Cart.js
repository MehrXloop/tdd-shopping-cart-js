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

      itemizedList(){
        return this.items.map((cartItem) => {
           return `${cartItem.itemObj.name} x${cartItem.quantity} - $${cartItem.itemObj.price.toFixed(2)}`;
         });
       }

       onSaleItem(){
        return this.items.filter(item => item.itemObj.onSale).map((cartItem) => {
           return `${cartItem.itemObj.name} x${cartItem.quantity} - $${((cartItem.itemObj.price/ 2 )* cartItem.quantity ).toFixed(2) }`;
         })
       }
}
