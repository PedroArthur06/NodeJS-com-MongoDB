const conn = require('../db/conn');
const { ObjectId } = require('mongodb');

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

  static async getProductById(id) {

    const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id)});
    if (!product) {
      console.log('Product not found:', id);
      return null;
    }
    console.log('Product retrieved:', product);
    return product;
  }

  static async removeProductById(id) {
    await conn.db().collection('products').deleteOne({ _id: new ObjectId(id) });

    console.log('Product deleted:', id);
    return;
  }

  static async updateProductById(id, updatedProduct) {
    const result = await conn.db().collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProduct }
    );

    if (result.modifiedCount === 0) {
      console.log('No product found to update:', id);
      return null;
    }

    console.log('Product updated:', id);
    return result;
  }

  updateProduct(id){

    conn.db().collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set:this}
    )

    return Product
  }
}

module.exports = Product;