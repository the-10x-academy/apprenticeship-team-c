const mongoose = require("mongoose");
try {
 var db = mongoose.connect('mongodb://localhost:27017/instaclone', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('success connection');
}
catch (error) {
    console.log('Error connection: ' + error);
}
const post_schema = mongoose.Schema({
    author: { type: String, required: true },
    location: { type: String, required: true },
    reaction: { type: Number, required: false },
    caption: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    filePath: { type: String, required: true }
});
post_schema.set("collection", "post");
module.exports = mongoose.model("Post", post_schema); // creates collection posts



