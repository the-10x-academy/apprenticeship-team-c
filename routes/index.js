const express = require("express");
const router = express.Router();
const Post = require("../models/post");
var cors = require('cors')
var app = express();
var multer  = require('multer')
var upload = multer({ dest: './public/images' })
// app.use(express.static("public"))

app.use(cors())

// router.post("/upload",  upload.single('file'),function(req,res,next) {
//     console.log("author :",req.body.author)
//     console.log("location ",req.body.location)
//     console.log("file:" ,req.file)
    
    
// })

router.post("/upload",  upload.single('file'),function(req,res,next) {
    var data = {
        author : req.body.author,
        location : req.body.location,
        file: req.body.file
    }
    console.log(data, req.body);
    const Profile = new Post({
        userName : Profile.auther,
        location : Profile.location,
        file : Profile.file
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
