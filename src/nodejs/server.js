import express from 'express';
import multer from 'multer';
import {signIn, signUp} from "./post/AuthMethods/authMethods.js";
import {getAllOrders, getCertainProduct} from "./get/getMethods.js";
import {
    queryToGetAllOrdersFromDB
} from "./DataBase/DatabaseQueries.js";
import {createNewProduct, sendNewProductToDB} from "./post/postMethods.js";
import {sendImageToDropBox} from "./DropBoxMethods/DropBoxMethods.js";

const upload = multer({dest: "uploads/"});
const PORT = 3030;
const app = express();


app.listen(PORT, (error) => {
    error ? console.log(error): console.log(`Listening port ${PORT}`);
})

// Post methods

app.post("/signup", upload.any(), async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(await signUp(req.body));
});

app.post("/signin", upload.any(), async (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(await signIn(req.body));
})

app.post("/create-new-product", upload.single('image'), async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    res.send(await createNewProduct(req.file, req.body.type, req.body));
})


//Get methods

app.get("/get-all-orders", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(await getAllOrders(queryToGetAllOrdersFromDB));
    console.log("Sent orders")
});

app.get("/product", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    res.send(await getCertainProduct(req.query.product));
    console.log("Sent products")
});
