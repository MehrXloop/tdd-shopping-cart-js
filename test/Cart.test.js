const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js')
const expect = require('chai').expect;

describe('Cart', () => {
    // AC 1: Given that I visit the site, when I begin shopping, then I expect my cart to be empty.
    
  it("should initialize as empty", () => {
    const cart = new Cart();
    expect(cart.items).to.deep.equal([]);
    expect(cart.totalPrice).to.be.equal(0);
  });

   //AC 2:Given I have an empty cart, when I add an Item, then I expect to see totalPrice reflect the sum of all the Items in my cart, times the quantities of each item.

   it("add item", () => {
    //Arrange
    const cart = new Cart();
    const itemObj1 = new Item("Watch", 2000.0, true);
    //Act
    cart.addItem(itemObj1, 2);
    const result = 4000.0;
    //Assert
    expect(cart.totalPrice).to.be.equal(result);
  });
  
   //AC 3:Given I have an empty cart, when I add more than one of an item, then I expect itemQuantities() to show the number of items I have added.

   it("item Quantities", () => {
    //Arrange
    const cart = new Cart();
    const itemObj1 = new Item("Watch", 2000.0, true);
    const itemObj2 = new Item("Bracelet", 4000.0, false);
    //Act
    cart.addItem(itemObj1, 2);
    cart.addItem(itemObj2, 1);
    const result = ["Watch - x2", "Bracelet - x1"];
    //Assert
    expect(cart.itemQuantities()).to.deep.equal(result);
  });

   //AC 4:Given I have an empty cart, when I add items, then I expect itemizedList() reflect the items I have added along with their price and quantity.

   it("added items with price", () => {
    //Arrange
    const cart = new Cart();
    const itemObj1 = new Item("Watch", 2000.0, true);
    const itemObj2 = new Item("Bracelet", 4000.0, false);
    //Act
    cart.addItem(itemObj1, 2);
    cart.addItem(itemObj2, 1);
    const result = ["Watch x2 - $2000.00", "Bracelet x1 - $4000.00"];
    //Assert
    expect(cart.itemizedList()).to.deep.equal(result);
  });
  
   //AC 5:Given I have an empty cart, when I add more than one of an item, then I expect totalPrice to reflect both the item price and quantity.

   it("price and quantity", () => {
    //Arrange
    const cart = new Cart();
    const itemObj1 = new Item("Watch", 2000.0, true);
    const itemObj2 = new Item("Bracelet", 4000.0, false);
    //Act
    cart.addItem(itemObj1, 2);
    cart.addItem(itemObj2, 1);
    const result = 8000.0;
    //Assert
    expect(cart.totalPrice).to.be.equal(result);
  });

    //AC 6:Given I have a cart with items that are not on sale, when I add items that are on sale, I expect onSaleItems() to include only the items on sale.

    it("onSale", () => {
        //Arrange
        const cart = new Cart();
        const itemObj1 = new Item("Watch", 2000.0, true);
        const itemObj2 = new Item("Bracelet", 4000.0, false);
        const itemObj3 = new Item("Ring", 1000.0, true);
        //Act
        cart.addItem(itemObj1, 2);
        cart.addItem(itemObj2, 1);
        cart.addItem(itemObj3, 1);
        const result = ["Watch x2 - $2000.00", "Ring x1 - $500.00"];
        //Assert
        expect(cart.onSaleItem()).to.deep.equal(result);
      });
})