const Cart = require('../src/Cart.js');
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

})