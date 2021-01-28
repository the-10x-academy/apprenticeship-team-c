const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
	author: { type: String, required: true },
	location: { type: String, required: true },
	reaction: { type: Number, required: true },
	caption: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", post_schema); // creates collection posts
