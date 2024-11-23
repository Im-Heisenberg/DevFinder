const mongoose = require("mongoose");
const url =
	"mongodb+srv://fardeenDev:nBiYoOu73by2H5PN@nodecoursecluster.7tn89.mongodb.net/DevFinder-DB";

const connectDB = async () => {
	try {
		await mongoose.connect(url);
	} catch (err) {
		throw new Error("Failed to connect to DB");
	}
};

module.exports = connectDB;
