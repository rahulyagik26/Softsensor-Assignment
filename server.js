const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
    const getData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        res.status("200").json(response.data);
    }
    getData();
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})