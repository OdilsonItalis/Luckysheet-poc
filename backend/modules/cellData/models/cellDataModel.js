const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const database = client.db("luckysheet");
const sheetsDataCollection = database.collection("sheetsData");

const List = async () => {
   const result = await sheetsDataCollection.find({}).toArray();
   return result;
};

const saveCellData = async (data) => {
   try {
      await sheetsDataCollection.deleteMany({});
      if (data.length > 0) {
         await sheetsDataCollection.insertMany(data);
      }
      return data;
   } catch (err) {
      throw err;
   }
}

module.exports = {
   List,
   saveCellData,
}
