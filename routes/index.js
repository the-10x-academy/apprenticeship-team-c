const express = require("express");
const router = express.Router();
const Post = require("../models/post");

var multer  = require('multer')
var upload = multer({ dest: './public/images' })


router.post("/upload",  upload.single('file'),function(req,res,next) {
    var data = {
        author : req.body.author,
        location : req.body.location,
        filePath: req.file.path,
        caption: req.body.caption
    }
    console.log(data, req.body);
    const Profile = new Post({
        author : data.author,
        location : data.location,
        filePath : data.filePath,
        caption :  data.caption
    });
    Profile.save((err, docs)=>{
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
