const { MongoClient } = require("mongodb");

module.exports = (configuration) => ({
  getData: async () => {
    const client = new MongoClient(configuration.connectionString);

    const database = client.db(configuration.database);
    const collections = configuration.collections.map((collection) =>
      database.collection(collection)
    );

    const data = {
      collectionNames: [],
    };
    for (const collection of collections) {
      data[collection.collectionName] = await collection.find().toArray();
      data.collectionNames.push(collection.collectionName);
    }

    if (client.isConnected) {
      await client.close();
    }

    return data;
  },
  sendData: async (data) => {
    const client = new MongoClient(configuration.connectionString);

    const database = client.db(configuration.database);
    const collections = configuration.collections.map((collection) =>
      database.collection(collection)
    );

    collections.forEach((collection, index) => {
      const collectionName = data.collectionNames[index];
      collection.insertMany(data[collectionName]);
    });

    if (client.isConnected) {
      await client.close();
    }
  },
});
