const config = {

    input: {
        driver: "mongodb",
        connectionString: "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
        database: "warehouse",
        collections: [
            "goods"
        ]
    },

    outputs: [
        {
            driver: "mongodb",
            connectionString: "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
            database: "warehouseCopy",
            collections: [
                "goods"
            ]
        },
        {
            driver: "mongodb",
            connectionString: "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
            database: "warehouseCopyCopy",
            collections: [
                "goods"
            ]
        },
    ],

    middlewares: [
        // "logger",
        // "mutator"
    ]
}

module.exports = config
