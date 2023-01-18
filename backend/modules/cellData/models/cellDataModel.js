const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const database = client.db("luckysheet");
const cellDataCollection = database.collection("cellData");

const List = async () => {
   const result = await cellDataCollection.find({}).toArray();
   return result;
};

const saveCellData = async (data) => {
   const result = await cellDataCollection.insertMany(data, { ordered: true });
   return result;
}

module.exports = {
   List,
   saveCellData,
}
