import express from 'express';
import multer from'multer';
import {signUp} from "./post/AuthMethods/authMethods.js";
import {getAllOrders} from "./get/getMethods.js";
import {getQueryToAddNewClient, queryToGetAllOrdersFromDB} from "./post/DataBase/DatabaseQueries.js";

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

app.post("/signin", upload.any(), (req, res) =>{

})


//Get methods

app.get("/get-all-orders", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(await getAllOrders(queryToGetAllOrdersFromDB));
    console.log("Sent orders")
});