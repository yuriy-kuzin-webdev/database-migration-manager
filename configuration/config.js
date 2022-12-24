const config = {

    input: {
        driver: "mongodb",
        connectionString: "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
        collections: "warehouse"
    },

    outputs: [
        {
            driver: "mongodb",
            connectionString: "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
            collections: "warehouseTest"
        },
    ],

    middlewares: [
        "logger",
        "mapper"
    ]
}
