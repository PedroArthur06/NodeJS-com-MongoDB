const mongoose = require('mongoose');

async function main (){
  try {
    await mongoose.connect('mongodb://localhost:27017/testemongoose2');
    console.log('Conectado ao MongoDB com Mongoose');
    
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB com Mongoose:', error);
  }
}

main();

module.exports = mongoose;