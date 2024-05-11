const express = require('express');
const multer = require('multer');
const upload = multer({dest: "uploads/"});
const mysql = require('mysql');


const app = express();

app.post("/", upload.any(), (req, res) => {

    const data = req.body;

    let response = {
        car: "Audi",
        year: "2015"
    }
    console.log(data.productTitle);

    console.log("Sent")
    res.end();

    console.log("Got it...")
})

