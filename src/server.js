const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB()
	.then(() =>
		app.listen(3000, () => console.log("DB connected and server started"))
	)
	.catch((err) => console.log(err.message));

