const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

connectDB()
	.then(() =>
		app.listen(3000, () => console.log("DB connected and server started"))
	)
	.catch((err) => console.log(err.message));
app.use(express.json());

app.post("/signup", async (req, res) => {
	const userDocument = new User(req.body);
	try {
		await userDocument.save();
		res.send("user created");
	} catch (err) {
		console.log("user creation failed");
		res.send(err.message);
	}
});
