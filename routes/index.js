const express = require("express");
const router = express.Router();
const Post = require("../models/post");
var cors = require('cors')
var app = express();

// app.use(express.static("public"))

app.use(cors())

router.post("/upload", function(req,res,next) {
    res.send("hey")
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
