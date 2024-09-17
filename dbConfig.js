const sql = require("mssql")

const config = {
    user: "sa",
    password: "administrator123",
    database: "GST_ESTIMATE_2024_2025",
    server: "localhost",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustedConnection: true,
        trustServerCertificate: true,
    }
}

module.exports = {
    connect: () => sql.connect(config),
    sql
}