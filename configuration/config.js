const config = {

    input: {
        driver: "postgresql",
        connectionString: "postgresql://dbuser:superpassword@localhost:5432",
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
                "goodsCopy"
            ]
        },
        // {
        //     driver: "postgresql",
        //     connectionString: "postgresql://dbuser:superpassword@localhost:5432",
        //     database: "warehouse",
        //     collections: [
        //         "goods"
        //     ],
        //     options: {
        //         isDatabaseExists: false,
        //         isTablesExists: false
        //     }
        // },
    ],

    middlewares: [
        // "logger",
        // "mutator"
    ]
}

module.exports = config
