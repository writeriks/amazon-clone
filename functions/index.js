const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
    ("sk_test_YAaXSPovtBvzCEBIn8SnLmkC00zmBK3veE");


const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Emir Da King"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("🚀 ~ file: index.js ~ line 16 ~ app.post ~ total", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-dfdc9/us-central1/api
// to run emulator => firebase emulators:start
// we create functions file with firebase-init and following functions steps... 
// express, cors and stripe by installing them with npm i

// in the index.js, we create the route to receive basket information, send it to stripe, and 
// and return received client secret..