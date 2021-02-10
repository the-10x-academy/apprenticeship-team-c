const express = require("express");
const router = express.Router();
const Post = require("../models/post");
var cors = require('cors')
var app = express();
var multer  = require('multer')
var upload = multer({ dest: './public/images' })
// app.use(express.static("public"))

app.use(cors())

router.post("/upload",  upload.single('file'),function(req,res,next) {
    console.log("author :",req.body.author)
    console.log("location ",req.body.location)
    console.log("caption ",req.body.caption)
    console.log("file:" ,req.file)
    
    
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
