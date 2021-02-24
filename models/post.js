const mongoose = require("mongoose");
const url =
	"mongodb+srv://sai_appu:10xacademy@sai@cluster0.zndal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectionParams = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
var db = mongoose
	.connect(url, connectionParams)
	.then(() => {
		console.log("Connected to database ");
	})
	.catch((err) => {
		console.error(`Error connecting to the database. \n${err}`);
	});
const post_schema = mongoose.Schema({
	author: { type: String, required: true },
	location: { type: String, required: true },
	reaction: { type: Number, required: false },
	caption: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
	filePath: { type: String, required: true },
});
post_schema.set("collection", "post");
module.exports = mongoose.model("Post", post_schema); // creates collection posts
