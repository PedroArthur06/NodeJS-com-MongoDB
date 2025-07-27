const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/testemongodb2';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

run()

module.exports = client;