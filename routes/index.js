const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const uploadModel = require("./uploads");
const cors = require("cors")
app.use(express.static("public"))

app.use(cors())

router.post("/upload", function (req, res, next) {
    console.log("heyy")
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
    getPost(res)

})
module.exports = router
