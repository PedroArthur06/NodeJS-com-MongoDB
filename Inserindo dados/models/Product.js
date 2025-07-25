const conn = require('../db/conn');

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save(){
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description
    });

    return product
      .then(result => {
        console.log('Product inserted:', result);
        return result;
      })
      .catch(err => {
        console.error('Error inserting product:', err);
        throw err;
      });
  }
}

module.exports = Product;