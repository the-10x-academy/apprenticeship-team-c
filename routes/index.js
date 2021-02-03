const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // new included
const mongo = require("../mongo"); // new included
const post = require("../models/post"); // new included schema
// mongoose.connect("localhost:27017/Instaclone")

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
	res.send("Hello world");
});

router.get("/post", async (req, res) => {
	const item = new post({
		author: "Sai",
		location: "rajahmundry",
		reaction: 10,
		caption: "at godavari",
		// schema calling
	});
	item.save((err, doc) => {
		//
		if (err) console.log(err);
		console.log(doc);
	});
	const posts = await post.find({});
	res.send(posts); // render fn
});

// router.get('/api/customers', (req, res) => {    // request,response
//     const customers = [
//         {id:1, fn:'john', ln:'doe'},
//         {id:2, fn:'steve', ln:'smith'},
//         {id:3, fn:'mary', ln:'swan'}
//    ];
//    res.json(customers);
// });

// router.get("/main", function (req, res) {
// 	res.sendFile("test.html", { root:__dirname });
// });

module.exports = router;
