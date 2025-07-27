const Product = require('../models/Product');
const mongoose = require('mongoose'); 

module.exports = class ProductController {
  static async showProducts(req, res) {

    const products = await Product.find().lean();
    res.render('products/all',  { products });
  }

  static createProduct(req, res) {
    res.render('products/create')
  }

  static async createProductPost(req, res) {
    const name = req.body.name;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product({name,image,price,description});

    await product.save()
    res.redirect('/products');
  }

  static async getProduct(req, res) {
    
    const id = req.params.id;
    const product = await Product.findById(id).lean();
    
    if (!product) {
      res.status(404).send('Product not found');
      return;
    }

    res.render('products/product', { product });
  }

  static async removeProduct(req, res) {
    const id = req.params.id;

    await Product.deleteOne({_id: id});

    res.redirect('/products');
  }

  static async editProduct(req, res) {
    const id = req.params.id;
    const product = await Product.findById(id).lean();
    
    if (!product) {
      res.status(404).send('Product not found');
      return;
    }

    res.render('products/edit', { product });
  }

  static async editProductPost(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;

    const product = {name, image, price, description};
  
    try {
      await Product.updateOne({_id: id}, { $set: product });

      res.redirect('/products');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
      res.status(500).send('Erro ao atualizar o produto');
    }
  }
}