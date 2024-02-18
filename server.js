const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./MealRoutes");
const cors = require("cors");

require("dotenv").config();

mongoose.set("strictQuery", false);

const PORT = 10000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connected to Mongo"))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'm listening on PORT ${PORT}`)
})

