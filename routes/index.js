const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// var upload = multer({ dest: './public/images' })



var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Uploads is the Upload_folder_name
		cb(null, "public/images");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + ".jpg");
	},
});



var upload = multer({ storage: storage });

router.post("/upload", upload.single('file'), function (req, res, next) {
    var data = {
        author: req.body.author,
        location: req.body.location,
        filePath: req.file.path.replace("public",""),
        caption: req.body.caption
    }
    console.log(data, req.body);
    const Profile = new Post({
        author: data.author,
        location: data.location,
        filePath: data.filePath,
        caption: data.caption
    });
    Profile.save((err, docs) => {
        if (err) console.log(err);
        console.log(docs);
    });
    res.redirect("/upload")

})


/* get post */
function getPost(res) {
    Post.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(docs)
        }
    });
}
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/posts", function (req, res, next) {
    // console.log("hitted post api")
    getPost(res)

})
module.exports = router
