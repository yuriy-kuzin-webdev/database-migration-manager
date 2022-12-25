const admin = require("firebase-admin");

module.exports = (configuration) => ({
  getData: async () => {},
  sendData: async (data) => {
    admin.initializeApp({
      credential: admin.credential.cert(configuration.connectionString),
    });
    const db = admin.firestore();

    const collections = configuration.collections.map((collection, index) => ({
      collRef: db.collection(collection),
      collData: data[data.collectionNames[index]],
    }));

    for (const { collRef, collData } of collections) {
      const CHUNK_SIZE = 200;
      for (let i = 0; i < collData.length; i += CHUNK_SIZE) {
        const chunk = collData.slice(i, i + CHUNK_SIZE);
        const batch = db.batch();
        for (const doc of chunk) {
          const docRef = collRef.doc();
          batch.set(docRef, doc);
        }
        await batch.commit();
      }
    }
  },
});
