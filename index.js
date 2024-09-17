const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;
const { connect, sql } = require("./dbConfig");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connect().then((response) => {
    console.log("Connected to db");
}).catch((err) => {
    console.log("connection error", err);
});

app.get('/', (req, res) => {
    sql.query("SELECT SINO, ItemName, SalesPrice, PurchasePrice, GroupName, BaseUnit, Stock FROM tbItems").then((data) => {
        res.json(data?.recordset);
    }).catch((error) => {
        res.json(error);
    })
})

app.listen(port, () => {
    console.log(`app listening on PORT: ${port}`);
});