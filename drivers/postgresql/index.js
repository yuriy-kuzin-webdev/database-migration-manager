const { Client } = require("pg");
const format = require("pg-format")

module.exports = (configuration) => ({
  getData: async () => {},
  sendData: async (data) => {

    if (!configuration.options.isDatabaseExists) {
      const client = new Client({ connectionString: configuration.connectionString });
      await client.connect();
      await client.query(`CREATE DATABASE ${configuration.database};`);
      await client.end();
    }

    const client = new Client({ connectionString: configuration.connectionString + "/" + configuration.database });
    await client.connect()

    if(!configuration.options.isTablesExists) {

        configuration.collections.forEach((c, i) => {
            const sample = data[data.collectionNames[i]][0];
            const props = Object.getOwnPropertyNames(sample);
            const columns = props.map((p) => `${p} VARCHAR`);
            const queryColumns = columns.join(",");

            client.query(`CREATE TABLE ${c}(${queryColumns});`);
          });
    }

    configuration.collections.forEach((collection, index) => {
        const values = data[data.collectionNames[index]].map(rowObj => Object.values(rowObj))
        const query = format(`INSERT INTO ${collection} VALUES %L`, values)
        client.query(query)
        
    }) 

    client.end()
  },
});
