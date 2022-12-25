const config = {
  input: {
    driver: "firebase",
    connectionString: {
      type: "service_account",
      project_id: "warehouse-afd93",
      private_key_id: "6069f66e7042bade59b8cd38c24b539d47aee30a",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/4pitSy2ym44d\npV5cOLJsSMJcbeUEOwFVrYc/nsFFZcJz24ggOWvXZmjDh95QVT81F5IS7PgqD6Yq\nADUaSLANt6NYXuIhG9OYvFAhBT8f/GVVlWZWSs4quRWlL57W/nZ9vYw/pynDibWH\nokeSthWiJAk6wiF6Pv63Hv2cfH3QwXtgWGb/GbKyQYGa1Zndg/PF/BNgpJ8Ld73x\nLTXpz00zIxw6Anx60bMmWp3h8TjRkM5iqlPl58yx+IRGSxlGSodfQJWhOzWnvxqW\niDC9Y0OIphOjH5hTupCCCuEm22gZ2hAFFIB1dlxZPFEduXAWzqL1Vhi0nZxY2SD3\nK+ghMnd1AgMBAAECggEAALSjnReGrn518lP2Wd53gYBu/ooE6pQQ+DCwK6K40TmD\nkot/H6c2Z09gGT/5qE/38IkKp3kpnHX8RXFEwLj9tL81IZEPwdFpYMlofgaX6dUy\nxjLLcovJ4ExX8QiQy/eZlfLJfj5uH+L0wO/u1XJH+BWr1wR5vQpYQ3Igup+Wktrx\npfbM/PCmk2dwq/tnJS0xijrSimj9FaR2kNDcb0kmvOeqabPoQgR/WAeRyhBbQdJL\nAYDzXbs2a0wa0pfU8bRUG5q51vsQWKcqgF573jnHI4Z1BoD8HHVofXRE8svNbZs+\nQM1inwj0FD/i6qE82n2Le5AxV93C1Lhhz5fMnpF5QQKBgQD5jXAu3613oxhcgK9S\nGlH+kUXrTsITLIxXxbPls97T0B9FyIyRcYuzZQ7+3UlH0lhkMuQLAHb4mhbQjqK/\nOr6c33UniDGtd/Gl20Kd4kimhJRNrNvtI0EZH06+m1No73Y3DmzXa1wCJUUWkRJD\n5OurSxwfOdfBlCwL5fRgR6/qZQKBgQDE173HzPOmSZEp9wQnR52LmC1fDzLAT/9c\nUDLwc/0yKCm9nswAXGNbnDWBqjXwztXPUMAMr7bGzgfQuAZSCjHTM31qKRK+qWqA\n6Pa3R9QeSYtYl7bMtcPgsZinQXBjpOWXDmiJycIQsVjHR3GMFdhfplKBYjsFzxJ+\nQW6KpVx/0QKBgFfQ08dK4uoUtH/osMk9hdkFGguh3V2N8Zz5b0LHtwPmWvrdhcmw\noS5xw4MgL6dcd8patjDA6xy0bI7bgp20eFsPr1RH8uNOL/TjYV/ZvyMJyH5E8+dQ\n3pmOkNE2K3Xjvj/FjbuIhgojP1qflkPaDKxsc+rxGeF+2LkfJI207EyZAoGAEAVX\nJunhcslODVJTfjbv9aqfFruP7+MS75p/at6l3u0x6IMCK41ZcN1X5YPK/Bx5fnQe\nDWpHwAqIzE4OBaNaxsvMC1XodqgnSPKtEeHAu+5UbxN6B1NL6//IYuSKlzGWliLQ\nE1beeqlUhnOkJDiq8a4BzRIHp8Ngx/HfY11uF+ECgYAftQpzB5QscYzRX3I6W7ns\nK2xmdcYBQFmpzZj3Lqomy/smN/Yw0uT49tujcf16iUPzQg1qD30g9+Py81VL4Pg5\n6IRFtT1arQtbS9pJ0p+Q5VX4PpsqKDPr02HO/7jFv8YN4PzA2OA6Q/wnX582cZha\n+yCBGVCUPoKeLFoCEYodKg==\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-fnda4@warehouse-afd93.iam.gserviceaccount.com",
      client_id: "102851878863879732682",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fnda4%40warehouse-afd93.iam.gserviceaccount.com",
    },
    database: "warehouse",
    collections: ["goods"],
  },

  outputs: [
    // {
    //   driver: "firebase",
    //   connectionString: {
    //     type: "service_account",
    //     project_id: "warehouse-afd93",
    //     private_key_id: "6069f66e7042bade59b8cd38c24b539d47aee30a",
    //     private_key:
    //       "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/4pitSy2ym44d\npV5cOLJsSMJcbeUEOwFVrYc/nsFFZcJz24ggOWvXZmjDh95QVT81F5IS7PgqD6Yq\nADUaSLANt6NYXuIhG9OYvFAhBT8f/GVVlWZWSs4quRWlL57W/nZ9vYw/pynDibWH\nokeSthWiJAk6wiF6Pv63Hv2cfH3QwXtgWGb/GbKyQYGa1Zndg/PF/BNgpJ8Ld73x\nLTXpz00zIxw6Anx60bMmWp3h8TjRkM5iqlPl58yx+IRGSxlGSodfQJWhOzWnvxqW\niDC9Y0OIphOjH5hTupCCCuEm22gZ2hAFFIB1dlxZPFEduXAWzqL1Vhi0nZxY2SD3\nK+ghMnd1AgMBAAECggEAALSjnReGrn518lP2Wd53gYBu/ooE6pQQ+DCwK6K40TmD\nkot/H6c2Z09gGT/5qE/38IkKp3kpnHX8RXFEwLj9tL81IZEPwdFpYMlofgaX6dUy\nxjLLcovJ4ExX8QiQy/eZlfLJfj5uH+L0wO/u1XJH+BWr1wR5vQpYQ3Igup+Wktrx\npfbM/PCmk2dwq/tnJS0xijrSimj9FaR2kNDcb0kmvOeqabPoQgR/WAeRyhBbQdJL\nAYDzXbs2a0wa0pfU8bRUG5q51vsQWKcqgF573jnHI4Z1BoD8HHVofXRE8svNbZs+\nQM1inwj0FD/i6qE82n2Le5AxV93C1Lhhz5fMnpF5QQKBgQD5jXAu3613oxhcgK9S\nGlH+kUXrTsITLIxXxbPls97T0B9FyIyRcYuzZQ7+3UlH0lhkMuQLAHb4mhbQjqK/\nOr6c33UniDGtd/Gl20Kd4kimhJRNrNvtI0EZH06+m1No73Y3DmzXa1wCJUUWkRJD\n5OurSxwfOdfBlCwL5fRgR6/qZQKBgQDE173HzPOmSZEp9wQnR52LmC1fDzLAT/9c\nUDLwc/0yKCm9nswAXGNbnDWBqjXwztXPUMAMr7bGzgfQuAZSCjHTM31qKRK+qWqA\n6Pa3R9QeSYtYl7bMtcPgsZinQXBjpOWXDmiJycIQsVjHR3GMFdhfplKBYjsFzxJ+\nQW6KpVx/0QKBgFfQ08dK4uoUtH/osMk9hdkFGguh3V2N8Zz5b0LHtwPmWvrdhcmw\noS5xw4MgL6dcd8patjDA6xy0bI7bgp20eFsPr1RH8uNOL/TjYV/ZvyMJyH5E8+dQ\n3pmOkNE2K3Xjvj/FjbuIhgojP1qflkPaDKxsc+rxGeF+2LkfJI207EyZAoGAEAVX\nJunhcslODVJTfjbv9aqfFruP7+MS75p/at6l3u0x6IMCK41ZcN1X5YPK/Bx5fnQe\nDWpHwAqIzE4OBaNaxsvMC1XodqgnSPKtEeHAu+5UbxN6B1NL6//IYuSKlzGWliLQ\nE1beeqlUhnOkJDiq8a4BzRIHp8Ngx/HfY11uF+ECgYAftQpzB5QscYzRX3I6W7ns\nK2xmdcYBQFmpzZj3Lqomy/smN/Yw0uT49tujcf16iUPzQg1qD30g9+Py81VL4Pg5\n6IRFtT1arQtbS9pJ0p+Q5VX4PpsqKDPr02HO/7jFv8YN4PzA2OA6Q/wnX582cZha\n+yCBGVCUPoKeLFoCEYodKg==\n-----END PRIVATE KEY-----\n",
    //     client_email:
    //       "firebase-adminsdk-fnda4@warehouse-afd93.iam.gserviceaccount.com",
    //     client_id: "102851878863879732682",
    //     auth_uri: "https://accounts.google.com/o/oauth2/auth",
    //     token_uri: "https://oauth2.googleapis.com/token",
    //     auth_provider_x509_cert_url:
    //       "https://www.googleapis.com/oauth2/v1/certs",
    //     client_x509_cert_url:
    //       "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fnda4%40warehouse-afd93.iam.gserviceaccount.com",
    //   },
    //   database: "warehouse",
    //   collections: ["goods"],
    // },
    {
      driver: "mongodb",
      connectionString:
        "mongodb+srv://virok:virok@cluster0.2z17wno.mongodb.net/?retryWrites=true&w=majority",
      database: "warehouseCopy",
      collections: ["goodsCopy"],
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
  ],
};

module.exports = config;
