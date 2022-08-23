import express from "express";
import dotenv from "dotenv";
import DB from "./connection.js";
import Users from "./routes/users.js";
import Products from "./routes/products.js";
import Cart from "./routes/carts.js";

DB();
const app = express();
dotenv.config();
app.use(express.json());
app.use('/users', Users);
app.use('/product', Products);
app.use('/cart', Cart);

const port = 8081;

app.listen(port, function (){
    console.log(`server is running on port ${port}`);
})