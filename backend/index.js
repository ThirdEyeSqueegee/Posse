const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = process.env.port || 3301;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
