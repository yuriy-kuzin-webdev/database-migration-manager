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
            database: "warehouse",
            collections: [
                "goodsCopy"
            ]
        },
    ],

    middlewares: [
        "logger",
        "mutator"
    ]
}

module.exports = config
