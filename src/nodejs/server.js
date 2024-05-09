const express = require('express');

const PORT = 3030;

const app = express();

app.listen(PORT, (error) => {
    error ? console.log(error): console.log("Listening port 3030");
})

app.get("/", (req, res) => {

    let response = {
        car: "Audi",
        year: "2015"
    }

    res.send(JSON.stringify(response));
    console.log("Sent")
    res.end();
})