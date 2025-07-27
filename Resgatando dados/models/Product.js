const conn = require('../db/conn');

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save(){
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
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

  static getProducts() {
    const products = conn.db().collection('products').find().toArray()
    return products
      .then(products => {
        console.log('Products retrieved:', products);
        return products;
      })
      .catch(err => {
        console.error('Error retrieving products:', err);
        throw err;
      });
  }
}

module.exports = Product;