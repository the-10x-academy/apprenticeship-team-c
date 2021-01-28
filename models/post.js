var mongoose = require("mongoose");
var Schema = mongoose.schema;

var schema = new Schema({
  author: { type: String, required: true },
  location: { type: String, required: true },
  reaction: { type: Number, required: true },
  caption: { type: String, required: true },
  timestamp: { type: Date, required: true },
});
module.exports = mongoose.model("posts", schema);
