const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const { signIn, welcome, refresh } = require("./handlers")
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());

app.post("/signin", signIn)
app.get("/welcome", welcome)
app.post("/refresh", refresh)

app.listen(8000)
